"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Camera, X, ChevronLeft, ChevronRight, Upload, Image as ImageIcon, Grid, List } from "lucide-react"
import Image from "next/image"

type GalleryImage = {
  id: string
  title: string
  description: string
  category: string
  date: string
  placeholder: boolean
}

const categories = ["Tous", "TGV", "TER", "Gares", "Paysages", "Cabines"]

const images: GalleryImage[] = [
  {
    id: "1",
    title: "TGV Duplex en gare de Lyon",
    description: "Le TGV Duplex attend son depart en gare de Paris-Lyon",
    category: "TGV",
    date: "A venir",
    placeholder: true
  },
  {
    id: "2",
    title: "Cabine TGV",
    description: "Vue interieure de la cabine de conduite du TGV",
    category: "Cabines",
    date: "A venir",
    placeholder: true
  },
  {
    id: "3",
    title: "TER Regiolis",
    description: "TER Regiolis sur une ligne regionale",
    category: "TER",
    date: "A venir",
    placeholder: true
  },
  {
    id: "4",
    title: "Gare de Strasbourg",
    description: "La magnifique gare de Strasbourg sous sa verriere",
    category: "Gares",
    date: "A venir",
    placeholder: true
  },
  {
    id: "5",
    title: "Traversee des Alpes",
    description: "TGV traversant les paysages alpins",
    category: "Paysages",
    date: "A venir",
    placeholder: true
  },
  {
    id: "6",
    title: "Depot ferroviaire",
    description: "Vue du depot avec plusieurs rames en stationnement",
    category: "TGV",
    date: "A venir",
    placeholder: true
  },
  {
    id: "7",
    title: "Gare de Bordeaux",
    description: "L'architecture moderne de la gare Saint-Jean",
    category: "Gares",
    date: "A venir",
    placeholder: true
  },
  {
    id: "8",
    title: "Ligne a grande vitesse",
    description: "Vue aerienne d'une LGV",
    category: "Paysages",
    date: "A venir",
    placeholder: true
  }
]

export default function GalerieJeuPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tous")
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const filteredImages = images.filter(img => 
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
              <Camera className="w-4 h-4" />
              <span className="text-sm font-medium">Screenshots</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Galerie du Jeu
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Decouvrez les captures d&apos;ecran du jeu RFR sur Roblox
            </p>
          </motion.div>

          {/* Info Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-4xl mx-auto mb-8"
          >
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Upload className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Galerie en preparation</h3>
                  <p className="text-sm text-muted-foreground">
                    Les screenshots du jeu seront ajoutes au fur et a mesure du developpement. 
                    Revenez bientot pour decouvrir les premieres images !
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Filters and View Mode */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8"
          >
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
            <div className="flex gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("list")}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className={viewMode === "grid" 
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
              : "space-y-4 max-w-4xl mx-auto"
            }
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.05 * index }}
                onClick={() => setSelectedImage(image)}
                className="cursor-pointer"
              >
                <Card className="overflow-hidden group hover:border-primary/50 transition-all">
                  <CardContent className="p-0">
                    {viewMode === "grid" ? (
                      <>
                        <div className="aspect-video bg-secondary relative overflow-hidden">
                          {image.placeholder ? (
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground">
                              <ImageIcon className="w-12 h-12 mb-2 opacity-50" />
                              <span className="text-xs">A venir</span>
                            </div>
                          ) : (
                            <Image
                              src={`/images/gallery/${image.id}.jpg`}
                              alt={image.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          )}
                          <div className="absolute top-2 right-2">
                            <span className="px-2 py-1 bg-background/80 backdrop-blur-sm rounded text-xs">
                              {image.category}
                            </span>
                          </div>
                        </div>
                        <div className="p-3">
                          <h3 className="font-medium text-sm truncate">{image.title}</h3>
                          <p className="text-xs text-muted-foreground">{image.date}</p>
                        </div>
                      </>
                    ) : (
                      <div className="flex gap-4 p-4">
                        <div className="w-32 h-20 bg-secondary rounded-lg flex-shrink-0 relative overflow-hidden">
                          {image.placeholder ? (
                            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                              <ImageIcon className="w-8 h-8 opacity-50" />
                            </div>
                          ) : (
                            <Image
                              src={`/images/gallery/${image.id}.jpg`}
                              alt={image.title}
                              fill
                              className="object-cover"
                            />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-medium">{image.title}</h3>
                            <span className="px-2 py-0.5 bg-secondary rounded text-xs">{image.category}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{image.description}</p>
                          <p className="text-xs text-muted-foreground mt-1">{image.date}</p>
                        </div>
                      </div>
                    )}
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
                    <span className="text-lg">Image a venir</span>
                  </div>
                ) : (
                  <Image
                    src={`/images/gallery/${selectedImage.id}.jpg`}
                    alt={selectedImage.title}
                    fill
                    className="object-contain"
                  />
                )}
              </div>
              <div className="text-center">
                <h2 className="text-xl font-semibold mb-2">{selectedImage.title}</h2>
                <p className="text-muted-foreground">{selectedImage.description}</p>
                <p className="text-sm text-muted-foreground mt-2">
                  {selectedImage.category} - {selectedImage.date}
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
