import { ThemeProvider } from './ThemeContext'
import ParticleBackground from './components/ParticleBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Process from './components/Process'
import Certifications from './components/Certifications'
import Contact from './components/Contact'

export default function App() {
  return (
    <ThemeProvider>
      <ParticleBackground />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Process />
        <Certifications />
        <Contact />
      </div>
    </ThemeProvider>
  )
}
