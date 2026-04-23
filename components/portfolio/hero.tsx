"use client"

import { motion } from "framer-motion"

export function Hero() {
  const nameChars = "Nithin Raj NT".split("")
  
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-sm tracking-widest uppercase mb-4 text-black/60"
        >
          Developer
        </motion.p>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight mb-8 text-balance">
          {nameChars.map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.2 + index * 0.04,
                ease: [0.21, 0.47, 0.32, 0.98]
              }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-xl md:text-2xl text-black/70 leading-relaxed max-w-2xl"
        >
          I build complete digital products from idea to deployment.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-12 flex flex-wrap items-center gap-8"
        >
          <div className="flex items-center gap-8 text-sm text-black/50">
            <span>Malappuram, India</span>
            <span>since 2007</span>
          </div>
          
          <a 
            href="https://drive.google.com/uc?export=download&id=12PL3CeqsfOP1FHtzHRkXPUrozMObw_rk"
            download
            className="group flex items-center gap-2 text-sm font-medium text-black hover:text-black/70 transition-colors"
          >
            <span>Download Resume</span>
            <svg 
              width="14" 
              height="14" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
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
      </div>
    </section>
  )
}
