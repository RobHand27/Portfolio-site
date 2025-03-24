"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "cv", "contact"]
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
          }
        }
      })

      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-blue-600",
        scrolled ? "py-3 shadow-md" : "py-5",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <ul className="flex space-x-8 md:space-x-16">
            {["About", "Projects", "CV", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById(item.toLowerCase())?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }}
                  className={cn(
                    "text-lg font-medium transition-colors duration-200 text-white hover:text-white/90",
                    activeSection === item.toLowerCase() ? "border-b-2 border-white pb-1" : "",
                  )}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

