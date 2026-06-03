"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Lightbulb, Calendar, RefreshCw, Share2, ChevronLeft, ChevronRight, Sparkles } from "lucide-react"

const facts = [
  {
    id: 1,
    fact: "Le TGV a battu le record mondial de vitesse sur rail en 2007 avec 574,8 km/h lors d'un essai sur la LGV Est.",
    category: "Record",
    source: "SNCF"
  },
  {
    id: 2,
    fact: "La premiere ligne de chemin de fer francaise a ete inauguree en 1827 entre Saint-Etienne et Andrezieux.",
    category: "Histoire",
    source: "Archives SNCF"
  },
  {
    id: 3,
    fact: "Le reseau ferroviaire francais compte plus de 30 000 km de voies, dont 2 800 km de lignes a grande vitesse.",
    category: "Reseau",
    source: "SNCF Reseau"
  },
  {
    id: 4,
    fact: "La gare du Nord a Paris est la gare la plus frequentee d'Europe avec plus de 700 000 voyageurs par jour.",
    category: "Gare",
    source: "SNCF Gares"
  },
  {
    id: 5,
    fact: "Le premier TGV commercial a circule le 27 septembre 1981 entre Paris et Lyon.",
    category: "TGV",
    source: "SNCF"
  },
  {
    id: 6,
    fact: "Un TGV Duplex peut transporter jusqu'a 1 268 passagers sur deux niveaux.",
    category: "Materiel",
    source: "Alstom"
  },
  {
    id: 7,
    fact: "La LGV Mediterranee permet de relier Paris a Marseille en seulement 3h00.",
    category: "LGV",
    source: "SNCF"
  },
  {
    id: 8,
    fact: "Le tunnel sous la Manche mesure 50,5 km, dont 37,9 km sous la mer.",
    category: "Infrastructure",
    source: "Eurotunnel"
  },
  {
    id: 9,
    fact: "Les TER transportent plus de 800 000 voyageurs chaque jour en France.",
    category: "TER",
    source: "SNCF Voyageurs"
  },
  {
    id: 10,
    fact: "La SNCF a ete creee le 1er janvier 1938 par la nationalisation des compagnies privees.",
    category: "Histoire",
    source: "Archives SNCF"
  },
  {
    id: 11,
    fact: "Le viaduc de Millau, traverse par l'A75, surplombe la voie ferree a 343 metres de hauteur.",
    category: "Infrastructure",
    source: "SNCF Reseau"
  },
  {
    id: 12,
    fact: "Un conducteur de TGV est appele 'agent de conduite' et suit une formation de 18 mois.",
    category: "Metier",
    source: "SNCF"
  },
  {
    id: 13,
    fact: "Le TGV InOui est la marque haut de gamme de la SNCF lancee en 2017.",
    category: "TGV",
    source: "SNCF Voyageurs"
  },
  {
    id: 14,
    fact: "La France possede le deuxieme plus grand reseau ferroviaire d'Europe apres l'Allemagne.",
    category: "Reseau",
    source: "UIC"
  },
  {
    id: 15,
    fact: "Le premier metro automatique sans conducteur en France a ete inaugure a Lille en 1983.",
    category: "Metro",
    source: "Transpole"
  },
  {
    id: 16,
    fact: "Un TGV consomme environ 15 kWh d'electricite par kilometre parcouru.",
    category: "Energie",
    source: "SNCF"
  },
  {
    id: 17,
    fact: "La gare de Lyon Part-Dieu est la plus grande gare de correspondance en Europe.",
    category: "Gare",
    source: "SNCF Gares"
  },
  {
    id: 18,
    fact: "Le Transilien transporte 3,4 millions de voyageurs par jour en Ile-de-France.",
    category: "Transilien",
    source: "SNCF"
  },
  {
    id: 19,
    fact: "La signalisation ferroviaire francaise utilise le systeme BAL (Block Automatique Lumineux).",
    category: "Technique",
    source: "SNCF Reseau"
  },
  {
    id: 20,
    fact: "Le TGV M, nouvelle generation de TGV, sera mis en service a partir de 2024.",
    category: "TGV",
    source: "Alstom"
  },
  {
    id: 21,
    fact: "La ligne Paris-Lyon fut la premiere LGV mise en service en France en 1981.",
    category: "LGV",
    source: "SNCF"
  },
  {
    id: 22,
    fact: "Un TGV peut freiner d'une vitesse de 320 km/h a l'arret en environ 3 km.",
    category: "Technique",
    source: "SNCF"
  },
  {
    id: 23,
    fact: "Le reseau TER dessert plus de 5 600 gares et points d'arret en France.",
    category: "TER",
    source: "SNCF"
  },
  {
    id: 24,
    fact: "L'Eurostar relie Paris a Londres en 2h16 via le tunnel sous la Manche.",
    category: "International",
    source: "Eurostar"
  },
  {
    id: 25,
    fact: "La maintenance d'un TGV se fait toutes les 4 000 km parcourus.",
    category: "Maintenance",
    source: "SNCF"
  },
  {
    id: 26,
    fact: "Le train de nuit Paris-Nice a ete relance en 2021 apres plusieurs annees d'interruption.",
    category: "Intercites",
    source: "SNCF"
  },
  {
    id: 27,
    fact: "Un TGV Duplex pese environ 380 tonnes a vide.",
    category: "Materiel",
    source: "Alstom"
  },
  {
    id: 28,
    fact: "La France compte 14 technicentres pour la maintenance des TGV.",
    category: "Maintenance",
    source: "SNCF"
  },
  {
    id: 29,
    fact: "Le cadencement des TER permet des departs reguliers toutes les heures ou demi-heures.",
    category: "TER",
    source: "SNCF"
  },
  {
    id: 30,
    fact: "La LGV Tours-Bordeaux inauguree en 2017 a reduit le trajet Paris-Bordeaux a 2h04.",
    category: "LGV",
    source: "SNCF"
  },
  {
    id: 31,
    fact: "Le Ouigo est le TGV low-cost de la SNCF lance en 2013.",
    category: "TGV",
    source: "SNCF"
  }
]

export default function LeSaviezVousPage() {
  const [currentFactIndex, setCurrentFactIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // Get fact of the day based on current date
  useEffect(() => {
    const today = new Date()
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000)
    setCurrentFactIndex(dayOfYear % facts.length)
  }, [])

  const currentFact = facts[currentFactIndex]
  
  const nextFact = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentFactIndex((prev) => (prev + 1) % facts.length)
      setIsAnimating(false)
    }, 200)
  }

  const prevFact = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentFactIndex((prev) => (prev - 1 + facts.length) % facts.length)
      setIsAnimating(false)
    }, 200)
  }

  const randomFact = () => {
    setIsAnimating(true)
    setTimeout(() => {
      let newIndex
      do {
        newIndex = Math.floor(Math.random() * facts.length)
      } while (newIndex === currentFactIndex)
      setCurrentFactIndex(newIndex)
      setIsAnimating(false)
    }, 200)
  }

  const shareFact = () => {
    if (navigator.share) {
      navigator.share({
        title: "Le saviez-vous ? - RFR",
        text: currentFact.fact,
        url: window.location.href
      })
    }
  }

  const formatDate = () => {
    const today = new Date()
    return today.toLocaleDateString('fr-FR', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
              <Lightbulb className="w-4 h-4" />
              <span className="text-sm font-medium">Culture Ferroviaire</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Le Saviez-Vous ?
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Decouvrez chaque jour une nouvelle anecdote sur le monde ferroviaire francais
            </p>
          </motion.div>

          {/* Fact of the Day */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto mb-12"
          >
            <Card className="relative overflow-hidden border-primary/20">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span className="capitalize">{formatDate()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {currentFact.category}
                    </span>
                  </div>
                </div>

                <motion.div
                  key={currentFactIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isAnimating ? 0 : 1, y: isAnimating ? 20 : 0 }}
                  className="mb-6"
                >
                  <div className="flex gap-4">
                    <Sparkles className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <p className="text-xl md:text-2xl font-medium leading-relaxed">
                      {currentFact.fact}
                    </p>
                  </div>
                </motion.div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-xs text-muted-foreground">
                    Source: {currentFact.source}
                  </span>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="ghost" onClick={prevFact}>
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <span className="text-sm text-muted-foreground">
                      {currentFactIndex + 1} / {facts.length}
                    </span>
                    <Button size="sm" variant="ghost" onClick={nextFact}>
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center gap-4 mb-16"
          >
            <Button variant="outline" onClick={randomFact}>
              <RefreshCw className="w-4 h-4 mr-2" />
              Fait aleatoire
            </Button>
            <Button variant="outline" onClick={shareFact}>
              <Share2 className="w-4 h-4 mr-2" />
              Partager
            </Button>
          </motion.div>

          {/* All Facts Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-center mb-8">Tous les faits</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {facts.map((fact, index) => (
                <motion.div
                  key={fact.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (index % 6) }}
                >
                  <Card 
                    className={`h-full cursor-pointer transition-all hover:border-primary/50 ${currentFactIndex === index ? 'border-primary bg-primary/5' : ''}`}
                    onClick={() => setCurrentFactIndex(index)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                          #{fact.id}
                        </span>
                        <div>
                          <p className="text-sm mb-2">{fact.fact}</p>
                          <span className="text-xs text-muted-foreground">{fact.category}</span>
                        </div>
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
