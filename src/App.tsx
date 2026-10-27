import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import RevealOnScroll from './components/ui/RevealOnScroll'
import ChatbotWidget from './features/chatbot/ChatbotWidget'
import AboutSection from './sections/AboutSection'
import ContactSection from './sections/ContactSection'
import EducationSection from './sections/EducationSection'
import HeroSection from './sections/HeroSection'
import ProjectSection from './sections/projects/ProjectSection'
import SkillsSection from './sections/SkillsSection'
import ServicesSection from './sections/ServicesSection'
import TiktokSection from './sections/TiktokSection'
import TestimonialsSection from './sections/TestimonialsSection'
import YoutubeSection from './sections/YoutubeSection'

export default function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-zinc-950 text-zinc-100 selection:bg-zinc-800 selection:text-white">
      {/* Nav */}
      <Navbar />
      <ChatbotWidget />

      {/* Hero */}
      <RevealOnScroll>
        <HeroSection />
      </RevealOnScroll>
      {/* About */}
      <RevealOnScroll>
        <AboutSection />
      </RevealOnScroll>

      {/* Projects */}
      <RevealOnScroll>
        <ProjectSection />
      </RevealOnScroll>

      {/* Skills */}

      <RevealOnScroll>
        <SkillsSection />
      </RevealOnScroll>

      {/* Education Section */}
      <RevealOnScroll>
        <EducationSection />
      </RevealOnScroll>
      {/* YouTube */}
      <RevealOnScroll>
        <YoutubeSection />
      </RevealOnScroll>
      {/* TikTok */}
      <RevealOnScroll>
        <TiktokSection />
      </RevealOnScroll>
      {/* Offres de formation et création de sites web */}
      <RevealOnScroll>
        <ServicesSection />
      </RevealOnScroll>

      {/* Témoignages */}
      <RevealOnScroll>
        <TestimonialsSection />
      </RevealOnScroll>

      {/* Contact */}
      <RevealOnScroll>
        <ContactSection />
      </RevealOnScroll>

      <Footer />
    </div>
  )
}
