import Navbar from "@/components/navbar"
import AboutSection from "@/components/about-section"
import ExperienceSection from "@/components/experience-section"
import ProjectsSection from "@/components/projects-section"

export default function Home() {
  return (
    <main className="relative min-h-screen" style={{ background: "#04070f" }}>
      {/* Ambient orbs */}
      <div
        className="orb"
        style={{
          width: 700,
          height: 700,
          top: "-160px",
          left: "-200px",
          background: "radial-gradient(circle, #1a6bbf 0%, #0a2d6e 55%, transparent 80%)",
          animationDuration: "16s",
        }}
      />
      <div
        className="orb"
        style={{
          width: 560,
          height: 560,
          top: "18%",
          right: "-130px",
          background: "radial-gradient(circle, #2d8fd4 0%, #0e3a80 55%, transparent 80%)",
          animationDuration: "20s",
          animationDelay: "2s",
        }}
      />
      <div
        className="orb"
        style={{
          width: 480,
          height: 480,
          top: "55%",
          left: "4%",
          background: "radial-gradient(circle, #0d4a8a 0%, #040e2e 55%, transparent 80%)",
          animationDuration: "24s",
          animationDelay: "5s",
        }}
      />
      <div
        className="orb"
        style={{
          width: 400,
          height: 400,
          bottom: "8%",
          right: "10%",
          background: "radial-gradient(circle, #0a3570 0%, #020a1e 55%, transparent 80%)",
          animationDuration: "18s",
          animationDelay: "1s",
        }}
      />
      <div
        className="orb"
        style={{
          width: 320,
          height: 320,
          top: "40%",
          left: "38%",
          background: "radial-gradient(circle, #1e7ec8 0%, #0a3060 55%, transparent 80%)",
          animationDuration: "22s",
          animationDelay: "8s",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
      </div>
    </main>
  )
}

