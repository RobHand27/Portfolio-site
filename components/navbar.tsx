"use client"
import { useState, useEffect } from "react"

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about")
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const sections = ["about", "experience", "projects"]
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120
      sections.forEach((id) => {
        const el = document.getElementById(id)
        if (el) {
          const { offsetTop, offsetHeight } = el
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(id)
          }
        }
      })
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setMobileOpen(false)
  }

  const links = [
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
  ]

  return (
    <>
      {/* Desktop pill navbar - hidden on mobile */}
      <nav
        className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 hidden md:block transition-all duration-500 ${
          scrolled ? "nav-pill scrolled" : "nav-pill"
        }`}
      >
        <ul className="flex items-center gap-1 px-3 py-2">
          {links.map(({ label, id }) => {
            const isActive = activeSection === id
            return (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive ? "text-white" : "text-white/55 hover:text-white/85"
                  }`}
                >
                  {isActive && (
                    <span
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: "rgba(255,255,255,0.13)",
                        border: "1px solid rgba(255,255,255,0.18)",
                        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.22)",
                      }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </button>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Mobile hamburger - visible only on mobile */}
      <nav className="fixed top-4 right-4 z-50 md:hidden">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="glass p-3 rounded-2xl text-white/75 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            {mobileOpen ? (
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            )}
          </svg>
        </button>
        {mobileOpen && (
          <div className="absolute top-14 right-0 glass-strong overflow-hidden" style={{ minWidth: 170 }}>
            <ul className="py-2">
              {links.map(({ label, id }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className={`w-full text-left px-5 py-3 text-sm font-medium transition-colors ${
                      activeSection === id ? "text-white" : "text-white/55 hover:text-white/85"
                    }`}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  )
}


