"use client"

import { Mail, Phone, MapPin, Github } from "lucide-react"
import { ScrollReveal, StaggerChildren, StaggerItem } from "./scroll-reveal"

export function Contact() {
  const contactItems = [
    {
      type: "link",
      href: "mailto:nithinraj07sachu@gmail.com",
      icon: Mail,
      text: "nithinraj07sachu@gmail.com"
    },
    {
      type: "link",
      href: "tel:+917306663523",
      icon: Phone,
      text: "+91 7306663523"
    },
    {
      type: "text",
      icon: MapPin,
      text: "Malappuram, India"
    },
    {
      type: "external",
      href: "https://github.com/NITHIN-NT",
      icon: Github,
      text: "github.com/NITHIN-NT"
    }
  ]

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 border-t border-black/10">
      <div className="max-w-6xl">
        <ScrollReveal>
          <h2 className="text-xs tracking-widest uppercase mb-12 text-black/40">
            Contact
          </h2>
        </ScrollReveal>
        
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-8" staggerDelay={0.1}>
          {contactItems.map((item, index) => (
            <StaggerItem key={index}>
              {item.type === "text" ? (
                <div className="flex items-center gap-4 text-lg text-black/70">
                  <item.icon className="w-5 h-5 text-black/40" />
                  <span>{item.text}</span>
                </div>
              ) : (
                <a 
                  href={item.href}
                  target={item.type === "external" ? "_blank" : undefined}
                  rel={item.type === "external" ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 text-lg hover:underline underline-offset-4 group"
                >
                  <item.icon className="w-5 h-5 text-black/40 group-hover:text-black transition-colors" />
                  <span>{item.text}</span>
                </a>
              )}
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
