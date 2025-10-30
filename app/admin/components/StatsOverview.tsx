// ...StatsOverview component...
"use client";
import { motion } from "framer-motion";

export default function StatsOverview() {
  const stats = [
    { label: "Active Listings", value: 24 },
    { label: "Pending Approvals", value: 3 },
    { label: "Total Communities", value: 57 },
  ];

  return (
    <section className="grid md:grid-cols-3 gap-6">
      {stats.map((item, i) => (
        <motion.div
          key={i}
          className="bg-white shadow-md rounded-2xl p-6 text-center border border-sageMint"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.2 }}
        >
          <h3 className="text-3xl font-heading text-sageGreen">{item.value}</h3>
          <p className="text-grayText">{item.label}</p>
        </motion.div>
      ))}
    </section>
  );
}
