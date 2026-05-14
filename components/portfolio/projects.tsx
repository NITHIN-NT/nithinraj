"use client"

import { ArrowUpRight, X } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"
import { useState, useRef } from "react"
import { motion, AnimatePresence, useSpring, useMotionValue, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

const projects = [
  {
    name: "Secondstrap",
    link: "https://strap.nithinnt.com",
    description: "Complete Django + Jinja template ecommerce platform with Razorpay integration, custom admin dashboard, Docker deployment setup, and CI/CD pipeline.",
    type: "Academic test-mode project",
    tags: ["Django", "Docker", "PostgreSQL"]
  },
  {
    name: "Blactify",
    link: "https://www.blactify.com",
    description: "Minimal UI production ecommerce platform built using Next.js with Razorpay integration, Firebase authentication, Supabase database, EC2 hosting, Docker deployment, and CI/CD automation.",
    type: "Live production project",
    tags: ["Next.js", "Supabase", "Firebase"]
  },
  {
    name: "Money",
    link: "https://money.nithinnt.com",
    description: "Minimalist lend/borrow management Progressive Web App with Firebase authentication and push notification system.",
    type: "Personal project",
    tags: ["React", "PWA", "Firebase"]
  },
  {
    name: "Foundation Exam Portal",
    link: "https://foundation.nithinnt.com",
    description: "Online exam management system allowing module-based question creation and exam conduction built with Next.js.",
    type: "Production-ready system",
    tags: ["Next.js", "Tailwind", "Node.js"]
  }
]

export function Projects() {
  const [activeProject, setActiveProject] = useState<typeof projects[0] | null>(null)

  return (
    <section id="projects" className="py-48 px-6 md:px-12 lg:px-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/[0.02] rounded-full blur-[150px] -mr-96 -mt-96 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="flex flex-col mb-32">
            <h2 className="text-[10px] md:text-xs tracking-[0.6em] uppercase mb-4 text-foreground/20 font-black">
              Featured Creations
            </h2>
            <div className="w-24 h-px bg-foreground/10" />
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-32">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.name} 
              project={project} 
              index={index} 
              onClick={() => setActiveProject(project)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 lg:p-12"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-3xl"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full h-full max-w-7xl glass-dark shadow-[0_0_100px_rgba(0,0,0,0.4)] rounded-[2.5rem] overflow-hidden flex flex-col z-10"
            >
              <div className="flex items-center justify-between px-10 py-8 border-b border-white/5 bg-white/[0.02]">
                <div className="flex items-center gap-8">
                  <div className="flex flex-col">
                    <h3 className="text-xl font-semibold tracking-tight text-white">{activeProject.name}</h3>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 mt-1">{activeProject.type}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <a 
                    href={activeProject.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hidden sm:flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-white/60 hover:text-white transition-all bg-white/5 px-6 py-3 rounded-full border border-white/5 hover:border-white/20"
                  >
                    Explore Case Study <ArrowUpRight size={14} />
                  </a>
                  <button 
                    onClick={() => setActiveProject(null)}
                    className="p-4 hover:bg-white/5 rounded-full transition-all hover:rotate-90 duration-500 border border-white/5 text-white/40 hover:text-white"
                  >
                    <X size={24} />
                  </button>
                </div>
              </div>
              <div className="flex-1 bg-black/40 relative p-6 md:p-10">
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/5">
                  <iframe 
                    src={activeProject.link} 
                    className="w-full h-full border-none bg-white"
                    title={activeProject.name}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

interface Project {
  name: string
  link: string
  description: string
  type: string
  tags?: string[]
}

function ProjectCard({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 100, damping: 30 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 100, damping: 30 })

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  function handleMouseLeave() {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <ScrollReveal delay={index * 0.1}>
      <motion.article 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group cursor-pointer perspective-[1000px]" 
        onClick={onClick}
      >
        <div className="relative aspect-[16/10] mb-10 overflow-hidden rounded-[2.5rem] bg-foreground/[0.03] border border-foreground/[0.05] group-hover:border-foreground/20 transition-all duration-700 shadow-xl group-hover:shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          {/* Subtle Parallax Background Effect */}
          <motion.div 
            style={{ 
              x: useTransform(mouseX, [-0.5, 0.5], [20, -20]),
              y: useTransform(mouseY, [-0.5, 0.5], [20, -20]),
            }}
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700"
          >
            <div className="px-8 py-3 glass dark:glass-dark text-foreground rounded-full text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-3 shadow-2xl">
              Open Project <ArrowUpRight size={14} />
            </div>
          </motion.div>

          {/* Large Background Index */}
          <div className="absolute top-10 left-12 text-[180px] font-black text-foreground/[0.02] select-none group-hover:text-foreground/[0.04] transition-all duration-700 leading-none italic">
            {index + 1}
          </div>
          
          {/* Tags */}
          <div className="absolute bottom-10 left-10 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
            {project.tags?.map((tag: string) => (
              <span key={tag} className="px-4 py-1.5 bg-foreground/5 backdrop-blur-md border border-foreground/10 rounded-full text-[9px] font-bold uppercase tracking-widest text-foreground/60">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="px-2">
          <div className="flex items-end justify-between mb-4">
            <h3 className="text-3xl font-semibold tracking-tighter text-gradient group-hover:translate-x-2 transition-transform duration-700">
              {project.name}
            </h3>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/20 group-hover:text-foreground/40 transition-colors">
              {project.type}
            </span>
          </div>
          
          <p className="text-[15px] text-foreground/40 group-hover:text-foreground/60 leading-relaxed font-light tracking-tight max-w-lg transition-colors duration-500">
            {project.description}
          </p>
        </div>
      </motion.article>
    </ScrollReveal>
  )
}
