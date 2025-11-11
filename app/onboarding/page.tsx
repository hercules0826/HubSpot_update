"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function OnboardingPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    country: "",
    city: "",
    street: "",
    state: "",
    zip: "",
    phone: "",
    age: "",
    gender: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    localStorage.setItem("userInfo", JSON.stringify(form));
    document.cookie = "onboarded=true; path=/; max-age=31536000";
    router.push("/care-discovery");
  };

  return (
    <div className="min-h-screen bg-[#F6EEDC] flex items-center justify-center px-6 py-16">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-lg border border-[#e5dcc8]">

        {/* HEADER */}
        <div className="rounded-t-3xl p-10"
             style={{
               background: "linear-gradient(to bottom, #D5EBD6, #FAF4E3)"
             }}
        >
          <h1 className="text-3xl md:text-4xl text-center font-serif text-[#244B3B] font-semibold">
            Let’s Get to Know You
          </h1>
          <p className="text-center text-[#3f5f50] mt-2">
            A few simple details so we can personalize your care results.
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="p-10 space-y-5">

          <Input label="Full Name" name="name" value={form.name} onChange={handleChange} />
          <Input label="Email" name="email" type="email" value={form.email} onChange={handleChange} />
          <Input label="Phone Number" name="phone" value={form.phone} onChange={handleChange} />

          {/* <div className="grid grid-cols-2 gap-4">
            <Input label="Age" name="age" type="number" value={form.age} onChange={handleChange} />
            <Select label="Gender" name="gender" value={form.gender} onChange={handleChange}
                    options={["Male", "Female", "Other"]} />
          </div> */}

          {/* <Input label="Country" name="country" value={form.country} onChange={handleChange} />
          <Input label="State / Province" name="state" value={form.state} onChange={handleChange} />
          <Input label="City" name="city" value={form.city} onChange={handleChange} />
          <Input label="Street Address" name="street" value={form.street} onChange={handleChange} />
          <Input label="ZIP Code" name="zip" value={form.zip} onChange={handleChange} /> */}

          <button
            type="submit"
            className="w-full bg-[#2E6A4A] hover:bg-[#264f39] transition text-white text-lg py-3 rounded-xl"
          >
            Continue
          </button>

        </form>

      </div>
    </div>
  );
}

/* Reusable Components */
function Input({ label, name, value, onChange, type = "text" }: any) {
  return (
    <div>
      <label className="block text-[#385242] mb-1 font-medium">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        className="w-full bg-[#FAF8F2] border border-[#d8d2bf] rounded-xl px-4 py-3 
                   text-[#2f3f37] focus:outline-none focus:ring-2 focus:ring-[#2E6A4A]"
      />
    </div>
  );
}

function Select({ label, name, value, onChange, options }: any) {
  return (
    <div>
      <label className="block text-[#385242] mb-1 font-medium">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        required
        className="w-full bg-[#FAF8F2] border border-[#d8d2bf] rounded-xl px-4 py-3 
                   text-[#2f3f37] focus:outline-none focus:ring-2 focus:ring-[#2E6A4A]"
      >
        <option value="">Select...</option>
        {options.map((o: string) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
