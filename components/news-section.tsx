"use client"

import { motion } from "framer-motion"
import { Newspaper, Calendar, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const news = [
  {
    id: 1,
    title: "Site en cours de construction",
    excerpt:
      "Si vous avez des questions, n'hésitez pas à aller dans la rubrique Support pour nous contacter.",
    date: "5 avril 2026",
    category: "Info",
    featured: true,
  },
  {
    id: 2,
    title: "Nouvelle ligne TGV disponible",
    excerpt:
      "La ligne Paris-Lyon est maintenant disponible avec de nouveaux trains et gares.",
    date: "3 avril 2026",
    category: "Mise à jour",
    featured: false,
  },
  {
    id: 3,
    title: "Événement spécial ce week-end",
    excerpt:
      "Rejoignez-nous pour un événement spécial avec des récompenses exclusives.",
    date: "1 avril 2026",
    category: "Événement",
    featured: false,
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function NewsSection() {
  return (
    <section id="actualites" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

      <div className="relative container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-4">
            <Newspaper size={16} />
            Blog
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Actualités</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Les dernières nouvelles de RFR
          </p>
        </motion.div>

        {/* News grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {news.map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
              <Card
                className={`group h-full bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 cursor-pointer ${
                  item.featured ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between mb-2">
                    <Badge
                      variant="secondary"
                      className="bg-primary/20 text-primary border-0"
                    >
                      {item.category}
                    </Badge>
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar size={14} />
                      {item.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{item.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                    Lire la suite
                    <ArrowRight size={16} />
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
