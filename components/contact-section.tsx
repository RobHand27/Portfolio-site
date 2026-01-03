import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import SectionTitle from "@/components/section-title"
import AnimatedSection from "@/components/animated-section"

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <SectionTitle id="contact" title="" highlight="Contact" />

        <AnimatedSection delay={0.3}>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Interested in working together or have questions about my projects? Feel free to reach out via email and
              I'll get back to you as soon as possible.
            </p>

            <Button className="flex items-center gap-2" size="lg" asChild>
              <a href="mailto:RobertTHand7@gmail.com">
                <Mail className="h-5 w-5" />
                <span>RobertTHand7@gmail.com</span>
              </a>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

