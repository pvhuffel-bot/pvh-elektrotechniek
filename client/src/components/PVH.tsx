import { Zap } from "lucide-react";

export const CONTACT = {
  phone: "06 57 33 48 71",
  phoneHref: "tel:+31657334871",
  email: "info@pvh-elektrotechniek.nl",
  emailHref: "mailto:info@pvh-elektrotechniek.nl",
  whatsappHref: "https://wa.me/31657334871",
  website: "www.pvh-elektrotechniek.nl",
};

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex items-center justify-center w-9 h-9 rounded bg-primary">
        <Zap className="w-5 h-5 text-black" fill="black" />
      </div>
      <span className="font-display font-bold text-lg tracking-wide text-white">
        PVH<span className="text-primary"> Elektrotechniek</span>
      </span>
    </div>
  );
}
