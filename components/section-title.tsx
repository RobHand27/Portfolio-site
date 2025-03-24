"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"

interface SectionTitleProps {
  title: string
  highlight?: string
  id: string
}

export default function SectionTitle({ title, highlight, id }: SectionTitleProps) {
  const ref = useRef<HTMLHeadingElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <h2
      ref={ref}
      id={id}
      className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 relative overflow-hidden"
      style={{
        transform: isInView ? "translateY(0)" : "translateY(20px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
      }}
    >
      {highlight ? (
        <>
          <span className="text-blue-600">{highlight}</span> {title}
        </>
      ) : (
        <span className="text-blue-600">{title}</span>
      )}
    </h2>
  )
}

