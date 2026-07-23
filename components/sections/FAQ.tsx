'use client';

import { useState } from 'react';
import { faqItems } from '@/data/faq';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('1');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="section-padding bg-gray-light">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our enterprise learning solutions.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={item.id}
              className="card overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <button
                onClick={() => toggleFAQ(item.id)}
                className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-light transition-colors"
                aria-expanded={openId === item.id}
              >
                <h3 className="font-bold text-lg text-dark text-left">{item.question}</h3>
                <span
                  className={`text-2xl text-primary transition-transform duration-300 flex-shrink-0 ml-4 ${
                    openId === item.id ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>

              {openId === item.id && (
                <div className="px-8 pb-6 border-t border-gray-medium text-gray-600 leading-relaxed animate-fade-in-down">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}