"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { cn } from "@/lib/utils"

export function Philosophy() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const line1 = "Programming languages are tools."
  const line2 = "Concepts build products."
  
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])
  const blur = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [10, 0, 0, 10])

  return (
    <section 
      id="philosophy" 
      ref={containerRef}
      className="py-64 px-6 md:px-12 lg:px-24 bg-black text-white relative overflow-hidden"
    >
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_70%)]" />
        <div className="absolute inset-0 noise-bg opacity-10 mix-blend-soft-light" />
      </div>

      <motion.div 
        style={{ opacity, scale, filter: `blur(${blur}px)` }}
        className="max-w-5xl mx-auto relative z-10 text-center"
      >
        <div className="mb-12 flex flex-col items-center">
          <div className="w-12 h-px bg-white/10 mb-8" />
          <span className="text-[10px] uppercase tracking-[1em] text-white/20 font-bold">The Core Belief</span>
        </div>

        <blockquote className="text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tighter">
          <p className="mb-8 overflow-hidden">
            {line1.split(" ").map((word, index) => (
              <motion.span
                key={index}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.21, 0.47, 0.32, 0.98]
                }}
                className="inline-block mr-[0.3em] text-white/30 hover:text-white transition-colors duration-700"
              >
                {word}
              </motion.span>
            ))}
          </p>
          <p className="overflow-hidden">
            {line2.split(" ").map((word, index) => (
              <motion.span
                key={index}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.5 + index * 0.1,
                  ease: [0.21, 0.47, 0.32, 0.98]
                }}
                className="inline-block mr-[0.3em] text-white hover:text-white/80 transition-colors duration-700"
              >
                {word}
              </motion.span>
            ))}
          </p>
        </blockquote>

        <div className="mt-24 flex flex-col items-center">
          <div className="h-24 w-px bg-gradient-to-b from-white/10 to-transparent" />
        </div>
      </motion.div>
    </section>
  )
}
