"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaRegHeart, FaMapMarkerAlt, FaUserFriends } from "react-icons/fa";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-beige text-grayText font-body">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-b from-sageMint/60 to-beige">
        <motion.h1
          className="text-5xl md:text-6xl font-heading text-sageGreen mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          You don’t have to face this alone.
        </motion.h1>
        <motion.p
          className="max-w-2xl text-lg md:text-xl mb-10 text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          SAGE helps families find safe, affordable senior care — quickly,
          locally, and 100% free.
        </motion.p>

        <div className="flex gap-4">
          <Link
            href="/care-discovery"
            className="px-8 py-3 bg-sageGreen text-white rounded-2xl hover:bg-sageHover transition-all shadow-xl font-semibold text-lg"
          >
            Start Here
          </Link>
          <Link
            href="/login"
            className="px-8 py-3 border-2 border-sageGreen text-sageGreen rounded-2xl hover:bg-sageMint transition-all font-semibold text-lg"
          >
            Log In
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-5xl mx-auto mt-20 px-6 text-center">
        <h2 className="text-3xl font-heading text-sageGreen mb-6">
          How SAGE Works
        </h2>
        <p className="text-lg mb-12 text-grayText">
          In just a few guided steps, you’ll discover the right care options for
          your loved one — personalized, local, and compassionate.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Tell Us What Matters",
              desc: "Share your family’s priorities — safety, independence, comfort, or specialized care.",
              icon: <FaRegHeart className="text-sageGreen text-4xl mb-2" />,
            },
            {
              title: "Discover Local Options",
              desc: "See nearby communities that match your loved one’s medical, social, and budget needs.",
              icon: <FaMapMarkerAlt className="text-sageGreen text-4xl mb-2" />,
            },
            {
              title: "Connect Instantly",
              desc: "Get connected with trusted advisors who can guide you every step of the way.",
              icon: <FaUserFriends className="text-sageGreen text-4xl mb-2" />,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-2xl transition-all border border-sageMint/30"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {item.icon}
              <h3 className="text-xl font-heading text-sageGreen mb-3">
                {item.title}
              </h3>
              <p className="text-grayText text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 py-10 bg-gradient-to-r from-sageGreen to-sageHover text-white text-center text-sm shadow-inner">
        <p className="mb-2 font-semibold">
          SAGE Promise — 100% Free · 100% Local · 100% Compassionate
        </p>
        <p className="opacity-80">© 2025 SAGE Senior Advisors</p>
      </footer>
    </main>
  );
}
