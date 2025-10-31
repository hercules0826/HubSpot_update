"use client";
import { Button } from "@/components/Button";

export type Listing = {
  id: number;
  name: string;
  careType: string;
  priceRange: string;
  status: "active" | "pending" | "declined";
};

type Props = {
  listings: Listing[];                         // ✅ Now comes from backend
  onEdit: (listing: Listing) => void;
  onRefresh: () => void;                       // ✅ Refresh from API
};

export default function ListingTable({ listings, onEdit, onRefresh }: Props) {

  const updateStatus = async (id: number, newStatus: Listing["status"]) => {
    await fetch(`/api/communities/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus }),
    });

    onRefresh(); // ✅ Fetch fresh data
  };

  const remove = async (id: number) => {
    await fetch(`/api/communities/${id}`, { method: "DELETE" });
    onRefresh(); // ✅ Refresh table
  };

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-x-auto">
      <table className="w-full text-left text-grayText">
        <thead className="bg-sageMint/60 text-sageGreen font-heading">
          <tr>
            <th className="p-4">Name</th>
            <th className="p-4">Care Type</th>
            <th className="p-4">Price</th>
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
              <td className="p-4">{l.careType}</td>
              <td className="p-4">{l.priceRange}</td>
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

              <td className="p-4 text-right space-x-2">
                {l.status === "pending" && (
                  <>
                    <Button onClick={() => updateStatus(l.id, "active")}>
                      Approve
                    </Button>
                    <Button variant="secondary" onClick={() => updateStatus(l.id, "declined")}>
                      Decline
                    </Button>
                  </>
                )}

                <Button variant="secondary" onClick={() => onEdit(l)}>
                  Edit
                </Button>

                <Button variant="secondary" onClick={() => remove(l.id)}>
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}
