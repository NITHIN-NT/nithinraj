'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const words = [
  "Hello",
  "bonjour",
  "Ciao",
  "Olà",
  "Guten tag",
  "やあ",
  "നമസ്കാരം"
]

export function Preloader() {
  const [index, setIndex] = useState(0)
  const [dimension, setDimension] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const setDimensions = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight })
    }
    setDimensions()
    window.addEventListener('resize', setDimensions)
    return () => window.removeEventListener('resize', setDimensions)
  }, [])

  useEffect(() => {
    if (index === words.length - 1) return

    const timeout = setTimeout(() => {
      setIndex(index + 1)
    }, index === 0 ? 1000 : 250)

    return () => clearTimeout(timeout)
  }, [index])

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height} L0 0`
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} L0 0`

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.3 }
    }
  }

  const slideUp = {
    initial: {
      y: 0
    },
    exit: {
      y: "-100vh",
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
    }
  }

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-[999] bg-[#09090b]"
    >
      {dimension.width > 0 && (
        <>
          <svg className="absolute top-0 w-full h-[calc(100%+300px)]">
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
              fill="#09090b"
            ></motion.path>
          </svg>
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              exit={{ opacity: 0, filter: "blur(10px)", y: -20 }}
              transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative z-[1] text-white text-4xl md:text-6xl font-light tracking-[0.2em] uppercase"
            >
              <span className="flex items-center gap-4">
                <span className="w-8 h-px bg-white/20" />
                {words[index]}
                <span className="w-8 h-px bg-white/20" />
              </span>
            </motion.p>
          </AnimatePresence>
        </>
      )}
    </motion.div>
  )
}
