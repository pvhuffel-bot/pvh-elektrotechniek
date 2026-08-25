import { Phone } from "lucide-react";
import { CONTACT } from "@/components/PVH";

const projecten = [
  {
    titel: "Groepenkast vernieuwing appartementencomplex",
    type: "Groepenkast",
    werkzaamheden: "Volledige vernieuwing van 12 groepenkasten, incl. aardlekschakelaars en overstromingsbeveiliging.",
    bijzonderheden: "Uitgevoerd tijdens bewoning, minimaal overlast.",
    img: "https://images.pexels.com/photos/28950842/pexels-photo-28950842.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    titel: "Laadpaal installatie bedrijfspand",
    type: "Laadpalen",
    werkzaamheden: "Plaatsing van 4 laadpalen met dynamische laadbelasting en back-office koppeling.",
    bijzonderheden: "Subsidieadvies en aanvraag meegenomen.",
    img: "https://images.pexels.com/photos/27355831/pexels-photo-27355831.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    titel: "NEN 3140 keuring VvE",
    type: "Inspectie",
    werkzaamheden: "Periodieke keuring van alle elektrische installaties in VvE met 36 woningen.",
    bijzonderheden: "Rapportage met prioritering van herstelwerkzaamheden.",
    img: "https://images.pexels.com/photos/14319099/pexels-photo-14319099.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    titel: "Van gas naar inductie — complete keukenombouw",
    type: "Elektrisch koken",
    werkzaamheden: "Extra groep aanleggen, krachtstroom aansluiten, inductiekookplaat aansluiten.",
    bijzonderheden: "Klant kon direct koken op inductie.",
    img: "https://images.pexels.com/photos/7045353/pexels-photo-7045353.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    titel: "Airco-installatie woonhuis",
    type: "Airco",
    werkzaamheden: "Plaatsing van split-systeem in woonkamer en slaapkamer.",
    bijzonderheden: "Stille installatie, esthetisch weggewerkt leidingwerk.",
    img: "https://images.pexels.com/photos/7347538/pexels-photo-7347538.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    titel: "NTA 8220 brandrisicoinspectie productiebedrijf",
    type: "Inspectie",
    werkzaamheden: "Thermografisch onderzoek en beoordeling van verdeelinrichtingen en machines.",
    bijzonderheden: "Vroege detectie van overbelasting voorkwam uitval.",
    img: "https://images.pexels.com/photos/13172736/pexels-photo-13172736.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export default function Projecten() {
  return (
    <div className="flex flex-col">
      <section className="bg-black py-16 md:py-20 border-b border-primary/20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/28265032/pexels-photo-28265032.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Elektrische installaties"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
        </div>
        <div className="container relative">
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
        <div className="container max-w-5xl">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projecten.map((proj) => (
              <div
                key={proj.titel}
                className="border border-border rounded bg-card overflow-hidden hover:border-primary/50 transition-colors"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={proj.img}
                    alt={proj.titel}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  <span className="absolute top-3 right-3 inline-block bg-primary text-black text-xs font-semibold px-3 py-1 rounded">
                    {proj.type}
                  </span>
                </div>
                <div className="p-5">
                  <h2 className="text-lg font-semibold text-white">{proj.titel}</h2>
                  <p className="mt-2 text-sm text-white/70">
                    <span className="text-muted-foreground">Werkzaamheden: </span>
                    {proj.werkzaamheden}
                  </p>
                  <p className="mt-2 text-sm text-white/70">
                    <span className="text-muted-foreground">Bijzonderheden: </span>
                    {proj.bijzonderheden}
                  </p>
                </div>
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
