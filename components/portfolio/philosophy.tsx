"use client"

import { motion } from "framer-motion"

export function Philosophy() {
  const line1 = "Programming languages are tools."
  const line2 = "Concepts build products."
  
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 border-t border-black/10 bg-black text-white overflow-hidden">
      <div className="max-w-3xl">
        <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed tracking-tight">
          <motion.p 
            className="mb-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            {line1.split(" ").map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.21, 0.47, 0.32, 0.98]
                }}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            {line2.split(" ").map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.5 + index * 0.1,
                  ease: [0.21, 0.47, 0.32, 0.98]
                }}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
          </motion.p>
        </blockquote>
      </div>
    </section>
  )
}
