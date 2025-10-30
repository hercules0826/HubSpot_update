import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#2F5D50] to-[#4C7D6C] text-white py-12 mt-20 rounded-t-3xl shadow-inner">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left">
        {/* Left Section */}
        <div className="space-y-2">
          <h3 className="text-2xl font-heading font-semibold">SAGE</h3>
          <p className="text-sm opacity-90 max-w-sm">
            Turning crisis into clarity for families and caregivers — connecting
            you with trusted senior care communities quickly, locally, and
            compassionately.
          </p>
        </div>

        {/* Center Links */}
        <div className="flex flex-col md:flex-row gap-6 text-sm">
          <a href="/privacy" className="hover:underline opacity-90">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:underline opacity-90">
            Terms of Use
          </a>
          <a href="/contact" className="hover:underline opacity-90">
            Contact
          </a>
        </div>

        {/* Right Social Icons */}
        <div className="flex gap-4">
          {[FaFacebookF, FaLinkedinIn, FaInstagram].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all"
            >
              <Icon className="text-lg" />
            </a>
          ))}
        </div>
      </div>

      <div className="mt-10 text-center text-xs opacity-80">
        © {new Date().getFullYear()} SAGE Senior Advisors — All rights reserved.
      </div>
    </footer>
  );
}
