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

const heroImg =
  "https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&w=1600";
const inspectieImg =
  "https://images.pexels.com/photos/14319099/pexels-photo-14319099.jpeg?auto=compress&cs=tinysrgb&w=1200";
const storingenImg =
  "https://images.pexels.com/photos/17924298/pexels-photo-17924298.jpeg?auto=compress&cs=tinysrgb&w=1200";
const aircoImg =
  "https://images.pexels.com/photos/7347538/pexels-photo-7347538.jpeg?auto=compress&cs=tinysrgb&w=1200";

const services = [
  {
    icon: Zap,
    title: "Elektra",
    desc: "Groepenkasten, laadpalen, elektrisch koken, krachtstroom en complete installaties voor woning en bedrijf.",
    points: ["Groepenkasten & extra groepen", "Laadpalen thuis & op werk", "Krachtstroom & besturingstechniek"],
    img: "https://images.pexels.com/photos/28950842/pexels-photo-28950842.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: ShieldCheck,
    title: "Inspecties",
    desc: "NEN 3140, NEN 1010, NTA 8220 en InstallQ-erkende inspecties met onafhankelijke rapportage.",
    points: ["NEN 3140 & NEN 1010", "NTA 8220 brandrisico", "InstallQ-erkend"],
    img: "https://images.pexels.com/photos/6349399/pexels-photo-6349399.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: Wrench,
    title: "Storingen",
    desc: "Storingen snel en veilig verholpen. Direct bereikbaar voor urgente problemen.",
    points: ["Snelle storingsdienst", "Herstel op locatie", "Oorzaakanalyse"],
    img: "https://images.pexels.com/photos/32497160/pexels-photo-32497160.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: Fan,
    title: "Airco",
    desc: "Split- en monoblock airco-installaties voor comfort in woning en bedrijfspand.",
    points: ["Split- & monoblocksystemen", "Complete installatie", "Advies & onderhoud"],
    img: "https://images.pexels.com/photos/3964341/pexels-photo-3964341.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const elektraTopics = [
  {
    title: "Groepenkasten",
    desc: "Aanleg, uitbreiding en vernieuwing van groepenkasten conform NEN 1010. Incl. aardlekschakelaars en overstromingsbeveiliging.",
    img: "https://images.pexels.com/photos/28950842/pexels-photo-28950842.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Laadpalen",
    desc: "Slimme, veilige laadoplossingen voor thuis en op het werk. Persoonlijk advies en professionele installatie.",
    img: "https://images.pexels.com/photos/27355831/pexels-photo-27355831.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Elektrisch koken",
    desc: "Van gas naar inductie: extra groep aanleggen, krachtstroom aansluiten en veilig opleveren.",
    img: "https://images.pexels.com/photos/7045353/pexels-photo-7045353.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Krachtstroom",
    desc: "Aansluiten van zware verbruikers: drogers, ovens, laadpalen en industriële apparatuur.",
    img: "https://images.pexels.com/photos/13172736/pexels-photo-13172736.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "PLC & besturing",
    desc: "Programmeerbare logische besturingen voor slimme schakelingen, verlichting en procesautomatisering.",
    img: "https://images.pexels.com/photos/28265032/pexels-photo-28265032.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Thuisbatterij & beveiliging",
    desc: "Advies over back-upgroepen, noodstroomvoorziening en aanpassing van de meterkast.",
    img: "https://images.pexels.com/photos/5966513/pexels-photo-5966513.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

function ElektraAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="grid md:grid-cols-2 gap-3 mt-8">
      {elektraTopics.map((topic, i) => (
        <div
          key={topic.title}
          className="border border-border rounded bg-secondary/50 overflow-hidden"
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
            <div className="px-5 pb-5">
              <img
                src={topic.img}
                alt={topic.title}
                loading="lazy"
                className="w-full h-40 object-cover rounded mb-3"
              />
              <p className="text-sm text-muted-foreground">{topic.desc}</p>
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
      {/* Hero met foto */}
      <section className="relative bg-black overflow-hidden min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Elektricien aan het werk"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>
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

      {/* Diensten met foto's */}
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
                className="border border-border rounded bg-card overflow-hidden hover:border-primary/50 transition-colors group"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={svc.img}
                    alt={svc.title}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center justify-center w-10 h-10 rounded bg-primary">
                    <svc.icon className="w-5 h-5 text-black" />
                  </div>
                </div>
                <div className="p-5">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Elektra uitklapbaar met foto's */}
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

      {/* Inspecties met foto */}
      <section id="inspecties" className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-block bg-primary text-black text-sm font-semibold px-3 py-1 rounded mb-4">
                InstallQ-erkend
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Erkende elektrische inspecties
              </h2>
              <p className="mt-3 text-muted-foreground max-w-xl">
                Onafhankelijke inspecties conform NEN 3140, NEN 1010, NTA 8220 en NEN 1078.
                Rapportage met meetwaarden en concrete hersteladviezen.
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                {inspectieNormen.map((norm) => (
                  <div key={norm.code} className="border border-border rounded bg-card p-4">
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
            <div className="relative h-72 lg:h-96 rounded overflow-hidden">
              <img
                src={inspectieImg}
                alt="Elektrische inspectie met multimeter"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Storingen met foto */}
      <section id="storingen" className="py-20 bg-card">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="relative h-72 lg:h-96 rounded overflow-hidden order-first lg:order-last">
              <img
                src={storingenImg}
                alt="Elektricien lost storing op"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Storingen en herstel
              </h2>
              <p className="mt-3 text-muted-foreground">
                Storing herkend? Wij komen snel ter plaatse en verhelpen het veilig.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  "Groepenkast schakelt continual uit",
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
          </div>
        </div>
      </section>

      {/* Airco met foto */}
      <section id="airco" className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
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
            <div className="relative h-72 lg:h-96 rounded overflow-hidden">
              <img
                src={aircoImg}
                alt="Airco monteur bij buitenunit"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
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
