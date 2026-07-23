'use client';

import { processSteps } from '@/data/process';

export default function Process() {
  return (
    <section id="process" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Implementation Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A proven, four-step approach to delivering measurable learning outcomes.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.id} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-2xl mb-6 shadow-lg">
                    <span className="text-3xl">{step.icon}</span>
                  </div>

                  <h3 className="text-xl font-bold text-center mb-3 text-dark">{step.title}</h3>
                  <p className="text-gray-600 text-center text-sm mb-6">{step.description}</p>

                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-full w-8 h-1 bg-gradient-to-r from-primary to-secondary" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}