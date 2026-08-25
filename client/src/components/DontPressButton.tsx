import { useState, useEffect, useRef } from "react";
import { OctagonAlert as AlertOctagon } from "lucide-react";

export default function DontPressButton() {
  const [pressed, setPressed] = useState(false);
  const [shaking, setShaking] = useState(false);
  const [flashing, setFlashing] = useState(false);
  const audioRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    if (pressed) {
      setShaking(true);
      setFlashing(true);
      const timer = setTimeout(() => {
        setPressed(false);
        setShaking(false);
        setFlashing(false);
      }, 1800);
      return () => clearTimeout(timer);
    }
  }, [pressed]);

  const playBuzz = () => {
    try {
      if (!audioRef.current) {
        audioRef.current = new AudioContext();
      }
      const ctx = audioRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(60, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(20, ctx.currentTime + 0.5);
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.5);
    } catch {
      /* audio not available */
    }
  };

  const handleClick = () => {
    if (pressed) return;
    setPressed(true);
    playBuzz();
  };

  return (
    <section className={`py-16 bg-card relative overflow-hidden ${shaking ? "screen-shake" : ""}`}>
      {flashing && (
        <div className="absolute inset-0 bg-white pointer-events-none electric-flash z-10" />
      )}
      <div className="container text-center relative z-20">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-destructive/20 text-destructive mb-4">
          <AlertOctagon className="w-7 h-7" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Let op: onder spanning
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-8">
          Deze knop is uitsluitend voorDemonstratiedoeleinden. Pressing this will
          not turn off the power. We warned you.
        </p>
        <button
          onClick={handleClick}
          disabled={pressed}
          className="inline-flex items-center gap-3 bg-destructive text-white font-display font-bold text-lg px-10 py-4 rounded transition-all hover:brightness-110 active:scale-95 disabled:opacity-70"
        >
          {pressed ? "TE LAAT…" : "NIET DRUKKEN"}
        </button>
      </div>
    </section>
  );
}
