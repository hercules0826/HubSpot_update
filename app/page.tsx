// "use client";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import { FaRegHeart, FaMapMarkerAlt, FaUserFriends } from "react-icons/fa";

// export default function HomePage() {
//   return (
//     <main className="min-h-screen bg-beige text-grayText font-body flex flex-col">
//       {/* Hero Section */}
//       <section className="relative overflow-hidden flex flex-col items-center justify-center text-center py-28 px-6 bg-gradient-to-b from-[#ABEDD8]/70 to-[#F5E9D2]">
//         {/* Floating gradient overlay */}
//         <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />

//         <motion.h1
//           className="text-5xl md:text-6xl font-heading text-[#2F5D50] mb-6 drop-shadow-sm leading-tight"
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           You don’t have to face this alone.
//         </motion.h1>

//         <motion.p
//           className="max-w-3xl text-lg md:text-xl mb-10 text-gray-700 leading-relaxed"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//         >
//           SAGE helps families find safe, affordable senior care — quickly,
//           locally, and 100% free.
//         </motion.p>

//         <motion.div
//           className="relative z-10 flex flex-wrap justify-center gap-6"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6 }}
//         >
//           <Link
//             href="/care-discovery"
//             className="px-10 py-3 bg-[#2F5D50] text-white rounded-full shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all font-semibold text-lg"
//           >
//             Start Here
//           </Link>
//           <Link
//             href="/login"
//             className="px-10 py-3 border-2 border-[#2F5D50] text-[#2F5D50] rounded-full hover:bg-[#ABEDD8]/40 transition-all font-semibold text-lg"
//           >
//             Log In
//           </Link>
//         </motion.div>

//         {/* Subtle decorative wave */}
//         <svg
//           className="absolute bottom-0 w-full text-[#F5E9D2] pointer-events-none z-0"
//           viewBox="0 0 1440 320"
//           fill="currentColor"
//         >
//           <path d="M0,224L80,213.3C160,203,320,181,480,165.3C640,149,800,139,960,154.7C1120,171,1280,213,1360,234.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
//         </svg>

//       </section>

//       {/* How It Works */}
//       <section className="relative z-10 max-w-7xl mx-auto mt-28 px-6 text-center">
//         <motion.h2
//           className="text-4xl font-heading text-[#2F5D50] mb-6"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >
//           How SAGE Works
//         </motion.h2>

//         <motion.p
//           className="text-lg mb-12 text-grayText max-w-2xl mx-auto"
//           initial={{ opacity: 0, y: 10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           In just a few guided steps, you’ll discover the right care options for
//           your loved one — personalized, local, and compassionate.
//         </motion.p>

//         <div className="grid md:grid-cols-3 gap-10">
//           {[
//             {
//               title: "Tell Us What Matters",
//               desc: "Share your family’s priorities — safety, independence, comfort, or specialized care.",
//               icon: <FaRegHeart className="text-[#2F5D50] text-5xl mb-4" />,
//             },
//             {
//               title: "Discover Local Options",
//               desc: "See nearby communities that match your loved one’s medical, social, and budget needs.",
//               icon: <FaMapMarkerAlt className="text-[#2F5D50] text-5xl mb-4" />,
//             },
//             {
//               title: "Connect Instantly",
//               desc: "Get connected with trusted advisors who can guide you every step of the way.",
//               icon: <FaUserFriends className="text-[#2F5D50] text-5xl mb-4" />,
//             },
//           ].map((item, i) => (
//             <motion.div
//               key={i}
//               className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-md hover:shadow-2xl transition-all border border-[#ABEDD8]/40 p-10 flex flex-col items-center"
//               whileHover={{ y: -4, scale: 1.02 }}
//             >
//               {item.icon}
//               <h3 className="text-2xl font-heading text-[#2F5D50] mb-3">
//                 {item.title}
//               </h3>
//               <p className="text-grayText text-base leading-relaxed">
//                 {item.desc}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="mt-28 py-10 bg-[#2F5D50] text-white text-center shadow-inner rounded-t-3xl">
//         <p className="text-lg mb-2 font-semibold">
//           SAGE Promise — 100% Free · 100% Local · 100% Compassionate
//         </p>
//         <p className="opacity-80 text-sm">© 2025 SAGE Senior Advisors</p>
//       </footer>
//     </main>
//   );
// }

// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";

// export default function HomePage() {
//   return (
//     <main className="min-h-screen bg-[#F6EEDC] text-gray-700 font-body flex flex-col">

//       {/* ====================== HERO SECTION ====================== */}
//       <section className="relative overflow-hidden flex flex-col items-center text-center py-24 px-6 bg-gradient-to-b from-[#D3F0E4] to-[#F6EEDC]">

//         <motion.h1
//           className="text-4xl md:text-6xl font-heading text-[#244B3B] mb-6 leading-tight"
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           You don’t have to face this alone.
//         </motion.h1>

//         <motion.p
//           className="max-w-3xl text-lg md:text-xl mb-10 text-[#385242]"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//         >
//           Discover the right senior-living options for your loved one — safe, compassionate,
//           and 100% free.  
//           <br />
//           Answer our short questionnaire to see what care truly fits your family’s needs.
//         </motion.p>

//         {/* CTA buttons */}
//         <motion.div
//           className="flex flex-wrap justify-center gap-6"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6 }}
//         >
//           <Link
//             href="/care-discovery"
//             className="px-10 py-3 bg-[#2E6A4A] text-white rounded-full shadow-md hover:bg-[#264F39] text-lg font-semibold"
//           >
//             Start Here
//           </Link>

//           <Link
//             href="/professionals"
//             className="px-10 py-3 border-2 border-[#2E6A4A] text-[#2E6A4A] rounded-full hover:bg-[#E6F4EE] text-lg font-semibold"
//           >
//             Talk to a SAGE Advisor
//           </Link>
//         </motion.div>

//         <p className="mt-4 text-sm text-[#3f5f50]">Takes about 5 minutes. You can pause and return anytime.</p>

//       </section>


//       {/* ====================== 4-PILLAR ASSESSMENT ====================== */}
//       <section className="max-w-7xl mx-auto mt-28 px-6 text-center">
//         <h2 className="text-4xl font-heading text-[#244B3B] mb-4">
//           Our 4-Pillar Assessment System
//         </h2>
//         <p className="text-lg text-[#385242] mb-14">
//           We evaluate every aspect of senior living to help you find the perfect match.
//         </p>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

//           <PillarCard
//             icon="🏡"
//             title="Personal & Family Wishes"
//             text="Values, emotions, goals, and what matters most to your family."
//           />

//           <PillarCard
//             icon="🤝"
//             title="Socialization"
//             text="Lifestyle preferences, activities, and community engagement."
//           />

//           <PillarCard
//             icon="❤️"
//             title="Medical"
//             text="Health conditions, safety needs, and care-level requirements."
//           />

//           <PillarCard
//             icon="💵"
//             title="Financials"
//             text="Budget planning, funding sources, and affordability guidance."
//           />
//         </div>

//         <Link
//           href="/care-discovery"
//           className="inline-block mt-10 bg-[#2E6A4A] text-white px-8 py-3 rounded-full shadow hover:bg-[#264F39] font-semibold"
//         >
//           Start My 4-Pillar Assessment
//         </Link>
//       </section>


//       {/* ====================== HOW SAGE WORKS ====================== */}
//       <section className="max-w-5xl mx-auto mt-28 px-6 text-center">
//         <h2 className="text-4xl font-heading text-[#244B3B] mb-6">
//           How SAGE Turns Your Answers Into Real Options
//         </h2>

//         <div className="grid md:grid-cols-3 gap-12 mt-12">
//           <StepCard
//             title="Tell Us What Matters"
//             text="Share your family’s priorities — safety, independence, comfort, or specialized care."
//           />
//           <StepCard
//             title="Discover Local Options"
//             text="View the senior living communities that best match your medical, social, and budget needs."
//           />
//           <StepCard
//             title="Connect Instantly"
//             text="Speak directly with a local SAGE Advisor who guides you at every step."
//           />
//         </div>

//         <Link
//           href="/care-discovery"
//           className="inline-block mt-12 bg-[#2E6A4A] text-white px-8 py-3 rounded-full shadow hover:bg-[#264F39] font-semibold"
//         >
//           Take the 4-Pillar Assessment Now
//         </Link>
//       </section>


//       {/* ====================== WHY FAMILIES TRUST SAGE ====================== */}
//       <section className="max-w-5xl mx-auto mt-28 px-6 text-center">
//         <h2 className="text-4xl font-heading text-[#244B3B] mb-10">
//           Why Families and Professionals Trust SAGE
//         </h2>

//         <ul className="space-y-4 text-lg text-[#385242]">
//           <li>• <strong>100% Free. 100% Local.</strong> We’re a local service — not a national lead seller.</li>
//           <li>• <strong>Real People, Real Compassion.</strong> Our advisors guided their own parents through care.</li>
//           <li>• <strong>Human + Technology.</strong> Our system organizes the details, advisors bring the empathy.</li>
//           <li>• <strong>No Pressure, Ever.</strong> You stay in full control. We simply make things clear.</li>
//         </ul>
//       </section>


//       {/* ====================== SOCIAL PROOF ====================== */}
//       <section className="max-w-3xl mx-auto mt-28 px-6 text-center">
//         <blockquote className="bg-white shadow-md rounded-3xl p-10 border border-[#e5dcc8]">
//           <p className="text-xl md:text-2xl italic text-[#244B3B] mb-4">
//             “SAGE helped me understand exactly what my dad needed — and what we could actually afford.
//             I finally felt like someone was on our side.”
//           </p>
//           <footer className="text-[#385242] font-semibold">
//             — Jennifer M., South Jersey
//           </footer>
//         </blockquote>
//       </section>


//       {/* ====================== FAQ ====================== */}
//       <section className="max-w-5xl mx-auto mt-28 px-6">
//         <h2 className="text-4xl font-heading text-[#244B3B] mb-12 text-center">
//           FAQ Highlights
//         </h2>

//         <FAQItem q="How long does it take?" a="About 5–7 minutes. You can pause anytime." />
//         <FAQItem q="Do I need medical records?" a="No. All questions are simple and observation-based." />
//         <FAQItem q="Is it really free?" a="Yes. Families never pay for SAGE’s guidance." />
//         <FAQItem q="What happens next?" a="A local advisor reviews your answers and shares personalized options." />
//       </section>


//       {/* ====================== FINAL CTA ====================== */}
//       <section className="text-center mt-28 px-6 py-20 bg-white/60 border-t border-[#e5dcc8]">
//         <h2 className="text-4xl font-heading text-[#244B3B] mb-6">
//           Take the First Step Toward Clarity and Peace of Mind
//         </h2>

//         <p className="max-w-2xl mx-auto text-lg text-[#385242] mb-10">
//           You don’t have to make these decisions alone. Start your 4-Pillar Assessment today
//           and discover care options that truly fit your loved one’s needs — safely,
//           locally, and compassionately.
//         </p>

//         <Link
//           href="/care-discovery"
//           className="px-12 py-4 bg-[#2E6A4A] text-white text-lg rounded-full shadow hover:bg-[#264F39] font-semibold"
//         >
//           Start the 4-Pillar Assessment
//         </Link>
//       </section>
//     </main>
//   );
// }

// /* ====================== COMPONENTS ====================== */

// function PillarCard({ icon, title, text }) {
//   return (
//     <div className="bg-white rounded-2xl shadow-sm p-6 border border-[#e5dcc8]">
//       <div className="text-5xl mb-4">{icon}</div>
//       <h3 className="text-[#244B3B] text-2xl font-heading mb-2">{title}</h3>
//       <p className="text-[#385242]">{text}</p>
//     </div>
//   );
// }

// function StepCard({ title, text }) {
//   return (
//     <div className="bg-white rounded-2xl shadow-sm p-8 border border-[#e5dcc8]">
//       <h3 className="text-[#244B3B] text-xl font-heading mb-3">{title}</h3>
//       <p className="text-[#385242]">{text}</p>
//     </div>
//   );
// }

// function FAQItem({ q, a }) {
//   return (
//     <div className="mb-6">
//       <p className="text-xl font-heading text-[#244B3B]">{q}</p>
//       <p className="text-[#385242] mt-2">{a}</p>
//     </div>
//   );
// }



// import Hero from "@/app/home/Hero";
// import Pillars from "@/app/home/Pillars";
// import SocialProof from "@/app/home/SocialProof";
// import CTA from "@/app/home/CTA";
// import HowItWorks from "@/app/home/HowItWorks";
// import Testimonials from "@/app/home/Testimonials";

// export default function HomePage() {
//   return (
//     <main className="bg-[#F6EEDC]">
//       <Hero />
//       <Pillars />
//       <Testimonials />
//       <HowItWorks />
//       <SocialProof />
//       {/* <CTA /> */}
      
//     </main>
//   );
// }


import Hero from "@/app/home/Hero";
import Pillars from "@/app/home/Pillars";
import Testimonials from "@/app/home/Testimonials";
import HowItWorks from "@/app/home/HowItWorks";
import SocialProof from "@/app/home/SocialProof";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      {/* Global Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F7F4EA] via-[#F2ECE0] to-[#EFE6D4] -z-10" />

      {/* Ambient Blobs */}
      <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-[#DCEFE3] rounded-full blur-[110px] opacity-40 -z-10"></div>
      <div className="absolute top-[45%] right-[10%] w-80 h-80 bg-[#E4F2EC] rounded-full blur-[120px] opacity-30 -z-10"></div>
      <div className="absolute bottom-[5%] left-[20%] w-64 h-64 bg-[#F0E6D4] rounded-full blur-[120px] opacity-40 -z-10"></div>

      {/* Soft Texture Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.08] mix-blend-soft-light -z-10"></div>

      {/* SECTION STACK */}
      <div className="space-y-16 md:space-y-5">
        <Hero />
        <div className="separator" />
        <Pillars />
        <div className="separator" />
        <Testimonials />
        <div className="separator" />
        <HowItWorks />
        <div className="separator" />
        <SocialProof />
      </div>

    </main>
  );
}
