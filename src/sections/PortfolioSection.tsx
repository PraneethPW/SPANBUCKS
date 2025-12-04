// src/sections/PortfolioSection.tsx
import type { Service } from "../types/service";
import servicesJson from "../content/services.json";
import ServiceCard from "../components/ServiceCard";

// import images so Vite resolves them
import architecturalImg from "../assets/architectural_design.webp";
import investmentImg from "../assets/investment.webp";
import resaleImg from "../assets/resale.webp";
import roadImg from "../assets/road.webp";
import constructionImg from "../assets/construction.webp";
import gardeningImg from "../assets/gardening.webp";
import projectImg from "../assets/project.webp";
import smarthomeImg from "../assets/smarthome.webp";
import legalImg from "../assets/legal.webp";
import certificateImg from "../assets/certificate.webp";
import interiorImg from "../assets/interior.webp";
import landImg from "../assets/land.webp";
import propertyImg from "../assets/property.webp";
import loansImg from "../assets/loans.webp";
import crowdfundingImg from "../assets/crowdfunding.webp";

const imageMap: Record<string, string> = {
  "architectural_design.webp": architecturalImg,
  "investment.webp": investmentImg,
  "resale.webp": resaleImg,
  "road.webp": roadImg,
  "construction.webp": constructionImg,
  "gardening.webp": gardeningImg,
  "project.webp": projectImg,
  "smarthome.webp": smarthomeImg,
  "legal.webp": legalImg,
  "certificate.webp": certificateImg,
  "interior.webp": interiorImg,
  "land.webp": landImg,
  "property.webp": propertyImg,
  "loans.webp": loansImg,
  "crowdfunding.webp": crowdfundingImg
};

const services = servicesJson as Service[];

export default function PortfolioSection() {
  return (
    <section className="relative py-20 bg-[#020617]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.18),_transparent_55%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-300 mb-4">
          Our Portfolio of Services
        </h2>
        <p className="text-sm md:text-base text-center text-slate-300 mb-10">
          A complete spectrum of real estate, construction, design and investment solutions.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <ServiceCard
              key={s.title}
              title={s.title}
              description={s.description}
              image={imageMap[s.image]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
