// ...Header component...
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/care-discovery", label: "Find Care" },
    { href: "/our-moms", label: "Our Moms" },
    { href: "/professionals", label: "For Professionals" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-heading text-sageGreen font-bold">
          SAGE
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {links.map((link) => (
            <motion.div key={link.href} whileHover={{ y: -2 }}>
              <Link
                href={link.href}
                className={`text-lg font-medium transition-colors ${
                  pathname === link.href
                    ? "text-sageGreen border-b-2 border-sageGreen pb-1"
                    : "text-grayText hover:text-sageHover"
                }`}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-sageGreen text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>
      

      {/* Mobile Drawer */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="md:hidden bg-white shadow-md"
        >
          <nav className="flex flex-col p-4 gap-4 text-center">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-lg py-2 rounded-xl ${
                  pathname === link.href
                    ? "bg-sageGreen text-white"
                    : "text-sageGreen hover:bg-sageMint"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
}
