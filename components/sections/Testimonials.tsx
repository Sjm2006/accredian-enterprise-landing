'use client';

import { useState } from 'react';
import { Building2 } from 'lucide-react';
import { testimonials } from '@/data/testimonials';

// SVG / styled Enterprise Company Logo Components
function CompanyLogo({ company }: { company: string }) {
  switch (company) {
    case 'ADP':
      return (
        <span className="text-3xl font-black italic tracking-tight text-[#D2232A]">
          ADP<span className="not-italic align-super text-[0.5em]">®</span>
        </span>
      );
    case 'Bayer':
      return (
        <div className="relative h-14 w-14 rounded-full border-[3px] border-[#00A0DE] flex items-center justify-center">
          <span className="absolute top-1 text-[8px] font-bold text-[#003D6B] tracking-tight">
            BAYER
          </span>
          <span className="absolute bottom-1 left-1.5 text-[8px] font-bold text-[#003D6B]">
            B
          </span>
          <span className="absolute bottom-1 right-1.5 text-[8px] font-bold text-[#003D6B]">
            R
          </span>
        </div>
      );
    case 'Reliance':
      return (
        <div className="flex items-center gap-2.5">
          <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden="true">
            <circle cx="24" cy="24" r="23" fill="none" stroke="#C89B3C" strokeWidth="1.5" />
            <path
              d="M27 10c3.5 3 5.5 6.8 5.5 11 0 6-4.3 10.5-9.8 10.5-4.6 0-8.2-3.3-8.2-7.6 0-3.2 2-5.4 4.5-5.4 1.9 0 3.3 1.3 3.3 3 0 1.3-.8 2.1-1.8 2.1-.7 0-1.1-.4-1.1-1 0-.4.3-.7.7-.7.2 0 .3.1.3.1s-.2-.4-.7-.4c-.8 0-1.4.7-1.4 1.7 0 1.5 1.3 2.6 3 2.6 2.5 0 4.4-2 4.4-4.9 0-3.6-2.6-6.4-6.6-6.4-4.9 0-8.7 3.9-8.7 9 0 5.7 4.5 10.1 10.6 10.1 7 0 12.4-5.4 12.4-12.6 0-4.9-2.3-9-6.4-11.1z"
              fill="#C89B3C"
            />
          </svg>
          <span className="text-2xl font-semibold text-[#1A1A1A] tracking-tight">Reliance</span>
        </div>
      );
    default:
      return (
        <div className="flex items-center gap-2 text-dark font-bold text-base">
          <Building2 size={22} className="text-primary" />
          <span>{company}</span>
        </div>
      );
  }
}

const CARDS_PER_SLIDE = 2;

export default function Testimonials() {
  const [slide, setSlide] = useState(0);
  const filteredTestimonials = testimonials.filter((t) => t.company !== 'Capgemini');
  const slideCount = Math.ceil(filteredTestimonials.length / CARDS_PER_SLIDE);

  const visible = filteredTestimonials.slice(
    slide * CARDS_PER_SLIDE,
    slide * CARDS_PER_SLIDE + CARDS_PER_SLIDE
  );

  return (
    <section id="testimonials" className="section-padding bg-white py-20 md:py-28">
      <div className="container-custom max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-dark">
            Testimonials from <span className="text-primary">Our Partners</span>
          </h2>
          <p className="text-xl md:text-2xl font-medium text-dark">
            What <span className="text-primary font-semibold">Our Clients</span> Are Saying
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visible.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col rounded-2xl border border-gray-medium/60 bg-white p-8 md:p-10 shadow-soft"
            >
              <div className="mb-6 h-14 flex items-center">
                <CompanyLogo company={testimonial.company} />
              </div>

              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                &ldquo;{testimonial.message}&rdquo;
              </p>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        {slideCount > 1 && (
          <div className="flex items-center justify-center gap-2 mt-10">
            {Array.from({ length: slideCount }).map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                aria-label={`Show testimonials slide ${i + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === slide ? 'w-6 bg-primary' : 'w-2.5 bg-gray-medium hover:bg-primary/40'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}