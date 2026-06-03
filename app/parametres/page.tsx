"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useTheme, colorSchemes } from "@/components/theme-provider"
import { 
  Settings, 
  Palette, 
  Bell, 
  Shield, 
  Volume2, 
  Moon, 
  Sun,
  Monitor,
  Check,
  Type,
  Minimize2,
  Eye,
  Zap,
  Play,
  RotateCcw,
  Sparkles
} from "lucide-react"

const themes = [
  { id: "dark" as const, name: "Sombre", icon: Moon, description: "Theme sombre pour un confort visuel" },
  { id: "light" as const, name: "Clair", icon: Sun, description: "Theme clair et lumineux" },
  { id: "system" as const, name: "Systeme", icon: Monitor, description: "Suivre les preferences systeme" },
]

export default function ParametresPage() {
  const {
    theme, setTheme,
    colorScheme, setColorScheme,
    fontSize, setFontSize,
    animations, setAnimations,
    notifications, setNotifications,
    sounds, setSounds,
    compactMode, setCompactMode,
    highContrast, setHighContrast,
    reducedMotion, setReducedMotion,
    autoPlay, setAutoPlay,
  } = useTheme()

  const [saved, setSaved] = useState(false)

  const handleReset = () => {
    setTheme("dark")
    setColorScheme("blue")
    setFontSize(16)
    setAnimations(true)
    setNotifications(true)
    setSounds(true)
    setCompactMode(false)
    setHighContrast(false)
    setReducedMotion(false)
    setAutoPlay(true)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const ToggleSwitch = ({ enabled, onChange }: { enabled: boolean; onChange: (v: boolean) => void }) => (
    <button
      onClick={() => onChange(!enabled)}
      className={`relative w-14 h-7 rounded-full transition-colors ${
        enabled ? "bg-primary" : "bg-secondary"
      }`}
    >
      <motion.div
        className="absolute top-1 w-5 h-5 rounded-full bg-foreground shadow-md"
        animate={{ left: enabled ? 32 : 4 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </button>
  )

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
              <Settings className="w-4 h-4" />
              <span className="text-sm font-medium">Configuration</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Parametres</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Personnalisez votre experience RFR selon vos preferences
            </p>
          </motion.div>

          <div className="space-y-6">
            {/* Theme Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Moon className="w-5 h-5 text-primary" />
                    Theme
                  </CardTitle>
                  <CardDescription>Choisissez le theme de l&apos;interface</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {themes.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => setTheme(t.id)}
                        className={`p-4 rounded-lg border-2 transition-all text-left ${
                          theme === t.id
                            ? "border-primary bg-primary/10"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <t.icon className={`w-6 h-6 mb-2 ${
                          theme === t.id ? "text-primary" : "text-muted-foreground"
                        }`} />
                        <p className="font-medium">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.description}</p>
                        {theme === t.id && (
                          <Check className="w-4 h-4 text-primary mt-2" />
                        )}
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Color Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Palette className="w-5 h-5 text-primary" />
                    Couleur principale
                  </CardTitle>
                  <CardDescription>Personnalisez la couleur de l&apos;interface</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
                    {(Object.entries(colorSchemes) as [keyof typeof colorSchemes, typeof colorSchemes[keyof typeof colorSchemes]][]).map(([id, color]) => (
                      <button
                        key={id}
                        onClick={() => setColorScheme(id)}
                        className={`relative p-3 rounded-xl border-2 transition-all ${
                          colorScheme === id
                            ? "border-foreground scale-105"
                            : "border-transparent hover:border-foreground/30"
                        }`}
                      >
                        <div
                          className="w-10 h-10 rounded-full mx-auto shadow-lg"
                          style={{ backgroundColor: color.preview }}
                        />
                        <p className="text-xs font-medium mt-2 text-center">{color.name}</p>
                        {colorScheme === id && (
                          <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                            <Check className="w-3 h-3 text-primary-foreground" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Font Size */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Type className="w-5 h-5 text-primary" />
                    Taille du texte
                  </CardTitle>
                  <CardDescription>Ajustez la taille de la police</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-6">
                    <span className="text-sm text-muted-foreground">A</span>
                    <input
                      type="range"
                      min="12"
                      max="24"
                      value={fontSize}
                      onChange={(e) => setFontSize(parseInt(e.target.value))}
                      className="flex-1 h-2 bg-secondary rounded-full appearance-none cursor-pointer accent-primary"
                    />
                    <span className="text-lg font-bold text-muted-foreground">A</span>
                    <span className="w-12 text-center font-mono bg-secondary px-2 py-1 rounded">
                      {fontSize}px
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3" style={{ fontSize: `${fontSize}px` }}>
                    Exemple de texte avec la taille selectionnee
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Display Options */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="w-5 h-5 text-primary" />
                    Affichage
                  </CardTitle>
                  <CardDescription>Options d&apos;affichage et d&apos;accessibilite</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-3">
                      <Minimize2 className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Mode compact</p>
                        <p className="text-sm text-muted-foreground">Reduire l&apos;espacement des elements</p>
                      </div>
                    </div>
                    <ToggleSwitch enabled={compactMode} onChange={setCompactMode} />
                  </div>
                  <div className="flex items-center justify-between py-2 border-t border-border">
                    <div className="flex items-center gap-3">
                      <Eye className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Contraste eleve</p>
                        <p className="text-sm text-muted-foreground">Ameliorer la lisibilite</p>
                      </div>
                    </div>
                    <ToggleSwitch enabled={highContrast} onChange={setHighContrast} />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Animations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    Animations
                  </CardTitle>
                  <CardDescription>Controlez les animations et effets visuels</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-3">
                      <Zap className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Animations</p>
                        <p className="text-sm text-muted-foreground">Activer les animations de l&apos;interface</p>
                      </div>
                    </div>
                    <ToggleSwitch enabled={animations} onChange={setAnimations} />
                  </div>
                  <div className="flex items-center justify-between py-2 border-t border-border">
                    <div className="flex items-center gap-3">
                      <Minimize2 className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Mouvement reduit</p>
                        <p className="text-sm text-muted-foreground">Reduire les animations pour l&apos;accessibilite</p>
                      </div>
                    </div>
                    <ToggleSwitch enabled={reducedMotion} onChange={setReducedMotion} />
                  </div>
                  <div className="flex items-center justify-between py-2 border-t border-border">
                    <div className="flex items-center gap-3">
                      <Play className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Lecture automatique</p>
                        <p className="text-sm text-muted-foreground">Lancer automatiquement les animations</p>
                      </div>
                    </div>
                    <ToggleSwitch enabled={autoPlay} onChange={setAutoPlay} />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Notifications & Sound */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="w-5 h-5 text-primary" />
                    Notifications et sons
                  </CardTitle>
                  <CardDescription>Gerez vos preferences de notifications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-3">
                      <Bell className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Notifications push</p>
                        <p className="text-sm text-muted-foreground">Recevoir les notifications des mises a jour</p>
                      </div>
                    </div>
                    <ToggleSwitch enabled={notifications} onChange={setNotifications} />
                  </div>
                  <div className="flex items-center justify-between py-2 border-t border-border">
                    <div className="flex items-center gap-3">
                      <Volume2 className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Sons</p>
                        <p className="text-sm text-muted-foreground">Activer les effets sonores</p>
                      </div>
                    </div>
                    <ToggleSwitch enabled={sounds} onChange={setSounds} />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Security Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-green-500" />
                    Securite
                  </CardTitle>
                  <CardDescription>Systemes de protection actifs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <p className="font-medium text-green-500">Anti-Leak</p>
                      </div>
                      <p className="text-xs text-muted-foreground">Protection contre les fuites de donnees</p>
                    </div>
                    <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <p className="font-medium text-green-500">Anti-Cheat</p>
                      </div>
                      <p className="text-xs text-muted-foreground">Detection des tricheurs en temps reel</p>
                    </div>
                    <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <p className="font-medium text-green-500">Anti-Hack</p>
                      </div>
                      <p className="text-xs text-muted-foreground">Protection contre les intrusions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Button
                variant="outline"
                size="lg"
                onClick={handleReset}
                className="px-8"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Reinitialiser
              </Button>
              {saved && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-500 rounded-lg"
                >
                  <Check className="w-5 h-5" />
                  Parametres sauvegardes automatiquement
                </motion.div>
              )}
            </motion.div>

            {/* Auto-save notice */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center text-sm text-muted-foreground"
            >
              Les parametres sont sauvegardes automatiquement
            </motion.p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
