'use client';

export default function CTA() {
  const handleScroll = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="section-padding bg-gradient-to-r from-primary via-primary-dark to-secondary">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Start Your Digital Transformation Today
          </h2>
          <p className="text-xl text-white text-opacity-90 mb-10">
            Join hundreds of enterprise organizations already transforming their workforce with Accredian's proven learning solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => handleScroll('#lead-form')}
              className="btn-white"
            >
              Book a Demo
            </button>
            <button
              onClick={() => handleScroll('#faq')}
              className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors duration-300"
            >
              Learn More
            </button>
          </div>

          <p className="text-sm text-white text-opacity-75 mt-8">
            No credit card required. Get started in minutes.
          </p>
        </div>
      </div>
    </section>
  );
}