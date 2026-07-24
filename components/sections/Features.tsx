'use client';

import {
  BarChart3,
  Briefcase,
  Cpu,
  Crown,
  GraduationCap,
  Lightbulb,
  MessageCircle,
  Package,
  RefreshCw,
  Rocket,
  Settings2,
  Target,
  Wand2,
  Zap,
} from 'lucide-react';
import { features } from '@/data/features';

const iconMap = {
  rocket: Rocket,
  cpu: Cpu,
  crown: Crown,
  'bar-chart-3': BarChart3,
  'settings-2': Settings2,
  zap: Zap,
  'graduation-cap': GraduationCap,
  briefcase: Briefcase,
};

// Content for the "Key Aspects" timeline. Swap for a CMS/data source later if needed.
const keyAspects = [
  {
    icon: Lightbulb,
    title: 'Tailored Solutions',
    description: "Programs customized to your organization's goals and challenges.",
    row: 'top',
  },
  {
    icon: MessageCircle,
    title: 'Expert Guidance',
    description: 'Learn from industry leaders with real-world success.',
    row: 'bottom',
  },
  {
    icon: RefreshCw,
    title: 'Innovative Framework',
    description: 'Proprietary methods for impactful, application-driven results.',
    row: 'top',
  },
  {
    icon: Settings2,
    title: 'Advanced Technology',
    description: 'State-of-the-art LMS for seamless learning experiences.',
    row: 'bottom',
  },
  {
    icon: Wand2,
    title: 'Diverse Offerings',
    description: 'Courses across industries, skill levels, and emerging fields.',
    row: 'top',
  },
  {
    icon: Target,
    title: 'Proven Impact',
    description: 'Trusted by leading organizations for measurable ROI.',
    row: 'bottom',
  },
  {
    icon: Package,
    title: 'Flexible Delivery',
    description: 'Online and offline options tailored to your needs.',
    row: 'top',
  },
];

export default function Features() {
  return (
    <>
      {/* ============ SECTION 1: Key Aspects Timeline ============ */}
      <section id="edge" className="section-padding bg-white py-20 md:py-28 relative overflow-hidden">
        <div className="container-custom max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20 animate-fade-in-up">
            <p className="text-sm uppercase tracking-[0.35em] text-primary font-bold mb-3">
              Our Domain Expertise
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-dark">
              The Accredian Edge
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-muted max-w-3xl mx-auto">
              Key Aspects of <span className="text-primary">Our Strategic Training</span>
            </h3>
          </div>

          {/* Desktop zigzag timeline */}
          <div className="hidden lg:block relative">
            <div className="grid grid-cols-7 gap-4">
              {keyAspects.map((item, index) => {
                const Icon = item.icon;
                const isTop = item.row === 'top';
                return (
                  <div key={item.title} className="relative flex flex-col items-center">
                    {/* connector dot + line to text */}
                    <div
                      className={`flex flex-col items-center ${
                        isTop ? 'order-1' : 'order-3'
                      }`}
                    >
                      {isTop && (
                        <>
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mb-2" />
                          <span className="w-px h-8 bg-primary/40" />
                        </>
                      )}
                    </div>

                    {isTop && (
                      <div className="order-1 text-center px-1 mb-2 h-[92px]">
                        <p className="text-sm font-bold text-dark leading-snug">{item.title}</p>
                        <p className="text-xs text-gray-muted leading-relaxed mt-1">
                          {item.description}
                        </p>
                      </div>
                    )}

                    {/* icon node sits on the horizontal spine */}
                    <div className="order-2 relative z-10 flex items-center justify-center">
                      <div
                        className={`flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 shadow-elevated ${
                          index === 0
                            ? 'h-20 w-20 bg-white border-4 border-primary text-primary'
                            : 'h-20 w-20 bg-primary text-white'
                        }`}
                      >
                        <Icon className="h-8 w-8" strokeWidth={1.75} />
                      </div>
                    </div>

                    {!isTop && (
                      <div className="order-3 text-center px-1 mt-2 h-[92px]">
                        <p className="text-sm font-bold text-dark leading-snug">{item.title}</p>
                        <p className="text-xs text-gray-muted leading-relaxed mt-1">
                          {item.description}
                        </p>
                      </div>
                    )}

                    <div className={`flex flex-col items-center ${isTop ? 'order-3' : 'order-1'}`}>
                      {!isTop && (
                        <>
                          <span className="w-px h-8 bg-primary/40" />
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* horizontal spine line */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10 -z-0" />
          </div>

          {/* Mobile / tablet stacked timeline */}
          <div className="lg:hidden relative pl-10">
            <div className="absolute left-[27px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary/10 via-primary/40 to-primary/10" />
            <div className="flex flex-col gap-8">
              {keyAspects.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="relative flex items-start gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-soft z-10">
                      <Icon className="h-6 w-6" strokeWidth={1.75} />
                    </div>
                    <div className="pt-2">
                      <p className="text-base font-bold text-dark">{item.title}</p>
                      <p className="text-sm text-gray-muted leading-relaxed mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============ SECTION 2: Domain Expertise Grid ============ */}
      <section id="domain-expertise" className="section-padding bg-gray-light/40 py-20 md:py-28 relative">
        <div className="container-custom max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 md:mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-dark">
              Our <span className="text-primary">Domain Expertise</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-muted max-w-2xl mx-auto">
              <span className="text-primary font-semibold">Specialized Programs</span> Designed to
              Fuel Innovation
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = iconMap[feature.icon as keyof typeof iconMap] || Rocket;
              return (
                <div
                  key={feature.id}
                  className="group flex flex-col items-center text-center rounded-2xl border border-gray-medium/60 bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-elevated"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-light text-primary mb-5 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                    <Icon className="h-8 w-8" strokeWidth={1.75} />
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-dark">{feature.title}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}