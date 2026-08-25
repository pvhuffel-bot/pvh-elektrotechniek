import { FileText, Download, ExternalLink, ShieldCheck } from "lucide-react";

const installqDocs = [
  {
    titel: "InstallQ-voorwaarden",
    desc: "Voorwaarden voor gebruik van de InstallQ-website. Dit is geen vervanging van de PVH-klantvoorwaarden.",
    url: "https://installq.nl/voorwaarden",
  },
  {
    titel: "Reglement Erkenningsregelingen InstallQ (20-09-2023)",
    desc: "Officieel kwaliteits- en erkenningsdocument. Regelt de verhouding en verplichtingen rond InstallQ-erkenningsregelingen.",
    url: "https://installq.nl/files/documenten/Reglement-Erkenningsregelingen-InstallQ_20-09-2023.pdf",
  },
];

export default function Voorwaarden() {
  return (
    <div className="flex flex-col">
      <section className="bg-black py-16 md:py-20 border-b border-primary/20">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Voorwaarden &amp; documenten
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl">
            Hier vindt u onze eigen algemene voorwaarden en de officiële
            InstallQ-documenten.
          </p>
        </div>
      </section>

      {/* PVH eigen voorwaarden */}
      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          <div className="border border-primary/40 rounded bg-card p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-12 h-12 rounded bg-primary/15 text-primary">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Algemene Voorwaarden PVH Elektrotechniek
                </h2>
                <p className="text-sm text-muted-foreground">
                  Versie 1.0 &middot; 25 augustus 2026 &middot; 8 pagina's
                </p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Onze eigen algemene voorwaarden zijn beschikbaar als PDF. U kunt het
              document bekijken of downloaden voor de volledige tekst van onze
              leverings- en betalingsvoorwaarden.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="/Algemene_Voorwaarden_PVH_Elektrotechniek_v4.3.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-black font-semibold px-5 py-2.5 rounded hover:brightness-110 transition-all"
              >
                <FileText className="w-4 h-4" />
                Bekijken
              </a>
              <a
                href="/Algemene_Voorwaarden_PVH_Elektrotechniek_v4.3.pdf"
                download
                className="inline-flex items-center gap-2 border border-primary/50 text-primary font-semibold px-5 py-2.5 rounded hover:bg-primary/10 transition-all"
              >
                <Download className="w-4 h-4" />
                PDF downloaden
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* InstallQ documenten */}
      <section className="py-16 bg-card">
        <div className="container max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="w-8 h-8 text-primary" />
            <h2 className="text-2xl font-bold text-white">
              InstallQ-voorwaarden &amp; erkenningsdocumenten
            </h2>
          </div>
          <p className="text-muted-foreground text-sm mb-6">
            De onderstaande documenten zijn externe InstallQ-bronnen. Zij regelen de
            InstallQ-erkenningsregeling en het gebruik van de InstallQ-website. Ze
            zijn niet automatisch van toepassing op de overeenkomst tussen PVH en
            haar klanten — die afspraken worden bepaald door de offerte,
            opdrachtbevestiging en de PVH-algemene voorwaarden hierboven.
          </p>
          <div className="grid gap-4">
            {installqDocs.map((doc) => (
              <div
                key={doc.titel}
                className="border border-border rounded bg-background p-5"
              >
                <h3 className="font-semibold text-white">{doc.titel}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{doc.desc}</p>
                <a
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 text-primary text-sm font-semibold hover:underline"
                >
                  <ExternalLink className="w-4 h-4" />
                  Naar externe bron
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
