import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-night-950 border-t border-sand-900/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl tracking-[0.2em] text-sand-200 mb-4">TUGO</h3>
            <p className="text-sand-400 text-sm leading-relaxed max-w-xs">
              Small-group adventure tours across Mongolia&apos;s wild landscapes. Not a tour company — a side quest worth taking.
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
                { href: "/why-tour-tugo", label: "Why TUGO" },
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
              <a href="mailto:hello@tugo.mn" className="hover:text-sand-200 transition-colors">
                hello@tugo.mn
              </a>
              <a href="https://instagram.com/tugomongolia" target="_blank" rel="noopener noreferrer" className="hover:text-sand-200 transition-colors">
                @tugomongolia
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-sand-900/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sand-500 text-xs">© 2026 TUGO Mongolia. All rights reserved.</p>
          <p className="text-sand-600 text-xs italic">Designed with adventure in mind.</p>
        </div>
      </div>
    </footer>
  );
}
