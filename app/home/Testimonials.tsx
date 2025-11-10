"use client";

import Image from "next/image";
import { Quote, Star } from "lucide-react";
import Reveal from "./Reveal";

const people = [
  {
    name: "Margaret Johnson",
    facility: "Sunrise Senior Living",
    quote:
      "The assessment helped us find the perfect community for my mother. The staff understood exactly what she needed, and she's thriving in her new home.",
    avatar: "/images/old/man1.png",
  },
  {
    name: "Robert Chen",
    facility: "Golden Years Manor",
    quote:
      "I was overwhelmed by all the options until I used this platform. The 4-pillar approach made everything clear and helped me make the right choice.",
    avatar: "/images/old/woman.png",
  },
  {
    name: "Dorothy Williams",
    facility: "Harmony Heights",
    quote:
      "Finding memory care for my husband was emotional and difficult. This service guided us with compassion and expertise every step of the way.",
    avatar: "/images/old/man2.png",
  },
  {
    name: "James Patterson",
    facility: "Serenity Gardens",
    quote:
      "The personalized matching process was incredible. They found a community that perfectly fits my budget, health needs, and social preferences.",
    avatar: "/images/old/woman2.png",
  },
];

export default function Testimonials() {
  return (
    <Reveal>
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
      {/* Heading */}
      <h2 className="text-center font-heading text-[#0F2F25] text-3xl md:text-4xl font-semibold">
        What Families Are Saying
      </h2>
      <p className="mt-3 text-center text-[#4A5E57] text-lg">
        Real stories from families who found their perfect senior living community.
      </p>

      {/* Cards Grid */}
      <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {people.map((p) => (
          <div
            key={p.name}
            className="relative rounded-3xl bg-white shadow-[0_6px_24px_rgba(0,0,0,0.08)] border border-gray-100 p-7 hover:shadow-[0_10px_28px_rgba(0,0,0,0.12)] transition-all"
          >
            {/* Quote Icon */}
            {/* <Quote
              size={26}
              className="absolute top-5 right-5 text-[#C8D4D0]"
            /> */}

            {/* Avatar + Name */}
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 rounded-full overflow-hidden">
                <Image
                  src={p.avatar}
                  alt={p.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <p className="font-semibold text-[#113C30]">{p.name}</p>
                <p className="text-sm text-[#6A8179]">{p.facility}</p>
              </div>
            </div>

            {/* Stars */}
            <div className="flex mt-4 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#FFD447" stroke="none" />
              ))}
            </div>

            {/* Quote Text */}
            <p className="mt-4 text-[#4F645D] text-sm leading-relaxed">
              “{p.quote}”
            </p>
          </div>
        ))}
      </div>
    </section>
    </Reveal>
  );
}
