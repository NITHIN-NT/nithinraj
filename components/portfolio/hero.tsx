"use client"

import { motion } from "framer-motion"

import { Spotlight } from "@/components/magicui/spotlight"

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.4,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
}

export function Hero() {
  const nameChars = "Nithin Raj NT".split("")
  
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background">
      <Spotlight className="absolute inset-0 z-0" spotlightColor="rgba(var(--primary), 0.05)" />
      
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/3 rounded-full blur-[100px] -ml-32 -mb-32" />

      <motion.div 
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl px-6 md:px-12 lg:px-24"
      >
        <motion.p 
          variants={item}
          className="text-xs md:text-sm tracking-[0.3em] uppercase mb-6 text-foreground/40 font-medium"
        >
          Developer & Product Engineer
        </motion.p>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[0.9] mb-8 text-balance">
          {nameChars.map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: "blur(10px)", y: 40 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5 + index * 0.03,
                ease: [0.21, 0.47, 0.32, 0.98]
              }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>
        
        <motion.p 
          variants={item}
          className="text-xl md:text-2xl text-foreground/60 leading-relaxed max-w-2xl font-light tracking-tight mb-12"
        >
          I build <span className="text-foreground font-normal">complete digital products</span> from idea to deployment.
        </motion.p>
        
        <motion.div 
          variants={item}
          className="flex flex-wrap items-center gap-10"
        >
          <div className="flex items-center gap-10 text-xs md:text-sm font-medium tracking-widest uppercase text-foreground/30">
            <div className="flex flex-col">
              <span className="text-[10px] text-foreground/20 mb-1">Location</span>
              <span className="text-foreground/50">Malappuram, India</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-foreground/20 mb-1">Since</span>
              <span className="text-foreground/50">2007</span>
            </div>
          </div>
          
          <a 
            href="https://drive.google.com/uc?export=download&id=12PL3CeqsfOP1FHtzHRkXPUrozMObw_rk"
            download
            className="group relative flex items-center gap-3 text-sm font-bold uppercase tracking-[0.3em] text-foreground transition-all px-8 py-4 glass dark:glass-dark rounded-full hover:scale-[1.02]"
          >
            <span>Download Resume</span>
            <svg 
              width="14" 
              height="14" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="group-hover:translate-y-0.5 transition-transform"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" x2="12" y1="15" y2="3" />
            </svg>
          </a>
        </motion.div>
      </motion.div>

    </section>
  )
}
