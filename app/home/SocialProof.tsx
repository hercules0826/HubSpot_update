import Reveal from "./Reveal";

export default function SocialProof() {
  return (
    <Reveal>
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-20 grid md:grid-cols-2 gap-12">

      {/* LEFT — QUOTE */}
      <div className="relative rounded-3xl p-10 md:p-14 bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-[#e8dfcc]">
        
        {/* Decorative quote icon */}
        <span className="absolute -top-4 -left-2 text-6xl text-[#c8d4cd] opacity-40 select-none">
          “
        </span>

        <p className="font-heading text-[#1C3B2A] text-2xl md:text-3xl italic leading-relaxed mt-6">
          SAGE helped me understand exactly what my dad needed — and what we
          could actually afford. I finally felt like someone was on our side.
        </p>

        <footer className="mt-6 text-[#41584C] font-semibold text-lg">
          — Jennifer M., South Jersey
        </footer>
      </div>

      {/* RIGHT — WHY TRUST */}
      <div className="rounded-3xl p-10 md:p-14 bg-gradient-to-br from-white to-[#f8f5ef] border border-[#e8dfcc] shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
        
        <h3 className="font-heading text-[#1C3B2A] text-3xl leading-snug">
          Why Families and Professionals
          <br />
          Trust SAGE
        </h3>

        {/* Animated underline */}
        <div className="h-[3px] w-24 bg-[#1C3B2A] mt-3 mb-6 rounded-full opacity-40" />

        <ul className="space-y-5 text-[#41584C] text-[17px] leading-relaxed">
          <li>
            <strong className="text-[#1C3B2A]">100% Free. 100% Local.</strong>{" "}
            We’re locally operated — not a national lead seller.
          </li>

          <li>
            <strong className="text-[#1C3B2A]">Real People, Real Compassion.</strong>{" "}
            Our advisors have guided families through their own care journeys.
          </li>

          <li>
            <strong className="text-[#1C3B2A]">Human + Technology.</strong>{" "}
            The platform organizes the details; our advisors bring empathy.
          </li>

          <li>
            <strong className="text-[#1C3B2A]">No Pressure, Ever.</strong>{" "}
            You stay in control — we simply make it clear and easy.
          </li>
        </ul>

      </div>
    </section>
    </Reveal>
  );
}
