'use client';

import { BarChart3, Cpu, Monitor, Rocket, Settings2, Target } from 'lucide-react';
import { features } from '@/data/features';

const iconMap = {
  rocket: Rocket,
  cpu: Cpu,
  target: Target,
  'bar-chart-3': BarChart3,
  'settings-2': Settings2,
  monitor: Monitor,
};

export default function Features() {
  return (
    <section id="edge" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-14 animate-fade-in-up">
          <p className="text-sm uppercase tracking-[0.35em] text-primary font-semibold mb-4">
            Key Aspects of Our Strategic Training
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-dark">
            The Accredian Edge
          </h2>
          <p className="text-base md:text-lg text-gray-muted max-w-2xl mx-auto">
            A premium blend of industry expertise, leadership development, and technology-led learning for enterprise teams.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <div
                key={feature.id}
                className="rounded-3xl border border-gray-medium/70 bg-gray-light p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-primary/10 text-primary mb-5">
                  <Icon size={24} />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-dark">{feature.title}</h3>
                <p className="text-sm leading-7 text-gray-muted">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
