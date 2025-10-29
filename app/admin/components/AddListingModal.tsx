// ...AddListingModal component...
"use client";
import { useState } from "react";
import { Button } from "@/components/Button";

export default function AddListingModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({
    name: "",
    careType: "",
    priceRange: "",
    address: "",
    contact: "",
  });

  const handleChange = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    console.log("New listing:", form);
    alert("Listing submitted for approval!");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-sageGreen text-2xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-heading text-sageGreen mb-6">
          Add New Listing
        </h2>

        <form className="space-y-4">
          {["name", "careType", "priceRange", "address", "contact"].map((field) => (
            <div key={field}>
              <label className="block text-sm font-medium mb-1 capitalize text-grayText">
                {field}
              </label>
              <input
                type="text"
                name={field}
                value={(form as any)[field]}
                onChange={handleChange}
                className="w-full border-2 border-sageMint rounded-xl p-3 focus:outline-none focus:border-sageGreen"
              />
            </div>
          ))}
        </form>

        <div className="flex justify-end gap-3 mt-6">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
      </div>
    </div>
  );
}
