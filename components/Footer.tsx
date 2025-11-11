import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#2E6A4A] to-[#244B3B] text-white py-16 mt-24">
      <div className="max-w-7xl mx-auto px-8">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-left">

          {/* Column 1 — Brand */}
          <div className="space-y-3">
            <h3 className="text-2xl font-heading font-semibold tracking-wide">
              SAGE Senior Advisors
            </h3>
            <p className="text-sm opacity-90 leading-relaxed">
              Compassionate, local guidance for your family’s senior-living journey.
            </p>
          </div>

          {/* Column 2 — Contact */}
          <div className="space-y-2">
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <p>
              <a href="tel:1-888-420-SAGE" className="hover:underline">
                1-888-420-SAGE(7243)
              </a>
            </p>
            <p>
              <a href="mailto:RitaRivera@sageaids.com" className="hover:underline">
                RitaRivera@sageaids.com
              </a>
            </p>
            <p>
              <a href="mailto:MattGriffin@sageaids.com" className="hover:underline">
                MattGriffin@sageaids.com
              </a>
            </p>
            <p className="opacity-90 text-sm pt-1">
              100% Free • 100% Local • 100% Compassionate
            </p>
          </div>

          {/* Column 3 — Social + Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-2">Connect</h4>

            <div className="flex justify-center md:justify-start gap-4">
              {/* ✅ Facebook */}
              <a
                href="https://facebook.com/SAGESeniorAdvisors"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 shadow-md"
              >
                <FaFacebookF className="text-xl" />
              </a>

              {/* ✅ LinkedIn */}
              <a
                href="https://linkedin.com/company/sage-senior-advisors"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 shadow-md"
              >
                <FaLinkedinIn className="text-xl" />
              </a>
            </div>

            <div className="flex justify-center md:justify-start gap-6 text-sm opacity-90 pt-2">
              <a href="/contact" className="hover:underline">Contact Us</a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-6 text-center">
          <p className="text-xs opacity-70">
            © {new Date().getFullYear()} SAGE Senior Advisors — All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
