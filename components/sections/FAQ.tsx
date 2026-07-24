'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqItems } from '@/data/faq';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('1');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="section-padding bg-white py-20 md:py-28">
      <div className="container-custom max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20 animate-fade-in-up">
          <p className="text-sm uppercase tracking-[0.35em] text-primary font-bold mb-4">
            Common Inquiries
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-dark">
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg text-gray-muted max-w-3xl mx-auto font-normal leading-relaxed">
            Find answers to common questions regarding enterprise implementation, customized curriculum design, and delivery formats.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-2xl border border-gray-medium/60 bg-white overflow-hidden shadow-soft transition-all duration-200 hover:border-primary/40 animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-light/50 transition-colors text-left"
                  aria-expanded={isOpen}
                >
                  <h3 className="font-bold text-lg md:text-xl text-dark pr-4">{item.question}</h3>
                  <div className={`p-2 rounded-xl bg-primary-light text-primary transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 bg-primary text-white' : ''}`}>
                    <ChevronDown size={20} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-8 pb-6 pt-2 border-t border-gray-100 text-gray-muted text-base leading-relaxed animate-fade-in-down">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}