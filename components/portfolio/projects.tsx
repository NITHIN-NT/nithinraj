"use client"

import { ArrowUpRight } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

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
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 border-t border-black/10">
      <div className="max-w-4xl">
        <ScrollReveal>
          <h2 className="text-xs tracking-widest uppercase mb-12 text-black/40">
            Projects
          </h2>
        </ScrollReveal>
        
        <div className="space-y-16">
          {projects.map((project, index) => (
            <ScrollReveal key={project.name} delay={index * 0.15}>
              <article className="group">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-2xl font-medium hover:underline underline-offset-4"
                    >
                      {project.name}
                      <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
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
    </section>
  )
}
