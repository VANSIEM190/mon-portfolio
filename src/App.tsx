import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ProjectSection from './components/ProjectSection'
import EducationSection from './components/EducationSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import YoutubeSection from './components/YoutubeSection'
import TiktokSection from './components/TiktokSection'
import ChatbotWidget from './components/Chatbot'

export default function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-zinc-950 text-zinc-100 selection:bg-zinc-800 selection:text-white">
      {/* Nav */}
      <Navbar />
      <ChatbotWidget />

      {/* Hero */}
      <HeroSection />
      {/* About */}
      <AboutSection />

      {/* Projects */}
      <ProjectSection />

      {/* Skills */}

      <SkillsSection />

      {/* Education Section */}
      <EducationSection />
      {/* youtube  Section */}
      <YoutubeSection />
      {/* youtube  Section */}
      <TiktokSection />

      {/* Contact */}
      <ContactSection />

      <Footer />
    </div>
  )
}
