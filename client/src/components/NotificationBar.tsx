import { TriangleAlert as AlertTriangle } from "lucide-react";

export default function NotificationBar() {
  return (
    <div className="bg-[#FFD41A] text-black px-4 py-2 text-center text-sm font-semibold">
      <div className="container flex items-center justify-center gap-2">
        <AlertTriangle className="w-4 h-4 shrink-0" />
        <span>Storing of spoedeisend elektra? Bel direct 06 57 33 48 71</span>
      </div>
    </div>
  );
}
