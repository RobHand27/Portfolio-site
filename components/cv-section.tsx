import { FileDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import SectionTitle from "@/components/section-title"
import AnimatedSection from "@/components/animated-section"

export default function CVSection() {
  return (
    <section id="cv" className="py-16">
      <div className="max-w-4xl mx-auto text-center">
        <SectionTitle id="cv" title="" highlight="CV" />

        <AnimatedSection delay={0.3}>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Download my resume to learn more about my educational background, work experiences, and technical skills.
            </p>

            <Button className="flex items-center gap-2" size="lg" asChild>
              <a href="/resume.pdf" download>
                <FileDown className="h-5 w-5" />
                <span>Download Resume</span>
              </a>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
