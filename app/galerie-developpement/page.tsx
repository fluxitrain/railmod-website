"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wrench, X, ChevronLeft, ChevronRight, Image as ImageIcon, Calendar, User, Tag } from "lucide-react"
import Image from "next/image"

type DevImage = {
  id: string
  title: string
  description: string
  category: string
  date: string
  author: string
  version: string
  placeholder: boolean
}

const categories = ["Tous", "Modelisation", "Textures", "Tests", "Interface", "Depot"]

const devImages: DevImage[] = [
  {
    id: "dev-1",
    title: "Modelisation TGV Duplex",
    description: "Premiers travaux de modelisation 3D du TGV Duplex avec les details exterieurs",
    category: "Modelisation",
    date: "En cours",
    author: "Equipe 3D",
    version: "0.1",
    placeholder: true
  },
  {
    id: "dev-2",
    title: "Textures livree SNCF",
    description: "Application des textures officielles SNCF sur le modele TGV",
    category: "Textures",
    date: "En cours",
    author: "Equipe Design",
    version: "0.1",
    placeholder: true
  },
  {
    id: "dev-3",
    title: "Construction du depot",
    description: "Debut de la construction du depot principal avec les voies de garage",
    category: "Depot",
    date: "En cours",
    author: "Equipe Build",
    version: "0.1",
    placeholder: true
  },
  {
    id: "dev-4",
    title: "Interface cabine",
    description: "Conception de l'interface de la cabine de conduite",
    category: "Interface",
    date: "Planifie",
    author: "Equipe UI",
    version: "0.1",
    placeholder: true
  },
  {
    id: "dev-5",
    title: "Tests physique",
    description: "Tests du moteur physique pour le comportement des trains",
    category: "Tests",
    date: "Planifie",
    author: "Equipe Dev",
    version: "0.1",
    placeholder: true
  },
  {
    id: "dev-6",
    title: "Modelisation TER Regiolis",
    description: "Modelisation du TER Regiolis pour les lignes regionales",
    category: "Modelisation",
    date: "Planifie",
    author: "Equipe 3D",
    version: "0.1",
    placeholder: true
  },
  {
    id: "dev-7",
    title: "Atelier maintenance",
    description: "Construction de l'atelier de maintenance du depot",
    category: "Depot",
    date: "Planifie",
    author: "Equipe Build",
    version: "0.1",
    placeholder: true
  },
  {
    id: "dev-8",
    title: "Systeme de signalisation",
    description: "Implementation du systeme de signalisation ferroviaire",
    category: "Tests",
    date: "Planifie",
    author: "Equipe Dev",
    version: "0.1",
    placeholder: true
  },
  {
    id: "dev-9",
    title: "Menu principal",
    description: "Design du menu principal du jeu",
    category: "Interface",
    date: "Planifie",
    author: "Equipe UI",
    version: "0.1",
    placeholder: true
  }
]

const categoryColors: Record<string, string> = {
  "Modelisation": "bg-blue-500",
  "Textures": "bg-green-500",
  "Tests": "bg-amber-500",
  "Interface": "bg-purple-500",
  "Depot": "bg-red-500"
}

export default function GalerieDeveloppementPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tous")
  const [selectedImage, setSelectedImage] = useState<DevImage | null>(null)

  const filteredImages = devImages.filter(img => 
    selectedCategory === "Tous" || img.category === selectedCategory
  )

  const currentIndex = selectedImage ? filteredImages.findIndex(img => img.id === selectedImage.id) : -1

  const navigateImage = (direction: "prev" | "next") => {
    if (!selectedImage) return
    const newIndex = direction === "prev" 
      ? (currentIndex - 1 + filteredImages.length) % filteredImages.length
      : (currentIndex + 1) % filteredImages.length
    setSelectedImage(filteredImages[newIndex])
  }

  const stats = {
    total: devImages.length,
    modelisation: devImages.filter(i => i.category === "Modelisation").length,
    depot: devImages.filter(i => i.category === "Depot").length,
    enCours: devImages.filter(i => i.date === "En cours").length
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
              <Wrench className="w-4 h-4" />
              <span className="text-sm font-medium">Behind the Scenes</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Galerie Developpement
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Suivez les coulisses du developpement de RFR avec les images de notre progression
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8"
          >
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-3xl font-bold text-primary">{stats.total}</div>
                <div className="text-sm text-muted-foreground">Images dev</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-3xl font-bold text-primary">{stats.enCours}</div>
                <div className="text-sm text-muted-foreground">En cours</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-3xl font-bold text-primary">{stats.modelisation}</div>
                <div className="text-sm text-muted-foreground">Modeles 3D</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-3xl font-bold text-primary">{stats.depot}</div>
                <div className="text-sm text-muted-foreground">Depot</div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Progress Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="max-w-4xl mx-auto mb-8"
          >
            <Card className="border-amber-500/20 bg-amber-500/5">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                    <Wrench className="w-6 h-6 text-amber-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">Developpement en cours</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Le depot et les livrees des trains sont actuellement en developpement. 
                      Les images seront ajoutees au fur et a mesure de notre progression.
                    </p>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-amber-500 h-2 rounded-full" style={{ width: '15%' }} />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Progression globale: 15%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-2 justify-center mb-8"
          >
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="flex items-center gap-2"
              >
                {category !== "Tous" && (
                  <div className={`w-2 h-2 rounded-full ${categoryColors[category]}`} />
                )}
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index }}
                onClick={() => setSelectedImage(image)}
                className="cursor-pointer"
              >
                <Card className="overflow-hidden group hover:border-primary/50 transition-all h-full">
                  <CardContent className="p-0">
                    <div className="aspect-video bg-secondary relative overflow-hidden">
                      {image.placeholder ? (
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground bg-gradient-to-br from-secondary to-secondary/50">
                          <ImageIcon className="w-12 h-12 mb-2 opacity-50" />
                          <span className="text-xs">En preparation</span>
                        </div>
                      ) : (
                        <Image
                          src={`/images/dev/${image.id}.jpg`}
                          alt={image.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      )}
                      <div className="absolute top-2 left-2">
                        <span className={`${categoryColors[image.category]} px-2 py-1 rounded text-xs text-white`}>
                          {image.category}
                        </span>
                      </div>
                      <div className="absolute top-2 right-2">
                        <span className="px-2 py-1 bg-background/80 backdrop-blur-sm rounded text-xs">
                          v{image.version}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-2">{image.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{image.description}</p>
                      <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {image.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {image.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Tag className="w-3 h-3" />
                          v{image.version}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <ImageIcon className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Aucune image dans cette categorie</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2"
              onClick={(e) => { e.stopPropagation(); navigateImage("prev") }}
            >
              <ChevronLeft className="w-8 h-8" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2"
              onClick={(e) => { e.stopPropagation(); navigateImage("next") }}
            >
              <ChevronRight className="w-8 h-8" />
            </Button>

            <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
              <div className="aspect-video bg-secondary rounded-lg relative overflow-hidden mb-4">
                {selectedImage.placeholder ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground">
                    <ImageIcon className="w-24 h-24 mb-4 opacity-50" />
                    <span className="text-lg">Image en preparation</span>
                  </div>
                ) : (
                  <Image
                    src={`/images/dev/${selectedImage.id}.jpg`}
                    alt={selectedImage.title}
                    fill
                    className="object-contain"
                  />
                )}
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className={`${categoryColors[selectedImage.category]} px-2 py-1 rounded text-xs text-white`}>
                    {selectedImage.category}
                  </span>
                  <span className="px-2 py-1 bg-secondary rounded text-xs">
                    Version {selectedImage.version}
                  </span>
                </div>
                <h2 className="text-xl font-semibold mb-2">{selectedImage.title}</h2>
                <p className="text-muted-foreground mb-2">{selectedImage.description}</p>
                <p className="text-sm text-muted-foreground">
                  Par {selectedImage.author} - {selectedImage.date}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  )
}
