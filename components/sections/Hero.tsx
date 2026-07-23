'use client';

import { ArrowRight, Award, Sparkles } from 'lucide-react';

export default function Hero() {
  const handleScroll = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden bg-gray-light pt-24 pb-20">
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-primary/10 to-transparent" />
      <div className="absolute right-0 top-24 hidden h-72 w-72 rounded-full bg-secondary/10 blur-3xl lg:block" />
      <div className="absolute left-0 bottom-0 hidden h-96 w-96 rounded-full bg-primary/10 blur-3xl lg:block" />

      <div className="container-custom relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-primary/15 bg-white/90 px-4 py-2 text-sm font-semibold text-primary shadow-sm">
              <Sparkles size={18} />
              Enterprise learning for the future of work
            </div>

            <div className="space-y-6">
              <h1 className="max-w-3xl text-5xl font-semibold leading-tight text-dark md:text-6xl">
                Next-Gen Expertise <span className="text-gradient">for Your Enterprise</span>
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-gray-muted">
                Cultivate high-performance teams through expert learning, strategic upskilling, and measurable enterprise transformation.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <button onClick={() => handleScroll('#how-it-works')} className="btn-primary">
                Talk to Advisor
              </button>
              <button onClick={() => handleScroll('#cat')} className="btn-secondary">
                See the CAT Framework
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-gray-medium/70 bg-white p-6 shadow-soft">
                <p className="text-sm uppercase tracking-[0.35em] text-gray-muted">Professionals</p>
                <p className="mt-4 text-3xl font-semibold text-primary">10K+</p>
                <p className="mt-3 text-sm leading-7 text-gray-muted">Professionals trained for exceptional career success.</p>
              </div>
              <div className="rounded-3xl border border-gray-medium/70 bg-white p-6 shadow-soft">
                <p className="text-sm uppercase tracking-[0.35em] text-gray-muted">Sessions</p>
                <p className="mt-4 text-3xl font-semibold text-primary">200+</p>
                <p className="mt-3 text-sm leading-7 text-gray-muted">Sessions delivered with unmatched learning excellence.</p>
              </div>
              <div className="rounded-3xl border border-gray-medium/70 bg-white p-6 shadow-soft">
                <p className="text-sm uppercase tracking-[0.35em] text-gray-muted">Learners</p>
                <p className="mt-4 text-3xl font-semibold text-primary">5K+</p>
                <p className="mt-3 text-sm leading-7 text-gray-muted">Active learners engaged in dynamic programs.</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-gray-medium/70 bg-white p-8 shadow-elevated">
              <div className="flex items-center justify-between rounded-[1.75rem] bg-primary/5 p-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-gray-muted">Enterprise Edge</p>
                  <h2 className="mt-3 text-3xl font-semibold leading-tight text-dark">
                    Strategic learning that accelerates digital transformation.
                  </h2>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                  <Award size={26} />
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-gray-medium/60 bg-gray-light p-5">
                  <p className="text-sm font-semibold text-dark">Tailored Solutions</p>
                  <p className="mt-2 text-sm leading-7 text-gray-muted">Programs built for your business objectives.</p>
                </div>
                <div className="rounded-3xl border border-gray-medium/60 bg-gray-light p-5">
                  <p className="text-sm font-semibold text-dark">Industry Insights</p>
                  <p className="mt-2 text-sm leading-7 text-gray-muted">Domain expertise that informs every learning path.</p>
                </div>
                <div className="rounded-3xl border border-gray-medium/60 bg-gray-light p-5">
                  <p className="text-sm font-semibold text-dark">Expert Guidance</p>
                  <p className="mt-2 text-sm leading-7 text-gray-muted">Senior practitioners support every program rollout.</p>
                </div>
                <div className="rounded-3xl border border-gray-medium/60 bg-gray-light p-5">
                  <p className="text-sm font-semibold text-dark">Scale With Confidence</p>
                  <p className="mt-2 text-sm leading-7 text-gray-muted">Consistent outcomes at enterprise scale.</p>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-primary">
                <ArrowRight size={18} />
                Learn more about our enterprise framework
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
