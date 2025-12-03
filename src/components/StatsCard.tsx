// src/components/StatCard.tsx
interface StatCardProps {
    value: string;
    label: string;
  }
  
  export default function StatCard({ value, label }: StatCardProps) {
    return (
      <div className="relative group">
        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-amber-400/40 via-cyan-400/30 to-purple-500/40 opacity-0 blur group-hover:opacity-100 group-hover:blur-lg transition duration-300" />
        <div className="relative h-full px-8 py-6 rounded-2xl bg-[#090b12] border border-slate-700/60 shadow-[0_18px_40px_rgba(0,0,0,0.75)] flex flex-col items-center justify-center">
          <span className="text-3xl md:text-4xl font-extrabold text-amber-300 tracking-tight">
            {value}
          </span>
          <span className="mt-2 text-sm md:text-base text-slate-300 text-center">
            {label}
          </span>
        </div>
      </div>
    );
  }
  