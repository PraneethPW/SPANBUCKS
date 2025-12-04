// src/sections/StatsSection.tsx
import type { Stat } from "../types/stats";
import statsJson from "../content/stats.json";
import StatCard from "../components/StatsCard";

const stats = statsJson as Stat[];

export default function StatsSection() {
  return (
    <section className="relative py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.18),_transparent_55%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-300 mb-10">
          Spanbucks by the Numbers
        </h2>

        <div className="grid sm:grid-cols-3 gap-8">
          {stats.map((s) => (
            <StatCard key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  );
}