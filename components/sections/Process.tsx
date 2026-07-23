'use client';

import { processSteps } from '@/data/process';

export default function Process() {
  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-4">
            Delivery Model
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark">
            How We Deliver Results That Matter
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A structured approach that assesses gaps, tailors every engagement, and delivers with flexibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <div
              key={step.id}
              className="rounded-3xl border border-gray-medium/30 p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-2xl mb-6 shadow-lg">
                <span className="text-3xl">{step.icon}</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-dark">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}