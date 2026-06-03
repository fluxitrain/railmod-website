"use client"

import { motion } from "framer-motion"
import { ArrowLeft, FileText, Shield, Users, AlertTriangle, Scale } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { RFRLogo } from "@/components/rfr-logo"

const sections = [
  {
    icon: FileText,
    title: "1. Acceptation des conditions",
    content: `En accédant et en utilisant RFR (Roblox Ferroviaire Réseau), vous acceptez d'être lié par ces conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser nos services.`
  },
  {
    icon: Users,
    title: "2. Utilisation du service",
    content: `RFR est un simulateur ferroviaire sur la plateforme Roblox. En utilisant notre service, vous vous engagez à :
    
• Respecter les règles de la communauté Roblox
• Ne pas tricher ou utiliser des exploits
• Traiter les autres joueurs avec respect
• Ne pas partager de contenu inapproprié
• Signaler tout comportement abusif à notre équipe de modération`
  },
  {
    icon: Shield,
    title: "3. Compte utilisateur",
    content: `Votre compte RFR est lié à votre compte Roblox. Vous êtes responsable de :

• La sécurité de votre compte
• Toutes les activités effectuées sous votre compte
• Ne pas partager vos identifiants avec d'autres personnes`
  },
  {
    icon: AlertTriangle,
    title: "4. Contenu et propriété intellectuelle",
    content: `Tout le contenu présent sur RFR (trains, gares, lignes, graphismes, sons) est la propriété de l'équipe RFR. Il est interdit de :

• Copier ou reproduire notre contenu sans autorisation
• Utiliser nos assets dans d'autres projets
• Vendre ou distribuer notre contenu`
  },
  {
    icon: Scale,
    title: "5. Modifications et sanctions",
    content: `L'équipe RFR se réserve le droit de :

• Modifier ces conditions à tout moment
• Suspendre ou bannir les comptes en cas de violation
• Modifier ou supprimer du contenu du jeu
• Refuser l'accès au service sans préavis

Les décisions de modération sont finales et ne peuvent être contestées que par le biais de notre serveur Discord.`
  },
]

export default function ConditionsUtilisationPage() {
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
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Conditions d&apos;utilisation
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
              Pour toute question concernant ces conditions, contactez-nous sur notre{" "}
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
