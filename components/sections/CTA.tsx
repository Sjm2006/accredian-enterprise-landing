'use client';

import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CTA() {
  const handleScroll = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative overflow-hidden section-padding bg-gradient-to-r from-primary via-primary-dark to-secondary">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="container-custom relative">
        <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Start Your Digital Transformation Today
          </h2>
          <p className="text-xl text-white text-opacity-90 mb-10">
            Join hundreds of enterprise organizations already transforming their workforce with Accredian&apos;s proven learning solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => handleScroll('#lead-form')}
              className="btn-white group inline-flex items-center justify-center gap-2"
            >
              Book a Demo
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
            <button
              onClick={() => handleScroll('#faq')}
              className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors duration-300"
            >
              Learn More
            </button>
          </div>

          <p className="flex items-center justify-center gap-2 text-sm text-white text-opacity-75 mt-8">
            <CheckCircle2 size={16} className="text-white text-opacity-90" />
            No credit card required. Get started in minutes.
          </p>
        </div>
      </div>
    </section>
  );
}