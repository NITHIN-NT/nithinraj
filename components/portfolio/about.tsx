"use client"

import { ScrollReveal, TextReveal } from "./scroll-reveal"

export function About() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 border-t border-black/10">
      <div className="max-w-3xl">
        <ScrollReveal>
          <h2 className="text-xs tracking-widest uppercase mb-12 text-black/40">
            About
          </h2>
        </ScrollReveal>
        
        <div className="space-y-6 text-lg md:text-xl text-black/80 leading-relaxed">
          <ScrollReveal delay={0.1}>
            <p>
              <TextReveal delay={0.1}>
                I am a developer focused on building real-world production-ready systems.
              </TextReveal>
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p>
              <TextReveal delay={0.1}>
                My main stack includes Python, Django, React, and Next.js.
              </TextReveal>
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            <p>
              <TextReveal delay={0.1}>
                However, I believe modern development is not about being limited by programming languages — it is about understanding concepts and building solutions effectively.
              </TextReveal>
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.4}>
            <p>
              <TextReveal delay={0.1}>
                My strength is the quality I bring to a product and the commitment I maintain throughout development.
              </TextReveal>
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
