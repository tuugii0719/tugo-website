"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/about", label: "About" },
    { href: "/tours", label: "Tours" },
    { href: "/gallery", label: "Gallery" },
    { href: "/why-tour-tugo", label: "Why Tugi" },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-night-950/90 backdrop-blur-md py-4" : "bg-transparent py-6"
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Wordmark */}
          <Link href="/" className="group flex flex-col leading-none hover:text-sand-400 transition-colors">
            <span className="text-sand-200 text-[10px] md:text-[11px] tracking-[0.32em] uppercase font-medium">
              Wild Mongolia
            </span>
            <span className="text-sand-100 font-display italic text-xl md:text-2xl mt-1">
              with Tugi
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sand-300 hover:text-sand-100 transition-colors text-[13px] uppercase tracking-[0.2em]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book"
              className="border border-sand-400/40 text-sand-200 px-5 py-2 text-[13px] uppercase tracking-[0.15em] hover:bg-sand-400/10 hover:border-sand-400/70 transition-all"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <span className="w-6 h-[1.5px] bg-sand-200" />
            <span className="w-6 h-[1.5px] bg-sand-200" />
            <span className="w-4 h-[1.5px] bg-sand-200" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-night-950/98 backdrop-blur-lg flex flex-col items-center justify-center"
          >
            <button
              className="absolute top-6 right-6 text-sand-300 hover:text-sand-100 text-3xl"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              ×
            </button>
            <div className="flex flex-col items-center gap-8">
              {[...links, { href: "/book", label: "Book Now" }].map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    className="text-sand-200 hover:text-sand-400 text-2xl font-display tracking-wider transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
