'use client';

import { useState } from 'react';
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
    } catch (error) {
      setMessage({
        type: 'error',
        text: 'An error occurred. Please try again later.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="lead-form" className="section-padding bg-gradient-to-br from-primary-light to-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your <span className="text-gradient">Workforce</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Schedule a personalized demo with our enterprise solutions team. We'll show you how Accredian can help your organization upskill at scale.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-3xl">🎯</div>
                <div>
                  <h3 className="font-bold text-dark mb-2">Customized Solutions</h3>
                  <p className="text-gray-600">Tailored programs designed for your specific industry and skill needs.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl">📊</div>
                <div>
                  <h3 className="font-bold text-dark mb-2">Measurable Results</h3>
                  <p className="text-gray-600">Track ROI with comprehensive analytics and detailed reporting.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl">🚀</div>
                <div>
                  <h3 className="font-bold text-dark mb-2">Quick Implementation</h3>
                  <p className="text-gray-600">Get up and running in 2-4 weeks with our expert implementation team.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="card p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2 text-dark">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border-2 border-gray-medium rounded-lg focus-ring"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-dark">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 border-2 border-gray-medium rounded-lg focus-ring"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold mb-2 text-dark">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    placeholder="Your Company"
                    className="w-full px-4 py-3 border-2 border-gray-medium rounded-lg focus-ring"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-dark">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+1-234-567-8900"
                    className="w-full px-4 py-3 border-2 border-gray-medium rounded-lg focus-ring"
                  />
                </div>

                {message && (
                  <div
                    className={`p-4 rounded-lg ${
                      message.type === 'success'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {message.text}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full text-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Submitting...' : 'Schedule Demo'}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  We respect your privacy. Your information is safe with us.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}