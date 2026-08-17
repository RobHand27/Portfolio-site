import AnimatedSection from "@/components/animated-section"

const timeline = [
  {
    year: "2026 – 2026",
    role: "Machine Learning Engineer Intern",
    org: "Capital One",
    bullets: ["Machine Learning for Knowledge Graph Optimization - Summer 2026"],
    icon: {
      src: "https://www.capitalone.com/favicon.ico",
      alt: "Capital One logo",
    },
  },
  {
    year: "2025 – 2026",
    role: "Software Engineer Intern",
    org: "Synchrony Financial",
    bullets: ["Full Stack Dev with Vite and Java Spring Boot - Summer 2025, Fall 2025, Spring 2026"],
    icon: {
      src: "https://www.synchrony.com/favicon.ico",
      alt: "Synchrony logo",
    },
  },
  {
    year: "2025 – 2025",
    role: "Undergraduate NLP Researcher",
    org: "Forward Data Lab · UIUC",
    bullets: ["RAG methodology research under Prof. Kevin Chang. Contributed to an academic paper discovery tool."],
    icon: {
      src: "https://brand.illinois.edu/wp-content/uploads/2024/02/Block-I-orange-white-background.png",
      alt: "University of Illinois Block I",
    },
  },
  {
    year: "2024 – 2026",
    role: "Course Assistant",
    org: "Siebel School of Computing and Data Science · UIUC",
    bullets: ["Data Structures and OOP in C++"],
    icon: {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScB6KzFcW0CFx8xvlJB56YQ9XXYZi4UCcf7z2aKelM5Q&s=10",
      alt: "UIUC Course Assistant logo",
      fit: 'cover',
    },
  },
  {
    year: "2024 – 2025",
    role: "Full-Stack Engineer",
    org: "UIUC Disruption Lab",
    bullets: ["Worked on full-stack apps and ML tools for clients including DSRS and PowerBox Technologies."],
    icon: {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZTuSW4J5Q095u_yrvE7D0L4O_HV765kF4148h3KDuHA&s=10",
      alt: "UIUC Disruption Lab logo",
      fit: 'cover',
    },
  },
  {
    year: "2023",
    role: "B.S. Computer Science",
    org: "University of Illinois Urbana-Champaign",
    bullets: [],
    icon: {
      src: "https://brand.illinois.edu/wp-content/uploads/2024/02/Block-I-orange-white-background.png",
      alt: "University of Illinois Block I",
    },
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection delay={0.1}>
          <div className="glass p-6 md:p-10">
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-2" style={{ color: "rgba(110,180,255,0.65)" }}>
                Career
              </p>
              <h2 className="text-3xl md:text-4xl font-bold shimmer-text">Experience</h2>
            </div>

            <div className="relative">
              <div className="absolute left-[17px] top-2 bottom-2 w-px" style={{ background: "linear-gradient(to bottom, transparent, rgba(60,140,240,0.45), transparent)" }} />
              <ol className="space-y-8 pl-10">
                {timeline.map((item, i) => (
                  <li key={i} className="relative">
                    <span className="absolute -left-[23px] top-[5px] w-3 h-3 rounded-full" style={{ background: "rgba(50,135,240,0.9)", boxShadow: "0 0 10px rgba(50,135,240,0.55)", border: "1.5px solid rgba(140,200,255,0.4)" }} />
                    <div className="grid gap-4 md:grid-cols-[84px_minmax(0,1fr)] md:gap-6 md:items-start">
                      <div className="flex h-[84px] w-[84px] items-center justify-center rounded-[20px] border border-white/15 bg-white overflow-hidden shadow-[0_14px_36px_rgba(0,0,0,0.18)]">
                        <img
                          src={item.icon.src}
                          alt={item.icon.alt}
                          className={item.icon.fit === 'cover' ? 'h-full w-full object-cover' : 'h-[56px] w-[56px] object-contain'}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>

                      <div className="min-w-0">
                        <p className="text-[11px] font-mono mb-1" style={{ color: "rgba(110,180,255,0.65)" }}>{item.year}</p>
                        <p className="text-base font-semibold leading-tight" style={{ color: "rgba(225,238,255,0.93)" }}>{item.role}</p>
                        <p className="text-sm font-medium mb-1" style={{ color: "rgba(130,195,255,0.75)" }}>{item.org}</p>

                        {item.bullets.length > 0 ? (
                          <div className="mt-2 space-y-2">
                            {item.bullets.map((bullet, bulletIndex) => (
                              <p key={bulletIndex} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: "rgba(190,215,245,0.58)" }}>
                                <span className="mt-[2px] shrink-0 text-sm leading-none">&gt;</span>
                                <span className="min-w-0 flex-1">{bullet}</span>
                              </p>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
