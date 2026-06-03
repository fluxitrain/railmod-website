"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BookOpen, Search, Train, Zap, Clock, Users, Gauge, Calendar, ChevronDown, ChevronUp } from "lucide-react"

type Train = {
  id: string
  name: string
  type: string
  description: string
  vitesseMax: string
  capacite: string
  miseEnService: string
  constructeur: string
  longueur: string
  puissance: string
  lignes: string[]
  status: "disponible" | "en_dev" | "planifie"
}

const trains: Train[] = [
  {
    id: "tgv-duplex",
    name: "TGV Duplex",
    type: "TGV",
    description: "Le TGV Duplex est un train a grande vitesse a deux niveaux, permettant d'augmenter significativement la capacite tout en maintenant des performances elevees. C'est le train emblematique des lignes a grande vitesse francaises.",
    vitesseMax: "320 km/h",
    capacite: "510 places",
    miseEnService: "1996",
    constructeur: "Alstom",
    longueur: "200 m",
    puissance: "9 280 kW",
    lignes: ["Paris-Lyon", "Paris-Marseille", "Paris-Montpellier"],
    status: "en_dev"
  },
  {
    id: "tgv-inoui",
    name: "TGV InOui",
    type: "TGV",
    description: "TGV InOui est la marque premium de la SNCF pour ses services a grande vitesse. Ces rames offrent un confort superieur avec wifi, prises electriques et services a bord.",
    vitesseMax: "320 km/h",
    capacite: "556 places",
    miseEnService: "2017",
    constructeur: "Alstom",
    longueur: "200 m",
    puissance: "9 280 kW",
    lignes: ["Paris-Bordeaux", "Paris-Strasbourg", "Paris-Lille"],
    status: "en_dev"
  },
  {
    id: "ouigo",
    name: "Ouigo",
    type: "TGV",
    description: "Ouigo est l'offre TGV low-cost de la SNCF. Ces trains circulent a pleine capacite avec une densite de sieges plus importante pour proposer des tarifs tres competitifs.",
    vitesseMax: "320 km/h",
    capacite: "1 268 places",
    miseEnService: "2013",
    constructeur: "Alstom",
    longueur: "200 m (UM)",
    puissance: "9 280 kW",
    lignes: ["Paris-Lyon", "Paris-Marseille", "Paris-Nantes"],
    status: "planifie"
  },
  {
    id: "ter-regiolis",
    name: "Regiolis",
    type: "TER",
    description: "Le Regiolis est un train regional moderne et polyvalent. Il peut circuler en version electrique, diesel ou bimode selon les besoins des regions.",
    vitesseMax: "160 km/h",
    capacite: "220 places",
    miseEnService: "2014",
    constructeur: "Alstom",
    longueur: "72 m",
    puissance: "2 400 kW",
    lignes: ["TER toutes regions"],
    status: "en_dev"
  },
  {
    id: "ter-omneo",
    name: "Omneo Premium",
    type: "TER",
    description: "L'Omneo Premium est un train a deux niveaux concu pour les lignes TER a fort trafic. Il offre un grand confort et une capacite importante.",
    vitesseMax: "200 km/h",
    capacite: "480 places",
    miseEnService: "2017",
    constructeur: "Bombardier",
    longueur: "110 m",
    puissance: "3 600 kW",
    lignes: ["TER Normandie", "TER Hauts-de-France"],
    status: "planifie"
  },
  {
    id: "intercites",
    name: "Intercites",
    type: "Intercites",
    description: "Les trains Intercites assurent les liaisons entre les grandes villes sur les lignes classiques. Ils offrent un bon rapport qualite-prix pour les moyennes distances.",
    vitesseMax: "200 km/h",
    capacite: "380 places",
    miseEnService: "2012",
    constructeur: "Alstom/CAF",
    longueur: "145 m",
    puissance: "4 200 kW",
    lignes: ["Paris-Clermont", "Paris-Limoges", "Bordeaux-Marseille"],
    status: "planifie"
  },
  {
    id: "tgv-m",
    name: "TGV M (Avelia Horizon)",
    type: "TGV",
    description: "Le TGV M est la nouvelle generation de TGV. Plus ecologique, plus spacieux et plus confortable, il represente l'avenir de la grande vitesse en France.",
    vitesseMax: "320 km/h",
    capacite: "740 places",
    miseEnService: "2024",
    constructeur: "Alstom",
    longueur: "200 m",
    puissance: "9 000 kW",
    lignes: ["Toutes LGV"],
    status: "planifie"
  },
  {
    id: "eurostar",
    name: "Eurostar e320",
    type: "International",
    description: "L'Eurostar e320 relie Paris a Londres via le tunnel sous la Manche. C'est l'un des trains les plus rapides et confortables d'Europe.",
    vitesseMax: "320 km/h",
    capacite: "900 places",
    miseEnService: "2015",
    constructeur: "Siemens",
    longueur: "400 m",
    puissance: "16 000 kW",
    lignes: ["Paris-Londres", "Paris-Bruxelles"],
    status: "planifie"
  }
]

const typeColors: Record<string, string> = {
  "TGV": "bg-red-500",
  "TER": "bg-blue-500",
  "Intercites": "bg-green-500",
  "International": "bg-purple-500"
}

const statusLabels: Record<string, { label: string; color: string }> = {
  "disponible": { label: "Disponible", color: "bg-green-500" },
  "en_dev": { label: "En developpement", color: "bg-amber-500" },
  "planifie": { label: "Planifie", color: "bg-blue-500" }
}

export default function WikiTrainPage() {
  const [search, setSearch] = useState("")
  const [filterType, setFilterType] = useState<string | null>(null)
  const [expandedTrain, setExpandedTrain] = useState<string | null>(null)

  const filteredTrains = trains.filter(train => {
    const matchesSearch = train.name.toLowerCase().includes(search.toLowerCase()) ||
                         train.description.toLowerCase().includes(search.toLowerCase())
    const matchesType = !filterType || train.type === filterType
    return matchesSearch && matchesType
  })

  const types = [...new Set(trains.map(t => t.type))]

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
              <BookOpen className="w-4 h-4" />
              <span className="text-sm font-medium">Encyclopedie</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              WikiTrain
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Decouvrez tous les trains du reseau RFR avec leurs caracteristiques techniques detaillees
            </p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Rechercher un train..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                <Button
                  variant={filterType === null ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterType(null)}
                >
                  Tous
                </Button>
                {types.map(type => (
                  <Button
                    key={type}
                    variant={filterType === type ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilterType(type)}
                  >
                    {type}
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12"
          >
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-3xl font-bold text-primary">{trains.length}</div>
                <div className="text-sm text-muted-foreground">Trains documentes</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-3xl font-bold text-primary">{trains.filter(t => t.status === 'en_dev').length}</div>
                <div className="text-sm text-muted-foreground">En developpement</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-3xl font-bold text-primary">{types.length}</div>
                <div className="text-sm text-muted-foreground">Categories</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-3xl font-bold text-primary">{trains.filter(t => t.status === 'planifie').length}</div>
                <div className="text-sm text-muted-foreground">A venir</div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Train List */}
          <div className="max-w-4xl mx-auto space-y-4">
            {filteredTrains.map((train, index) => (
              <motion.div
                key={train.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index }}
              >
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div 
                      className="p-6 cursor-pointer"
                      onClick={() => setExpandedTrain(expandedTrain === train.id ? null : train.id)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4">
                          <div className={`${typeColors[train.type]} w-12 h-12 rounded-lg flex items-center justify-center`}>
                            <Train className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-xl font-semibold">{train.name}</h3>
                              <span className={`${statusLabels[train.status].color} px-2 py-0.5 rounded text-xs text-white`}>
                                {statusLabels[train.status].label}
                              </span>
                            </div>
                            <p className="text-muted-foreground text-sm mb-2">{train.type}</p>
                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Gauge className="w-4 h-4" />
                                {train.vitesseMax}
                              </span>
                              <span className="flex items-center gap-1">
                                <Users className="w-4 h-4" />
                                {train.capacite}
                              </span>
                              <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {train.miseEnService}
                              </span>
                            </div>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon">
                          {expandedTrain === train.id ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                        </Button>
                      </div>
                    </div>

                    {expandedTrain === train.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="border-t border-border"
                      >
                        <div className="p-6 bg-secondary/30">
                          <p className="text-muted-foreground mb-6">{train.description}</p>
                          
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold mb-3">Caracteristiques techniques</h4>
                              <div className="space-y-2 text-sm">
                                <div className="flex justify-between py-2 border-b border-border">
                                  <span className="text-muted-foreground">Vitesse maximale</span>
                                  <span className="font-medium">{train.vitesseMax}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-border">
                                  <span className="text-muted-foreground">Capacite</span>
                                  <span className="font-medium">{train.capacite}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-border">
                                  <span className="text-muted-foreground">Longueur</span>
                                  <span className="font-medium">{train.longueur}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-border">
                                  <span className="text-muted-foreground">Puissance</span>
                                  <span className="font-medium">{train.puissance}</span>
                                </div>
                                <div className="flex justify-between py-2">
                                  <span className="text-muted-foreground">Constructeur</span>
                                  <span className="font-medium">{train.constructeur}</span>
                                </div>
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold mb-3">Lignes desservies</h4>
                              <div className="flex flex-wrap gap-2">
                                {train.lignes.map(ligne => (
                                  <span key={ligne} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                                    {ligne}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {filteredTrains.length === 0 && (
              <div className="text-center py-12">
                <Train className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Aucun train trouve</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
