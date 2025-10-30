"use client";
import { useState } from "react";
import { Button } from "@/components/Button";

export default function EditListingModal({
  listing,
  onClose,
  onUpdated,
}: {
  listing: any;
  onClose: () => void;
  onUpdated?: () => void;
}) {
  const [form, setForm] = useState({
    id: listing.id,
    name: listing.name || "",
    address: listing.address || "",
    city: listing.city || "",
    state: listing.state || "",
    phone: listing.phone || "",
    email: listing.email || "",
    careType: listing.careType || "",
    amenities: listing.amenities || "",
    priceRange: listing.priceRange || "",
    website: listing.website || "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSave = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/communities", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to update listing");

      const data = await res.json();
      console.log("✅ Updated listing:", data);
      alert("Listing updated successfully!");
      if (onUpdated) onUpdated();
      onClose();
    } catch (err) {
      console.error("❌ Error updating listing:", err);
      alert("Failed to update listing. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-2xl relative border border-sageMint/40">
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-sageGreen text-2xl hover:text-sageHover transition-all"
        >
          ✕
        </button>

        <h2 className="text-3xl font-heading text-sageGreen mb-6 text-center">
          Edit Listing
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            { key: "name", label: "Community Name" },
            { key: "address", label: "Address" },
            { key: "city", label: "City" },
            { key: "state", label: "State" },
            { key: "phone", label: "Phone" },
            { key: "email", label: "Email" },
            { key: "careType", label: "Care Type" },
            { key: "priceRange", label: "Price Range" },
          ].map((field) => (
            <div key={field.key}>
              <label className="block text-sm font-medium mb-1 text-grayText">
                {field.label}
              </label>
              <input
                type="text"
                name={field.key}
                value={(form as any)[field.key]}
                onChange={handleChange}
                className="w-full border-2 border-sageMint rounded-xl p-3 focus:outline-none focus:border-sageGreen"
              />
            </div>
          ))}

          {/* Amenities */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1 text-grayText">
              Amenities
            </label>
            <textarea
              name="amenities"
              value={form.amenities}
              onChange={handleChange}
              rows={3}
              className="w-full border-2 border-sageMint rounded-xl p-3 focus:outline-none focus:border-sageGreen"
              placeholder="e.g. Outdoor garden, memory support, 24/7 nurse"
            />
          </div>

          {/* Website */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1 text-grayText">
              Website
            </label>
            <input
              type="text"
              name="website"
              value={form.website}
              onChange={handleChange}
              className="w-full border-2 border-sageMint rounded-xl p-3 focus:outline-none focus:border-sageGreen"
              placeholder="https://example.com"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-8">
          <Button
            variant="secondary"
            onClick={onClose}
            className="border-sageGreen text-sageGreen hover:bg-sageMint/40"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            disabled={loading}
            className={`bg-sageGreen text-white hover:bg-sageHover ${
              loading ? "opacity-60 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </div>
    </div>
  );
}
