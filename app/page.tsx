import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import Partners from '@/components/sections/Partners';
import Features from '@/components/sections/Features';
import Programs from '@/components/sections/Programs';
import Process from '@/components/sections/Process';
import FAQ from '@/components/sections/FAQ';
import Testimonials from '@/components/sections/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <Hero />
      <Stats />
      <Partners />
      <Features />
      <Programs />
      <Process />
      <FAQ />
      <Testimonials />
      <Footer />
    </main>
  );
}