"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, MessageCircle, Github, Linkedin, Instagram } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"
import { cn } from "@/lib/utils"

const socialLinks = [
  { name: "Github", href: "https://github.com/NITHIN-NT", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/nithin-raj-003a55365/", icon: Linkedin },
  { name: "Instagram", href: "https://instagram.com/nithnhh", icon: Instagram },
  { name: "WhatsApp", href: "https://wa.me/917306663523", icon: MessageCircle },
]

export function Footer() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSent, setIsSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const message = `Hello, I'm ${formState.name}.\nPhone: ${formState.phone}\n\n${formState.message}`
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/917306663523?text=${encodedMessage}`

    window.open(whatsappUrl, "_blank")

    setIsSubmitting(false)
    setIsSent(true)
    setFormState({ name: "", phone: "", message: "" })
    setTimeout(() => setIsSent(false), 5000)
  }

  return (
    <footer id="contact" className="relative pt-32 pb-12 px-6 md:px-12 lg:px-24 bg-background border-t border-foreground/5 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
          <div>
            <ScrollReveal>
              <h2 className="text-5xl md:text-6xl font-medium tracking-tight mb-10 leading-[1.1]">
                Let&apos;s build <br />
                <span className="text-foreground/30 italic font-serif">something great</span> together.
              </h2>
              <p className="text-foreground/50 text-lg max-w-md mb-12 font-light tracking-tight leading-relaxed">
                Have a project in mind or just want to say hi? Feel free to reach out. I&apos;m always open to new opportunities and interesting conversations.
              </p>
              
              <div className="flex flex-col gap-6 text-sm font-medium tracking-widest uppercase text-foreground/40">
                <a href="mailto:nithinraj07sachu@gmail.com" className="group flex items-center gap-4 hover:text-foreground transition-all w-fit">
                  <span className="w-8 h-px bg-foreground/10 group-hover:w-12 group-hover:bg-primary transition-all" />
                  nithinraj07sachu@gmail.com
                </a>
                <a href="tel:+917306663523" className="group flex items-center gap-4 hover:text-foreground transition-all w-fit">
                  <span className="w-8 h-px bg-foreground/10 group-hover:w-12 group-hover:bg-primary transition-all" />
                  +91 7306663523
                </a>
                <div className="flex items-center gap-4">
                  <span className="w-8 h-px bg-foreground/10" />
                  Malappuram, India
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="relative">
            <ScrollReveal delay={0.2}>
              <form onSubmit={handleSubmit} className="space-y-8 bg-foreground/[0.02] p-8 md:p-10 rounded-[2.5rem] border border-foreground/5 backdrop-blur-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label htmlFor="name" className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/30 ml-1">Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-foreground/5 border-none px-6 py-4 rounded-2xl focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-foreground/10 text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="phone" className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/30 ml-1">Phone Number</label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full bg-foreground/5 border-none px-6 py-4 rounded-2xl focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-foreground/10 text-sm"
                      placeholder="+91 00000 00000"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label htmlFor="message" className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/30 ml-1">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-foreground/5 border-none px-6 py-4 rounded-2xl focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none placeholder:text-foreground/10 text-sm"
                    placeholder="What's on your mind?"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting || isSent}
                  className={cn(
                    "w-full group flex items-center justify-center gap-3 px-8 py-5 rounded-2xl transition-all duration-500 font-bold uppercase tracking-[0.2em] text-[10px]",
                    isSent ? "bg-green-500/10 text-green-500 border border-green-500/20" : "bg-foreground text-background hover:bg-foreground/90 hover:scale-[1.02]"
                  )}
                >
                  <span>
                    {isSubmitting ? "Opening WhatsApp..." : isSent ? "Message Sent" : "Send via WhatsApp"}
                  </span>
                  <div className="w-5 h-5 flex items-center justify-center">
                    {isSent ? (
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}>
                        <ArrowRight size={16} />
                      </motion.div>
                    ) : (
                      <MessageCircle size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    )}
                  </div>
                </button>
              </form>
            </ScrollReveal>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-16 border-t border-foreground/5 gap-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/20 order-2 md:order-1">
            © {new Date().getFullYear()} Nithin Raj NT. Handcrafted for the web.
          </p>
          <div className="flex gap-10 order-1 md:order-2">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className="text-foreground/30 hover:text-foreground transition-all"
                title={social.name}
              >
                <social.icon size={18} strokeWidth={1.5} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

