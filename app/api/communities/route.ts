import { NextResponse } from "next/server";

const HUBSPOT_API = "https://api.hubapi.com/crm/v3/objects/companies";
const HUBSPOT_KEY = process.env.HUBSPOT_PRIVATE_APP_TOKEN || "";

const headers = {
  Authorization: `Bearer ${HUBSPOT_KEY}`,
  "Content-Type": "application/json",
};

// 🟩 GET — Fetch all community listings
export async function GET() {
  try {
    const res = await fetch(`${HUBSPOT_API}?limit=100`, { headers });
    const data = await res.json();

    if (!res.ok) throw new Error(data.message || "Failed to fetch listings");

    const listings = (data.results || []).map((item: any) => ({
      id: item.id,
      name: item.properties?.name || "",
      address: item.properties?.address || "",
      city: item.properties?.city || "",
      state: item.properties?.state || "",
      phone: item.properties?.phone || "",
      website: item.properties?.website || "",
      careType: item.properties?.care_type || "",
      amenities: item.properties?.amenities
        ? item.properties.amenities.split(",").map((a: string) => a.trim())
        : [],
      priceRange: item.properties?.price_range || "",
    }));

    return NextResponse.json(listings);
  } catch (error: any) {
    console.error("❌ GET /communities error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// 🟨 POST — Create a new community listing
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const response = await fetch(HUBSPOT_API, {
      method: "POST",
      headers,
      body: JSON.stringify({
        properties: {
          name: body.name,
          address: body.address,
          city: body.city,
          state: body.state,
          phone: body.phone,
          website: body.website,
          care_type: body.careType,
          amenities: Array.isArray(body.amenities)
            ? body.amenities.join(", ")
            : body.amenities || "",
          price_range: body.priceRange,
        },
      }),
    });

    const result = await response.json();
    if (!response.ok)
      throw new Error(result.message || "Failed to create listing");

    return NextResponse.json({ success: true, id: result.id, data: result });
  } catch (error: any) {
    console.error("❌ POST /communities error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// 🟦 PUT — Update an existing community
export async function PUT(req: Request) {
  try {
    const { id, ...updates } = await req.json();
    if (!id) throw new Error("Missing listing ID");

    const response = await fetch(`${HUBSPOT_API}/${id}`, {
      method: "PATCH",
      headers,
      body: JSON.stringify({ properties: updates }),
    });

    const result = await response.json();
    if (!response.ok)
      throw new Error(result.message || "Failed to update listing");

    return NextResponse.json({ success: true, id: result.id, data: result });
  } catch (error: any) {
    console.error("❌ PUT /communities error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// 🟥 DELETE — Remove a listing
export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();
    if (!id) throw new Error("Missing listing ID");

    const response = await fetch(`${HUBSPOT_API}/${id}`, {
      method: "DELETE",
      headers,
    });

    if (!response.ok) throw new Error("Failed to delete listing");

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("❌ DELETE /communities error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
