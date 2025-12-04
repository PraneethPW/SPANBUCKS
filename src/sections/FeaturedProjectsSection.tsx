// src/sections/FeaturedProjectsSection.tsx
import type { FeaturedProject } from "../types/featuredProject";
import projectsJson from "../content/featuredProjects.json";

import luxuryVillasImg from "../assets/luxuryvillas.webp";
import skylineImg from "../assets/skyline.webp";
import beachfrontImg from "../assets/beachfront.webp";
import greenfieldImg from "../assets/greenfield.webp";
import urbanHeightsImg from "../assets/Urbanheights.webp";
import countrysideImg from "../assets/countryside.webp";

const imageMap: Record<string, string> = {
  "luxuryvillas.webp": luxuryVillasImg,
  "skyline.webp": skylineImg,
  "beachfront.webp": beachfrontImg,
  "greenfield.webp": greenfieldImg,
  "Urbanheights.webp": urbanHeightsImg,
  "countryside.webp": countrysideImg
};

const projects = projectsJson as FeaturedProject[];

export default function FeaturedProjectsSection() {
  return (
    <section className="relative py-20 bg-[#020617]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.18),_transparent_55%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-300 mb-10">
          Featured Real Estate Projects
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div key={p.title} className="relative group">
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-amber-400/40 via-amber-300/20 to-amber-500/40 opacity-0 blur group-hover:opacity-100 group-hover:blur-lg transition duration-300" />
              <div className="relative h-full rounded-2xl bg-[#020617] border border-slate-700/60 shadow-[0_18px_40px_rgba(0,0,0,0.75)] overflow-hidden flex flex-col">
                <div className="h-44 w-full overflow-hidden">
                <img
  src={imageMap[p.image] ?? luxuryVillasImg}
  alt={p.title}
  loading="lazy"
  className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
/>

                </div>

                <div className="p-5 flex-1 flex flex-col items-center text-center">
                  <h3 className="text-lg font-semibold text-amber-300">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-300">{p.location}</p>
                  <p className="mt-3 text-sm text-slate-300">{p.description}</p>
                  <p className="mt-4 text-sm font-semibold text-amber-300">
                    {p.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
