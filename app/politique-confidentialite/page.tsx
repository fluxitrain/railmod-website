"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Lock, Database, Eye, Trash2, Mail } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { RFRLogo } from "@/components/rfr-logo"

const sections = [
  {
    icon: Database,
    title: "1. Collecte des données",
    content: `RFR collecte uniquement les données nécessaires au fonctionnement du service :

• Votre identifiant Roblox (pour vous identifier dans le jeu)
• Vos statistiques de jeu (temps de jeu, missions effectuées)
• Vos préférences et paramètres
• Les messages postés dans l'espace de discussion (modérés)`
  },
  {
    icon: Eye,
    title: "2. Utilisation des données",
    content: `Vos données sont utilisées uniquement pour :

• Assurer le fonctionnement du jeu
• Sauvegarder votre progression
• Améliorer l'expérience utilisateur
• Modérer la communauté et assurer un environnement sain
• Communiquer les mises à jour importantes

Nous ne vendons jamais vos données à des tiers.`
  },
  {
    icon: Lock,
    title: "3. Protection des données",
    content: `Nous prenons la sécurité de vos données au sérieux :

• Les données sont stockées de manière sécurisée
• L'accès est limité aux membres autorisés de l'équipe
• Nous utilisons des protocoles de sécurité standards
• Les mots de passe administrateurs sont cryptés`
  },
  {
    icon: Trash2,
    title: "4. Suppression des données",
    content: `Vous pouvez demander la suppression de vos données à tout moment en nous contactant sur Discord. La suppression comprend :

• Vos statistiques de jeu
• Vos préférences sauvegardées
• Vos messages dans l'espace de discussion

Note : Certaines données peuvent être conservées pour des raisons légales ou de modération.`
  },
  {
    icon: Mail,
    title: "5. Contact",
    content: `Pour toute question concernant vos données personnelles ou pour exercer vos droits, contactez-nous via notre serveur Discord officiel.

Nous nous engageons à répondre à toute demande dans un délai de 30 jours.`
  },
]

export default function PolitiqueConfidentialitePage() {
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
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Lock className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Politique de confidentialité
            </h1>
            <p className="text-lg text-muted-foreground">
              Dernière mise à jour : 6 Mai 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 md:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <section.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-foreground mb-4">
                      {section.title}
                    </h2>
                    <div className="text-muted-foreground whitespace-pre-line leading-relaxed">
                      {section.content}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 p-6 bg-secondary/50 rounded-xl text-center"
          >
            <p className="text-muted-foreground">
              Pour toute question concernant cette politique, contactez-nous sur notre{" "}
              <a
                href="https://discord.gg/yBcuJAuCNZ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                serveur Discord
              </a>
              .
            </p>
          </motion.div>
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
