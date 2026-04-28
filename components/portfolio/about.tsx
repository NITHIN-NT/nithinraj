"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function About() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Extra tall track to ensure everything finishes while stuck
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Animation timeline - Optimized for "arrival" effect
  // Path 1 (0.05 -> 0.18)
  // Node 2 starts appearing at 0.15 (when Path 1 is almost there)
  // Path 2 starts at 0.23 (once Node 2 is fully visible)
  const path1 = useTransform(scrollYProgress, [0.05, 0.18], [0, 1])
  const path2 = useTransform(scrollYProgress, [0.23, 0.36], [0, 1])
  const path3 = useTransform(scrollYProgress, [0.41, 0.54], [0, 1])

  const node1Opacity = useTransform(scrollYProgress, [0, 0.05], [0, 1])
  const node1Y = useTransform(scrollYProgress, [0, 0.05], [20, 0])

  const node2Opacity = useTransform(scrollYProgress, [0.15, 0.23], [0, 1])
  const node2Y = useTransform(scrollYProgress, [0.15, 0.23], [20, 0])

  const node3Opacity = useTransform(scrollYProgress, [0.33, 0.41], [0, 1])
  const node3Y = useTransform(scrollYProgress, [0.33, 0.41], [20, 0])

  const node4Opacity = useTransform(scrollYProgress, [0.51, 0.59], [0, 1])
  const node4Y = useTransform(scrollYProgress, [0.51, 0.59], [20, 0])

  return (
    <div ref={containerRef} className="relative h-[500vh]">
      {/* Sticky Container */}
      <section className="sticky top-0 h-screen w-full flex flex-col items-center justify-center bg-white overflow-hidden px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl w-full">
          <motion.div
            style={{ opacity: node1Opacity }}
            className="mb-8"
          >
            <h2 className="text-xs tracking-widest uppercase text-black/40">
              About
            </h2>
          </motion.div>

          <div className="relative h-[500px]">
            {/* SVG Connections (Desktop) - z-0 to stay behind opaque cards */}
            <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
              <svg className="w-full h-full" viewBox="0 0 1000 500" fill="none" preserveAspectRatio="none">
                {/* Developer -> Stack */}
                <motion.path
                  d="M120 150 C 250 150, 250 350, 380 350"
                  stroke="black"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  style={{ pathLength: path1 }}
                  opacity={0.1}
                />
                {/* Stack -> Concepts */}
                <motion.path
                  d="M420 350 C 550 350, 500 150, 650 150"
                  stroke="black"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  style={{ pathLength: path2 }}
                  opacity={0.1}
                />
                {/* Concepts -> Quality */}
                <motion.path
                  d="M680 150 C 800 150, 800 350, 900 350"
                  stroke="black"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  style={{ pathLength: path3 }}
                  opacity={0.1}
                />
              </svg>
            </div>

            {/* Diagram Nodes - z-10 and bg-white to hide lines behind */}
            <div className="relative h-full z-10">

              {/* Node 1: Developer */}
              <motion.div
                style={{ opacity: node1Opacity, y: node1Y }}
                className="lg:absolute lg:top-10 lg:left-0 lg:w-64 mb-8 lg:mb-0"
              >
                <div className="p-6 bg-white border border-black/10 rounded-2xl shadow-sm">
                  <div className="text-[10px] uppercase tracking-tighter text-black/30 mb-2">01 / Profile</div>
                  <h3 className="text-lg font-medium mb-3 text-black">Developer</h3>
                  <p className="text-sm text-black/60 leading-relaxed">
                    Building real-world production-ready systems with a focus on robustness and scalability.
                  </p>
                </div>
              </motion.div>

              {/* Node 2: Modern Stack */}
              <motion.div
                style={{ opacity: node2Opacity, y: node2Y }}
                className="lg:absolute lg:top-64 lg:left-[28%] lg:w-72 mb-8 lg:mb-0"
              >
                <div className="p-6 bg-white border border-black/10 rounded-2xl shadow-sm">
                  <div className="text-[10px] uppercase tracking-tighter text-black/30 mb-2">02 / Ecosystem</div>
                  <h3 className="text-lg font-medium mb-3 text-black">Modern Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "Django", "React", "Next.js"].map((tech) => (
                      <span key={tech} className="text-[11px] px-2 py-1 bg-black/5 rounded-md text-black/60">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Node 3: Concept Driven */}
              <motion.div
                style={{ opacity: node3Opacity, y: node3Y }}
                className="lg:absolute lg:top-10 lg:left-[58%] lg:w-64 mb-8 lg:mb-0"
              >
                <div className="p-6 bg-white border border-black/10 rounded-2xl shadow-sm">
                  <div className="text-[10px] uppercase tracking-tighter text-black/30 mb-2">03 / Philosophy</div>
                  <h3 className="text-lg font-medium mb-3 text-black">Concept Driven</h3>
                  <p className="text-sm text-black/60 leading-relaxed">
                    Understanding core principles to build effective solutions beyond language limitations.
                  </p>
                </div>
              </motion.div>

              {/* Node 4: Quality & Commitment */}
              <motion.div
                style={{ opacity: node4Opacity, y: node4Y }}
                className="lg:absolute lg:top-64 lg:left-[78%] lg:w-64 mb-8 lg:mb-0"
              >
                <div className="p-6 bg-white border border-black/10 rounded-2xl shadow-sm">
                  <div className="text-[10px] uppercase tracking-tighter text-black/30 mb-2">04 / Standard</div>
                  <h3 className="text-lg font-medium mb-3 text-black">Quality Focus</h3>
                  <p className="text-sm text-black/60 leading-relaxed">
                    Unwavering commitment to product quality and long-term maintenance throughout development.
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}



