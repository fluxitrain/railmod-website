"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { History, Train, Zap, Globe, Rocket, Star } from "lucide-react"

const timeline = [
  {
    year: "1827",
    title: "Premiere ligne francaise",
    description: "Inauguration de la premiere ligne de chemin de fer francaise entre Saint-Etienne et Andrezieux, initialement pour le transport de charbon.",
    icon: Train,
    color: "bg-amber-500"
  },
  {
    year: "1842",
    title: "Loi sur les chemins de fer",
    description: "Vote de la loi relative a l'etablissement des grandes lignes de chemin de fer, creant un reseau en etoile centre sur Paris.",
    icon: Star,
    color: "bg-blue-500"
  },
  {
    year: "1938",
    title: "Creation de la SNCF",
    description: "Nationalisation des compagnies privees et creation de la Societe Nationale des Chemins de fer Francais le 1er janvier.",
    icon: Globe,
    color: "bg-green-500"
  },
  {
    year: "1981",
    title: "Premier TGV",
    description: "Mise en service commercial du premier TGV entre Paris et Lyon, revolutionnant le transport ferroviaire a grande vitesse.",
    icon: Zap,
    color: "bg-orange-500"
  },
  {
    year: "1994",
    title: "Tunnel sous la Manche",
    description: "Ouverture du tunnel sous la Manche, permettant une liaison ferroviaire directe entre la France et le Royaume-Uni.",
    icon: Globe,
    color: "bg-purple-500"
  },
  {
    year: "2007",
    title: "Record du monde",
    description: "Le TGV etablit un nouveau record mondial de vitesse sur rail a 574,8 km/h sur la LGV Est europeenne.",
    icon: Rocket,
    color: "bg-red-500"
  },
  {
    year: "2017",
    title: "LGV Tours-Bordeaux",
    description: "Inauguration de la LGV Sud Europe Atlantique, reduisant le trajet Paris-Bordeaux a 2h04.",
    icon: Train,
    color: "bg-cyan-500"
  },
  {
    year: "2024",
    title: "Creation de RFR",
    description: "Lancement du projet Roblox Ferroviaire Reseau, recreant fidelement le reseau ferroviaire francais sur Roblox.",
    icon: Star,
    color: "bg-primary"
  }
]

const chapters = [
  {
    title: "Les debuts du rail en France",
    content: `L'histoire du chemin de fer en France commence en 1827 avec l'ouverture de la premiere ligne entre Saint-Etienne et Andrezieux. Cette ligne, longue de 18 km, etait initialement destinee au transport du charbon des mines vers la Loire.

    La premiere ligne de voyageurs ouvre en 1837 entre Paris et Saint-Germain-en-Laye. Le succes est immediat et marque le debut d'une veritable fievre ferroviaire en France.`
  },
  {
    title: "L'age d'or du chemin de fer",
    content: `La seconde moitie du XIXe siecle voit une expansion rapide du reseau. La loi de 1842 etablit un plan national avec un reseau en etoile centre sur Paris, encore visible aujourd'hui.

    Six grandes compagnies privees se partagent le territoire : le Nord, l'Est, le PLM (Paris-Lyon-Mediterranee), le PO (Paris-Orleans), le Midi et l'Ouest. Cette periode voit la construction des grandes gares parisiennes.`
  },
  {
    title: "La nationalisation et la SNCF",
    content: `Face aux difficultes financieres des compagnies privees, l'Etat decide de nationaliser le reseau. Le 1er janvier 1938, la SNCF est creee, unissant toutes les compagnies sous une seule entite.

    La Seconde Guerre mondiale cause d'importants degats au reseau, qui sera reconstruit et modernise dans l'apres-guerre avec l'electrification progressive des lignes principales.`
  },
  {
    title: "La revolution TGV",
    content: `Le 27 septembre 1981, le TGV entre en service commercial entre Paris et Lyon. C'est une revolution : le train devient competitif face a l'avion sur les moyennes distances.

    Le succes est tel que le reseau LGV s'etend progressivement : TGV Atlantique (1989), TGV Nord et Eurostar (1994), TGV Mediterranee (2001), puis TGV Est (2007) et LGV SEA (2017).`
  },
  {
    title: "RFR : Le futur du ferroviaire virtuel",
    content: `En 2024, le projet Roblox Ferroviaire Reseau voit le jour avec l'ambition de recreer fidelement le reseau ferroviaire francais dans l'univers Roblox.

    Notre mission est de permettre a chacun de decouvrir et de conduire les trains emblematiques de France : TGV, TER, Intercites, dans un environnement realiste et immersif. Le depot et les livrees des trains sont actuellement en cours de developpement.`
  }
]

export default function HistoirePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
              <History className="w-4 h-4" />
              <span className="text-sm font-medium">Notre Heritage</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Histoire du Reseau
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Decouvrez l&apos;histoire passionnante du chemin de fer francais, de ses debuts a aujourd&apos;hui
            </p>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto mb-20"
          >
            <h2 className="text-2xl font-bold text-center mb-12">Dates cles</h2>
            <div className="relative">
              {/* Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />
              
              <div className="space-y-8">
                {timeline.map((event, index) => (
                  <motion.div
                    key={event.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <Card>
                        <CardContent className="p-6">
                          <span className="text-3xl font-bold text-primary">{event.year}</span>
                          <h3 className="text-xl font-semibold mt-2 mb-2">{event.title}</h3>
                          <p className="text-muted-foreground text-sm">{event.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div className={`${event.color} w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 z-10`}>
                      <event.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Chapters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-center mb-12">L&apos;histoire complete</h2>
            <div className="space-y-8">
              {chapters.map((chapter, index) => (
                <motion.div
                  key={chapter.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Card>
                    <CardContent className="p-8">
                      <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </span>
                        {chapter.title}
                      </h3>
                      <div className="text-muted-foreground whitespace-pre-line leading-relaxed">
                        {chapter.content}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
