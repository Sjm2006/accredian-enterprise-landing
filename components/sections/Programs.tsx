'use client';

import { programs } from '@/data/programs';

export default function Programs() {
  return (
    <section id="cat" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-4">
            Our Proven Approach
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark">
            The CAT Framework
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our structured CAT methodology delivers learning excellence with clear analysis, customization, and flexible delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={program.id}
              className="rounded-3xl border border-gray-medium/30 p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl mb-4">{program.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-dark">{program.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
              <div className="text-sm text-primary font-semibold">{program.duration}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}