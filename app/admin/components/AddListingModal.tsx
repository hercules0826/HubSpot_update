"use client";
import { useState } from "react";
import { Button } from "@/components/Button";

export default function AddListingModal({ onClose, onAdded }: any) {
  const [form, setForm] = useState({
    photo: "",
    domain: "",
    name: "",
    owner: "",
    industry: "",
    type: "",
    city: "",
    state: "",
    postalCode: "",
    employees: "",
    revenue: "",
    timezone: "",
    description: "",
    priceRange: "",
    phone: "",
    email: "",
    website: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/communities", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to submit listing");
      onAdded?.();
      onClose();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl p-8 max-w-3xl w-full border border-sageMint/40 relative">
        
        {/* Close */}
        <button onClick={onClose} className="absolute right-6 top-4 text-2xl">
          ✕
        </button>

        <h2 className="text-3xl text-center font-heading text-sageGreen mb-6">
          Add New Listing
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[70vh] overflow-y-auto pr-2">

          {[
            ["photo", "Community Photo (URL)"],
            ["domain", "Company Domain"],
            ["name", "Company Name"],
            ["owner", "Company Owner"],
            ["industry", "Industry"],
            ["type", "Type"],
            ["city", "City"],
            ["state", "State/Region"],
            ["postalCode", "Postal Code"],
            ["employees", "Number of Employees"],
            ["revenue", "Annual Revenue"],
            ["timezone", "Time Zone"],
            ["priceRange", "Price Range"],
            ["phone", "Phone"],
            ["email", "Email"],
            ["website", "Website"],
          ].map(([key, label]) => (
            <div key={key}>
              <label className="text-sm font-medium">{label}</label>
              <input
                name={key}
                value={(form as any)[key]}
                onChange={handleChange}
                className="w-full border-2 border-sageMint rounded-xl p-2"
              />
            </div>
          ))}

          <div className="md:col-span-2">
            <label className="text-sm font-medium">Description</label>
            <textarea
              name="description"
              rows={4}
              value={form.description}
              onChange={handleChange}
              className="w-full border-2 border-sageMint rounded-xl p-2"
            />
          </div>

        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 mt-4">
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={handleSubmit} className="bg-sageGreen text-white">
            {loading ? "Submitting..." : "Submit Listing"}
          </Button>
        </div>
      </div>
    </div>
  );
}
