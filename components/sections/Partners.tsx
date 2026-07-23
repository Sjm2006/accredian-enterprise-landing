'use client';

import { Building2 } from 'lucide-react';
import { partners } from '@/data/partners';

export default function Partners() {
  return (
    <section id="clients" className="section-padding bg-gray-light">
      <div className="container-custom">
        <div className="text-center mb-14 animate-fade-in-up">
          <p className="text-sm uppercase tracking-[0.35em] text-primary font-semibold mb-4">
            Our Proven Partnerships
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-dark">
            Successful Collaborations With the Industry’s Best
          </h2>
          <p className="text-base md:text-lg text-gray-muted max-w-3xl mx-auto">
            Working with leading enterprises across technology, healthcare, finance, and manufacturing to deliver measurable business impact.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {partners.map((partner, index) => (
            <div
              key={partner.id}
              className="rounded-3xl border border-gray-medium/70 bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-primary/10 text-primary mb-6">
                <Building2 size={24} />
              </div>
              <p className="text-xl font-semibold text-dark mb-2">{partner.name}</p>
              <p className="text-sm leading-7 text-gray-muted">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}