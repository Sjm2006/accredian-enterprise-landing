'use client';

import { Search, Layers, RefreshCw } from 'lucide-react';

export default function Programs() {
  const cards = [
    {
      id: 'concept',
      heading: 'CONCEPT',
      icon: Search,
      title: 'Skill Gap Analysis & Strategy',
      description: 'Identify core competency gaps, evaluate baseline organizational capabilities, and formulate a targeted learning roadmap aligned with business goals.',
    },
    {
      id: 'application',
      heading: 'APPLICATION',
      icon: Layers,
      title: 'Practical Hands-on Execution',
      description: 'Immerse teams in real-world scenarios, interactive case studies, and practical projects designed to translate theoretical knowledge into workplace performance.',
    },
    {
      id: 'tools',
      heading: 'TOOLS',
      icon: RefreshCw,
      title: 'Modern Stack & Tooling Mastery',
      description: 'Equip your workforce with cutting-edge industry software, AI-driven platforms, and modern toolsets to optimize productivity and scale operational impact.',
    },
  ];

  return (
    <section id="cat" className="section-padding bg-white py-20 md:py-28">
      <div className="container-custom max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 animate-fade-in-up">
          <p className="text-sm uppercase tracking-[0.35em] text-primary font-bold mb-4">
            OUR PROVEN APPROACH TO LEARNING EXCELLENCE
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-dark">
            The CAT Framework
          </h2>
          <p className="text-base md:text-lg text-gray-muted max-w-3xl mx-auto font-normal leading-relaxed">
            A comprehensive methodology engineered to empower enterprise teams through strategic skill assessment, practical execution, and modern tooling enablement.
          </p>
        </div>

        {/* Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-stretch">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="group relative flex flex-col justify-between h-full rounded-2xl border border-gray-medium/60 bg-white p-8 md:p-10 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-elevated animate-fade-in-up overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Subtle top accent bar on hover */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-primary to-primary-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Top Header Section with Main Bold Heading & Icon */}
                  <div className="flex items-start justify-between mb-8 pb-6 border-b border-gray-100">
                    <div>
                      <span className="inline-block text-xs font-semibold tracking-wider text-primary/80 uppercase mb-1">
                        Pillar 0{index + 1}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-extrabold tracking-wider text-primary uppercase font-sans">
                        {card.heading}
                      </h3>
                    </div>

                    {/* Large Professional Icon */}
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary-light text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-105 shadow-sm">
                      <Icon className="h-8 w-8" strokeWidth={1.75} />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-4">
                    <h4 className="text-xl md:text-2xl font-bold text-dark leading-snug group-hover:text-primary transition-colors duration-200">
                      {card.title}
                    </h4>

                    <p className="text-base leading-relaxed text-gray-muted font-normal">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer Accent */}
                <div className="mt-8 pt-6 border-t border-gray-50 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-primary">
                  <span>Methodology Component</span>
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
