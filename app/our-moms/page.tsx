"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function OurMomsPage() {
  const moms = [
    {
      name: "Margaret",
      story:
        "Margaret faced early-stage Alzheimer’s, and her daughter Emily spent months searching for memory-care communities that truly felt safe. SAGE was born from that struggle — to make the search kinder, faster, and more human.",
      image: "/images/care.png",
    },
    {
      name: "Evelyn",
      story:
        "Evelyn wanted to stay close to her grandchildren while receiving help with daily activities. Her son Matthew’s experience inspired our mission to connect families to local options that feel like home.",
      image: "/images/SAGE Logo (Mag).png",
    },
  ];

  return (
    <main className="bg-beige min-h-screen py-24 px-6 flex flex-col items-center">
      {/* Hero */}
      <motion.section
        className="text-center max-w-4xl mx-auto mb-20"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl md:text-6xl font-heading text-sageGreen mb-6">
          Our Moms — Our Inspiration
        </h1>
        <p className="text-lg md:text-xl text-grayText leading-relaxed">
          SAGE was founded by two adult children who guided their moms through dementia care.
          They built the service they wished they’d had — one that’s compassionate, clear, and human.
        </p>
      </motion.section>

      {/* Mom Stories */}
      <section className="grid md:grid-cols-2 gap-12 w-full max-w-6xl">
        {moms.map((mom, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
          >
            <div className="relative h-72 w-full">
              <Image
                src={mom.image}
                alt={mom.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-heading text-sageGreen mb-3">
                {mom.name}’s Story
              </h2>
              <p className="text-grayText text-base leading-relaxed">{mom.story}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <motion.section
        className="mt-24 bg-gradient-to-r from-sageGreen to-sageHover text-white rounded-3xl px-8 py-14 text-center max-w-4xl shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-heading mb-4">Every Family Has a Story</h3>
        <p className="text-lg md:text-xl opacity-95">
          Ours began with two moms — and continues with yours.
          Together, we’re turning crisis into clarity.
        </p>
      </motion.section>
    </main>
  );
}
