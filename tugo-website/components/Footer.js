import Link from "next/link";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import { UlziiKnot } from "./Ornaments";

export default function Footer() {
  return (
    <footer className="bg-night-950 border-t border-sand-900/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex flex-col leading-none mb-5">
              <span className="text-sand-300 text-[11px] tracking-[0.32em] uppercase font-medium">
                Wild Mongolia
              </span>
              <span className="text-sand-100 font-display italic text-2xl mt-1.5">
                with Tugi
              </span>
              <UlziiKnot color="var(--color-sand-400)" size={26} className="mt-4 opacity-60" />
            </div>
            <p className="text-sand-400 text-sm leading-relaxed max-w-xs">
              It&apos;s not a tour company.
              <br />
              <span className="text-sand-200 italic">It&apos;s me, showing you around.</span>
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sand-300 text-xs uppercase tracking-[0.2em] mb-4">Explore</h4>
            <div className="flex flex-col gap-3">
              {[
                { href: "/about", label: "About" },
                { href: "/tours", label: "Tours" },
                { href: "/gallery", label: "Gallery" },
                { href: "/why-tour-tugo", label: "Why Tugi" },
                { href: "/book", label: "Book Now" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sand-400 hover:text-sand-200 text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sand-300 text-xs uppercase tracking-[0.2em] mb-4">Connect</h4>
            <div className="flex flex-col gap-3 text-sm text-sand-400">
              <a
                href="mailto:tuklobin@gmail.com"
                className="inline-flex items-center gap-2 hover:text-sand-200 transition-colors"
              >
                <Mail size={16} strokeWidth={1.75} className="text-sand-500" />
                tuklobin@gmail.com
              </a>
              <a
                href="https://www.instagram.com/tugi.mongolia/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tugi on Instagram"
                className="inline-flex items-center gap-2 hover:text-sand-200 transition-colors"
              >
                <Instagram size={16} strokeWidth={1.75} className="text-sand-500" />
                @tugi.mongolia
              </a>
              <a
                href="https://wa.me/66818910766"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message Tugi on WhatsApp"
                className="inline-flex items-center gap-2 hover:text-sand-200 transition-colors"
              >
                <MessageCircle size={16} strokeWidth={1.75} className="text-sand-500" />
                WhatsApp · +66 81 891 0766
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-sand-900/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4 text-xs text-sand-500">
            <span>© 2026 Wild Mongolia with Tugi.</span>
            <Link href="/privacy" className="hover:text-sand-200 transition-colors">
              Privacy &amp; Terms
            </Link>
          </div>
          <p className="text-sand-600 text-xs italic">
            Built by{" "}
            <a
              href="https://www.instagram.com/tugi.mongolia/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sand-300 transition-colors"
            >
              Tugi
            </a>
            {" "}&amp;{" "}
            <a
              href="https://claude.com/claude-code"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sand-300 transition-colors"
            >
              Claude
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
