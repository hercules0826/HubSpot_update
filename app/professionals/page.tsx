"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaHospital, FaHandshake, FaHome } from "react-icons/fa";

export default function ProfessionalsPage() {
  const cards = [
    {
      icon: <FaHospital className="text-4xl text-sageGreen mb-4" />,
      title: "Hospital & Healthcare Partners",
      desc: "Provide your patients with verified, personalized community matches through SAGE’s guided care discovery tool.",
    },
    {
      icon: <FaHandshake className="text-4xl text-sageGreen mb-4" />,
      title: "Social Workers & Case Managers",
      desc: "Spend less time researching and more time supporting families — with instant recommendations you can trust.",
    },
    {
      icon: <FaHome className="text-4xl text-sageGreen mb-4" />,
      title: "Senior Living Communities",
      desc: "List your community, update your amenities, and connect directly with qualified families in your area.",
    },
  ];

  return (
    <main className="bg-beige min-h-screen py-24 px-6">
      {/* Hero */}
      <motion.section
        className="text-center max-w-5xl mx-auto mb-20"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl md:text-6xl font-heading text-sageGreen mb-6">
          For Professionals & Partners
        </h1>
        <p className="text-lg md:text-xl text-grayText leading-relaxed">
          Join SAGE in helping families find clarity during life’s most critical transitions.  
          Whether you’re a social worker, discharge planner, or community director —  
          we simplify referrals and strengthen connections.
        </p>
      </motion.section>

      {/* Cards */}
      <section className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {cards.map((item, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl border border-sageMint/20 transition-all text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
          >
            {item.icon}
            <h2 className="text-2xl font-heading text-sageGreen mb-3">{item.title}</h2>
            <p className="text-grayText text-base leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <motion.section
        className="mt-24 text-center bg-sageGreen text-white rounded-3xl py-14 px-6 max-w-4xl mx-auto shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-heading mb-4">Partner With SAGE</h3>
        <p className="text-lg md:text-xl mb-8 opacity-90">
          Interested in collaboration or referral integration?  
          Let’s work together to bring peace of mind to families.
        </p>
        <Link
          href={`mailto:RitaRivera@SAGEaids.com?subject=Help%20me%20with%20Senior%20Living&body=Hello%20SAGE%20Team,%0D%0A%0D%0AI would like assistance with finding senior living options.%0D%0A%0D%0AThank you.`}
          className="bg-white text-sageGreen px-8 py-3 rounded-xl font-semibold hover:bg-sageMint/20 transition-all shadow-sm"
        >
          Contact Us
        </Link>
      </motion.section>
    </main>
  );
}
