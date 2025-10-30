"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaRegHeart, FaMapMarkerAlt, FaUserFriends } from "react-icons/fa";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-beige text-grayText font-body flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden flex flex-col items-center justify-center text-center py-28 px-6 bg-gradient-to-b from-[#ABEDD8]/70 to-[#F5E9D2]">
        {/* Floating gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />

        <motion.h1
          className="text-5xl md:text-6xl font-heading text-[#2F5D50] mb-6 drop-shadow-sm leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          You don’t have to face this alone.
        </motion.h1>

        <motion.p
          className="max-w-3xl text-lg md:text-xl mb-10 text-gray-700 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          SAGE helps families find safe, affordable senior care — quickly,
          locally, and 100% free.
        </motion.p>

        <motion.div
          className="relative z-10 flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            href="/care-discovery"
            className="px-10 py-3 bg-[#2F5D50] text-white rounded-full shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all font-semibold text-lg"
          >
            Start Here
          </Link>
          <Link
            href="/login"
            className="px-10 py-3 border-2 border-[#2F5D50] text-[#2F5D50] rounded-full hover:bg-[#ABEDD8]/40 transition-all font-semibold text-lg"
          >
            Log In
          </Link>
        </motion.div>

        {/* Subtle decorative wave */}
        <svg
          className="absolute bottom-0 w-full text-[#F5E9D2] pointer-events-none z-0"
          viewBox="0 0 1440 320"
          fill="currentColor"
        >
          <path d="M0,224L80,213.3C160,203,320,181,480,165.3C640,149,800,139,960,154.7C1120,171,1280,213,1360,234.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>

      </section>

      {/* How It Works */}
      <section className="relative z-10 max-w-7xl mx-auto mt-28 px-6 text-center">
        <motion.h2
          className="text-4xl font-heading text-[#2F5D50] mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          How SAGE Works
        </motion.h2>

        <motion.p
          className="text-lg mb-12 text-grayText max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          In just a few guided steps, you’ll discover the right care options for
          your loved one — personalized, local, and compassionate.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Tell Us What Matters",
              desc: "Share your family’s priorities — safety, independence, comfort, or specialized care.",
              icon: <FaRegHeart className="text-[#2F5D50] text-5xl mb-4" />,
            },
            {
              title: "Discover Local Options",
              desc: "See nearby communities that match your loved one’s medical, social, and budget needs.",
              icon: <FaMapMarkerAlt className="text-[#2F5D50] text-5xl mb-4" />,
            },
            {
              title: "Connect Instantly",
              desc: "Get connected with trusted advisors who can guide you every step of the way.",
              icon: <FaUserFriends className="text-[#2F5D50] text-5xl mb-4" />,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-md hover:shadow-2xl transition-all border border-[#ABEDD8]/40 p-10 flex flex-col items-center"
              whileHover={{ y: -4, scale: 1.02 }}
            >
              {item.icon}
              <h3 className="text-2xl font-heading text-[#2F5D50] mb-3">
                {item.title}
              </h3>
              <p className="text-grayText text-base leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-28 py-10 bg-[#2F5D50] text-white text-center shadow-inner rounded-t-3xl">
        <p className="text-lg mb-2 font-semibold">
          SAGE Promise — 100% Free · 100% Local · 100% Compassionate
        </p>
        <p className="opacity-80 text-sm">© 2025 SAGE Senior Advisors</p>
      </footer>
    </main>
  );
}
