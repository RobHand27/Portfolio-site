"use client"
import Image from "next/image"
import { Github, Linkedin, Mail, FileDown } from "lucide-react"
import { getAssetPath } from "@/lib/utils"
import AnimatedSection from "@/components/animated-section"
import GitHubCalendar from "@/components/github-calendar"

export default function AboutSection() {
  return (
    <section id="about" className="relative pt-32 pb-10 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Hero card */}
        <AnimatedSection delay={0.1}>
          <div className="glass-strong p-8 md:p-12 mb-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(160,210,255,0.3), transparent)" }} />
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Profile photo */}
              <div className="shrink-0">
                <div className="relative rounded-[28px] overflow-hidden" style={{ width: 140, height: 140, border: "1.5px solid rgba(160,210,255,0.22)", boxShadow: "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(180,220,255,0.18)" }}>
                  <Image
                    src={getAssetPath('/me.png') || "/placeholder.svg"}
                    alt="Rob Hand"
                    fill
                    className="object-cover object-[75%_0%] scale-150"
                  />
                </div>
              </div>
              {/* Bio text */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-1 shimmer-text">Rob Hand</h1>
                <p className="text-base font-medium mb-5" style={{ color: "rgba(130,195,255,0.85)" }}>
                  Software Engineer · UIUC Computer Science
                </p>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(200,220,245,0.68)" }}>
                  Fourth-year CS student at UIUC focused on machine learning, AI, and full-stack development.
                  My most recent work is open on GitHub; please reach out if you'd like to talk about opportunities or anything tech!
                </p>
                {/* Social links */}
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <a href="https://www.linkedin.com/in/rhand7/" target="_blank" rel="noopener noreferrer" className="glow-btn flex items-center gap-2 text-sm no-underline">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                  <a href="https://github.com/RobHand27" target="_blank" rel="noopener noreferrer" className="glow-btn flex items-center gap-2 text-sm no-underline">
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                  <a href="mailto:RobertTHand7@gmail.com" className="glow-btn flex items-center gap-2 text-sm no-underline">
                    <Mail className="h-4 w-4" />
                    Email
                  </a>
                  <a href={getAssetPath('/resume.pdf') || '/resume.pdf'} download className="glow-btn flex items-center gap-2 text-sm no-underline">
                    <FileDown className="h-4 w-4" />
                    Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* GitHub Contribution Calendar */}
        <AnimatedSection delay={0.2}>
          <div className="glass p-6 md:p-8">
            <GitHubCalendar username="RobHand27" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}


