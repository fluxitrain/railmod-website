"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { RFRLogo } from "./rfr-logo"
import { Button } from "@/components/ui/button"

interface LoadingScreenProps {
  onComplete: () => void
}

function AnimatedTrain() {
  return (
    <div className="relative w-full h-48 overflow-hidden">
      {/* Sky background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      
      {/* Moving landscape background */}
      <motion.div
        className="absolute bottom-16 left-0 right-0 flex"
        animate={{ x: [0, -200] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      >
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex-shrink-0 flex items-end gap-8 mr-8">
            {/* Trees */}
            <div className="w-4 h-12 bg-green-800/30 rounded-t-full" />
            <div className="w-6 h-16 bg-green-700/30 rounded-t-full" />
            <div className="w-4 h-10 bg-green-800/30 rounded-t-full" />
            {/* Buildings */}
            <div className="w-8 h-20 bg-muted-foreground/10 rounded-t-sm" />
            <div className="w-6 h-14 bg-muted-foreground/10 rounded-t-sm" />
          </div>
        ))}
      </motion.div>

      {/* Rails - Fixed position */}
      <div className="absolute bottom-8 left-0 right-0">
        {/* Rail bed (gravel) */}
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-muted-foreground/20 to-transparent" />
        
        {/* Moving rail ties */}
        <motion.div
          className="absolute bottom-1 left-0 flex gap-6"
          animate={{ x: [0, -48] }}
          transition={{ duration: 0.3, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(30)].map((_, i) => (
            <div key={i} className="w-3 h-2 bg-amber-900/60 rounded-sm" />
          ))}
        </motion.div>
        
        {/* Rails */}
        <div className="absolute bottom-2 left-0 right-0 h-1 bg-muted-foreground/50 shadow-sm" />
        <div className="absolute bottom-4 left-0 right-0 h-1 bg-muted-foreground/50 shadow-sm" />
      </div>

      {/* TGV Train - Centered */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        animate={{ y: [0, -2, 0, -1, 0] }}
        transition={{ duration: 0.4, repeat: Infinity }}
      >
        <svg
          width="280"
          height="80"
          viewBox="0 0 280 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Shadow */}
          <ellipse cx="140" cy="75" rx="120" ry="4" className="fill-black/20" />
          
          {/* Back wagon */}
          <g>
            <rect x="5" y="30" width="70" height="35" rx="3" className="fill-secondary" />
            <rect x="5" y="28" width="70" height="8" className="fill-primary" />
            {/* Windows */}
            <rect x="12" y="38" width="12" height="10" rx="1" className="fill-accent/70" />
            <rect x="28" y="38" width="12" height="10" rx="1" className="fill-accent/70" />
            <rect x="44" y="38" width="12" height="10" rx="1" className="fill-accent/70" />
            <rect x="60" y="38" width="10" height="10" rx="1" className="fill-accent/70" />
            {/* Wheels */}
            <motion.g
              animate={{ rotate: 360 }}
              transition={{ duration: 0.3, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "20px 68px" }}
            >
              <circle cx="20" cy="68" r="6" className="fill-muted stroke-muted-foreground" strokeWidth="2" />
              <line x1="20" y1="63" x2="20" y2="73" className="stroke-muted-foreground" strokeWidth="1" />
              <line x1="15" y1="68" x2="25" y2="68" className="stroke-muted-foreground" strokeWidth="1" />
            </motion.g>
            <motion.g
              animate={{ rotate: 360 }}
              transition={{ duration: 0.3, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "55px 68px" }}
            >
              <circle cx="55" cy="68" r="6" className="fill-muted stroke-muted-foreground" strokeWidth="2" />
              <line x1="55" y1="63" x2="55" y2="73" className="stroke-muted-foreground" strokeWidth="1" />
              <line x1="50" y1="68" x2="60" y2="68" className="stroke-muted-foreground" strokeWidth="1" />
            </motion.g>
          </g>

          {/* Middle wagon */}
          <g>
            <rect x="80" y="30" width="70" height="35" rx="3" className="fill-secondary" />
            <rect x="80" y="28" width="70" height="8" className="fill-primary" />
            {/* Windows */}
            <rect x="87" y="38" width="12" height="10" rx="1" className="fill-accent/70" />
            <rect x="103" y="38" width="12" height="10" rx="1" className="fill-accent/70" />
            <rect x="119" y="38" width="12" height="10" rx="1" className="fill-accent/70" />
            <rect x="135" y="38" width="10" height="10" rx="1" className="fill-accent/70" />
            {/* Wheels */}
            <motion.g
              animate={{ rotate: 360 }}
              transition={{ duration: 0.3, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "95px 68px" }}
            >
              <circle cx="95" cy="68" r="6" className="fill-muted stroke-muted-foreground" strokeWidth="2" />
              <line x1="95" y1="63" x2="95" y2="73" className="stroke-muted-foreground" strokeWidth="1" />
              <line x1="90" y1="68" x2="100" y2="68" className="stroke-muted-foreground" strokeWidth="1" />
            </motion.g>
            <motion.g
              animate={{ rotate: 360 }}
              transition={{ duration: 0.3, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "130px 68px" }}
            >
              <circle cx="130" cy="68" r="6" className="fill-muted stroke-muted-foreground" strokeWidth="2" />
              <line x1="130" y1="63" x2="130" y2="73" className="stroke-muted-foreground" strokeWidth="1" />
              <line x1="125" y1="68" x2="135" y2="68" className="stroke-muted-foreground" strokeWidth="1" />
            </motion.g>
          </g>

          {/* Front locomotive - TGV nose */}
          <g>
            {/* Main body */}
            <path
              d="M155 30 L155 65 L205 65 L205 30 L155 30 Z"
              className="fill-secondary"
            />
            <path
              d="M155 28 L155 36 L205 36 L205 28 L155 28 Z"
              className="fill-primary"
            />
            {/* TGV Nose */}
            <path
              d="M205 30 L205 65 L230 65 L260 50 L260 40 L230 25 L205 30 Z"
              className="fill-secondary"
            />
            <path
              d="M205 28 L230 23 L260 38 L260 40 L230 25 L205 30 L205 28 Z"
              className="fill-primary"
            />
            {/* Front windshield */}
            <path
              d="M230 30 L255 42 L255 48 L230 55 L230 30 Z"
              className="fill-accent/80"
            />
            {/* Side windows */}
            <rect x="162" y="38" width="12" height="10" rx="1" className="fill-accent/70" />
            <rect x="178" y="38" width="12" height="10" rx="1" className="fill-accent/70" />
            <rect x="194" y="38" width="8" height="10" rx="1" className="fill-accent/70" />
            {/* Headlight */}
            <motion.circle
              cx="258"
              cy="45"
              r="4"
              className="fill-yellow-300"
              animate={{ opacity: [1, 0.6, 1] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            />
            {/* Light beam */}
            <motion.path
              d="M262 45 L280 40 L280 50 L262 45 Z"
              className="fill-yellow-300/30"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            />
            {/* Stripe detail */}
            <rect x="155" y="52" width="105" height="3" className="fill-accent" />
            {/* Wheels */}
            <motion.g
              animate={{ rotate: 360 }}
              transition={{ duration: 0.3, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "170px 68px" }}
            >
              <circle cx="170" cy="68" r="6" className="fill-muted stroke-muted-foreground" strokeWidth="2" />
              <line x1="170" y1="63" x2="170" y2="73" className="stroke-muted-foreground" strokeWidth="1" />
              <line x1="165" y1="68" x2="175" y2="68" className="stroke-muted-foreground" strokeWidth="1" />
            </motion.g>
            <motion.g
              animate={{ rotate: 360 }}
              transition={{ duration: 0.3, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "205px 68px" }}
            >
              <circle cx="205" cy="68" r="6" className="fill-muted stroke-muted-foreground" strokeWidth="2" />
              <line x1="205" y1="63" x2="205" y2="73" className="stroke-muted-foreground" strokeWidth="1" />
              <line x1="200" y1="68" x2="210" y2="68" className="stroke-muted-foreground" strokeWidth="1" />
            </motion.g>
          </g>
        </svg>
      </motion.div>

      {/* Speed lines */}
      <div className="absolute bottom-20 left-0">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className="absolute h-0.5 bg-gradient-to-l from-primary/40 to-transparent rounded-full"
            style={{ 
              top: i * 10, 
              left: 20 + i * 15,
              width: 60 + i * 20 
            }}
            animate={{ 
              x: [-100, 0],
              opacity: [0, 0.6, 0]
            }}
            transition={{ 
              duration: 0.6, 
              delay: i * 0.1, 
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Sparks from wheels */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute bottom-14 left-1/2 w-1 h-1 rounded-full bg-yellow-400"
          style={{ marginLeft: -60 + i * 40 }}
          animate={{
            y: [0, -10, 0],
            x: [-20, -40],
            opacity: [1, 0],
          }}
          transition={{
            duration: 0.3,
            delay: i * 0.15,
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  )
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [loadingText, setLoadingText] = useState("Initialisation...")

  const loadingMessages = [
    "Initialisation du systeme...",
    "Chargement des rails...",
    "Preparation des locomotives...",
    "Configuration des gares...",
    "Verification des signaux...",
    "Connexion au reseau...",
    "Pret au depart !",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsComplete(true)
          return 100
        }
        return prev + Math.random() * 8 + 2
      })
    }, 200)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const messageIndex = Math.min(
      Math.floor(progress / 15),
      loadingMessages.length - 1
    )
    setLoadingText(loadingMessages[messageIndex])
  }, [progress])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 bg-background flex flex-col items-center justify-center"
    >
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4 w-full max-w-2xl">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-2"
        >
          <RFRLogo size="lg" animated={true} />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-2xl md:text-4xl font-bold text-center mb-6"
        >
          <span className="text-foreground">Roblox Ferroviaire</span>{" "}
          <span className="text-primary">Reseau</span>
        </motion.h1>

        {/* Train Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="w-full mb-6"
        >
          <AnimatedTrain />
        </motion.div>

        {/* Progress section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="w-full max-w-md space-y-3"
        >
          {/* Progress bar container styled as train track */}
          <div className="relative h-6 bg-secondary/50 rounded-full overflow-hidden border border-border">
            {/* Track pattern */}
            <div className="absolute inset-0 flex items-center justify-between px-2 opacity-30">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="w-1 h-3 bg-muted-foreground rounded-sm" />
              ))}
            </div>
            
            {/* Progress fill */}
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-accent to-primary rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Train icon on progress */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
              style={{ left: `${Math.min(progress, 98)}%` }}
            >
              <div className="w-4 h-4 bg-primary rounded-sm shadow-lg border border-primary-foreground/20" />
            </motion.div>
          </div>

          {/* Progress text */}
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">{loadingText}</span>
            <span className="font-mono text-primary font-bold">
              {Math.round(Math.min(progress, 100))}%
            </span>
          </div>
        </motion.div>

        {/* Enter button */}
        <AnimatePresence>
          {isComplete && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, type: "spring" }}
              className="mt-8"
            >
              <Button
                size="lg"
                onClick={onComplete}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg font-semibold group shadow-lg shadow-primary/25"
              >
                <span>Monter a bord</span>
                <motion.span
                  className="ml-2 inline-block"
                  animate={{ x: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
