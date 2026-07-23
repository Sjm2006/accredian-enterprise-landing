'use client';

import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from enterprise leaders about their transformation journey with Accredian.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="card p-8 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">
                    ★
                  </span>
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">{testimonial.message}</p>

              <div className="border-t pt-4">
                <div className="text-3xl mb-2">{testimonial.avatar}</div>
                <h4 className="font-bold text-dark">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.title}</p>
                <p className="text-sm text-primary font-semibold">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}