// ...ListingTable component...
"use client";
import { useState } from "react";
import { Button } from "@/components/Button";

type Listing = {
  id: number;
  name: string;
  careType: string;
  priceRange: string;
  status: "active" | "pending" | "archived";
};

export default function ListingTable() {
  const [listings, setListings] = useState<Listing[]>([
    { id: 1, name: "Evergreen Gardens", careType: "Assisted Living", priceRange: "$3,200–$5,000", status: "active" },
    { id: 2, name: "Cherry Hill Senior Living", careType: "Memory Care", priceRange: "$2,800–$4,200", status: "pending" },
  ]);

  const approve = (id: number) => {
    setListings((prev) =>
      prev.map((l) => (l.id === id ? { ...l, status: "active" } : l))
    );
  };

  const remove = (id: number) => {
    setListings((prev) => prev.filter((l) => l.id !== id));
  };

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-x-auto">
      <table className="w-full text-left">
        <thead className="bg-sageMint text-sageGreen font-heading">
          <tr>
            <th className="p-4">Name</th>
            <th className="p-4">Care Type</th>
            <th className="p-4">Price Range</th>
            <th className="p-4">Status</th>
            <th className="p-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {listings.map((l) => (
            <tr key={l.id} className="border-b hover:bg-beige/30 transition-all">
              <td className="p-4">{l.name}</td>
              <td className="p-4">{l.careType}</td>
              <td className="p-4">{l.priceRange}</td>
              <td className="p-4">
                <span
                  className={`px-3 py-1 rounded-xl text-sm ${
                    l.status === "active"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {l.status}
                </span>
              </td>
              <td className="p-4 text-right space-x-3">
                {l.status === "pending" && (
                  <Button onClick={() => approve(l.id)}>Approve</Button>
                )}
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
