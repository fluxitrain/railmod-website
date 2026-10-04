"use client"

import { motion } from "framer-motion"
import { Play, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RFRLogo } from "./rfr-logo"

export function CTASection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <RFRLogo size="lg" animated={false} />
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Prêt à prendre
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              les commandes ?
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty">
            Rejoignez des milliers de conducteurs sur le plus grand simulateur
            ferroviaire français de Roblox.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 text-lg px-8"
            >
              <Play size={20} />
              Jouer maintenant
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-secondary gap-2 text-lg px-8"
            >
              <ExternalLink size={20} />
              Rejoindre Discord
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
