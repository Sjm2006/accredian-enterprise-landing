'use client';

import { programs } from '@/data/programs';

export default function Programs() {
  return (
    <section id="programs" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Learning Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive, industry-aligned programs designed to build critical skills your organization needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={program.id}
              className="card p-8 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl mb-4">{program.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-dark">{program.title}</h3>
              <p className="text-gray-600 mb-6">{program.description}</p>

              <div className="flex justify-between items-center text-sm mb-6">
                <span className="px-3 py-1 bg-primary-light text-primary rounded-full font-semibold">
                  {program.duration}
                </span>
                <span className="text-gray-600 font-medium">{program.level}</span>
              </div>

              <button className="btn-secondary w-full text-center justify-center">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}