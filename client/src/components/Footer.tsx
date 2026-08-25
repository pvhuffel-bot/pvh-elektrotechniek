import { Link } from "wouter";
import { Phone, Mail, Zap } from "lucide-react";
import { CONTACT } from "./PVH";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-primary/30 py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-9 h-9 rounded bg-primary">
              <Zap className="w-5 h-5 text-black" fill="black" />
            </div>
            <span className="font-display font-bold text-lg tracking-wide text-white">
              PVH<span className="text-primary"> Elektrotechniek</span>
            </span>
          </div>

          <nav className="flex flex-col gap-2 text-sm">
            <Link href="/" className="text-white/60 hover:text-primary">Home</Link>
            <Link href="/inspecties" className="text-white/60 hover:text-primary">Inspecties</Link>
            <Link href="/projecten" className="text-white/60 hover:text-primary">Projecten</Link>
            <Link href="/voorwaarden" className="text-white/60 hover:text-primary">Voorwaarden</Link>
          </nav>

          <div className="flex flex-col gap-2 text-sm">
            <a href={CONTACT.phoneHref} className="flex items-center gap-2 text-white/60 hover:text-primary">
              <Phone className="w-4 h-4" /> {CONTACT.phone}
            </a>
            <a href={CONTACT.emailHref} className="flex items-center gap-2 text-white/60 hover:text-primary">
              <Mail className="w-4 h-4" /> {CONTACT.email}
            </a>
            <span className="text-white/40">{CONTACT.website}</span>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-center text-xs text-white/40">
          &copy; {new Date().getFullYear()} PVH Elektrotechniek — Alle rechten voorbehouden
        </div>
      </div>
    </footer>
  );
}
