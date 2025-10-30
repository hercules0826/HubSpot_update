// ...results main page...
"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MapView from "./components/MapView";
import CommunityCard from "./components/CommunityCard";

type Community = {
  id: number;
  name: string;
  priceRange: string;
  careLevel: string;
  whyRecommended: string;
  lat: number;
  lng: number;
  address: string;
  phone: string;
  image: string;
};

export default function ResultsPage() {
  const [communities, setCommunities] = useState<Community[]>([]);

  // Placeholder data — this will be fetched from HubSpot later
  useEffect(() => {
    setCommunities([
      {
        id: 1,
        name: "Cherry Hill Senior Living",
        priceRange: "$2,800 – $4,500",
        careLevel: "Assisted Living, Memory Care",
        whyRecommended: "Best match for comfort and safety priorities.",
        lat: 39.9,
        lng: -75.0,
        address: "123 Main St, Cherry Hill, NJ",
        phone: "(856) 555-2025",
        image: "/images/community1.jpg",
      },
      {
        id: 2,
        name: "Evergreen Gardens",
        priceRange: "$3,000 – $5,500",
        careLevel: "Independent, Assisted Living",
        whyRecommended: "Close to family and pet-friendly environment.",
        lat: 39.91,
        lng: -75.03,
        address: "456 Oak Ave, Marlton, NJ",
        phone: "(856) 555-2098",
        image: "/images/community2.jpg",
      },
    ]);
  }, []);

  return (
    <section className="flex flex-col md:flex-row min-h-screen">
      {/* Left Side — Map */}
      <div className="md:w-1/2 w-full h-96 md:h-auto sticky top-0">
        {/* <MapView communities={communities} /> */}
      </div>

      {/* Right Side — List */}
      <div className="md:w-1/2 w-full bg-white p-8 overflow-y-auto">
        <h1 className="text-3xl font-heading text-sageGreen mb-6 text-center md:text-left">
          Top Community Matches
        </h1>
        <motion.div
          layout
          className="flex flex-col gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {communities.map((c) => (
            <CommunityCard key={c.id} community={c} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
