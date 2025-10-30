"use client";
import { useState } from "react";
import { Button } from "@/components/Button";

export default function EditListingModal({
  listing,
  onClose,
}: {
  listing: any;
  onClose: () => void;
}) {
  const [form, setForm] = useState(listing);

  const handleChange = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSave = () => {
    console.log("Updated listing:", form);
    alert("Listing updated!");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-sageGreen text-2xl hover:text-sageHover"
        >
          ✕
        </button>

        <h2 className="text-2xl font-heading text-sageGreen mb-6">
          Edit Listing
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.keys(form).map((key) => (
            <div key={key}>
              <label className="block text-sm font-medium mb-1 capitalize text-grayText">
                {key}
              </label>
              <input
                type="text"
                name={key}
                value={(form as any)[key]}
                onChange={handleChange}
                className="w-full border-2 border-sageMint rounded-xl p-3 focus:outline-none focus:border-sageGreen"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-3 mt-8">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Save Changes</Button>
        </div>
      </div>
    </div>
  );
}
