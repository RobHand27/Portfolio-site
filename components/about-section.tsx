import Image from "next/image"
import { Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import SectionTitle from "@/components/section-title"
import AnimatedSection from "@/components/animated-section"

export default function AboutSection() {
  return (
    <section id="about" className="pt-20 pb-16">
      <div className="max-w-5xl mx-auto">
        <SectionTitle id="about" title="Me" highlight="About" />

        <div className="grid md:grid-cols-3 gap-10 items-center">
          <div className="md:col-span-2 order-2 md:order-1">
            <div className="space-y-6">
              <AnimatedSection delay={0.3}>
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl shadow-sm">
                  <h3 className="text-2xl font-bold text-blue-600 mb-3">Hi, I'm Rob 👋</h3>
                  <p className="text-gray-700 leading-relaxed">
                    I'm a second-year computer science student at UIUC interested in full-stack development and machine
                    learning.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <p className="text-gray-700 leading-relaxed">
                    In my full-stack development roles, most of my work has been with the MERN stack, building UI
                    components in React.js, backend APIs in Node.js and Express.js, and managing databases in MongoDB
                    and PostgreSQL. While most of my recent projects, like the social networking site QuickThoughts,
                    along with this site, are built with these technologies, I also have experience in Python with Flask
                    and a few other HTML frameworks.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.5}>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <p className="text-gray-700 leading-relaxed">
                    Much of my experience in machine learning comes from my work at UIUC Disruption Lab, as a researcher at Forward Data Lab, and with
                    PowerBox Technologies, a research park startup. In both roles, most of my code contributions were in
                    Python, using libraries such as Numpy, Sklearn, Pandas, and Prophet while utilizing tools like
                    Google Cloud Platform and VertexAI. You can find many of my code samples from these roles on my
                    GitHub profile.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.6}>
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl shadow-sm">
                  <p className="text-gray-700 leading-relaxed">
                    I'm an adaptive learner, and picking up new tools quickly is one of my biggest strengths in the
                    industry. Please reach out if you'd like to chat about professional opportunities or anything tech!
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <AnimatedSection delay={0.3}>
              <div className="flex flex-col items-center space-y-6">
                <div className="relative w-80 h-80 rounded-full overflow-hidden border-8 border-blue-500 shadow-lg">
                  <Image
                    src="/me.png"
                    alt="Profile picture"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col space-y-4 w-full max-w-xs">
                  <Button variant="outline" className="flex items-center gap-3 rounded-full px-6 py-3 text-lg w-full border-2 border-gray-300 hover:border-blue-500 transition-all" asChild>
                    <a href="https://www.linkedin.com/in/rhand7/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-6 w-6" />
                      <span>Robert Hand</span>
                    </a>
                  </Button>

                  <Button variant="outline" className="flex items-center gap-3 rounded-full px-6 py-3 text-lg w-full border-2 border-gray-300 hover:border-blue-500 transition-all" asChild>
                    <a href="https://github.com/RobHand27" target="_blank" rel="noopener noreferrer">
                      <Github className="h-6 w-6" />
                      <span>RobHand27</span>
                    </a>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}

