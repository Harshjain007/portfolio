import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingBackground from './components/FloatingBackground'
import SectionNav from './components/SectionNav'

function App() {
  return (
    <>
      <FloatingBackground />
      <SectionNav />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  )
}

export default App
