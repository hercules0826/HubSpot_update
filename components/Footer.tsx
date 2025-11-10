import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#2E6A4A] to-[#244B3B] text-white py-14 mt-24">
      <div className="max-w-7xl mx-auto px-8 text-center space-y-6">

        <p className="text-lg">
          Contact: <strong>1-888-420-SAGE</strong> | support@sageaids.com
        </p>

        <p className="opacity-90">
          SAGE Promise: 100% Free • 100% Local • 100% Compassionate
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-4">
          {[FaFacebookF, FaLinkedinIn].map((Icon, i) => (
            <a key={i} href="#" className="p-3 rounded-full bg-white/10 hover:bg-white/20">
              <Icon className="text-lg" />
            </a>
          ))}
        </div>

        {/* Links */}
        <div className="flex justify-center gap-6 text-sm opacity-90 mt-4">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Use</a>
          <a href="/contact">Contact</a>
        </div>

        <p className="text-xs opacity-70 mt-4">
          © {new Date().getFullYear()} SAGE Senior Advisors — All rights reserved.
        </p>
      </div>
    </footer>
  );
}
