export const runtime = "nodejs";

import { NextResponse } from "next/server";
import Hubspot from "@hubspot/api-client";
import { FilterOperatorEnum as CompanyOp } from "@hubspot/api-client/lib/codegen/crm/companies";
import { FilterOperatorEnum as ContactOp } from "@hubspot/api-client/lib/codegen/crm/contacts";
import nodemailer from "nodemailer";
import twilio from "twilio";

const hubspot = new Hubspot.Client({
  accessToken: process.env.HUBSPOT_PRIVATE_APP_TOKEN!,
});
const ADVISOR_EMAILS = (process.env.ADVISOR_EMAILS || "").split(",");
const ADVISOR_PHONES = (process.env.ADVISOR_PHONES || "").split(",");

export async function POST(req: Request) {
  try {
    const { family, query } = await req.json();

    // === 1. Search HubSpot companies by location ===
    const searchBody = {
      filterGroups: [
        {
          filters: [
            {
              propertyName: "name",
              operator: CompanyOp.ContainsToken,
              value: query,
            },
          ],
        },
      ],
      properties: ["name", "domain", "city", "state"],
      limit: 10,
    };

    const companiesRes = await fetch(
      "https://api.hubapi.com/crm/v3/objects/companies",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.HUBSPOT_PRIVATE_APP_TOKEN}`,
          "Content-Type": "application/json",
        },
        // body: JSON.stringify(searchBody),
      }
    );
    const companiesData = await companiesRes.json();
    const top3 = (companiesData.results || []).slice(0, 3);

    // === 2. Create or update Contact ===
    const searchContact = await hubspot.crm.contacts.searchApi.doSearch({
      filterGroups: [
        {
          filters: [
            { 
              propertyName: "email", 
              operator: ContactOp.Eq, 
              value: family.email 
            }
          ],
        },
      ],
      limit: 1,
    });

    let contactId = "";
    if (searchContact.total > 0) {
      contactId = searchContact.results[0].id!;
    } else {
      const newContact = await hubspot.crm.contacts.basicApi.create({
        properties: {
          firstname: family.firstName,
          lastname: family.lastName,
          email: family.email,
          phone: family.phone,
        },
      });
      contactId = newContact.id!;
    }

    // === 3. Create a Deal in “Lead Queue” ===
    const deal = await hubspot.crm.deals.basicApi.create({
      properties: {
        dealname: `SAGE Lead — ${family.lastName}`,
        pipeline: "default", // replace with your Lead Queue pipeline ID
        dealstage: "appointmentscheduled", // or your first stage ID
      },
      associations: [
        {
          to: { id: contactId },
          types: [
            {
              associationCategory: "HUBSPOT_DEFINED" as any,
              associationTypeId: 3, // contact-to-deal
            },
          ],
        },
      ],
    });

    // === 4. Send Advisor Email ===
    if (process.env.SMTP_HOST) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST!,
        port: Number(process.env.SMTP_PORT || 587),
        secure: false,
        auth: {
          user: process.env.SMTP_USER!,
          pass: process.env.SMTP_PASS!,
        },
      });

      await transporter.sendMail({
        from: process.env.FROM_EMAIL!,
        to: ADVISOR_EMAILS.join(","),
        subject: `New SAGE Lead: ${family.firstName} ${family.lastName}`,
        html: `<h3>New SAGE Lead Submitted</h3>
        <p><b>Name:</b> ${family.firstName} ${family.lastName}<br/>
        <b>Email:</b> ${family.email}<br/>
        <b>Location:</b> ${query}<br/>
        <b>Phone:</b> ${family.phone || "-"}</p>
        <p>See HubSpot → Lead Queue for details.</p>`,
      });
    }

    // === 5. Send Advisor SMS ===
    if (process.env.TWILIO_ACCOUNT_SID) {
      const client = twilio(
        process.env.TWILIO_ACCOUNT_SID!,
        process.env.TWILIO_AUTH_TOKEN!
      );
      await Promise.all(
        ADVISOR_PHONES.map((phone) =>
          client.messages.create({
            from: process.env.TWILIO_FROM!,
            to: phone,
            body: `New SAGE Lead: ${family.firstName} ${family.lastName} (${family.email})`,
          })
        )
      );
    }

    // === 6. Send Family Email with top 3 matches ===
    if (process.env.SMTP_HOST && top3.length) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST!,
        port: Number(process.env.SMTP_PORT || 587),
        secure: false,
        auth: {
          user: process.env.SMTP_USER!,
          pass: process.env.SMTP_PASS!,
        },
      });

      const cards = top3
        .map(
          (c: any) => `
          <div style="margin-bottom:12px;padding:12px;border:1px solid #ABEDD8;border-radius:12px;">
            <h4>${c.properties.name}</h4>
            <p>${c.properties.city || ""}, ${c.properties.state || ""}</p>
          </div>`
        )
        .join("");

      await transporter.sendMail({
        from: process.env.FROM_EMAIL!,
        to: family.email,
        subject: "Your SAGE Care Matches",
        html: `<p>Based on your location, here are your top 3 matches:</p>${cards}<p>We'll reach out shortly to discuss your options!</p>`,
      });
    }

    return NextResponse.json({
      ok: true,
      contactId,
      dealId: deal.id,
      top3,
    });
  } catch (err: any) {
    console.error("Error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
