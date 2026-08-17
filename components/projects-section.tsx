"use client"
import { useState } from "react"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { getAssetPath } from "@/lib/utils"
import AnimatedSection from "@/components/animated-section"

const projects = [
  {
    id: 1,
    title: "MusicElo",
    tagline: "Head-to-head music voting game",
    description: "Full-stack music voting app where users battle songs bracket-style. Built with React, Next.js, FastAPI, and Supabase.",
    image: "/musicelo.png",
    tags: ["React", "Next.js", "FastAPI", "Supabase"],
    url: "https://musicelo.vercel.app/vote",
    accent: "#a78bfa",
  },
  {
    id: 2,
    title: "Campus Amenities Tracker",
    tagline: "Rank your favorite water fountains, vending machines, and bathrooms at UIUC",
    description: "Full-stack CRUD app for tracking and rating campus amenities. Built with React, Next.js, FastAPI, and Supabase.",
    image: "/cat.png",
    tags: ["React", "SQL", "FastAPI","Supabase"], // left off here
    url: "https://github.com/DRAGONUber/Campus-Amenities-Tracker-",
    accent: "#4cd334",
  },
  {
    id: 3,
    title: "Synchrony Shield",
    tagline: "Privacy guard for ChatGPT",
    description: "Runner-up in a company-wide hackathon. Chrome extension that detects and blocks data leaks in GPT prompts in real time.",
    image: "/syfsheild.png",
    tags: ["Chrome Extension", "React", "Privacy"],
    url: "https://synchronyshield.vercel.app/",
    accent: "#60a5fa",
  },
  {
    id: 4,
    title: "AltCredit",
    tagline: "Loan eligibility for the unbanked",
    description: "Tool for banks to assess loan eligibility for undocumented individuals using alternative credit signals. HackIllinois 2025 Capital One track.",
    image: "/AltCredit.png",
    tags: ["React", "Python", "Fintech"],
    url: "https://github.com/RobHand27/AltCredit-HackIllinois-2025",
    accent: "#34d399",
  },
  {
    id: 5,
    title: "BioLitRecs",
    tagline: "Similarity and text retriaval tool for cancer research litterature",
    description: "Built a naive bayes classifier to classify cancer research papers and a content-based recommender system to find related papers for cancer researchers.",
    image: "/bio.png",
    tags: ["Natural Language Processing", "Machine Learning", "Python", "Text Retrieval"],
    url: "https://github.com/RobHand27/BioLitRecs",
    accent: "#d10ed8",
  },
  {
    id: 6,
    title: "DSRI Workflow Tool",
    tagline: "Graph visualization for research workflows",
    description: "Interactive graph viz tool for Data Science Research Institute workflows using Neo4j and a React/Vue.js frontend.",
    image: "/hey.png",
    tags: ["React", "Vue.js", "Neo4j"],
    url: "https://github.com/RobHand27/",
    accent: "#fb923c",
  },
  {
    id: 7,
    title: "MCQ Solver",
    tagline: "AI-powered Chrome extension",
    description: "Hidden extension that uses OpenAI's API to solve multiple-choice questions from highlighted text or screenshots.",
    image: "/MCQhelp.png",
    tags: ["Chrome Extension", "OpenAI API"],
    url: "https://github.com/RobHand27/MCQ-Helper",
    accent: "#facc15",
  },
  {
    id: 8,
    title: "QuickThoughts",
    tagline: "Micro-blogging social platform",
    description: "Social networking platform built on the MERN stack for sharing quick thoughts and connecting with others.",
    image: "/QuickThoughts.png",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    url: "https://github.com/CS222-UIUC/main-project-team-102",
    accent: "#38bdf8",
  },
  {
    id: 9,
    title: "Voltage Meter ML Model",
    tagline: "Power usage forecasting for Latin America",
    description: "ML model built with Meta's Prophet for a startup tracking electricity consumption trends across Latin American markets.",
    image: "/Powerbox.png",
    tags: ["Python", "Prophet", "Google Cloud", "Pandas"],
    url: "https://github.com/RobHand27/Machine-Learning-Code-Samples/tree/main/Power%20Prediction%20Data",
    accent: "#4ade80",
  },
  {
    id: 10,
    title: "Mosaic Maker",
    tagline: "KD-Tree photo mosaic generator",
    description: "C++ program that generates a photo mosaic from a collection of smaller images using a KD-Tree for blazing-fast nearest-neighbor search.",
    image: "/mosaic.png",
    tags: ["C++", "Data Structures", "Algorithms"],
    url: "https://github.com/RobHand27/Mosaic-Maker",
    accent: "#c084fc",
  },
  {
    id: 11,
    title: "Chess Rating Predictions",
    tagline: "ML regression on game history",
    description: "Regression model predicting chess ratings from game history and player statistics using scikit-learn.",
    image: "/Chess.png",
    tags: ["Python", "scikit-learn", "Matplotlib"],
    url: "https://github.com/RobHand27/Machine-Learning-Code-Samples/tree/main/Chess%20Regression%20Data",
    accent: "#e2e8f0",
  }
]

// export default function ProjectsSection() {
//   const [hovered, setHovered] = useState<number | null>(null)
//   return (
//     <section id="projects" className="relative py-24 px-4">
//       <div className="max-w-6xl mx-auto">
//         <AnimatedSection delay={0.1}>
//           <div className="mb-12">
//             <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: "rgba(110,180,255,0.65)" }}>
//               Portfolio
//             </p>
//             <h2 className="text-4xl md:text-5xl font-bold shimmer-text">Projects</h2>
//           </div>
//         </AnimatedSection>
//         <AnimatedSection delay={0.2}>
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
//             {projects.map((project) => (
//               <a
//                 key={project.id}
//                 href={project.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="dock-card group block no-underline"
//                 onMouseEnter={() => setHovered(project.id)}
//                 onMouseLeave={() => setHovered(null)}
//                 style={{
//                   boxShadow:
//                     hovered === project.id
//                       ? `0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1), 0 0 40px ${project.accent}22`
//                       : "none",
//                 }}
//               >
//                 {/* Thumbnail */}
//                 <div className="relative h-44 w-full overflow-hidden rounded-t-[20px]">
//                   <Image
//                     src={getAssetPath(project.image) || "/placeholder.svg"}
//                     alt={project.title}
//                     fill
//                     className="object-cover transition-transform duration-500 group-hover:scale-105"
//                   />
//                   <div className="absolute inset-x-0 bottom-0 h-20" style={{ background: "linear-gradient(to top, rgba(10,10,26,0.85) 0%, transparent 100%)" }} />
//                   <span className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full" style={{ background: project.accent, boxShadow: `0 0 8px ${project.accent}` }} />
//                 </div>
//                 {/* Card body */}
//                 <div className="p-5">
//                   <div className="flex items-start justify-between gap-2 mb-1">
//                     <h3 className="text-base font-semibold text-white/90 leading-tight">{project.title}</h3>
//                     <ExternalLink className="shrink-0 h-3.5 w-3.5 mt-0.5 opacity-0 group-hover:opacity-60 transition-opacity" style={{ color: project.accent }} />
//                   </div>
//                   <p className="text-xs font-medium mb-3" style={{ color: project.accent, opacity: 0.85 }}>{project.tagline}</p>
//                   <p className="text-xs leading-relaxed mb-4" style={{ color: "rgba(180,215,255,0.6)" }}>{project.description}</p>
//                   <div className="flex flex-wrap gap-1.5">
//                     {project.tags.map((tag) => (
//                       <span key={tag} className="text-[10px] px-2.5 py-0.5 rounded-full font-medium" style={{ background: `${project.accent}18`, border: `1px solid ${project.accent}35`, color: project.accent }}>{tag}</span>
//                     ))}
//                   </div>
//                 </div>
//               </a>
//             ))}
//           </div>
//         </AnimatedSection>
//       </div>
//     </section>
//   )
// }

export default function ProjectsSection() {
  const [hovered, setHovered] = useState<number | null>(null)
  
  return (
    <section id="projects" className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection delay={0.1}>
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: "rgba(110,180,255,0.65)" }}>
              Portfolio
            </p>
            <h2 className="text-4xl md:text-5xl font-bold shimmer-text">Projects</h2>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={0.2}>
          {/* Changed sm:grid-cols-3 to md:grid-cols-2 lg:grid-cols-3 for better responsiveness */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                // Added flex and h-full to ensure the card takes up proper space on mobile
                className="dock-card group flex flex-col no-underline h-full rounded-[20px]"
                onMouseEnter={() => setHovered(project.id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  boxShadow:
                    hovered === project.id
                      ? `0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1), 0 0 40px ${project.accent}22`
                      : "none",
                }}
              >
                {/* Thumbnail */}
                <div className="relative h-44 w-full shrink-0 overflow-hidden rounded-t-[20px]">
                  <Image
                    src={getAssetPath(project.image) || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-20" style={{ background: "linear-gradient(to top, rgba(10,10,26,0.85) 0%, transparent 100%)" }} />
                  <span className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full" style={{ background: project.accent, boxShadow: `0 0 8px ${project.accent}` }} />
                </div>
                
                {/* Card body */}
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-base font-semibold text-white/90 leading-tight">{project.title}</h3>
                    <ExternalLink className="shrink-0 h-3.5 w-3.5 mt-0.5 opacity-0 group-hover:opacity-60 transition-opacity" style={{ color: project.accent }} />
                  </div>
                  <p className="text-xs font-medium mb-3" style={{ color: project.accent, opacity: 0.85 }}>{project.tagline}</p>
                  <p className="text-xs leading-relaxed mb-4 flex-grow" style={{ color: "rgba(180,215,255,0.6)" }}>{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] px-2.5 py-0.5 rounded-full font-medium" style={{ background: `${project.accent}18`, border: `1px solid ${project.accent}35`, color: project.accent }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
