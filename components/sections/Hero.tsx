'use client';

import { ArrowRight, Award, CheckCircle2, ShieldCheck, Users, Zap } from 'lucide-react';

export default function Hero() {
  const handleScroll = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-gray-light via-white to-gray-light pt-20 pb-20 md:pt-28 md:pb-28">
      {/* Subtle Background Elements */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-primary/5 via-primary/2 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-16 hidden h-80 w-80 rounded-full bg-primary/5 blur-3xl lg:block" />
      <div className="pointer-events-none absolute left-0 bottom-10 hidden h-96 w-96 rounded-full bg-secondary/5 blur-3xl lg:block" />

      <div className="container-custom relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 items-center">
          {/* Hero Content Left */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-5">
              <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-dark sm:text-5xl md:text-6xl leading-[1.12]">
                Next-Gen Expertise <span className="text-gradient">for Your Enterprise</span>
              </h1>
              <p className="max-w-2xl text-lg text-gray-muted leading-relaxed font-normal">
                Cultivate high-performance teams through expert-led learning, strategic capability development, and measurable organizational transformation.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => handleScroll('#contact')}
                className="btn-primary inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold shadow-md shadow-primary/20 hover:shadow-lg transition-all"
              >
                <span>Talk to Advisor</span>
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => handleScroll('#cat')}
                className="btn-secondary inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold border-gray-medium/80 hover:border-primary/40 transition-all"
              >
                See the CAT Framework
              </button>
            </div>

            {/* Value Highlights */}
            <div className="pt-4 border-t border-gray-medium/40 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-primary/10 text-primary mt-0.5 shrink-0">
                  <Users size={18} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-dark">10K+</p>
                  <p className="text-xs text-gray-muted font-medium mt-0.5">Professionals Trained</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-primary/10 text-primary mt-0.5 shrink-0">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-dark">200+</p>
                  <p className="text-xs text-gray-muted font-medium mt-0.5">Sessions Delivered</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-primary/10 text-primary mt-0.5 shrink-0">
                  <Zap size={18} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-dark">5K+</p>
                  <p className="text-xs text-gray-muted font-medium mt-0.5">Active Learners</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Feature Card Right */}
          <div className="relative animate-fade-in-up">
            <div className="rounded-2xl border border-gray-medium/60 bg-white p-8 md:p-10 shadow-elevated transition-all duration-300 hover:border-primary/30">
              <div className="flex items-center justify-between rounded-xl bg-primary-light/60 p-6 mb-8 border border-primary/10">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    Enterprise Capability
                  </span>
                  <h2 className="mt-2 text-2xl md:text-3xl font-bold leading-snug text-dark">
                    Strategic Executive Learning
                  </h2>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white shadow-md shadow-primary/20 shrink-0">
                  <Award size={28} />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-gray-medium/50 bg-gray-light/60 p-5 transition-all hover:bg-white hover:shadow-soft">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 size={16} className="text-primary" />
                    <p className="text-sm font-bold text-dark">Tailored Solutions</p>
                  </div>
                  <p className="text-xs leading-relaxed text-gray-muted">Programs built specifically for your enterprise business objectives.</p>
                </div>

                <div className="rounded-xl border border-gray-medium/50 bg-gray-light/60 p-5 transition-all hover:bg-white hover:shadow-soft">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 size={16} className="text-primary" />
                    <p className="text-sm font-bold text-dark">Industry Experts</p>
                  </div>
                  <p className="text-xs leading-relaxed text-gray-muted">Domain experts and practitioners lead every instructional session.</p>
                </div>

                <div className="rounded-xl border border-gray-medium/50 bg-gray-light/60 p-5 transition-all hover:bg-white hover:shadow-soft">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 size={16} className="text-primary" />
                    <p className="text-sm font-bold text-dark">Measurable ROI</p>
                  </div>
                  <p className="text-xs leading-relaxed text-gray-muted">Clear tracking and analytics on skill application and growth.</p>
                </div>

                <div className="rounded-xl border border-gray-medium/50 bg-gray-light/60 p-5 transition-all hover:bg-white hover:shadow-soft">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 size={16} className="text-primary" />
                    <p className="text-sm font-bold text-dark">Scalable Rollout</p>
                  </div>
                  <p className="text-xs leading-relaxed text-gray-muted">Deploy seamlessly across 10 to 10,000 workforce members.</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between text-sm font-semibold text-primary">
                <span>Proven CAT Methodology</span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
