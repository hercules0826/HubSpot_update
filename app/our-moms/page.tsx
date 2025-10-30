// ...our-moms page...
"use client";
import { motion } from "framer-motion";

export default function OurMomsPage() {
  return (
    <main className="bg-beige min-h-screen py-20 px-6 flex flex-col items-center">
      <motion.h1
        className="text-5xl font-heading text-sageGreen mb-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Moms — Our Inspiration
      </motion.h1>

      <motion.p
        className="max-w-3xl text-lg text-grayText text-center mb-12 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        SAGE was founded by two adult children who guided their moms through
        dementia care. They built the service they wished they’d had — one that’s
        compassionate, clear, and human.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
        {[
          {
            name: "Margaret",
            story:
              "Margaret faced early-stage Alzheimer’s, and her daughter Emily spent months searching for memory-care communities that truly felt safe. SAGE was born from that struggle — to make the search kinder, faster, and more human.",
            image: "/images/mom1.jpg",
          },
          {
            name: "Evelyn",
            story:
              "Evelyn wanted to stay close to her grandchildren while receiving help with daily activities. Her son Matthew’s experience inspired our mission to connect families to local options that feel like home.",
            image: "/images/mom2.jpg",
          },
        ].map((mom, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
          >
            <img
              src={mom.image}
              alt={mom.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 space-y-3">
              <h2 className="text-2xl font-heading text-sageGreen">
                {mom.name}’s Story
              </h2>
              <p className="text-grayText leading-relaxed">{mom.story}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-16 bg-sageGreen text-white rounded-2xl px-8 py-10 text-center max-w-3xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-heading mb-3">
          Every Family Has a Story.
        </h3>
        <p className="text-lg">
          Ours began with two moms — and continues with yours. 
          Together, we’re turning crisis into clarity.
        </p>
      </motion.div>
    </main>
  );
}
