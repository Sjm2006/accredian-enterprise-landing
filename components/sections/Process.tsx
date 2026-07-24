'use client';

import { CheckCircle2, Rocket, Search, Sliders } from 'lucide-react';
import { processSteps } from '@/data/process';

const iconMap = {
  search: Search,
  sliders: Sliders,
  rocket: Rocket,
};

export default function Process() {
  return (
    <section id="how-it-works" className="section-padding bg-gray-light/60 py-20 md:py-28 border-y border-gray-medium/30">
      <div className="container-custom max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 animate-fade-in-up">
          <p className="text-sm uppercase tracking-[0.35em] text-primary font-bold mb-4">
            Our Delivery Model
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-dark">
            How We Deliver Results That Matter
          </h2>
          <p className="text-base md:text-lg text-gray-muted max-w-3xl mx-auto font-normal leading-relaxed">
            A structured three-phase execution model designed to diagnose capability gaps, engineer tailored pathways, and scale transformational business outcomes.
          </p>
        </div>

        {/* Delivery Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-stretch">
          {processSteps.map((step, index) => {
            const Icon = iconMap[step.icon as keyof typeof iconMap] || Search;
            return (
              <div
                key={step.id}
                className="group relative flex flex-col justify-between h-full rounded-2xl border border-gray-medium/60 bg-white p-8 md:p-10 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-elevated animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Top Accent Hover Line */}
                <div className="absolute top-0 inset-x-0 h-1.5 rounded-t-2xl bg-gradient-to-r from-primary to-primary-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white font-extrabold text-lg shadow-md shadow-primary/20">
                      0{step.order}
                    </span>

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-light text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-105 shadow-sm">
                      <Icon className="h-7 w-7" strokeWidth={1.75} />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-dark group-hover:text-primary transition-colors duration-200">
                      {step.title}
                    </h3>

                    <p className="text-base leading-relaxed text-gray-muted font-normal">
                      {step.description}
                    </p>
                  </div>

                  {/* Key Outcomes List */}
                  {step.outcomes && step.outcomes.length > 0 && (
                    <div className="mt-8 pt-6 border-t border-gray-100 space-y-3">
                      <p className="text-xs font-bold uppercase tracking-wider text-primary">
                        Key Deliverables
                      </p>
                      {step.outcomes.map((outcome, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-sm text-dark font-medium">
                          <CheckCircle2 size={16} className="text-primary shrink-0" />
                          <span>{outcome}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Footer Indicator */}
                <div className="mt-8 pt-5 border-t border-gray-100 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-primary">
                  <span>Execution Phase</span>
                  <div className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors duration-200" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}