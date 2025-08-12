import Image from "next/image"
import { Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import SectionTitle from "@/components/section-title"
import AnimatedSection from "@/components/animated-section"
import { getAssetPath } from "@/lib/utils"

export default function AboutSection() {
  return (
    <section id="about" className="pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle id="about" title="Me" highlight="About" />

        {/* Top grid: left = first two text boxes, right = image + buttons */}
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div className="md:col-span-2 order-2 md:order-1 flex flex-col gap-6">
            <AnimatedSection delay={0.3}>
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl shadow-sm">
                <h3 className="text-2xl font-bold text-blue-600 mb-3">Hi, I'm Rob 👋</h3>
                <p className="text-gray-700 leading-relaxed">
                  I'm a third-year computer science student at UIUC interested in full-stack development and machine
                  learning.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <p className="text-gray-700 leading-relaxed">
                  In my full-stack development roles, I love to build and deploy cool and impactful projects. I've built UI components in frameworks like React and Vue, and backend components in frameworks like Node, Flask, Express, and SpringBoot.
                  I've developed both Restful APIs and FastAPI endpoints, and have experience with databases like PostgreSQL, MySQL, Neo4j, and MongoDB. Most of my ML work involves libraries including, Pytorch, Tensorflow, Scikit Learn, Pandas, and Numpy. Most of my work is public on my{' '}
                  <a href="https://github.com/RobHand27" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">GitHub</a>
                  , however if you are interested in forking one of my other projects, please reach out!
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Image and buttons, aligned to top */}
          <div className="order-1 md:order-2 flex flex-col items-center space-y-5">
            <div className="relative w-72 h-72 rounded-full overflow-hidden border-8 border-blue-500 shadow-lg">
              <Image
                src={getAssetPath('/me.png') || "/placeholder.svg"}
                alt="Profile picture"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col space-y-3 w-full max-w-xs">
              <Button variant="outline" className="flex items-center gap-3 rounded-full px-5 py-2.5 text-base w-full border-2 border-gray-300 hover:border-blue-500 transition-all" asChild>
                <a href="https://www.linkedin.com/in/rhand7/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span>Robert Hand</span>
                </a>
              </Button>
              <Button variant="outline" className="flex items-center gap-3 rounded-full px-5 py-2.5 text-base w-full border-2 border-gray-300 hover:border-blue-500 transition-all" asChild>
                <a href="https://github.com/RobHand27" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span>RobHand27</span>
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom: third and fourth text boxes, full width */}
        <div className="flex flex-col gap-6 mt-10">
          <AnimatedSection delay={0.5}>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <p className="text-gray-700 leading-relaxed">
                My most recent role was as a Software Engineer Intern at Synchrony Financial, where I worked on internal facing full-stack applications using ReactJS and Java Springboot.
                During the school term, I also worked as an Undergraduate Researcher with Forward Data Lab under Professor Kevin Chang. Here I conducted research on RAG methodologies, analyzing model strengths and limitations
                through comparison of LLM reasoning, topic grounding, and data extraction. This work included my backend code contributions to an academic paper discovery tool being developed in Forward Data Lab.
                Im also involved in UIUC's Disruption Lab, where I have had the privledge to develop full-stack applications and ML tools for clients such as the Data Science Research Institute and PowerBox Technologies with teams of other top engineers on campus.
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
    </section>
  )
}

