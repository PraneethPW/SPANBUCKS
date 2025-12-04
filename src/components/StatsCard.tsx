// src/components/StatsCard.tsx
import { useRef, useEffect, useState } from "react";
import useCountUp from "../hooks/useCountUp";

interface StatCardProps {
  value: string; // e.g. "500+"
  label: string;
}

export default function StatCard({ value, label }: StatCardProps) {
  const endValue = parseInt(value.replace("+", ""), 10);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [start, setStart] = useState(false);

  // restart count every time card becomes visible
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // trigger animation
          setStart(true);
        } else {
          // reset so next time we enter viewport it starts again
          setStart(false);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const count = useCountUp(endValue, start);

  return (
    <div ref={cardRef} className="relative group">
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-amber-400/40 via-cyan-400/30 to-purple-500/40 opacity-0 blur group-hover:opacity-100 group-hover:blur-lg transition duration-300" />

      <div className="relative h-full px-8 py-6 rounded-2xl bg-[#090b12] border border-slate-700/60 shadow-[0_18px_40px_rgba(0,0,0,0.75)] flex flex-col items-center justify-center">
        <span className="text-3xl md:text-4xl font-extrabold text-amber-300 tracking-tight">
          {count}+
        </span>
        <span className="mt-2 text-sm md:text-base text-slate-300 text-center">
          {label}
        </span>
      </div>
    </div>
  );
}
