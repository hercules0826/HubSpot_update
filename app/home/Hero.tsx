"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Reveal from "./Reveal";

export default function Hero() {
  const router = useRouter();

  const handleStart = () => {
    localStorage.removeItem("userInfo");
    document.cookie = "onboarded=; Max-Age=0; path=/";
    router.push("/onboarding");
  };

  return (
    <Reveal>
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F4F8F5] to-[#E9F2EC] py-16 md:py-20">

      {/* Decorative Blobs */}
      <div className="absolute -top-32 -left-20 w-72 h-72 bg-[#CFE9D8] rounded-full blur-3xl opacity-40"></div>
      <div className="absolute top-10 -right-28 w-80 h-80 bg-[#E3F2EB] rounded-full blur-3xl opacity-40"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 md:grid-cols-2">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading text-[#1F3D2B] text-4xl md:text-6xl font-semibold leading-tight drop-shadow-sm">
              You don’t have to face  
              <span className="text-[#2E6A4A]"> this alone.</span>
            </h1>

            <p className="mt-6 text-[#455F53] text-lg md:text-xl leading-relaxed max-w-xl">
              Discover the right senior-living options for your loved one —
              safe, compassionate, and 100% free. 
              Start with a short, guided assessment to find the care that truly fits your family’s needs.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-5">
              <motion.button
                onClick={handleStart}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-full bg-[#2E6A4A] px-10 py-3.5 text-white text-lg font-semibold 
                           shadow-lg hover:bg-[#255439] transition-all"
              >
                Start the 4-Pillar Assessment
              </motion.button>

              <motion.div whileHover={{ scale: 1.03 }}>
                <Link
                  href="/professionals"
                  className="rounded-full border-2 border-[#2E6A4A] px-10 py-3.5 text-[#2E6A4A] 
                             text-lg font-semibold hover:bg-[#DCF0E7] transition-all"
                >
                  Talk to a SAGE Advisor
                </Link>
              </motion.div>
            </div>

            <p className="mt-3 text-sm text-[#5B756A]">
              Takes about 5 minutes. You can pause and return anytime.
            </p>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[360px] md:h-[460px] rounded-3xl overflow-hidden shadow-xl"
          >
            <Image
              src="/images/landing.png"
              alt="Family reviewing care options"
              fill
              className="object-cover scale-105"
              priority
            />

            {/* Soft overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent" />
          </motion.div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
    </Reveal>
  );
}
