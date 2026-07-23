import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import Programs from '@/components/sections/Programs';
import Features from '@/components/sections/Features';
import Process from '@/components/sections/Process';
import Partners from '@/components/sections/Partners';
import Testimonials from '@/components/sections/Testimonials';
import LeadForm from '@/components/sections/LeadForm';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <Hero />
      <Programs />
      <Features />
      <Process />
      <Partners />
      <Testimonials />
      <LeadForm />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}