"use client"

import { 
  SiPython, 
  SiDjango, 
  SiReact, 
  SiNextdotjs, 
  SiDocker, 
  SiGithubactions, 
  SiFirebase, 
  SiSupabase
} from "react-icons/si"
import { Cloud, CreditCard, Settings, Smartphone } from "lucide-react"
import { ScrollReveal, StaggerChildren, StaggerItem } from "./scroll-reveal"

export function Skills() {
  const primaryStack = [
    { name: "Python", icon: SiPython },
    { name: "Django", icon: SiDjango },
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
  ]
  
  const infrastructure = [
    { name: "Docker", icon: SiDocker },
    { name: "CI/CD", icon: SiGithubactions },
    { name: "Firebase", icon: SiFirebase },
    { name: "Supabase", icon: SiSupabase },
    { name: "AWS EC2", icon: Cloud },
    { name: "Razorpay", icon: CreditCard },
    { name: "Admin Panels", icon: Settings },
    { name: "PWA", icon: Smartphone },
  ]

  return (
    <section id="skills" className="py-32 px-6 md:px-12 lg:px-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/2 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal>
          <h2 className="text-[10px] md:text-xs tracking-[0.4em] uppercase mb-20 text-foreground/40 font-bold">
            Technical Arsenal
          </h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Primary Stack */}
          <div>
            <ScrollReveal delay={0.1}>
              <h3 className="text-xl font-medium mb-8 text-foreground tracking-tight">Core Development</h3>
            </ScrollReveal>
            <StaggerChildren className="grid grid-cols-2 gap-4" staggerDelay={0.08}>
              {primaryStack.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </StaggerChildren>
          </div>
          
          {/* Infrastructure & Tools */}
          <div>
            <ScrollReveal delay={0.2}>
              <h3 className="text-xl font-medium mb-8 text-foreground tracking-tight">Infrastructure & Deployment</h3>
            </ScrollReveal>
            <StaggerChildren className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-2 gap-4" staggerDelay={0.06}>
              {infrastructure.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </StaggerChildren>
          </div>
        </div>
      </div>
    </section>
  )
}

interface SkillCardProps {
  skill: {
    name: string
    icon: React.ComponentType<{ className?: string }>
  }
}

function SkillCard({ skill }: SkillCardProps) {
  return (
    <StaggerItem>
      <div 
        className="group relative flex items-center gap-4 px-6 py-4 glass dark:glass-dark rounded-2xl transition-all duration-500 cursor-default overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <skill.icon className="w-6 h-6 text-foreground/40 group-hover:text-foreground transition-all duration-500 group-hover:scale-110 z-10" />
        <span className="text-sm font-medium tracking-tight text-foreground/60 group-hover:text-foreground transition-colors z-10">{skill.name}</span>
      </div>
    </StaggerItem>
  )
}
