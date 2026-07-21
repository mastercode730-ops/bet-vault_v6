import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Sports from '@/components/Sports';
import About from '@/components/About';
import Blog from '@/components/Blog';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustStrip />
      <Features />
      <HowItWorks />
      <Sports />
      <About />
      <Blog />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
