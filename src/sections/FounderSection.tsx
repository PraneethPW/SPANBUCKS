// src/sections/FounderSection.tsx
import chairman from "../assets/chairman.webp";

export default function FounderSection() {
  return (
    <section className="relative py-20 bg-[#020617]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.18),_transparent_55%)]" />

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-[1.6fr,1fr] gap-10 items-start">
        {/* Text block */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-300 mb-6">
            Message from the Founder &amp; Chairman
          </h2>

          <p className="text-sm md:text-base text-slate-300 mb-4">
            Dear valued clients, partners, team and friends,
          </p>

          <p className="text-sm md:text-base text-slate-300 mb-4">
            It gives me great pride and gratitude to address you as the Founder and Chairman of{" "}
            <span className="text-amber-300 font-semibold">Spanbucks Developers and Builders Private Limited</span>.
            This company was built on three simple but powerful principles:{" "}
            <span className="text-amber-300 font-semibold">Trust, Invest and Prosper</span> — because real estate is
            more than land and buildings; it is about creating spaces where people live, grow and build their futures.
          </p>

          <p className="text-sm md:text-base text-slate-300 mb-4">
            Trust is at the core of everything we do, from our relationships with clients and partners to the way we
            approach every project. We believe that trust is earned through transparency, consistency and delivering
            on our promises.
          </p>

          <p className="text-sm md:text-base text-slate-300 mb-4">
            We encourage our clients to invest not only in property, but in a future that holds value — financially,
            personally and socially. Every development we create is an opportunity for long-term growth and a reflection
            of our commitment to excellence.
          </p>

          <p className="text-sm md:text-base text-slate-300 mb-4">
            At Spanbucks, we are not just shaping skylines — we are building legacies. Thank you for walking this
            journey with us. Your success will always be a part of ours.
          </p>

          <div className="mt-6">
            <p className="text-sm md:text-base text-amber-300 font-semibold">Warm regards,</p>
            <p className="text-sm md:text-base text-slate-200">P.Srikanth Reddy</p>
            <p className="text-xs md:text-sm text-slate-400">
              Founder &amp; Chairman, Spanbucks Developers and Builders Private Limited
            </p>
          </div>
        </div>

        {/* Image block */}
        <div className="relative">
          <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-amber-400/40 via-amber-300/20 to-amber-500/40 opacity-0 blur group-hover:opacity-100 group-hover:blur-lg transition duration-300 pointer-events-none" />
          <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 shadow-[0_18px_40px_rgba(0,0,0,0.85)] bg-black/40">
            <img
              src={chairman}
              alt="Founder at desk"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
