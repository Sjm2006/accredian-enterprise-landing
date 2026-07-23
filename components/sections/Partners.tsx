'use client';

import { partners } from '@/data/partners';

export default function Partners() {
  return (
    <section className="section-padding bg-gray-light">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-600">
            Partnering with the world's most innovative companies
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <div
              key={partner.id}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center min-h-32 cursor-pointer group animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">{partner.logo}</div>
              <p className="text-sm font-semibold text-center text-dark group-hover:text-primary transition-colors">
                {partner.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}