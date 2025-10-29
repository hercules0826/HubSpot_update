// ...professionals page...
"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ProfessionalsPage() {
  return (
    <main className="bg-white min-h-screen py-20 px-6">
      <section className="max-w-5xl mx-auto text-center mb-16">
        <motion.h1
          className="text-5xl font-heading text-sageGreen mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          For Professionals & Partners
        </motion.h1>
        <p className="max-w-3xl mx-auto text-lg text-grayText leading-relaxed">
          Join SAGE in helping families find clarity during life’s most critical
          transitions. Whether you’re a social worker, discharge planner, or
          community director — we simplify referrals and strengthen connections.
        </p>
      </section>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {[
          {
            title: "Hospital & Healthcare Partners",
            desc: "Provide your patients with verified, personalized community matches through SAGE’s guided care discovery tool.",
            icon: "🏥",
          },
          {
            title: "Social Workers & Case Managers",
            desc: "Spend less time researching and more time supporting families — with instant recommendations you can trust.",
            icon: "🤝",
          },
          {
            title: "Senior Living Communities",
            desc: "List your community, update your amenities, and connect directly with qualified families in your area.",
            icon: "🏡",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="bg-beige/40 border border-sageMint rounded-2xl shadow-sm p-8 hover:shadow-md transition-all"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
          >
            <div className="text-4xl mb-3">{item.icon}</div>
            <h2 className="text-xl font-heading text-sageGreen mb-2">
              {item.title}
            </h2>
            <p className="text-grayText">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-20 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-heading text-sageGreen mb-4">
          Partner With SAGE
        </h3>
        <p className="text-grayText mb-6">
          Interested in collaboration or referral integration? We’d love to hear from you.
        </p>
        <Link
          href="/contact"
          className="px-8 py-3 bg-sageGreen text-white rounded-2xl hover:bg-sageHover transition-all shadow-md"
        >
          Contact Us
        </Link>
      </motion.div>
    </main>
  );
}
