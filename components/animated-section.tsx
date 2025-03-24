"use client"

import { type ReactNode, useRef } from "react"
import { useInView } from "framer-motion"

interface AnimatedSectionProps {
  children: ReactNode
  delay?: number
}

export default function AnimatedSection({ children, delay = 0.2 }: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? "translateY(0)" : "translateY(30px)",
        opacity: isInView ? 1 : 0,
        transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}

