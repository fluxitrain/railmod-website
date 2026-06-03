"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Map, ZoomIn, ZoomOut, Download, Maximize2, X } from "lucide-react"
import Image from "next/image"

export default function CarteReseauPage() {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [zoom, setZoom] = useState(1)

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.25, 3))
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.25, 0.5))

  const legendeItems = {
    lgv: [
      { color: "#E91E9C", name: "LGV Nord" },
      { color: "#FF5722", name: "LGV Est Europeenne" },
      { color: "#E91E63", name: "LGV Sud-Est" },
      { color: "#009688", name: "LGV Atlantique" },
      { color: "#4CAF50", name: "LGV Bretagne - Pays de la Loire" },
      { color: "#8BC34A", name: "LGV Sud-Ouest" },
      { color: "#03A9F4", name: "LGV Mediterranee" },
      { color: "#00BCD4", name: "LGV Rhone-Alpes" },
      { color: "#607D8B", name: "LGV Interconnexion Est" },
    ],
    ter: [
      { color: "#2196F3", name: "TER Hauts-de-France" },
      { color: "#00BCD4", name: "TER Normandie" },
      { color: "#4CAF50", name: "TER Grand Est" },
      { color: "#9C27B0", name: "TER Bourgogne-Franche-Comte" },
      { color: "#FFC107", name: "TER Centre-Val de Loire" },
      { color: "#8BC34A", name: "TER Pays de la Loire" },
      { color: "#03A9F4", name: "TER Nouvelle-Aquitaine" },
      { color: "#F44336", name: "TER Occitanie" },
      { color: "#673AB7", name: "TER Auvergne-Rhone-Alpes" },
      { color: "#3F51B5", name: "TER Provence-Alpes-Cote d'Azur" },
      { color: "#E91E63", name: "TER Corse" },
    ]
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
              <Map className="w-4 h-4" />
              <span className="text-sm font-medium">Reseau Ferroviaire</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Carte du Reseau RFR
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Decouvrez l&apos;ensemble du reseau ferroviaire francais avec toutes les lignes TGV et TER
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3"
            >
              <Card className="overflow-hidden">
                <CardContent className="p-0 relative">
                  <div className="absolute top-4 right-4 z-10 flex gap-2">
                    <Button size="icon" variant="secondary" onClick={handleZoomOut}>
                      <ZoomOut className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="secondary" onClick={handleZoomIn}>
                      <ZoomIn className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="secondary" onClick={() => setIsFullscreen(true)}>
                      <Maximize2 className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="secondary" asChild>
                      <a href="/images/carte-reseau.png" download="carte-reseau-rfr.png">
                        <Download className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                  <div className="overflow-auto max-h-[600px] bg-card">
                    <div style={{ transform: `scale(${zoom})`, transformOrigin: 'top left', transition: 'transform 0.3s' }}>
                      <Image
                        src="/images/carte-reseau.png"
                        alt="Carte du reseau ferroviaire RFR"
                        width={1500}
                        height={1200}
                        className="w-full h-auto"
                        priority
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Legend */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-3 text-sm">Lignes Grande Vitesse (TGV)</h3>
                  <div className="space-y-2">
                    {legendeItems.lgv.map((item) => (
                      <div key={item.name} className="flex items-center gap-2 text-xs">
                        <div 
                          className="w-6 h-1 rounded-full" 
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="text-muted-foreground">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-3 text-sm">Lignes Principales (TER)</h3>
                  <div className="space-y-2">
                    {legendeItems.ter.map((item) => (
                      <div key={item.name} className="flex items-center gap-2 text-xs">
                        <div 
                          className="w-6 h-1 rounded-full" 
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="text-muted-foreground">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-3 text-sm">Symboles</h3>
                  <div className="space-y-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full border-2 border-foreground" />
                      <span>Gare majeure</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full border border-foreground" />
                      <span>Gare principale</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-foreground" />
                      <span>Gare intermediaire</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <Button
            size="icon"
            variant="ghost"
            className="absolute top-4 right-4"
            onClick={() => setIsFullscreen(false)}
          >
            <X className="w-6 h-6" />
          </Button>
          <div className="max-w-7xl max-h-[90vh] overflow-auto">
            <Image
              src="/images/carte-reseau.png"
              alt="Carte du reseau ferroviaire RFR"
              width={1500}
              height={1200}
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      )}

      <Footer />
    </main>
  )
}
