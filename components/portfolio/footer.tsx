"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, MessageCircle } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

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

    // Construct the WhatsApp message
    const message = `Hello, I'm ${formState.name}.\nPhone: ${formState.phone}\n\n${formState.message}`
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/917306663523?text=${encodedMessage}`

    // Redirect to WhatsApp
    window.open(whatsappUrl, "_blank")

    setIsSubmitting(false)
    setIsSent(true)
    setFormState({ name: "", phone: "", message: "" })
    setTimeout(() => setIsSent(false), 5000)
  }

  return (
    <footer className="pt-24 pb-12 px-6 md:px-12 lg:px-24 border-t border-black/10 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-8">
                Let&apos;s build <br />
                <span className="italic font-serif">something great</span> together.
              </h2>
              <p className="text-black/50 text-lg max-w-md mb-8">
                Have a project in mind or just want to say hi? Feel free to reach out. I&apos;m always open to new opportunities and interesting conversations.
              </p>
              
              <div className="flex flex-col gap-4 text-sm tracking-wider uppercase text-black/40">
                <a href="mailto:nithinraj07sachu@gmail.com" className="hover:text-black transition-colors w-fit">
                  nithinraj07sachu@gmail.com
                </a>
                <a href="tel:+917306663523" className="hover:text-black transition-colors w-fit">
                  +91 7306663523
                </a>
                <span>Malappuram, India</span>
              </div>
            </ScrollReveal>
          </div>

          <div className="relative">
            <ScrollReveal delay={0.2}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs uppercase tracking-widest text-black/40">Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-transparent border-b border-black/10 py-3 focus:border-black outline-none transition-colors placeholder:text-black/10"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs uppercase tracking-widest text-black/40">Phone Number</label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full bg-transparent border-b border-black/10 py-3 focus:border-black outline-none transition-colors placeholder:text-black/10"
                      placeholder="+91 00000 00000"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs uppercase tracking-widest text-black/40">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-transparent border-b border-black/10 py-3 focus:border-black outline-none transition-colors resize-none placeholder:text-black/10"
                    placeholder="What's on your mind?"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting || isSent}
                  className="group flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full hover:bg-black/80 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="text-sm uppercase tracking-widest font-medium">
                    {isSubmitting ? "Opening WhatsApp..." : isSent ? "Message Sent" : "Send via WhatsApp"}
                  </span>
                  {isSent ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  ) : (
                    <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  )}
                </button>
              </form>
            </ScrollReveal>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-black/5 gap-6">
          <p className="text-sm text-black/30">
            © {new Date().getFullYear()} Nithin Raj NT. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-black/40">
            <a href="https://github.com/NITHIN-NT" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors uppercase tracking-widest text-[10px]">Github</a>
            <a href="https://wa.me/917306663523" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors uppercase tracking-widest text-[10px]">WhatsApp</a>
            <a href="https://www.linkedin.com/in/nithin-raj-003a55365/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors uppercase tracking-widest text-[10px]">LinkedIn</a>
            <a href="https://instagram.com/nithnhh" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors uppercase tracking-widest text-[10px]">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

