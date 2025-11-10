"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, Users, Heart, DollarSign } from "lucide-react";
import Reveal from "./Reveal";

const pillars = [
  {
    icon: <Home size={32} className="text-[#8E68FF]" />,
    title: "Personal & Family Wishes",
    subtitle: "Values, Emotions, and Goals",
    desc: "Location preferences, family priorities, and personal values alignment",
    bg: "bg-[#F3EDFF]",
  },
  {
    icon: <Users size={32} className="text-[#668BFF]" />,
    title: "Socialization",
    subtitle: "Community & Lifestyle",
    desc: "Social preferences, activities, and community engagement style",
    bg: "bg-[#EAF1FF]",
  },
  {
    icon: <Heart size={32} className="text-[#FF6A6A]" />,
    title: "Medical",
    subtitle: "Care Needs & Safety",
    desc: "Health conditions, care level requirements, and medical support needs",
    bg: "bg-[#FFECEC]",
  },
  {
    icon: <DollarSign size={32} className="text-[#4CBD75]" />,
    title: "Financials",
    subtitle: "Affordability & Sustainability",
    desc: "Budget planning, funding sources, and financial comfort zone assessment",
    bg: "bg-[#E8F9F0]",
  },
];

export default function Pillars() {
  return (
    <Reveal>
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-20 text-center">
      {/* Heading */}
      <h2 className="text-4xl font-heading text-[#1C3B2A]">
        Our 4-Pillar Assessment System
      </h2>

      <p className="mt-3 text-[#43594C] max-w-xl mx-auto text-lg leading-relaxed">
        We evaluate every aspect of senior living to help you find your perfect match.
      </p>

      {/* Cards */}
      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {pillars.map((item) => (
          <motion.div
            key={item.title}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.25 }}
            className="rounded-2xl bg-white shadow-[0_8px_22px_rgba(0,0,0,0.07)] p-8 text-left border border-gray-100"
          >
            {/* Icon */}
            <div
              className={`w-14 h-14 rounded-xl flex items-center justify-center mx-0 ${item.bg}`}
            >
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="mt-6 text-xl font-semibold text-[#0D1B18]">
              {item.title}
            </h3>

            {/* Subtitle */}
            <p className="mt-1 text-[#506256] font-medium">
              {item.subtitle}
            </p>

            {/* Description */}
            <p className="mt-2 text-[#556960] text-sm leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Button */}
      <Link
        href="/care-discovery"
        className="mt-14 inline-block px-10 py-4 rounded-full bg-[#1C3B2A] text-white text-lg font-semibold shadow-lg hover:bg-[#153023]"
      >
        Take the 4-Pillar Assessment Now
      </Link>
    </section>
    </Reveal>
  );
}
