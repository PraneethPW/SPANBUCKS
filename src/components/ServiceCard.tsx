// src/components/ServiceCard.tsx
interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

export default function ServiceCard({ title, description, image }: ServiceCardProps) {
  return (
    <div className="relative group">
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-amber-400/40 via-amber-300/20 to-amber-500/40 opacity-0 blur group-hover:opacity-100 group-hover:blur-lg transition duration-300" />

      <div className="relative h-full rounded-2xl bg-[#020617] border border-slate-700/60 shadow-[0_18px_40px_rgba(0,0,0,0.75)] overflow-hidden flex flex-col">
        <div className="h-40 w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="p-5 flex-1 flex flex-col">
          <h3 className="text-base font-semibold text-slate-50 text-center">
            {title}
          </h3>
          <p className="mt-3 text-sm text-slate-300 text-center">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
