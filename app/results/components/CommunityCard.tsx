// ...CommunityCard component...
"use client";
import { motion } from "framer-motion";

export default function CommunityCard({ community }: { community: any }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-beige/40 border border-sageMint rounded-2xl shadow-sm hover:shadow-md transition-all overflow-hidden"
    >
      <img
        src={community.image}
        alt={community.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-6 space-y-2">
        <h2 className="text-xl font-heading text-sageGreen">
          {community.name}
        </h2>
        <p className="text-grayText">{community.address}</p>
        <p className="text-sm text-grayText italic">
          {community.careLevel}
        </p>
        <p className="mt-2 text-base text-gray-800">
          <strong>Why Recommended:</strong> {community.whyRecommended}
        </p>
        <p className="text-sageGreen font-semibold">
          {community.priceRange}
        </p>

        <div className="flex gap-4 mt-4">
          <a
            href={`tel:${community.phone}`}
            className="bg-sageGreen text-white px-4 py-2 rounded-xl hover:bg-sageHover transition-all"
          >
            Call Community
          </a>
          <a
            href="/contact"
            className="border-2 border-sageGreen text-sageGreen px-4 py-2 rounded-xl hover:bg-sageMint transition-all"
          >
            Contact SAGE
          </a>
        </div>
      </div>
    </motion.div>
  );
}
