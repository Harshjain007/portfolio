import GridBackground from './components/GridBackground';
import Navbar from './components/Navbar';
import SectionNav from './components/SectionNav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <GridBackground />
      <Navbar />
      <SectionNav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
