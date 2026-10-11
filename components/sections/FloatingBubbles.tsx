"use client";
import { useMemo } from "react";

type Bubble = {
  id: number;
  left: string;
  size: number;
  duration: string;
  delay: string;
};

function seededRand(seed: number) {
  // simple deterministic pseudo-random so SSR & client match
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

export default function FloatingBubbles() {
  const bubbles = useMemo<Bubble[]>(() =>
    Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: `${(seededRand(i * 3) * 100).toFixed(2)}%`,
      size: 24 + Math.floor(seededRand(i * 7) * 56), // 24–80 px
      duration: `${(6 + seededRand(i * 11) * 10).toFixed(1)}s`,
      delay: `${(seededRand(i * 13) * 12).toFixed(1)}s`,
    })), []);

  return (
    <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden" aria-hidden="true">
      {bubbles.map((b) => (
        <img
          key={b.id}
          src="/sprites/suds.svg"
          width={b.size}
          height={b.size}
          alt=""
          className="absolute bottom-0 animate-bubble-float"
          style={{
            left: b.left,
            width: b.size,
            height: b.size,
            animationDuration: b.duration,
            animationDelay: b.delay,
          }}
        />
      ))}
    </div>
  );
}
