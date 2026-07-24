'use client';

import { useState } from 'react';
import { BarChart3, Rocket, Target, Send, CheckCircle2 } from 'lucide-react';
import { FormData, ApiResponse } from '@/types';

export default function LeadForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data: ApiResponse = await response.json();

      if (data.success) {
        setMessage({
          type: 'success',
          text: data.message || 'Lead submitted successfully!',
        });
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
        });
      } else {
        setMessage({
          type: 'error',
          text: data.error || 'Failed to submit lead. Please try again.',
        });
      }
    } catch {
      setMessage({
        type: 'error',
        text: 'An error occurred. Please try again later.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="lead-form" className="section-padding bg-gradient-to-br from-primary-light/50 via-white to-gray-light py-20 md:py-28 border-t border-gray-medium/30">
      <div className="container-custom max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="animate-fade-in-left space-y-8">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-primary font-bold mb-4">
                Enterprise Reskilling
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-dark leading-tight">
                Ready to Transform Your <span className="text-gradient">Workforce</span>?
              </h2>
              <p className="text-lg text-gray-muted mt-4 leading-relaxed">
                Schedule a personalized demo with our enterprise solutions team. We&apos;ll show you how Accredian can help your organization upskill at scale.
              </p>
            </div>

            <div className="space-y-6 pt-2">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-light text-primary shrink-0 shadow-sm">
                  <Target size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-dark text-lg mb-1">Customized Solutions</h3>
                  <p className="text-sm text-gray-muted leading-relaxed">Tailored programs designed for your specific industry and skill needs.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-light text-primary shrink-0 shadow-sm">
                  <BarChart3 size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-dark text-lg mb-1">Measurable Results</h3>
                  <p className="text-sm text-gray-muted leading-relaxed">Track ROI with comprehensive analytics and detailed reporting dashboards.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-light text-primary shrink-0 shadow-sm">
                  <Rocket size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-dark text-lg mb-1">Quick Implementation</h3>
                  <p className="text-sm text-gray-muted leading-relaxed">Get up and running in 2-4 weeks with our expert implementation team.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fade-in-right">
            <div className="rounded-2xl border border-gray-medium/60 bg-white p-8 md:p-10 shadow-elevated">
              <h3 className="text-2xl font-bold text-dark mb-6">Book an Advisor Demo</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="lead-name" className="block text-xs font-bold uppercase tracking-wider text-dark mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="lead-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-gray-medium/70 bg-gray-light/40 text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="lead-email" className="block text-xs font-bold uppercase tracking-wider text-dark mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    id="lead-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-medium/70 bg-gray-light/40 text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="lead-company" className="block text-xs font-bold uppercase tracking-wider text-dark mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="lead-company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    placeholder="Your Enterprise"
                    className="w-full px-4 py-3 rounded-xl border border-gray-medium/70 bg-gray-light/40 text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="lead-phone" className="block text-xs font-bold uppercase tracking-wider text-dark mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="lead-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+1-234-567-8900"
                    className="w-full px-4 py-3 rounded-xl border border-gray-medium/70 bg-gray-light/40 text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm transition-all"
                  />
                </div>

                {message && (
                  <div
                    className={`p-4 rounded-xl text-sm font-medium flex items-center gap-2 ${
                      message.type === 'success'
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                        : 'bg-red-50 text-red-800 border border-red-200'
                    }`}
                  >
                    {message.type === 'success' && <CheckCircle2 size={18} className="shrink-0 text-emerald-600" />}
                    <span>{message.text}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full py-4 text-base font-bold shadow-md shadow-primary/20 inline-flex items-center justify-center gap-2 disabled:opacity-50 transition-all"
                >
                  <span>{loading ? 'Submitting...' : 'Schedule Demo'}</span>
                  <Send size={18} />
                </button>

                <p className="text-xs text-gray-500 text-center mt-3">
                  We respect your privacy. No credit card required.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}