import { CircleCheck as CheckCircle2, ExternalLink, Phone } from "lucide-react";
import { CONTACT } from "@/components/PVH";

const inspectieOnderwerpen = [
  {
    titel: "NEN 1010 — Opleveringsinspectie",
    desc: "Inspectie van nieuwe of aangepaste elektrotechnische installaties. Visuele controle, metingen en beproeving conform NEN 1010.",
    punten: ["Isolatieweerstand", "Aarding & potentiaalvereffening", "Beveiligingsautomaten", "Aansluitingen & bedrading"],
    img: "https://images.pexels.com/photos/28950842/pexels-photo-28950842.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    titel: "NEN 3140 — Periodieke keuring",
    desc: "Veilig gebruik en beheer van bestaande laagspanningsinstallaties. Periodieke inspectie met rapportage van bevindingen en meetwaarden.",
    punten: ["Visuele controle", "Metingen & beproeving", "Rapportage met hersteladvies", "Geschikt voor VvE & vastgoed"],
    img: "https://images.pexels.com/photos/14319099/pexels-photo-14319099.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    titel: "NTA 8220 — Brandrisico",
    desc: "Beoordeling van elektrisch brandrisico. Scope 10 volgens de InstallQ-methode. Incl. thermografie waar nodig.",
    punten: ["Overbelasting & verbindingen", "Componenten & verdeelinrichtingen", "Thermografie", "Vaste installaties & machines"],
    img: "https://images.pexels.com/photos/13172736/pexels-photo-13172736.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    titel: "NEN 1078 — Gasinstallatie",
    desc: "Inspectie van gasinstallaties, o.a. bij woningsplitsing. Vaak gecombineerd met NEN 1010 en NEN 3140.",
    punten: ["Gasinstallatie conform NEN 1078", "Bruikbaar voor vergunningtraject", "Onafhankelijke rapportage"],
    img: "https://images.pexels.com/photos/32497160/pexels-photo-32497160.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    titel: "Keuring arbeidsmiddelen",
    desc: "Periodieke keuring van elektrisch gereedschap, machines, kabelhaspels, kantoor- en keukenapparatuur, besturingsinstallaties, ladders en rolsteigers.",
    punten: ["Elektrisch gereedschap", "Machines & kabelhaspels", "Kantoor- & keukenapparatuur", "Ladders, trappen & rolsteigers"],
    img: "https://images.pexels.com/photos/5090652/pexels-photo-5090652.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    titel: "Woningsplitsing",
    desc: "Inspecties voor woningsplitsing combineren NEN 1010 (elektra), NEN 3140 (bestaand gebruik) en NEN 1078 (gas). Rapportage bruikbaar voor gemeentelijke vergunningtrajecten.",
    punten: ["NEN 1010 + NEN 3140 + NEN 1078", "Vastlegging van afwijkingen", "Concrete hersteladviezen"],
    img: "https://images.pexels.com/photos/31701039/pexels-photo-31701039.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const erkenningsnummers = [
  { nummer: "13445", rol: "Inspectie elektrische installaties" },
  { nummer: "52365", rol: "Inspectie elektrische installaties" },
  {
    nummer: "81258",
    rol: "Elektrotechnische installaties, inclusief beoordeling van risico's op brand.",
  },
];

export default function Inspecties() {
  return (
    <div className="flex flex-col">
      <section className="bg-black py-16 md:py-20 border-b border-primary/20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/14319099/pexels-photo-14319099.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Elektrische inspectie"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
        </div>
        <div className="container relative">
          <div className="inline-block bg-primary text-black text-sm font-semibold px-3 py-1 rounded mb-4">
            InstallQ-erkend
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Elektrische inspecties
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl">
            Onafhankelijke inspecties conform NEN 3140, NEN 1010, NTA 8220 en NEN 1078.
            Rapportage met meetwaarden en concrete hersteladviezen.
          </p>
        </div>
      </section>

      {/* InstallQ-erkenning */}
      <section className="py-16 bg-card">
        <div className="container max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            InstallQ-erkenning
          </h2>
          <p className="mt-3 text-muted-foreground">
            PVH Elektrotechniek is InstallQ-erkend voor de volgende inspectiewerkzaamheden:
          </p>
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            {erkenningsnummers.map((erk) => (
              <div
                key={erk.nummer}
                className="border border-border rounded bg-background p-5"
              >
                <div className="font-display font-bold text-2xl text-primary">
                  {erk.nummer}
                </div>
                <p className="mt-2 text-sm text-white/70">{erk.rol}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 p-5 border border-border rounded bg-background text-sm text-muted-foreground">
            <p>
              De InstallQ-voorwaarden en het erkenningsreglement zijn niet automatisch
              van toepassing op de overeenkomst tussen PVH en haar klanten. Zie de
              pagina{" "}
              <a href="/voorwaarden" className="text-primary hover:underline">
                Voorwaarden &amp; documenten
              </a>{" "}
              voor het onderscheid tussen PVH-klantvoorwaarden en InstallQ-documenten.
            </p>
          </div>
        </div>
      </section>

      {/* Inspectieonderwerpen met foto's */}
      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Inspectieonderwerpen
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {inspectieOnderwerpen.map((item) => (
              <div
                key={item.titel}
                className="border border-border rounded bg-card overflow-hidden hover:border-primary/50 transition-colors"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.titel}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white">{item.titel}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                  <ul className="mt-4 space-y-1.5">
                    {item.punten.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-sm text-white/70">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2 bg-primary text-black font-display font-bold px-6 py-3 rounded hover:brightness-110 transition-all"
            >
              <Phone className="w-5 h-5" />
              Bel voor een inspectie
            </a>
            <a
              href="https://installq.nl/voorwaarden"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-primary/50 text-primary font-semibold px-6 py-3 rounded hover:bg-primary/10 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              InstallQ-voorwaarden
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
