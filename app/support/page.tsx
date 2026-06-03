"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { 
  Ticket, 
  Send, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  MessageSquare,
  Plus,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Bug,
  Lightbulb,
  ShieldAlert
} from "lucide-react"

interface TicketType {
  id: string
  date: string
  subject: string
  category: string
  status: "open" | "in-progress" | "resolved"
  messages: { sender: string; message: string; date: string }[]
}

const categories = [
  { id: "question", name: "Question", icon: HelpCircle, color: "text-blue-500" },
  { id: "bug", name: "Bug / Probleme", icon: Bug, color: "text-red-500" },
  { id: "suggestion", name: "Suggestion", icon: Lightbulb, color: "text-yellow-500" },
  { id: "report", name: "Signalement", icon: ShieldAlert, color: "text-orange-500" },
]

const statusConfig = {
  open: { label: "Ouvert", color: "bg-blue-500", icon: Clock },
  "in-progress": { label: "En cours", color: "bg-yellow-500", icon: AlertCircle },
  resolved: { label: "Resolu", color: "bg-green-500", icon: CheckCircle },
}

export default function SupportPage() {
  const [tickets, setTickets] = useState<TicketType[]>([
    {
      id: "TKT-001",
      date: "6 Mai 2025",
      subject: "Comment rejoindre le jeu ?",
      category: "question",
      status: "resolved",
      messages: [
        { sender: "Utilisateur", message: "Bonjour, comment puis-je rejoindre le jeu RFR sur Roblox ?", date: "6 Mai 2025 - 10:00" },
        { sender: "Support RFR", message: "Bonjour ! Pour rejoindre RFR, rendez-vous sur Roblox et recherchez 'Roblox Ferroviaire Reseau'. Cliquez sur Jouer et vous serez dans le jeu !", date: "6 Mai 2025 - 10:30" },
      ],
    },
  ])
  const [showNewTicket, setShowNewTicket] = useState(false)
  const [expandedTicket, setExpandedTicket] = useState<string | null>(null)
  const [newTicket, setNewTicket] = useState({ subject: "", category: "question", message: "" })
  const [newMessage, setNewMessage] = useState("")

  const handleCreateTicket = () => {
    if (!newTicket.subject || !newTicket.message) return

    const ticket: TicketType = {
      id: `TKT-${String(tickets.length + 1).padStart(3, "0")}`,
      date: new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" }),
      subject: newTicket.subject,
      category: newTicket.category,
      status: "open",
      messages: [
        {
          sender: "Utilisateur",
          message: newTicket.message,
          date: new Date().toLocaleString("fr-FR"),
        },
      ],
    }

    setTickets([ticket, ...tickets])
    setNewTicket({ subject: "", category: "question", message: "" })
    setShowNewTicket(false)
  }

  const handleSendMessage = (ticketId: string) => {
    if (!newMessage) return

    setTickets(tickets.map(t => {
      if (t.id === ticketId) {
        return {
          ...t,
          messages: [
            ...t.messages,
            {
              sender: "Utilisateur",
              message: newMessage,
              date: new Date().toLocaleString("fr-FR"),
            },
          ],
        }
      }
      return t
    }))
    setNewMessage("")
  }

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
              <Ticket className="w-4 h-4" />
              <span className="text-sm font-medium">Support</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Centre d&apos;aide</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Creez un ticket pour obtenir de l&apos;aide de notre equipe de support
            </p>
          </motion.div>

          {/* New Ticket Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <Button
              size="lg"
              onClick={() => setShowNewTicket(!showNewTicket)}
              className="w-full md:w-auto bg-primary hover:bg-primary/90"
            >
              <Plus className="w-5 h-5 mr-2" />
              Creer un nouveau ticket
            </Button>
          </motion.div>

          {/* New Ticket Form */}
          <AnimatePresence>
            {showNewTicket && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-8"
              >
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle>Nouveau ticket</CardTitle>
                    <CardDescription>Decrivez votre probleme ou question</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Category Selection */}
                    <div>
                      <label className="text-sm font-medium mb-2 block">Categorie</label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {categories.map((cat) => (
                          <button
                            key={cat.id}
                            onClick={() => setNewTicket({ ...newTicket, category: cat.id })}
                            className={`p-3 rounded-lg border-2 transition-all flex flex-col items-center gap-2 ${
                              newTicket.category === cat.id
                                ? "border-primary bg-primary/10"
                                : "border-border hover:border-primary/50"
                            }`}
                          >
                            <cat.icon className={`w-5 h-5 ${cat.color}`} />
                            <span className="text-xs font-medium">{cat.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="text-sm font-medium mb-2 block">Sujet</label>
                      <Input
                        placeholder="Ex: Probleme de connexion au jeu"
                        value={newTicket.subject}
                        onChange={(e) => setNewTicket({ ...newTicket, subject: e.target.value })}
                        className="bg-secondary border-border"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="text-sm font-medium mb-2 block">Message</label>
                      <textarea
                        placeholder="Decrivez votre probleme en detail..."
                        value={newTicket.message}
                        onChange={(e) => setNewTicket({ ...newTicket, message: e.target.value })}
                        className="w-full h-32 px-4 py-3 rounded-lg bg-secondary border border-border text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    {/* Submit */}
                    <div className="flex gap-2">
                      <Button onClick={handleCreateTicket} className="bg-primary hover:bg-primary/90">
                        <Send className="w-4 h-4 mr-2" />
                        Envoyer le ticket
                      </Button>
                      <Button variant="outline" onClick={() => setShowNewTicket(false)}>
                        Annuler
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Tickets List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-xl font-bold mb-4">Mes tickets</h2>
            
            {tickets.length === 0 ? (
              <Card className="bg-card border-border">
                <CardContent className="py-12 text-center">
                  <MessageSquare className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Aucun ticket pour le moment</p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {tickets.map((ticket) => {
                  const status = statusConfig[ticket.status]
                  const category = categories.find(c => c.id === ticket.category)
                  const isExpanded = expandedTicket === ticket.id

                  return (
                    <Card key={ticket.id} className="bg-card border-border overflow-hidden">
                      <button
                        onClick={() => setExpandedTicket(isExpanded ? null : ticket.id)}
                        className="w-full p-4 flex items-center justify-between hover:bg-secondary/50 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className={`p-2 rounded-lg bg-secondary ${category?.color}`}>
                            {category && <category.icon className="w-5 h-5" />}
                          </div>
                          <div className="text-left">
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-muted-foreground">{ticket.id}</span>
                              <span className={`px-2 py-0.5 rounded-full text-xs text-white ${status.color}`}>
                                {status.label}
                              </span>
                            </div>
                            <p className="font-medium">{ticket.subject}</p>
                            <p className="text-xs text-muted-foreground">{ticket.date}</p>
                          </div>
                        </div>
                        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="p-4 border-t border-border">
                              {/* Messages */}
                              <div className="space-y-4 mb-4 max-h-80 overflow-y-auto">
                                {ticket.messages.map((msg, index) => (
                                  <div
                                    key={index}
                                    className={`p-3 rounded-lg ${
                                      msg.sender === "Support RFR"
                                        ? "bg-primary/10 border border-primary/30"
                                        : "bg-secondary"
                                    }`}
                                  >
                                    <div className="flex items-center gap-2 mb-1">
                                      <span className={`text-sm font-medium ${
                                        msg.sender === "Support RFR" ? "text-primary" : ""
                                      }`}>
                                        {msg.sender}
                                      </span>
                                      <span className="text-xs text-muted-foreground">{msg.date}</span>
                                    </div>
                                    <p className="text-sm">{msg.message}</p>
                                  </div>
                                ))}
                              </div>

                              {/* Reply */}
                              {ticket.status !== "resolved" && (
                                <div className="flex gap-2">
                                  <Input
                                    placeholder="Ecrire une reponse..."
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                    className="bg-secondary border-border"
                                  />
                                  <Button
                                    onClick={() => handleSendMessage(ticket.id)}
                                    className="bg-primary hover:bg-primary/90"
                                  >
                                    <Send className="w-4 h-4" />
                                  </Button>
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Card>
                  )
                })}
              </div>
            )}
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
