'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { ApiResponse } from '@/types';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data: ApiResponse = await response.json();

      if (response.ok && data.success) {
        setStatus({
          type: 'success',
          text: 'Thank you! Your enterprise inquiry has been submitted. Our team will contact you shortly.',
        });
        setFormData({ name: '', company: '', email: '', phone: '', message: '' });
      } else {
        setStatus({
          type: 'error',
          text: data.error || 'Failed to send inquiry. Please try again.',
        });
      }
    } catch {
      setStatus({
        type: 'error',
        text: 'An error occurred. Please try again later.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-white py-20 md:py-28 relative">
      <div className="container-custom max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Contact Details */}
          <div className="lg:col-span-5 space-y-8 animate-fade-in-left">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-primary font-bold mb-4">
                Partner With Accredian
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-dark mb-6">
                Contact Our Enterprise Team
              </h2>
              <p className="text-base md:text-lg text-gray-muted leading-relaxed font-normal">
                Ready to accelerate workforce capability across your organization? Speak with our enterprise learning strategists to design a custom executive program.
              </p>
            </div>

            {/* Contact Information List */}
            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-light text-primary shrink-0 shadow-sm">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-muted">Work Email</p>
                  <a href="mailto:enterprise@accredian.com" className="text-base font-semibold text-dark hover:text-primary transition-colors">
                    enterprise@accredian.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-light text-primary shrink-0 shadow-sm">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-muted">Phone Inquiry</p>
                  <a href="tel:+918045678900" className="text-base font-semibold text-dark hover:text-primary transition-colors">
                    +91 (80) 4567-8900 / +1 (800) 555-ACCRED
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-light text-primary shrink-0 shadow-sm">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-muted">Enterprise Headquarters</p>
                  <p className="text-base font-medium text-dark leading-snug">
                    4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-light text-primary shrink-0 shadow-sm">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-muted">Office Hours</p>
                  <p className="text-base font-medium text-dark">
                    Monday – Friday: 9:00 AM – 7:00 PM EST
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form Card */}
          <div className="lg:col-span-7 animate-fade-in-right">
            {/* Gradient frame wrapper for a premium "bordered glass" effect */}
            <div className="relative rounded-[28px] p-[1.5px] bg-gradient-to-br from-primary/40 via-gray-medium/40 to-primary-dark/30 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.25)]">
              <div className="relative rounded-[27px] bg-white p-8 md:p-11 overflow-hidden">
                {/* Ambient corner glow */}
                <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-primary/5 blur-3xl" />

                <div className="relative mb-9">
                  <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-primary bg-primary-light/70 border border-primary/15 px-3.5 py-1.5 rounded-full mb-4">
                    By Invitation Only
                  </span>
                  <h3 className="text-2xl md:text-[28px] font-bold text-dark mb-2 tracking-tight">
                    Request an Enterprise Consultation
                  </h3>
                  <p className="text-sm text-gray-muted leading-relaxed">
                    Fill out the form below and an Accredian strategic advisor will reach out within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="relative space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-dark mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Jane Doe"
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-medium/50 bg-white text-dark placeholder-gray-400 shadow-sm focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all duration-200 text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-company" className="block text-xs font-bold uppercase tracking-wider text-dark mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="contact-company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        placeholder="Enterprise Inc."
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-medium/50 bg-white text-dark placeholder-gray-400 shadow-sm focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all duration-200 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-dark mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="jane@company.com"
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-medium/50 bg-white text-dark placeholder-gray-400 shadow-sm focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all duration-200 text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-bold uppercase tracking-wider text-dark mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="contact-phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-medium/50 bg-white text-dark placeholder-gray-400 shadow-sm focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all duration-200 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-dark mb-2">
                      Message / Learning Objectives
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your team size, upskilling needs, or timelines..."
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-medium/50 bg-white text-dark placeholder-gray-400 shadow-sm focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all duration-200 text-sm resize-none"
                    />
                  </div>

                  {status && (
                    <div
                      className={`p-4 rounded-xl text-sm font-medium flex items-center gap-2 ${
                        status.type === 'success'
                          ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                          : 'bg-red-50 text-red-800 border border-red-200'
                      }`}
                    >
                      {status.type === 'success' && <CheckCircle2 size={18} className="shrink-0 text-emerald-600" />}
                      <span>{status.text}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 text-base font-bold rounded-xl text-white bg-gradient-to-r from-primary to-primary-dark shadow-lg shadow-primary/25 inline-flex items-center justify-center gap-2 disabled:opacity-50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <span>{loading ? 'Sending Inquiry...' : 'Submit Inquiry'}</span>
                    <Send size={18} />
                  </button>

                  <p className="text-center text-xs text-gray-muted pt-1">
                    Your information is kept confidential and used only to prepare your consultation.
                  </p>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}