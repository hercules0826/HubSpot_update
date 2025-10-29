// ...dynamic SEO community page...
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { notFound } from "next/navigation";

// Example mock data (replace with your CMS or API later)
const communityData = {
  name: "Willow Gardens Senior Living",
  description:
    "Nestled in the heart of Cherry Hill, Willow Gardens offers personalized memory care and assisted living in a warm, home-like environment. Families love the large courtyard, wellness programs, and compassionate staff who treat every resident like family.",
  address: "125 Maple Avenue, Cherry Hill, NJ 08002",
  priceRange: "$4,200 - $6,500 / month",
  amenities: [
    "24/7 Nursing Staff",
    "Pet-Friendly Community",
    "On-site Therapy & Fitness",
    "Private & Shared Suites",
    "Garden Courtyard",
  ],
  careTypes: ["Assisted Living", "Memory Care"],
  contact: {
    phone: "(856) 555-1020",
    email: "info@willowgardens.com",
  },
  gallery: [
    "/images/community1.jpg",
    "/images/community2.jpg",
    "/images/community3.jpg",
  ],
  recommendedReason:
    "We recommend Willow Gardens for families seeking high-quality memory care close to Cherry Hill. It balances safety, independence, and emotional warmth — ideal for loved ones needing extra daily support.",
};

export default function CommunityPage({ params }: { params: { slug: string } }) {
  const data = communityData;
  if (!data) return notFound();

  // JSON-LD Structured Data for SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Residence",
    name: data.name,
    description: data.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: data.address,
      addressLocality: "Cherry Hill",
      addressRegion: "NJ",
      postalCode: "08002",
      addressCountry: "USA",
    },
    amenities: data.amenities,
    priceRange: data.priceRange,
    telephone: data.contact.phone,
    email: data.contact.email,
    image: data.gallery,
  };

  return (
    <main className="bg-beige min-h-screen pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        <Image
          src={data.gallery[0]}
          alt={data.name}
          fill
          className="object-cover brightness-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end px-8 pb-12 text-white">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-3">
            {data.name}
          </h1>
          <p className="text-lg opacity-90">{data.address}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto mt-16 px-6 space-y-16">
        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-heading text-sageGreen mb-4">About</h2>
          <p className="text-grayText text-lg leading-relaxed">{data.description}</p>
        </motion.div>

        {/* Amenities & Care */}
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-2xl font-heading text-sageGreen mb-3">Amenities</h3>
            <ul className="list-disc list-inside text-grayText space-y-1">
              {data.amenities.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-heading text-sageGreen mb-3">Care Types</h3>
            <ul className="list-disc list-inside text-grayText space-y-1">
              {data.careTypes.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
            <h4 className="text-xl font-semibold text-sageGreen mt-6 mb-2">
              Price Range
            </h4>
            <p className="text-grayText">{data.priceRange}</p>
          </motion.div>
        </div>

        {/* Gallery */}
        <motion.div
          className="grid md:grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {data.gallery.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={`${data.name} photo ${i + 1}`}
              width={500}
              height={300}
              className="rounded-xl object-cover h-64 w-full hover:scale-105 transition-transform duration-300"
            />
          ))}
        </motion.div>

        {/* Why Recommended */}
        <motion.div
          className="bg-sageGreen/10 border-l-4 border-sageGreen rounded-2xl p-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-heading text-sageGreen mb-3">
            Why We Recommend Willow Gardens
          </h3>
          <p className="text-grayText leading-relaxed text-lg">
            {data.recommendedReason}
          </p>
        </motion.div>

        {/* Contact */}
        <motion.div
          className="text-center bg-sageGreen text-white rounded-2xl py-12 px-6 shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-heading mb-3">Schedule a Visit</h3>
          <p className="mb-6 text-lg opacity-90">
            Call us at {data.contact.phone} or email{" "}
            <a href={`mailto:${data.contact.email}`} className="underline">
              {data.contact.email}
            </a>
          </p>
          <button className="bg-white text-sageGreen px-8 py-3 rounded-xl font-semibold hover:bg-sageMint/20 transition-all">
            Contact Community
          </button>
        </motion.div>
      </section>
    </main>
  );
}
