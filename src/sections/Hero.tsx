// src/sections/Hero.tsx
import { useState } from "react";
import homeContent from "../content/home.json";

import landingImg from "../assets/landing.webp";
import slide2Img from "../assets/slide2.webp";
import logo from "../assets/logomain.webp"; // adjust name/path if needed

type HomeContent = {
  hero: { title: string; subtitle: string };
};

const content = homeContent as HomeContent;
const slides = [landingImg, slide2Img];

export default function Hero() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full min-h-[89vh] flex items-center justify-center text-center px-6 overflow-hidden bg-gradient-to-b from-black via-black to-[#020617]">
      {/* background image slider */}
      <div className="absolute inset-0">
        {slides.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* overlay now fades into the same color as the page background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/65 to-[#020617]/95" />
      </div>

          <div className="relative max-w-3xl">
        {/* centered logo above title */}
        <div className="flex justify-center mb-6">
          <div className="h-[7.5rem] w-[7.5rem] md:h-[8.75rem] md:w-[8.75rem] rounded-full overflow-hidden border-[3px] border-amber-400/90 shadow-[0_0_40px_rgba(250,204,21,0.95)] bg-black/70">
            <img
              src={logo}
              alt="Spanbucks logo"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-amber-400 drop-shadow-[0_0_18px_rgba(0,0,0,0.8)]">
          {content.hero.title}
        </h1>
        <p className="mt-5 text-lg md:text-xl text-slate-200/90">
          {content.hero.subtitle}
        </p>
      </div>




      {/* floating round image-switch button */}
      <button
        onClick={nextSlide}
        className="absolute bottom-8 right-8 h-12 w-12 rounded-full bg-black/60 border border-amber-300/70 text-amber-200 flex items-center justify-center shadow-[0_0_20px_rgba(250,204,21,0.7)] hover:bg-amber-400 hover:text-slate-900 hover:shadow-[0_0_30px_rgba(250,204,21,1)] transition"
        aria-label="Switch hero image"
      >
        ⇄
      </button>
    </section>
  );
}
