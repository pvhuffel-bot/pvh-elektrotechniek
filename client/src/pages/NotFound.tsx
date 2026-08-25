import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Page Not Found
        </p>
        <Link
          href="/"
          className="text-primary underline underline-offset-4 hover:opacity-80"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
