import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ProjectSection from './components/ProjectSection'
import EducationSection from './components/EducationSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-zinc-950 text-zinc-100 selection:bg-zinc-800 selection:text-white">
      {/* Nav */}
      <Navbar />

      {/* Hero */}
      <HeroSection />
      {/* About */}
      <AboutSection />

      {/* Skills */}

      <SkillsSection />
      {/* Projects */}
      <ProjectSection />

      {/* Education Section */}
      <EducationSection />
      {/* Contact */}
      <ContactSection />

      <Footer />
    </div>
  )
}
