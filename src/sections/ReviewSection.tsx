// src/sections/ReviewSection.tsx
import { useState } from "react";
import type { Testimonial } from "../types/testimonial";
import reviews from "../content/reviews.json";
import TestimonialsCard from "../components/TestimonialCard";

const data = reviews as Testimonial[];

export default function ReviewSection() {
  const [index, setIndex] = useState(0);
  const visibleCount = 3;

  const maxIndex = Math.max(0, data.length - visibleCount);

  const next = () => {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const visible = data.slice(index, index + visibleCount).length === visibleCount
    ? data.slice(index, index + visibleCount)
    : [...data.slice(index), ...data.slice(0, visibleCount - (data.length - index))];

  return (
    <section className="relative py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.18),_transparent_55%)]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-300">
          What Clients Say
        </h2>

        <div className="mt-12 relative">
          {/* slider arrows */}
          <button
            onClick={prev}
            className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 h-9 w-9 items-center justify-center rounded-full bg-black/60 border border-amber-300/70 text-amber-200 shadow-[0_0_18px_rgba(0,0,0,0.9)] hover:bg-amber-400 hover:text-slate-900 transition"
            aria-label="Previous testimonials"
          >
            ‹
          </button>

          <button
            onClick={next}
            className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 h-9 w-9 items-center justify-center rounded-full bg-black/60 border border-amber-300/70 text-amber-200 shadow-[0_0_18px_rgba(0,0,0,0.9)] hover:bg-amber-400 hover:text-slate-900 transition"
            aria-label="Next testimonials"
          >
            ›
          </button>

          <div className="grid md:grid-cols-3 gap-8">
            {visible.map((r, idx) => (
              <TestimonialsCard
                key={`${r.name}-${idx}`}
                name={r.name}
                role={r.role}
                feedback={r.feedback}
              />
            ))}
          </div>

          {/* mobile: simple dots */}
          <div className="mt-6 flex justify-center gap-2 md:hidden">
            {data.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full ${
                  i === index ? "bg-amber-300" : "bg-slate-600"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
