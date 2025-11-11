"use client";
import { Button } from "@/components/Button";

export type Listing = {
  id: number;
  name: string;
  domain: string;           // ✅ New
  url: string;              // ✅ New
  status: "active" | "pending" | "declined";
};

type Props = {
  listings: Listing[];
  onEdit: (listing: Listing) => void;
  onRefresh: () => void;
};

export default function ListingTable({ listings, onEdit, onRefresh }: Props) {

  const updateStatus = async (id: number, newStatus: Listing["status"]) => {
    await fetch(`/api/communities/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus }),
    });

    onRefresh();
  };

  const remove = async (id: number) => {
    await fetch(`/api/communities/${id}`, { method: "DELETE" });
    onRefresh();
  };

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-x-auto">
      <table className="w-full text-left text-grayText">
        <thead className="bg-sageMint/60 text-sageGreen font-heading">
          <tr>
            <th className="p-4">Name</th>
            <th className="p-4">Domain</th>         
            <th className="p-4">URL</th>            
            <th className="p-4">Status</th>
            <th className="p-4 text-right">Actions</th>
          </tr>
        </thead>

        <tbody>
          {listings.map((l) => (
            <tr
              key={l.id}
              className="border-b hover:bg-beige/30 transition-all duration-200"
            >
              <td className="p-4 font-medium">{l.name}</td>

              {/* ✅ Domain */}
              <td className="p-4">{l.domain}</td>

              {/* ✅ URL */}
              <td className="p-4">
                <a
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sageGreen underline hover:text-sageHover"
                >
                  {l.url}
                </a>
              </td>

              {/* Status */}
              <td className="p-4">
                <span
                  className={`px-3 py-1 rounded-xl text-sm ${
                    l.status === "active"
                      ? "bg-green-100 text-green-700"
                      : l.status === "pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {l.status}
                </span>
              </td>

              {/* Actions */}
              <td className="p-4 text-right space-x-2">
                {l.status === "pending" && (
                  <>
                    <Button onClick={() => updateStatus(l.id, "active")}>
                      Approve
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={() => updateStatus(l.id, "declined")}
                    >
                      Decline
                    </Button>
                  </>
                )}

                <Button variant="secondary" onClick={() => onEdit(l)}>
                  Edit
                </Button>

                {/* Optional: Remove button */}
                {/* <Button variant="secondary" onClick={() => remove(l.id)}>
                  Remove
                </Button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
