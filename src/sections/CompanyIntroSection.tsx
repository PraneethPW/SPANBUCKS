// src/sections/CompanyIntroSection.tsx
import introImg from "../assets/about.webp";

export default function CompanyIntroSection() {
  return (
    <section className="relative py-20 bg-[#020617]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.18),_transparent_55%)]" />

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative rounded-2xl overflow-hidden border border-slate-700/70 shadow-[0_18px_40px_rgba(0,0,0,0.85)] bg-black/40">
          <img src={introImg} alt="Spanbucks project" className="w-full h-full object-cover" />
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-300 mb-4">
            SpanBucks
          </h2>
          <p className="text-sm md:text-base text-slate-300 mb-4">
            Your trusted partner for seamless real estate solutions, all in one place.
          </p>
          <p className="text-sm md:text-base text-slate-300 mb-3">
            At SpanBucks Developers and Builders Private Limited, we believe real estate is more than
            buying and selling properties — it is about building a future with trust, innovation and
            long‑term value.
          </p>
          <p className="text-sm md:text-base text-slate-300">
            Whether you are a homebuyer, business, or investor, our team focuses on transparent processes,
            strategic planning and high‑quality delivery across every project.
          </p>
        </div>
      </div>
    </section>
  );
}
