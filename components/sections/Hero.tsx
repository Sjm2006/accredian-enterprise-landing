'use client';

export default function Hero() {
  const handleScroll = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-light via-white to-gray-light pt-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary opacity-5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary opacity-5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-block mb-6 px-4 py-2 bg-primary-light rounded-full">
              <span className="text-primary text-sm font-semibold">Transform Your Workforce</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-dark">
              Upskill Your Team with <span className="text-gradient">Industry-Recognized</span> Certifications
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Empower your organization with custom learning programs designed for enterprise growth. Scale from 10 to 10,000 employees with proven results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() => handleScroll('#lead-form')}
                className="btn-primary"
              >
                Book a Demo
              </button>
              <button
                onClick={() => handleScroll('#programs')}
                className="btn-secondary"
              >
                Explore Programs
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 text-sm">
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <p className="text-gray-600">Enterprise Clients</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">92%</div>
                <p className="text-gray-600">Completion Rate</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">40K+</div>
                <p className="text-gray-600">Learners Trained</p>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="w-full aspect-square bg-gradient-to-br from-primary to-secondary rounded-2xl opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl">🚀</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}