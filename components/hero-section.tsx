"use client"

import { motion } from "framer-motion"
import { Play, ChevronDown } from "lucide-react"
import { RFRLogo } from "./rfr-logo"
import { Button } from "@/components/ui/button"

const stats = [
  { value: "15+", label: "Lignes" },
  { value: "50+", label: "Gares" },
  { value: "25+", label: "Trains" },
]

export function HeroSection() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/20" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-primary rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent rounded-full blur-3xl"
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative container mx-auto px-4 pt-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium border border-primary/30">
              Simulateur ferroviaire sur Roblox
            </span>
          </motion.div>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6"
          >
            <RFRLogo size="xl" animated={true} />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance"
          >
            <span className="text-foreground">Roblox Ferroviaire</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Réseau
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl text-pretty"
          >
            Conduisez des TGV, TER et Intercités sur les plus grandes lignes de France.
            Vivez une expérience ferroviaire unique et immersive.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 text-lg px-8"
            >
              <Play size={20} />
              Jouer sur Roblox
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-secondary gap-2 text-lg px-8"
            >
              En savoir plus
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-3 gap-8 md:gap-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-5xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-muted-foreground"
          >
            <span className="text-sm mb-2">Défiler</span>
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
