"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RFRLogo } from "@/components/rfr-logo"
import { 
  Heart, 
  Code, 
  Palette, 
  Gamepad2, 
  Users,
  Star,
  Github,
  ExternalLink
} from "lucide-react"

const teamMembers = [
  {
    category: "Developpement du Jeu",
    icon: Gamepad2,
    color: "text-primary",
    members: [
      { name: "Fondateur RFR", role: "Fondateur & Developpeur Principal", description: "Creation du jeu, systemes de conduite, depot ferroviaire" },
      { name: "Equipe Dev", role: "Developpeurs", description: "Livrees des trains, scripting, optimisation" },
    ],
  },
  {
    category: "Developpement du Site",
    icon: Code,
    color: "text-accent",
    members: [
      { name: "v0 by Vercel", role: "Assistant IA", description: "Generation du code, design et architecture du site" },
      { name: "Equipe Web RFR", role: "Maintenance", description: "Mises a jour, contenu et gestion du site" },
    ],
  },
  {
    category: "Design & Assets",
    icon: Palette,
    color: "text-yellow-500",
    members: [
      { name: "Equipe Artistique", role: "Designers", description: "Livrees des trains, textures, visuels" },
      { name: "Modelisateurs 3D", role: "Creation 3D", description: "Modeles de trains, gares et environnements" },
    ],
  },
  {
    category: "Communaute",
    icon: Users,
    color: "text-green-500",
    members: [
      { name: "Moderateurs", role: "Moderation", description: "Gestion de la communaute Discord et in-game" },
      { name: "Testeurs Beta", role: "Tests", description: "Tests des nouvelles fonctionnalites et retours" },
    ],
  },
]

const technologies = [
  { name: "Roblox Studio", description: "Moteur de jeu", url: "https://create.roblox.com" },
  { name: "Next.js", description: "Framework React", url: "https://nextjs.org" },
  { name: "Tailwind CSS", description: "Framework CSS", url: "https://tailwindcss.com" },
  { name: "Framer Motion", description: "Animations", url: "https://www.framer.com/motion" },
  { name: "Vercel", description: "Hebergement", url: "https://vercel.com" },
  { name: "shadcn/ui", description: "Composants UI", url: "https://ui.shadcn.com" },
]

const specialThanks = [
  "Tous les joueurs de RFR",
  "La communaute Discord",
  "Les createurs de contenu",
  "SNCF pour l'inspiration",
  "La communaute Roblox France",
]

export default function CreditsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <RFRLogo size="lg" animated />
            </motion.div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Credits</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Merci a toutes les personnes qui contribuent au projet RFR
            </p>
          </motion.div>

          {/* Team Sections */}
          <div className="space-y-12 mb-16">
            {teamMembers.map((section, sectionIndex) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * sectionIndex }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 rounded-lg bg-secondary ${section.color}`}>
                    <section.icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold">{section.category}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.members.map((member, index) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * sectionIndex + 0.05 * index }}
                      className="p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-lg">
                          {member.name.charAt(0)}
                        </div>
                        <div>
                          <h3 className="font-semibold">{member.name}</h3>
                          <p className={`text-sm ${section.color}`}>{member.role}</p>
                          <p className="text-xs text-muted-foreground mt-1">{member.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-secondary text-primary">
                <Code className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold">Technologies utilisees</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {technologies.map((tech, index) => (
                <motion.a
                  key={tech.name}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + 0.05 * index }}
                  className="p-4 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold group-hover:text-primary transition-colors">{tech.name}</h3>
                      <p className="text-xs text-muted-foreground">{tech.description}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Special Thanks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-secondary text-red-500">
                <Heart className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold">Remerciements speciaux</h2>
            </div>

            <div className="p-6 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/30">
              <div className="flex flex-wrap gap-3">
                {specialThanks.map((thank, index) => (
                  <motion.div
                    key={thank}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + 0.05 * index }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border"
                  >
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm">{thank}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Footer Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center"
          >
            <div className="p-8 rounded-lg bg-card border border-border">
              <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Merci de jouer a RFR !</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Ce projet est rendu possible grace a notre incroyable communaute. 
                Chaque joueur contribue a faire de RFR une experience unique.
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
