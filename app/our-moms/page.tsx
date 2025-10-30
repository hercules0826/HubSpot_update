"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function OurMomsPage() {
  const moms = [
    {
      name: "Margaret",
      story:
        "Margaret faced early-stage Alzheimer’s, and her daughter Emily spent months searching for memory-care communities...",
      image: "/images/care.png",
    },
    {
      name: "Evelyn",
      story:
        "Evelyn wanted to stay close to her grandchildren. Her son Matthew’s experience inspired our mission...",
      image: "/images/pexels-totalshape-2383010.jpg",
    },
    {
      name: "Lillian",
      story:
        "Lillian loved gardening and staying social within her community...",
      image: "/images/Bob & Barbara.jpg",
    },
    {
      name: "Rose",
      story:
        "Rose’s family searched for a compassionate memory-care environment...",
      image: "/images/Nonna and Ro _Senior_.jpg",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((p) => (p + 1) % moms.length);
  const prev = () => setIndex((p) => (p - 1 + moms.length) % moms.length);

  const visible = [moms[index], moms[(index + 1) % moms.length]];

  return (
    <main className="bg-beige min-h-screen py-24 px-6 flex flex-col items-center">
      {/* HERO */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h1 className="text-5xl md:text-6xl font-heading text-sageGreen mb-6">
          Our Moms — Our Inspiration
        </h1>
        <p className="text-lg md:text-xl text-grayText">
          SAGE was founded by two adult children who guided their moms through dementia care...
        </p>
      </section>

      {/* CAROUSEL */}
      <div className="relative w-full max-w-6xl">
        {/* Nav Buttons */}
        <button
          className="absolute -left-3 md:-left-12 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md shadow-xl w-12 h-12 rounded-full flex items-center justify-center text-sageGreen hover:bg-sageMint transition-all"
          onClick={prev}
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          className="absolute -right-3 md:-right-12 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md shadow-xl w-12 h-12 rounded-full flex items-center justify-center text-sageGreen hover:bg-sageMint transition-all"
          onClick={next}
        >
          <FaChevronRight size={20} />
        </button>

        <div className="overflow-hidden">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50, scale: 0.98 }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 110,
                  damping: 16,
                  mass: 0.6,
                },
              }}
              exit={{ opacity: 0, x: -40, scale: 0.97 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="grid md:grid-cols-2 gap-10"
            >
              {visible.map((mom, i) => (
                <motion.div
                  key={mom.name}
                  className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
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
                    <p className="text-grayText text-base leading-relaxed">
                      {mom.story}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
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







