'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Philosophy', href: '#philosophy' },
]

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="fixed top-8 left-0 right-0 z-50 flex justify-center px-6"
    >
      <nav className="glass dark:glass-dark p-2 rounded-full flex items-center gap-1 border border-white/20 dark:border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.06)] overflow-hidden">
        <motion.div
          initial={{ x: 40 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-1"
        >
          <motion.a
            href="#"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 flex items-center justify-center bg-foreground text-background dark:bg-white/10 dark:text-white backdrop-blur-xl rounded-full text-[11px] font-bold tracking-tight border border-white/10 z-10"
          >
            NT
          </motion.a>

          <div className="hidden md:flex items-center gap-10 px-8">
            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + i * 0.1 }}
                whileHover={{ y: -1 }}
                className="text-[10px] font-bold uppercase tracking-[0.4em] text-foreground/30 hover:text-foreground transition-all"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.02, backgroundColor: "rgba(var(--foreground), 0.1)" }}
            whileTap={{ scale: 0.98 }}
            className="bg-foreground/5 text-foreground px-8 py-4 rounded-full text-[10px] font-bold uppercase tracking-[0.4em] transition-all whitespace-nowrap"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </nav>
    </motion.header>
  )
}
