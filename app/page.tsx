import Navbar from "@/components/navbar"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import CVSection from "@/components/cv-section"
import ContactSection from "@/components/contact-section"
import { Toaster } from "@/components/ui/toaster"

export default function Home() { // changed the routing like this for better readabillity
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <AboutSection />
        <ProjectsSection />
        <CVSection />
        <ContactSection />
      </div>
      <Toaster />
    </main>
  )
}

