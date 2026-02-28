import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { LogoMarquee } from '@/components/Marquee';
import { WhyUs } from '@/components/WhyUs';
import { Mission } from '@/components/Mission';
import { Stats } from '@/components/Stats';
import { Services } from '@/components/Services';
import { Pricing } from '@/components/Pricing';
import { Founder } from '@/components/Founder';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';
import { ProgressBar } from '@/components/ProgressBar';

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <ProgressBar />
      <Hero />
      <About />
      <LogoMarquee />
      <Services />
      <Pricing />
      <WhyUs />
      <Mission />
      <Stats />
      <Founder />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
