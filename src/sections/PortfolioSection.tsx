// src/sections/PortfolioSection.tsx
import type { Service } from "../types/service";
import servicesJson from "../content/services.json";
import ServiceCard from "../components/ServiceCard";

// import images so Vite resolves them
import architecturalImg from "../assets/architectural_design.jpg";
import investmentImg from "../assets/investment.jpg";
import resaleImg from "../assets/resale.jpg";
import roadImg from "../assets/road.jpg";
import constructionImg from "../assets/construction.jpg";
import gardeningImg from "../assets/gardening.jpg";
import projectImg from "../assets/project.jpg";
import smarthomeImg from "../assets/smarthome.jpg";
import legalImg from "../assets/legal.jpg";
import certificateImg from "../assets/certificate.jpg";
import interiorImg from "../assets/interior.jpg";
import landImg from "../assets/land.jpg";
import propertyImg from "../assets/property.jpg";
import loansImg from "../assets/loans.jpg";
import crowdfundingImg from "../assets/crowdfunding.jpg";

const imageMap: Record<string, string> = {
  "architectural_design.jpg": architecturalImg,
  "investment.jpg": investmentImg,
  "resale.jpg": resaleImg,
  "road.jpg": roadImg,
  "construction.jpg": constructionImg,
  "gardening.jpg": gardeningImg,
  "project.jpg": projectImg,
  "smarthome.jpg": smarthomeImg,
  "legal.jpg": legalImg,
  "certificate.jpg": certificateImg,
  "interior.jpg": interiorImg,
  "land.jpg": landImg,
  "property.jpg": propertyImg,
  "loans.jpg": loansImg,
  "crowdfunding.jpg": crowdfundingImg
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
