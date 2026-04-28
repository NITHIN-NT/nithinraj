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
    <section className="py-24 px-6 md:px-12 lg:px-24 border-t border-black/10">
      <div className="max-w-6xl">
        <ScrollReveal>
          <h2 className="text-xs tracking-widest uppercase mb-16 text-black/40">
            Skills
          </h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Primary Stack */}
          <div>
            <ScrollReveal delay={0.1}>
              <h3 className="text-sm font-medium mb-6 text-black/50">Primary Stack</h3>
            </ScrollReveal>
            <StaggerChildren className="flex flex-wrap gap-3" staggerDelay={0.08}>
              {primaryStack.map((skill) => (
                <StaggerItem key={skill.name}>
                  <div 
                    className="group flex items-center gap-3 px-5 py-3 border border-black/10 rounded-full hover:border-black hover:bg-black hover:text-white transition-all duration-300 cursor-default"
                  >
                    <skill.icon className="w-5 h-5 group-hover:text-white transition-colors" />
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
          
          {/* Infrastructure & Tools */}
          <div>
            <ScrollReveal delay={0.2}>
              <h3 className="text-sm font-medium mb-6 text-black/50">Infrastructure & Tools</h3>
            </ScrollReveal>
            <StaggerChildren className="flex flex-wrap gap-3" staggerDelay={0.06}>
              {infrastructure.map((skill) => (
                <StaggerItem key={skill.name}>
                  <div 
                    className="group flex items-center gap-3 px-5 py-3 border border-black/10 rounded-full hover:border-black hover:bg-black hover:text-white transition-all duration-300 cursor-default"
                  >
                    <skill.icon className="w-5 h-5 group-hover:text-white transition-colors" />
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </div>
    </section>
  )
}
