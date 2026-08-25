import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { Logo, CONTACT } from "./PVH";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/inspecties", label: "Inspecties" },
  { href: "/projecten", label: "Projecten" },
  { href: "/voorwaarden", label: "Voorwaarden" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-primary/30">
      <div className="container flex items-center justify-between py-3">
        <Link href="/">
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                location === link.href
                  ? "text-primary"
                  : "text-white/70 hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center gap-2 bg-primary text-black font-semibold px-4 py-2 rounded text-sm hover:brightness-110 transition-all"
          >
            <Phone className="w-4 h-4" />
            {CONTACT.phone}
          </a>
        </nav>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black border-t border-primary/20">
          <nav className="container flex flex-col py-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-sm font-medium transition-colors ${
                  location === link.href
                    ? "text-primary"
                    : "text-white/70 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2 bg-primary text-black font-semibold px-4 py-2 rounded text-sm justify-center"
            >
              <Phone className="w-4 h-4" />
              {CONTACT.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
