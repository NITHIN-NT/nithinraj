"use client"

import { useRef, useMemo } from "react"
import { motion, useScroll, useTransform, useSpring, useMotionValue, MotionValue } from "framer-motion"
import { cn } from "@/lib/utils"
import { Spotlight } from "@/components/magicui/spotlight"

export function About() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  })

  // Deep Parallax Layers
  const zShift = useTransform(smoothProgress, [0, 1], [0, -150])
  const rotateX = useTransform(smoothProgress, [0, 0.5, 1], [5, 0, -5])
  const bgOpacity = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])
  const titleOpacity = useTransform(smoothProgress, [0, 0.1, 0.2], [1, 0.5, 0])

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-black selection:bg-white/20">
      <section className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden perspective-heavy">
        {/* Atmospheric Layer */}
        <motion.div 
          style={{ opacity: bgOpacity }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px] animate-light-leak" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px] animate-light-leak [animation-delay:-5s]" />
          <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-white/5 rounded-full blur-[150px] animate-light-leak [animation-delay:-10s]" />
          <div className="absolute inset-0 noise-bg opacity-20 mix-blend-overlay" />
        </motion.div>

        <div className="max-w-7xl w-full relative z-10 px-6 md:px-12 lg:px-24 h-full flex flex-col justify-center gap-12">
          {/* Header Section */}
          <motion.div
            style={{ opacity: titleOpacity }}
            className="flex flex-col items-center text-center space-y-4"
          >
            <h2 className="text-[10px] md:text-xs tracking-[1.5em] uppercase text-white/30 font-bold">
              Philosophical <span className="text-white/60">Framework</span>
            </h2>
            <div className="h-12 w-px bg-gradient-to-b from-white/20 to-transparent" />
          </motion.div>

          {/* Nexus Bento Grid */}
          <motion.div 
            style={{ 
              translateZ: zShift,
              rotateX: rotateX
            }}
            className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 h-auto md:h-[600px] w-full"
          >
            {/* 01: Engineering Mindset */}
            <BentoCard 
              className="md:col-span-3 lg:col-span-4 h-full"
              index="01"
              title="Engineering Mindset"
              content="Approaching software as a craft, balancing architectural purity with pragmatic delivery. Built to last, designed to scale."
              delay={0.1}
              progress={smoothProgress}
              range={[0, 0.25]}
            />

            {/* 02: The Modern Core (Large Central Card) */}
            <BentoCard 
              className="md:col-span-3 lg:col-span-4 h-full"
              index="02"
              title="The Modern Core"
              isStack
              tech={["Python", "React", "Next.js", "Supabase", "TypeScript", "Tailwind"]}
              delay={0.2}
              progress={smoothProgress}
              range={[0.2, 0.5]}
            />

            {/* 03: Design Centric */}
            <BentoCard 
              className="md:col-span-6 lg:col-span-4 h-full"
              index="03"
              title="Design Centric"
              content="Building interfaces that evoke emotion through motion, typography, and spatial awareness. Beauty is in the details."
              delay={0.3}
              progress={smoothProgress}
              range={[0.45, 0.75]}
            />

            {/* 04: Product Integrity (Bottom Row - Wide) */}
            <BentoCard 
              className="md:col-span-6 lg:col-span-12 md:h-[200px]"
              index="04"
              title="Product Integrity"
              content="Maintaining quality from the first line of code to the final production deployment. Rigorous testing, continuous refinement, and a commitment to excellence in every release."
              delay={0.4}
              progress={smoothProgress}
              range={[0.7, 1]}
              isWide
            />
          </motion.div>
        </div>
      </section>
    </div>
  )
}

interface BentoCardProps {
  index: string
  title: string
  content?: string
  tech?: string[]
  className?: string
  isStack?: boolean
  isWide?: boolean
  delay: number
  progress: MotionValue<number>
  range: [number, number]
}

function BentoCard({ index, title, content, tech, className, isStack, isWide, progress, range }: BentoCardProps) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Reveal animations based on scroll progress
  const opacity = useTransform(progress, [range[0] - 0.1, range[0], range[1], range[1] + 0.1], [0, 1, 1, 0.4])
  const y = useTransform(progress, [range[0] - 0.1, range[0]], [50, 0])
  const scale = useTransform(progress, [range[0] - 0.1, range[0]], [0.95, 1])

  const springConfig = { damping: 30, stiffness: 300 }
  const xRotate = useSpring(useTransform(mouseX, [-200, 200], [5, -5]), springConfig)
  const yRotate = useSpring(useTransform(mouseY, [-200, 200], [-5, 5]), springConfig)

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left - width / 2)
    mouseY.set(clientY - top - height / 2)
  }

  function onMouseLeave() {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      style={{
        opacity,
        y,
        scale,
        rotateX: yRotate,
        rotateY: xRotate,
        transformStyle: "preserve-3d"
      }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={cn("group cursor-default", className)}
    >
      <Spotlight 
        className="h-full rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-3xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/[0.05]" 
        spotlightColor="rgba(255,255,255,0.1)"
      >
        <div className="p-8 md:p-10 h-full flex flex-col relative z-20">
          <div className="flex justify-between items-start mb-6">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/10 group-hover:text-white/40 transition-colors">
              {index} / {isStack ? "Stack" : "Logic"}
            </span>
            <div className="w-2 h-2 rounded-full bg-white/5 group-hover:bg-white/40 transition-all shadow-[0_0_10px_rgba(255,255,255,0)] group-hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
          </div>
          
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-white/90 tracking-tight group-hover:translate-x-1 transition-transform duration-500">
            {title}
          </h3>
          
          {content && (
            <p className={cn(
              "text-sm md:text-[15px] text-white/40 group-hover:text-white/60 leading-relaxed font-light tracking-tight transition-colors",
              isWide ? "max-w-2xl" : ""
            )}>
              {content}
            </p>
          )}
          
          {isStack && tech && (
            <div className="flex-1 flex items-center justify-center relative py-8">
              {/* Tech Orbit Center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center animate-pulse">
                  <div className="w-8 h-8 rounded-full bg-white/20 blur-xl" />
                </div>
              </div>
              
              {/* Rotating Tech Badges */}
              <div className="relative w-full h-full flex flex-wrap items-center justify-center gap-3">
                {tech.map((t, i) => (
                  <motion.span 
                    key={t}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-[9px] font-black uppercase tracking-widest px-3 py-1.5 bg-white/5 rounded-full text-white/40 border border-white/5 hover:border-white/30 hover:text-white hover:bg-white/10 transition-all cursor-pointer z-30"
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            </div>
          )}

          {isWide && (
            <div className="mt-auto pt-4 flex gap-8">
              <div className="flex flex-col">
                <span className="text-[10px] text-white/20 uppercase tracking-widest mb-1">Reliability</span>
                <div className="h-1 w-24 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "95%" }}
                    className="h-full bg-white/40"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-white/20 uppercase tracking-widest mb-1">Performance</span>
                <div className="h-1 w-24 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "99%" }}
                    className="h-full bg-white/60"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Dynamic Inner Glow */}
        <div className="absolute -inset-2 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-2xl pointer-events-none" />
      </Spotlight>
    </motion.div>
  )
}



