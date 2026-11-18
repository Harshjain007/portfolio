import { MotionConfig } from 'framer-motion';
import GridBackground from './components/GridBackground';
import PointerGlow from './components/PointerGlow';
import Navbar from './components/Navbar';
import SectionNav from './components/SectionNav';
import Hero from './components/Hero';
import Products from './components/Products';
import Services from './components/Services';
import About from './components/About';
import Work from './components/Work';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <GridBackground />
      <PointerGlow />
      <Navbar />
      <SectionNav />
      <main>
        <Hero />
        <Products />
        <Services />
        <About />
        <Work />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </MotionConfig>
  );
}
