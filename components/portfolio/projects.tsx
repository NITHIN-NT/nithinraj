"use client"

import { ArrowUpRight, X } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const projects = [
  {
    name: "Secondstrap",
    link: "https://strap.nithinnt.com",
    description: "Complete Django + Jinja template ecommerce platform with Razorpay integration, custom admin dashboard, Docker deployment setup, and CI/CD pipeline.",
    type: "Academic test-mode project"
  },
  {
    name: "Blactify",
    link: "https://www.blactify.com",
    description: "Minimal UI production ecommerce platform built using Next.js with Razorpay integration, Firebase authentication, Supabase database, EC2 hosting, Docker deployment, and CI/CD automation.",
    type: "Live production project"
  },
  {
    name: "Money",
    link: "https://money.nithinnt.com",
    description: "Minimalist lend/borrow management Progressive Web App with Firebase authentication and push notification system.",
    type: "Personal project"
  },
  {
    name: "Foundation Exam Portal",
    link: "https://foundation.nithinnt.com",
    description: "Online exam management system allowing module-based question creation and exam conduction built with Next.js.",
    type: "Production-ready system"
  }
]

export function Projects() {
  const [activeProject, setActiveProject] = useState<typeof projects[0] | null>(null)

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 border-t border-black/10">
      <div className="max-w-6xl">
        <ScrollReveal>
          <h2 className="text-xs tracking-widest uppercase mb-12 text-black/40">
            Projects
          </h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {projects.map((project, index) => (
            <ScrollReveal key={project.name} delay={index * 0.15}>
              <article className="group">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <button 
                      onClick={() => setActiveProject(project)}
                      className="inline-flex items-center gap-2 text-2xl font-medium hover:underline underline-offset-4 text-left"
                    >
                      {project.name}
                      <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                    <p className="text-sm text-black/40 mt-1">{project.type}</p>
                  </div>
                </div>
                <p className="text-lg text-black/70 leading-relaxed max-w-2xl">
                  {project.description}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 bg-white/80 backdrop-blur-md"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full h-full max-w-6xl bg-white border border-black/10 shadow-2xl rounded-2xl overflow-hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-4 border-b border-black/5 bg-white">
                <div className="flex items-center gap-4">
                  <h3 className="font-medium">{activeProject.name}</h3>
                  <span className="text-xs px-2 py-1 bg-black/5 rounded text-black/40">{activeProject.type}</span>
                </div>
                <div className="flex items-center gap-2">
                  <a 
                    href={activeProject.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs font-medium uppercase tracking-widest hover:underline"
                  >
                    Open Site
                  </a>
                  <button 
                    onClick={() => setActiveProject(null)}
                    className="p-2 hover:bg-black/5 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="flex-1 bg-gray-50 relative">
                <iframe 
                  src={activeProject.link} 
                  className="w-full h-full border-none"
                  title={activeProject.name}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
