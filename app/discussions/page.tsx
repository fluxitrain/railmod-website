"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, MessageSquare, Send, User, Clock, Trash2, Shield } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { RFRLogo } from "@/components/rfr-logo"
import { Input } from "@/components/ui/input"

interface Message {
  id: string
  username: string
  content: string
  timestamp: Date
  isAdmin?: boolean
}

export default function DiscussionsPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      username: "Admin RFR",
      content: "Bienvenue dans l'espace de discussion RFR ! Respectez les autres joueurs et amusez-vous bien.",
      timestamp: new Date(Date.now() - 3600000),
      isAdmin: true,
    },
    {
      id: "2",
      username: "Joueur_TGV",
      content: "Super le nouveau site ! Vivement que le jeu soit prêt.",
      timestamp: new Date(Date.now() - 1800000),
    },
    {
      id: "3",
      username: "FerroviaireMax",
      content: "Est-ce qu'il y aura des TGV Duplex ?",
      timestamp: new Date(Date.now() - 900000),
    },
  ])
  const [newMessage, setNewMessage] = useState("")
  const [username, setUsername] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [showAdminModal, setShowAdminModal] = useState(false)
  const [adminCode, setAdminCode] = useState("")
  const [adminError, setAdminError] = useState("")

  useEffect(() => {
    const savedUsername = localStorage.getItem("rfr_username")
    const savedIsAdmin = localStorage.getItem("rfr_is_admin") === "true"
    if (savedUsername) {
      setUsername(savedUsername)
      setIsLoggedIn(true)
      setIsAdmin(savedIsAdmin)
    }
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (username.trim().length >= 3) {
      localStorage.setItem("rfr_username", username.trim())
      setIsLoggedIn(true)
    }
  }

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (adminCode === "130811") {
      setIsAdmin(true)
      localStorage.setItem("rfr_is_admin", "true")
      setShowAdminModal(false)
      setAdminCode("")
      setAdminError("")
    } else {
      setAdminError("Code admin incorrect")
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("rfr_username")
    localStorage.removeItem("rfr_is_admin")
    setIsLoggedIn(false)
    setIsAdmin(false)
    setUsername("")
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (newMessage.trim()) {
      const message: Message = {
        id: Date.now().toString(),
        username: isAdmin ? `${username} [Admin]` : username,
        content: newMessage.trim(),
        timestamp: new Date(),
        isAdmin: isAdmin,
      }
      setMessages([...messages, message])
      setNewMessage("")
    }
  }

  const handleDeleteMessage = (id: string) => {
    setMessages(messages.filter((m) => m.id !== id))
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex items-center gap-2">
              <RFRLogo size="sm" animated={false} />
              <span className="font-bold text-xl hidden sm:block">RFR</span>
            </Link>
            <div className="flex items-center gap-2">
              {isLoggedIn && (
                <>
                  {!isAdmin && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setShowAdminModal(true)}
                      className="hidden sm:flex items-center gap-1"
                    >
                      <Shield className="w-4 h-4" />
                      Admin
                    </Button>
                  )}
                  {isAdmin && (
                    <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                      Admin
                    </span>
                  )}
                  <Button variant="ghost" size="sm" onClick={handleLogout}>
                    Déconnexion
                  </Button>
                </>
              )}
              <Button variant="ghost" asChild>
                <Link href="/" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Retour
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 container mx-auto px-4 py-8 flex flex-col max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <MessageSquare className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Espace de discussion
          </h1>
          <p className="text-muted-foreground">
            Discutez avec la communauté RFR
          </p>
        </motion.div>

        {!isLoggedIn ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card border border-border rounded-xl p-8 max-w-md mx-auto"
          >
            <h2 className="text-xl font-semibold mb-4 text-center">
              Connectez-vous pour discuter
            </h2>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium mb-2">
                  Nom d&apos;utilisateur
                </label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Entrez votre pseudo"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  minLength={3}
                  required
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Minimum 3 caractères
                </p>
              </div>
              <Button type="submit" className="w-full">
                Se connecter
              </Button>
            </form>
          </motion.div>
        ) : (
          <div className="flex-1 flex flex-col bg-card border border-border rounded-xl overflow-hidden">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[500px]">
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className={`flex gap-3 ${message.isAdmin ? "bg-primary/5 -mx-4 px-4 py-2" : ""}`}
                  >
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${message.isAdmin ? "bg-primary text-primary-foreground" : "bg-secondary"}`}>
                      {message.isAdmin ? (
                        <Shield className="w-5 h-5" />
                      ) : (
                        <User className="w-5 h-5" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`font-semibold ${message.isAdmin ? "text-primary" : "text-foreground"}`}>
                          {message.username}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          {formatTime(message.timestamp)}
                        </span>
                      </div>
                      <p className="text-muted-foreground mt-1 break-words">
                        {message.content}
                      </p>
                    </div>
                    {isAdmin && (
                      <button
                        onClick={() => handleDeleteMessage(message.id)}
                        className="flex-shrink-0 p-1 text-muted-foreground hover:text-destructive transition-colors"
                        title="Supprimer le message"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Input */}
            <form onSubmit={handleSendMessage} className="p-4 border-t border-border">
              <div className="flex gap-2">
                <Input
                  type="text"
                  placeholder="Écrivez votre message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit" size="icon" disabled={!newMessage.trim()}>
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </form>
          </div>
        )}
      </main>

      {/* Admin Modal */}
      <AnimatePresence>
        {showAdminModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowAdminModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card border border-border rounded-xl p-6 max-w-sm w-full"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold">Connexion Admin</h2>
              </div>
              <form onSubmit={handleAdminLogin} className="space-y-4">
                <div>
                  <label htmlFor="adminCode" className="block text-sm font-medium mb-2">
                    Code administrateur
                  </label>
                  <Input
                    id="adminCode"
                    type="password"
                    placeholder="Entrez le code"
                    value={adminCode}
                    onChange={(e) => {
                      setAdminCode(e.target.value)
                      setAdminError("")
                    }}
                    required
                  />
                  {adminError && (
                    <p className="text-sm text-destructive mt-1">{adminError}</p>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1"
                    onClick={() => setShowAdminModal(false)}
                  >
                    Annuler
                  </Button>
                  <Button type="submit" className="flex-1">
                    Valider
                  </Button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>&copy; 2025 RFR - Roblox Ferroviaire Réseau. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  )
}
