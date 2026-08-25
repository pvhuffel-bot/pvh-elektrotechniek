import { useEffect } from "react";
import { Route, Switch, Redirect, useLocation } from "wouter";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotificationBar from "./components/NotificationBar";
import Home from "./pages/Home";
import Inspecties from "./pages/Inspecties";
import Projecten from "./pages/Projecten";
import Voorwaarden from "./pages/Voorwaarden";
import NotFound from "./pages/NotFound";

const legacyRedirects: Record<string, string> = {
  "/diensten": "/#diensten",
  "/elektra": "/#elektra",
  "/airco": "/#airco",
  "/werkwijze": "/",
  "/contact": "/#contact",
  "/247-storingsdienst": "/#storingen",
  "/3357/0/247-storingsdienst": "/#storingen",
  "/3357/0/van-koken-op-gas-naar-inductie-": "/#elektra",
  "/algemene-voorwaarden": "/voorwaarden",
  "/3357/0/algemene-voorwaarden": "/voorwaarden",
  "/installq-documenten": "/voorwaarden",
};

function LegacyRedirect({ to }: { to: string }) {
  useEffect(() => {
    if (to.startsWith("/#")) {
      window.location.href = to;
    } else {
      window.location.replace(to);
    }
  }, [to]);
  return null;
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NotificationBar />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/inspecties" component={Inspecties} />
        <Route path="/projecten" component={Projecten} />
        <Route path="/voorwaarden" component={Voorwaarden} />

        {Object.entries(legacyRedirects).map(([from, to]) => (
          <Route key={from} path={from}>
            <LegacyRedirect to={to} />
          </Route>
        ))}

        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
