import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-white/70 mb-6">Pagina niet gevonden</p>
        <Link
          href="/"
          className="text-primary underline underline-offset-4 hover:opacity-80"
        >
          Terug naar home
        </Link>
      </div>
    </div>
  );
}
