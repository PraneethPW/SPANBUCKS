// TestimonialCard.tsx
interface TestimonialsCardProps {
    name: string;
    role: string;
    feedback: string;
  }
  
  export default function TestimonialsCard({
    name,
    role,
    feedback,
  }: TestimonialsCardProps) {
    return (
      <div className="relative group">
        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-amber-400/40 via-amber-300/20 to-amber-500/40 opacity-0 blur group-hover:opacity-100 group-hover:blur-lg transition duration-300" />
        <div className="relative h-full p-6 rounded-2xl bg-[#020617] border border-slate-700/60 shadow-[0_18px_40px_rgba(0,0,0,0.75)]">
          <p className="text-slate-200 italic">“{feedback}”</p>
          <div className="mt-5">
            <p className="font-semibold text-slate-50">{name}</p>
            <p className="text-xs text-slate-400">{role}</p>
          </div>
        </div>
      </div>
    );
  }
  