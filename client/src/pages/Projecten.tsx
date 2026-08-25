import { Phone } from "lucide-react";
import { CONTACT } from "@/components/PVH";

const projecten = [
  {
    titel: "Groepenkast vernieuwing appartementencomplex",
    type: "Groepenkast",
    werkzaamheden: "Volledige vernieuwing van 12 groepenkasten, incl. aardlekschakelaars en overstromingsbeveiliging.",
    bijzonderheden: "Uitgevoerd tijdens bewoning, minimaal overlast.",
  },
  {
    titel: "Laadpaal installatie bedrijfspand",
    type: "Laadpalen",
    werkzaamheden: "Plaatsing van 4 laadpalen met dynamische laadbelasting en back-office koppeling.",
    bijzonderheden: "Subsidieadvies en aanvraag meegenomen.",
  },
  {
    titel: "NEN 3140 keuring VvE",
    type: "Inspectie",
    werkzaamheden: "Periodieke keuring van alle elektrische installaties in VvE met 36 woningen.",
    bijzonderheden: "Rapportage met prioritering van herstelwerkzaamheden.",
  },
  {
    titel: "Van gas naar inductie — complete keukenombouw",
    type: "Elektrisch koken",
    werkzaamheden: "Extra groep aanleggen, krachtstroom aansluiten, inductiekookplaat aansluiten.",
    bijzonderheden: "Klant kon direct koken op inductie.",
  },
  {
    titel: "Airco-installatie woonhuis",
    type: "Airco",
    werkzaamheden: "Plaatsing van split-systeem in woonkamer en slaapkamer.",
    bijzonderheden: "Stille installatie, esthetisch weggewerkt leidingwerk.",
  },
  {
    titel: "NTA 8220 brandrisicoinspectie productiebedrijf",
    type: "Inspectie",
    werkzaamheden: "Thermografisch onderzoek en beoordeling van verdeelinrichtingen en machines.",
    bijzonderheden: "Vroege detectie van overbelasting voorkwam uitval.",
  },
];

export default function Projecten() {
  return (
    <div className="flex flex-col">
      <section className="bg-black py-16 md:py-20 border-b border-primary/20">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Projecten &amp; referenties
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl">
            Een greep uit onze werkzaamheden. Van groepenkast tot inspectie —
            alles door één vakman, één aanspreekpunt.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          <div className="grid gap-5">
            {projecten.map((proj) => (
              <div
                key={proj.titel}
                className="border border-border rounded bg-card p-6 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <h2 className="text-xl font-semibold text-white">{proj.titel}</h2>
                  <span className="inline-block bg-primary/15 text-primary text-xs font-semibold px-3 py-1 rounded shrink-0">
                    {proj.type}
                  </span>
                </div>
                <p className="mt-3 text-sm text-white/70">
                  <span className="text-muted-foreground">Werkzaamheden: </span>
                  {proj.werkzaamheden}
                </p>
                <p className="mt-2 text-sm text-white/70">
                  <span className="text-muted-foreground">Bijzonderheden: </span>
                  {proj.bijzonderheden}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2 bg-primary text-black font-display font-bold px-6 py-3 rounded hover:brightness-110 transition-all"
            >
              <Phone className="w-5 h-5" />
              Bespreek uw project
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
