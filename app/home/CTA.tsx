import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative">
      {/* Photo banner */}
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="relative aspect-[16/6] w-full overflow-hidden rounded-3xl">
          <Image
            src="/images/healthcare.jpg"
            alt="Smiling family reviewing options"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Text block */}
      <div className="mx-auto max-w-5xl px-6 py-14 text-center">
        <h2 className="font-heading text-[#244B3B] text-3xl md:text-5xl">
          Take the First Step Toward Clarity and Peace of Mind
        </h2>
        <p className="mt-4 text-[#385242] text-lg">
          You don’t have to make these decisions alone. Start your 4-Pillar
          Assessment today and see care options that truly fit your loved one’s
          needs — safely, locally, and compassionately.
        </p>
        <Link
          href="/care-discovery"
          className="mt-8 inline-block rounded-full bg-[#2E6A4A] px-10 py-4 text-white font-semibold hover:bg-[#264F39] shadow"
        >
          Start the 4-Pillar Assessment
        </Link>
      </div>
    </section>
  );
}
