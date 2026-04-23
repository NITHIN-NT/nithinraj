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
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] }
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] as [number, number, number, number], delay: 0.3 }
    }
  }

  const slideUp = {
    initial: {
      y: 0
    },
    exit: {
      y: "-100vh",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as [number, number, number, number], delay: 0.2 }
    }
  }

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-[99] bg-[#f4f4f5]"
    >
      {dimension.width > 0 && (
        <>
          <svg className="absolute top-0 w-full h-[calc(100%+300px)]">
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
              fill="#f4f4f5"
              style={{ filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.15))' }}
            ></motion.path>
          </svg>
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative z-[1] text-[#18181b] text-5xl md:text-6xl font-medium tracking-tight"
            >
              {words[index]}
            </motion.p>
          </AnimatePresence>
        </>
      )}
    </motion.div>
  )
}
