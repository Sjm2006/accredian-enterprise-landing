'use client';

import { Activity, Building2, CalendarCheck, Users2 } from 'lucide-react';

const stats = [
  {
    id: '1',
    label: 'Professionals Trained',
    value: '10K+',
    description: 'Professionals trained for exceptional career success.',
    icon: Users2,
  },
  {
    id: '2',
    label: 'Sessions Delivered',
    value: '200+',
    description: 'Sessions delivered with unmatched learning excellence.',
    icon: CalendarCheck,
  },
  {
    id: '3',
    label: 'Active Learners',
    value: '5K+',
    description: 'Active learners engaged in dynamic enterprise programs.',
    icon: Activity,
  },
  {
    id: '4',
    label: 'Enterprise Clients',
    value: '500+',
    description: 'Global organizations trusting Accredian for workforce transformation.',
    icon: Building2,
  },
];

export default function Stats() {
  return (
    <section id="stats" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-14 animate-fade-in-up">
          <p className="text-sm uppercase tracking-[0.35em] text-primary font-semibold mb-4">
            Our Track Record
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-dark">
            The Numbers Behind Our Success
          </h2>
          <p className="text-base md:text-lg text-gray-muted max-w-2xl mx-auto">
            Accredian helps large enterprises build high-performing teams through measurable, strategically designed learning experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="rounded-3xl border border-gray-medium/70 bg-surface p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
                  <Icon size={24} />
                </div>
                <div className="text-3xl font-semibold text-dark mb-3">{stat.value}</div>
                <h3 className="text-xl font-semibold text-dark mb-3">{stat.label}</h3>
                <p className="text-sm leading-7 text-gray-muted">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
