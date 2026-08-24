"use client"

import { motion } from "framer-motion"
import { Calendar, ArrowLeft, ExternalLink, MessageCircle, Sparkles, Wrench, Bug, Zap } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { RFRLogo } from "@/components/rfr-logo"

type UpdateType = "feature" | "improvement" | "bugfix" | "announcement"

interface Update {
  id: string
  version: string
  date: string
  title: string
  type: UpdateType
  description: string
  changes: string[]
}

const updates: Update[] = [
  {
    id: "1",
    version: "1.0.0",
    date: "6 Mai 2025",
    title: "Lancement officiel - Discord disponible",
    type: "announcement",
    description: "Nous sommes ravis de vous annoncer le lancement officiel de RFR ! Rejoignez notre communauté Discord pour rester informé des dernières nouvelles et interagir avec les autres joueurs.",
    changes: [
      "Ajout du lien officiel Discord de la communauté RFR",
      "Création du serveur Discord avec tous les canaux nécessaires",
      "Mise en place du système de rôles et de modération",
      "Canaux dédiés aux annonces, suggestions et support",
    ],
  },
]

const typeConfig: Record<UpdateType, { icon: typeof Sparkles; label: string; color: string }> = {
  feature: {
    icon: Sparkles,
    label: "Nouveauté",
    color: "bg-primary/20 text-primary border-primary/30",
  },
  improvement: {
    icon: Zap,
    label: "Amélioration",
    color: "bg-accent/20 text-accent border-accent/30",
  },
  bugfix: {
    icon: Bug,
    label: "Correction",
    color: "bg-destructive/20 text-destructive border-destructive/30",
  },
  announcement: {
    icon: MessageCircle,
    label: "Annonce",
    color: "bg-chart-3/20 text-chart-3 border-chart-3/30",
  },
}

function UpdateCard({ update, index }: { update: Update; index: number }) {
  const config = typeConfig[update.type]
  const Icon = config.icon

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      {/* Timeline connector */}
      {index < updates.length - 1 && (
        <div className="absolute left-6 top-16 bottom-0 w-px bg-border hidden md:block" />
      )}
      
      <div className="flex gap-4 md:gap-8">
        {/* Timeline dot */}
        <div className="hidden md:flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
            <Icon className="w-5 h-5 text-primary" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${config.color}`}>
              <Icon className="w-3 h-3" />
              {config.label}
            </span>
            <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-mono">
              v{update.version}
            </span>
            <span className="flex items-center gap-1.5 text-muted-foreground text-sm">
              <Calendar className="w-4 h-4" />
              {update.date}
            </span>
          </div>

          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">
            {update.title}
          </h2>

          <p className="text-muted-foreground mb-6 leading-relaxed">
            {update.description}
          </p>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
              <Wrench className="w-4 h-4 text-primary" />
              Changements
            </h3>
            <ul className="space-y-2">
              {update.changes.map((change, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {change}
                </li>
              ))}
            </ul>
          </div>

          {update.id === "1" && (
            <div className="mt-6 pt-6 border-t border-border">
              <Button asChild className="bg-[#5865F2] hover:bg-[#4752C4] text-white">
                <a
                  href="https://discord.gg/yBcuJAuCNZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                  Rejoindre le Discord
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default function MisesAJourPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex items-center gap-2">
              <RFRLogo size="sm" animated={false} />
              <span className="font-bold text-xl hidden sm:block">RFR</span>
            </Link>
            <Button variant="ghost" asChild>
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Retour
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Mises à jour
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Retrouvez toutes les nouveautés, améliorations et corrections apportées à RFR.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Updates List */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            {updates.map((update, index) => (
              <UpdateCard key={update.id} update={update} index={index} />
            ))}
          </div>

          {updates.length === 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-16 text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-muted-foreground text-sm">
                <Sparkles className="w-4 h-4" />
                Plus de mises à jour arrivent bientôt !
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>&copy; 2025 RFR - Roblox Ferroviaire Réseau. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  )
}
