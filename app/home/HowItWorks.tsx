"use client";

import { FaRegHeart, FaMapMarkerAlt, FaUserFriends } from "react-icons/fa";
import Reveal from "./Reveal";

const steps = [
  {
    icon: <FaRegHeart className="text-3xl text-[#1C4C35]" />,
    title: "Tell Us What Matters",
    body:
      "Share your family’s priorities — safety, independence, comfort, or specialized care.",
    iconBg: "bg-[#E8F4EC]",
  },
  {
    icon: <FaMapMarkerAlt className="text-3xl text-[#1C4C35]" />,
    title: "Discover Local Options",
    body:
      "See nearby communities that match your loved one’s medical, social, and budget needs.",
    iconBg: "bg-[#EAF1E8]",
  },
  {
    icon: <FaUserFriends className="text-3xl text-[#1C4C35]" />,
    title: "Connect Instantly",
    body:
      "Get connected with trusted SAGE Advisors who walk with you every step of the way.",
    iconBg: "bg-[#E3EFE8]",
  },
];

export default function HowItWorks() {
  return (
    <Reveal>
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
      {/* Title */}
      <h2 className="font-heading text-[#1C3B2A] text-4xl text-center font-semibold">
        How SAGE Works
      </h2>

      {/* Cards */}
      <div className="mt-14 grid gap-10 md:grid-cols-3">
        {steps.map((s) => (
          <div
            key={s.title}
            className="
              group rounded-3xl p-10 bg-white/80
              border border-[#e6decb]
              shadow-[0_8px_24px_rgba(0,0,0,0.06)]
              backdrop-blur-md transition-all
              hover:shadow-[0_12px_32px_rgba(0,0,0,0.10)]
              hover:-translate-y-2
            "
          >
            {/* Icon wrapper */}
            <div
              className={`w-14 h-14 rounded-2xl flex items-center justify-center ${s.iconBg} shadow-sm mb-6`}
            >
              {s.icon}
            </div>

            {/* Title */}
            <h3 className="font-heading text-xl text-[#1C3B2A] mb-3">
              {s.title}
            </h3>

            {/* Body */}
            <p className="text-[#41584C] leading-relaxed text-[15px]">
              {s.body}
            </p>
          </div>
        ))}
      </div>
    </section>
    </Reveal>
  );
}
