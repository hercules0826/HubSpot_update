"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { data: session } = useSession();
  const user = session?.user;

  const links = [
    { href: "/", label: "Home" },
    { href: "/care-discovery", label: "Find Care" },
    { href: "/community", label: "Search All Communities" },
    { href: "/our-moms", label: "Our Moms" },
    { href: "/professionals", label: "For Professionals" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-sageMint/20 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 md:px-10">
        
        {/* Modern Logo */}
        <Link
          href="/"
          className="text-3xl font-heading font-bold tracking-tight text-sageGreen hover:text-sageHover transition-all"
        >
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flwx items-center"
          >
            <Image src="/images/SAGE Logo.png"
              alt="SAGE Logo"
              width={60}          // ✅ adjust smoothly
              height={60}
              className="object-contain select-none"
              priority />
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        {/* Desktop navigation auth controls */}
        <div className="hidden md:flex items-center gap-8">
          {/* Links */}
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-lg font-medium transition pb-1 ${
                pathname === link.href
                  ? "text-sageGreen after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-sageGreen"
                  : "text-gray-600 hover:text-sageGreen"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Admin manage button */}
          {user?.role === "admin" && (
            <Link
              href="/admin"
              className="bg-sageGreen text-white px-4 py-2 rounded-xl font-semibold shadow-sm hover:bg-sageHover"
            >
              Manage
            </Link>
          )}

          {user ? (
            <>
              <span className="text-sageGreen font-medium">
                {user.name || user.email}
              </span>
              <button
                onClick={() => signOut({ callbackUrl: "/login" })}
                className="px-4 py-2 text-white bg-red-500 rounded-xl hover:bg-red-600"
              >
                Log Out
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="bg-sageGreen text-white px-5 py-2 rounded-xl hover:bg-sageHover"
            >
              Log In
            </Link>
          )}
        </div>


        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-sageGreen text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="md:hidden bg-white border-t border-sageMint/30 shadow-md"
        >
          <div className="flex flex-col py-4 px-6 gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-lg font-medium rounded-lg py-2 px-3 transition-all ${
                  pathname === link.href
                    ? "bg-sageGreen text-white"
                    : "text-sageGreen hover:bg-sageMint/30"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="mt-2 bg-sageGreen text-white text-center py-2 rounded-xl font-semibold hover:bg-sageHover transition-all"
            >
              Log In
            </Link>
          </div>
        </motion.nav>
      )}
    </header>
  );
}
