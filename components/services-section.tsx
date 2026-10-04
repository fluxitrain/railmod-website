"use client"

import { motion } from "framer-motion"
import { Train, Route, ShoppingBag, Wrench } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const services = [
  {
    icon: Train,
    title: "Trains",
    description: "TGV, TER, Intercités",
    details: "Conduisez une grande variété de trains français avec des contrôles réalistes.",
  },
  {
    icon: Route,
    title: "Lignes",
    description: "Réseau ferroviaire complet",
    details: "Explorez les plus grandes lignes de France avec des décors détaillés.",
  },
  {
    icon: ShoppingBag,
    title: "Boutique",
    description: "Gamepasses & accessoires",
    details: "Débloquez des trains exclusifs et personnalisez votre expérience.",
    badge: "En construction",
  },
  {
    icon: Wrench,
    title: "Support",
    description: "Aide & assistance",
    details: "Notre équipe est disponible pour répondre à toutes vos questions.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function ServicesSection() {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium mb-4 block">
            Explorez
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Nos services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tout pour votre expérience ferroviaire française
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Card className="group h-full bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 cursor-pointer hover:-translate-y-1">
                <CardContent className="pt-6">
                  <div className="relative mb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <service.icon
                        className="w-7 h-7 text-primary"
                        strokeWidth={1.5}
                      />
                    </div>
                    {service.badge && (
                      <Badge
                        variant="secondary"
                        className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs"
                      >
                        {service.badge}
                      </Badge>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-primary/80 text-sm font-medium mb-3">
                    {service.description}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {service.details}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
