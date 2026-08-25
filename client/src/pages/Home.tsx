import { Link } from "wouter";
import {
  Zap,
  Wrench,
  ShieldCheck,
  Fan,
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { CONTACT } from "@/components/PVH";
import DontPressButton from "@/components/DontPressButton";

const services = [
  {
    icon: Zap,
    title: "Elektra",
    desc: "Groepenkasten, laadpalen, elektrisch koken, krachtstroom en complete installaties voor woning en bedrijf.",
    points: ["Groepenkasten & extra groepen", "Laadpalen thuis & op werk", "Krachtstroom & besturingstechniek"],
  },
  {
    icon: ShieldCheck,
    title: "Inspecties",
    desc: "NEN 3140, NEN 1010, NTA 8220 en InstallQ-erkende inspecties met onafhankelijke rapportage.",
    points: ["NEN 3140 & NEN 1010", "NTA 8220 brandrisico", "InstallQ-erkend"],
  },
  {
    icon: Wrench,
    title: "Storingen",
    desc: "Storingen snel en veilig verholpen. Direct bereikbaar voor urgente problemen.",
    points: ["Snelle storingsdienst", "Herstel op locatie", "Oorzaakanalyse"],
  },
  {
    icon: Fan,
    title: "Airco",
    desc: "Split- en monoblock airco-installaties voor comfort in woning en bedrijfspand.",
    points: ["Split- & monoblocksystemen", "Complete installatie", "Advies & onderhoud"],
  },
];

const elektraTopics = [
  {
    title: "Groepenkasten",
    desc: "Aanleg, uitbreiding en vernieuwing van groepenkasten conform NEN 1010. Incl. aardlekschakelaars en overstromingsbeveiliging.",
  },
  {
    title: "Laadpalen",
    desc: "Slimme, veilige laadoplossingen voor thuis en op het werk. Persoonlijk advies en professionele installatie.",
  },
  {
    title: "Elektrisch koken",
    desc: "Van gas naar inductie: extra groep aanleggen, krachtstroom aansluiten en veilig opleveren.",
  },
  {
    title: "Krachtstroom",
    desc: "Aansluiten van zware verbruikers: drogers, ovens, laadpalen en industriele apparatuur.",
  },
  {
    title: "PLC & besturing",
    desc: "Programmeerbare logische besturingen voor slimme schakelingen, verlichting en procesautomatisering.",
  },
  {
    title: "Thuisbatterij & back-up",
    desc: "Advies over back-upgroepen, noodstroomvoorziening en aanpassing van de meterkast.",
  },
];

function ElektraAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="grid md:grid-cols-2 gap-3 mt-8">
      {elektraTopics.map((topic, i) => (
        <div
          key={topic.title}
          className="border border-border rounded bg-secondary/50"
        >
          <button
            className="w-full flex items-center justify-between px-5 py-4 text-left"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className="font-semibold text-white">{topic.title}</span>
            <ChevronDown
              className={`w-5 h-5 text-primary transition-transform ${
                openIndex === i ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === i && (
            <div className="px-5 pb-4 text-sm text-muted-foreground">
              {topic.desc}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

const inspectieNormen = [
  { code: "NEN 1010", desc: "Opleveringsinspectie van nieuwe of aangepaste installaties." },
  { code: "NEN 3140", desc: "Veilig gebruik en beheer van bestaande laagspanningsinstallaties." },
  { code: "NTA 8220", desc: "Beoordeling van elektrisch brandrisico, incl. thermografie." },
  { code: "NEN 1078", desc: "Gasinstallatie-inspectie, o.a. bij woningsplitsing." },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative bg-black overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 50%, rgba(57,201,0,0.15) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(57,201,0,0.08) 0%, transparent 40%)",
          }}
        />
        <div className="container relative py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="inline-block bg-primary/15 text-primary text-sm font-semibold px-3 py-1 rounded mb-4">
              Installatie &middot; Inspectie &middot; Herstel in één hand
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight">
              Van groepenkast tot inspectie — <span className="text-primary">één vakman</span>, één aanspreekpunt
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-xl">
              PVH Elektrotechniek verzorgt alles op het gebied van elektra: van
              installatie en onderhoud tot storingsdienst en inspectie. Vakwerk
              waarop u kunt vertrouwen.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center gap-2 bg-primary text-black font-display font-bold text-lg px-6 py-3 rounded hover:brightness-110 transition-all"
              >
                <Phone className="w-5 h-5" />
                Bel direct
              </a>
              <a
                href={CONTACT.whatsappHref}
                className="inline-flex items-center gap-2 border border-primary/50 text-primary font-semibold px-6 py-3 rounded hover:bg-primary/10 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Diensten */}
      <section id="diensten" className="py-20 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Onze diensten</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Van kleine reparaties tot complete installaties — wij denken met u mee.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="border border-border rounded bg-card p-6 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded bg-primary/15 text-primary mb-4">
                  <svc.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-white">{svc.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {svc.desc}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {svc.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm text-white/70">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Elektra uitklapbaar */}
      <section id="elektra" className="py-20 bg-card">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Elektra voor wonen en werken
          </h2>
          <p className="mt-3 text-muted-foreground">
            Klik op een onderwerp voor uitleg. Van groepenkast tot besturing — alles door één vakman.
          </p>
          <ElektraAccordion />
        </div>
      </section>

      {/* Inspecties */}
      <section id="inspecties" className="py-20 bg-background">
        <div className="container max-w-4xl">
          <div className="inline-block bg-primary text-black text-sm font-semibold px-3 py-1 rounded mb-4">
            InstallQ-erkend
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Erkende elektrische inspecties
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Onafhankelijke inspecties conform NEN 3140, NEN 1010, NTA 8220 en NEN 1078.
            Rapportage met meetwaarden en concrete hersteladviezen.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {inspectieNormen.map((norm) => (
              <div key={norm.code} className="border border-border rounded bg-card p-5">
                <h3 className="font-display font-bold text-lg text-primary">{norm.code}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{norm.desc}</p>
              </div>
            ))}
          </div>
          <Link
            href="/inspecties"
            className="inline-flex items-center gap-2 mt-6 text-primary font-semibold hover:underline"
          >
            Bekijk alle inspectieonderwerpen →
          </Link>
        </div>
      </section>

      {/* Storingen */}
      <section id="storingen" className="py-20 bg-card">
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Storingen en herstel
          </h2>
          <p className="mt-3 text-muted-foreground">
            Storing herkend? Wij komen snel ter plaatse en verhelpen het veilig.
          </p>
          <div className="mt-6 space-y-3">
            {[
              "Groepenkast schakelt continually uit",
              "Defecte wandcontactdoos of schakelaar",
              "Geen spanning na kortsluiting",
              "Aardlekschakelaar blijft uitvallen",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-white/80">
                <Zap className="w-5 h-5 text-primary shrink-0" />
                {item}
              </div>
            ))}
          </div>
          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center gap-2 mt-8 bg-primary text-black font-display font-bold px-6 py-3 rounded hover:brightness-110 transition-all"
          >
            <Phone className="w-5 h-5" />
            Bel voor storingen
          </a>
        </div>
      </section>

      {/* Airco */}
      <section id="airco" className="py-20 bg-background">
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Koelen, verwarmen
          </h2>
          <p className="mt-3 text-muted-foreground">
            Split- en monoblock airco-installaties voor comfort het hele jaar door.
            Wij verzorgen advies, installatie en onderhoud.
          </p>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="border border-border rounded bg-card p-5">
              <h3 className="font-semibold text-white">Split-systemen</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Stille binnenunit met buitenunit. Ideaal voor woningen en kantoorruimtes.
              </p>
            </div>
            <div className="border border-border rounded bg-card p-5">
              <h3 className="font-semibold text-white">Monoblock</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Compacte all-in-one oplossing. Snelle installatie zonder buitenunit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NIET DRUKKEN */}
      <DontPressButton />

      {/* Contact */}
      <section id="contact" className="py-20 bg-card">
        <div className="container max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Contact</h2>
          <p className="mt-3 text-muted-foreground">
            Heeft u een vraag of wilt u een afspraak maken? Neem gerust contact op.
          </p>
          <div className="mt-10 grid sm:grid-cols-3 gap-4">
            <a
              href={CONTACT.phoneHref}
              className="flex flex-col items-center gap-2 p-6 rounded border border-border bg-background hover:border-primary/50 transition-colors"
            >
              <Phone className="w-6 h-6 text-primary" />
              <span className="text-sm text-muted-foreground">Bel ons</span>
              <span className="font-semibold text-white text-sm">{CONTACT.phone}</span>
            </a>
            <a
              href={CONTACT.emailHref}
              className="flex flex-col items-center gap-2 p-6 rounded border border-border bg-background hover:border-primary/50 transition-colors"
            >
              <Mail className="w-6 h-6 text-primary" />
              <span className="text-sm text-muted-foreground">E-mail</span>
              <span className="font-semibold text-white text-sm break-all">{CONTACT.email}</span>
            </a>
            <a
              href={CONTACT.whatsappHref}
              className="flex flex-col items-center gap-2 p-6 rounded border border-border bg-background hover:border-primary/50 transition-colors"
            >
              <MessageCircle className="w-6 h-6 text-primary" />
              <span className="text-sm text-muted-foreground">WhatsApp</span>
              <span className="font-semibold text-white text-sm">Stuur een bericht</span>
            </a>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-muted-foreground text-sm">
            <MapPin className="w-4 h-4" />
            Werkgebied: Nederland
          </div>
        </div>
      </section>
    </div>
  );
}
