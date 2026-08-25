import { Button } from "@/components/ui/button";
import { FileText, Download, Zap, ShieldCheck, Wrench, Phone, Mail, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="border-b border-border bg-white sticky top-0 z-50">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-primary-foreground">
              <Zap className="w-5 h-5" />
            </div>
            <span className="text-lg font-bold text-foreground">PVH Elektrotechniek</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <a href="#diensten" className="hover:text-foreground transition-colors">Diensten</a>
            <a href="#over" className="hover:text-foreground transition-colors">Over ons</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
            <a href="#voorwaarden" className="hover:text-foreground transition-colors">Voorwaarden</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        <div className="container py-20 md:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
              Professionele elektrotechniek voor particulier en bedrijf
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              PVH Elektrotechniek verzorgt alles op het gebied van elektra: van installatie
              en onderhoud tot storingsdienst en advies. Vakwerk waarop u kunt vertrouwen.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact">
                <Button size="lg">Neem contact op</Button>
              </a>
              <a href="#diensten">
                <Button size="lg" variant="outline">Onze diensten</Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Diensten */}
      <section id="diensten" className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center text-foreground">Onze diensten</h2>
          <p className="mt-3 text-center text-muted-foreground max-w-2xl mx-auto">
            Van kleine reparaties tot complete installaties — wij denken met u mee.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Installatie &amp; Onderhoud</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Complete elektro-installaties voor nieuwbouw en renovatie, inclusief periodiek onderhoud.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Storingsdienst</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Storingen snel en veilig verholpen, 24 uur bereikbaar voor urgente problemen.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Inspectie &amp; Certificering</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                NEN 3140 inspecties, periodieke keuringen en certificering van installaties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Over ons */}
      <section id="over" className="py-20 bg-muted/50">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-foreground">Over PVH Elektrotechniek</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
            Met jarenlange ervaring in de elektrotechniek staan wij voor kwaliteit,
            veiligheid en betrouwbaarheid. Onze vakmensen werken conform de laatste
            normen en voorschriften, zodat u altijd verzekerd bent van een veilige
            en professionele installatie.
          </p>
        </div>
      </section>

      {/* Algemene Voorwaarden */}
      <section id="voorwaarden" className="py-20">
        <div className="container max-w-3xl">
          <div className="rounded-2xl border border-border bg-card p-8 md:p-10 text-center">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mx-auto mb-6">
              <FileText className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">Algemene Voorwaarden</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Onze algemene voorwaarden zijn beschikbaar als PDF. Download het document
              hieronder voor de volledige tekst van onze leverings- en betalingsvoorwaarden.
            </p>
            <a href="/Algemene_Voorwaarden_PVH_Elektrotechniek_v4.3.pdf" download className="inline-block mt-6">
              <Button size="lg">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-muted/50">
        <div className="container max-w-2xl">
          <h2 className="text-3xl font-bold text-center text-foreground">Contact</h2>
          <p className="mt-3 text-center text-muted-foreground">
            Heeft u een vraag of wilt u een afspraak maken? Neem gerust contact op.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="flex flex-col items-center text-center gap-2 p-6 rounded-xl bg-card border border-border">
              <Phone className="w-6 h-6 text-primary" />
              <span className="text-sm text-muted-foreground">Telefoon</span>
              <span className="font-medium text-foreground">Bel ons</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2 p-6 rounded-xl bg-card border border-border">
              <Mail className="w-6 h-6 text-primary" />
              <span className="text-sm text-muted-foreground">E-mail</span>
              <span className="font-medium text-foreground">Mail ons</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2 p-6 rounded-xl bg-card border border-border">
              <MapPin className="w-6 h-6 text-primary" />
              <span className="text-sm text-muted-foreground">Locatie</span>
              <span className="font-medium text-foreground">Werkgebied</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-white py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-primary" />
            <span className="font-medium text-foreground">PVH Elektrotechniek</span>
          </div>
          <a href="#voorwaarden" className="hover:text-foreground transition-colors">
            Algemene Voorwaarden
          </a>
          <p>&copy; {new Date().getFullYear()} PVH Elektrotechniek</p>
        </div>
      </footer>
    </div>
  );
}
