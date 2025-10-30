"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function CommunityCard({
  community,
  selected
}: {
  community: any;
  selected?: boolean;
}) {
  const router = useRouter();

  const slug = community.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

  const handleVisitPage = () => {
    router.push(`/community/${slug}`);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`bg-white border rounded-2xl shadow-sm transition-all overflow-hidden cursor-pointer ${
        selected
          ? "border-sageGreen shadow-lg scale-[1.01]"
          : "border-sageMint hover:shadow-md"
      }`}
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

        <p className="text-sm text-grayText italic">{community.careLevel}</p>

        <p className="mt-2 text-base text-gray-800">
          <strong>Why Recommended:</strong> {community.whyRecommended}
        </p>

        <p className="text-sageGreen font-semibold">{community.priceRange}</p>

        <div className="flex gap-4 mt-4">
          <button
            onClick={handleVisitPage}
            className="bg-sageGreen text-white px-4 py-2 rounded-xl hover:bg-sageHover transition-all w-full"
          >
            View Community
          </button>

          <a
            href={`tel:${community.phone}`}
            className="border-2 border-sageGreen text-sageGreen px-4 py-2 rounded-xl hover:bg-sageMint transition-all w-full text-center"
          >
            Call
          </a>
        </div>
      </div>
    </motion.div>
  );
}
