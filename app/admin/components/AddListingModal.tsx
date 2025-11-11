"use client";
import { useState } from "react";
import { Button } from "@/components/Button";

export default function AddListingModal({ onClose, onAdded }: any) {
  const [form, setForm] = useState({
    name: "",
    domain: "",
    phone: "",
    industry: "",
    city: "",
    state: "",
    country: "",
    address: "",
    zip: "",
    about_us: "",
    annualrevenue: "",
    numberofemployees: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // Form validation
  const isValid = () => {
    return (
      form.name.trim() !== "" &&
      form.domain.trim() !== "" &&
      form.phone.trim() !== "" &&
      form.city.trim() !== "" &&
      form.state.trim() !== "" &&
      form.country.trim() !== "" &&
      form.address.trim() !== "" &&
      form.zip.trim() !== ""
    );
  };

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

  const placeholders: Record<string, string> = {
    name: "Sunrise Senior Living – Harmony Center",
    domain: "sunriseliving.com",
    phone: "(856) 555-1284",
    industry: "Senior Living / Assisted Living",
    city: "Cherry Hill",
    state: "NJ",
    country: "United States",
    address: "1200 Garden View Dr",
    zip: "08034",
    about_us:
      "A compassionate senior living community offering assisted living, memory care, and wellness programs.",
    annualrevenue: "$2.4M",
    numberofemployees: "45",
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl p-8 max-w-3xl w-full border border-sageMint/40 relative">
        
        {/* Close */}
        <button onClick={onClose} className="absolute right-6 top-4 text-2xl">
          ✕
        </button>

        <h2 className="text-3xl text-center font-heading text-sageGreen mb-6">
          Add New Company
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[70vh] overflow-y-auto pr-2">

          {[
            ["name", "Company Name"],
            ["domain", "Website Domain"],
            ["phone", "Phone Number"],
            ["industry", "Industry"],
            ["city", "City"],
            ["state", "State"],
            ["country", "Country"],
            ["address", "Street Address"],
            ["zip", "ZIP Code"],
            ["annualrevenue", "Annual Revenue"],
            ["numberofemployees", "Number of Employees"],
          ].map(([key, label]) => (
            <div key={key}>
              <label className="text-sm font-medium">{label}</label>
              <input
                name={key}
                placeholder={placeholders[key]}
                value={(form as any)[key]}
                onChange={handleChange}
                className="w-full border-2 border-sageMint rounded-xl p-2"
              />
            </div>
          ))}

          {/* About Us */}
          <div className="md:col-span-2">
            <label className="text-sm font-medium">About Us</label>
            <textarea
              name="about_us"
              rows={4}
              placeholder={placeholders.about_us}
              value={form.about_us}
              onChange={handleChange}
              className="w-full border-2 border-sageMint rounded-xl p-2"
            />
          </div>

        </div>

        {/* Footer */}
        <div className="flex justify-end items-center gap-4 mt-6 pt-4 border-t border-gray-200">
          <Button
            onClick={onClose}
            className="px-6 py-2 rounded-xl border border-sageGreen text-sageGreen hover:bg-sageMint/30"
          >
            Cancel
          </Button>

          <Button
            onClick={handleSubmit}
            disabled={loading || !isValid()}
            className={`px-6 py-2 rounded-xl text-white 
              ${loading || !isValid()
                ? "bg-sageGreen/40 cursor-not-allowed"
                : "bg-sageGreen hover:bg-sageHover"
              }`}
          >
            {loading ? "Submitting…" : "Submit Listing"}
          </Button>
        </div>
      </div>
    </div>
  );
}
