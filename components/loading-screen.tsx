"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { RFRLogo } from "./rfr-logo"
import { Button } from "@/components/ui/button"

interface LoadingScreenProps {
  onComplete: () => void
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsComplete(true)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 200)

    return () => clearInterval(interval)
  }, [])

  const handleEnter = () => {
    onComplete()
  }

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 bg-background flex flex-col items-center justify-center"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <RFRLogo size="xl" animated={true} />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-2xl md:text-4xl font-bold text-center mb-12"
        >
          <span className="text-foreground">Roblox Ferroviaire</span>{" "}
          <span className="text-primary">Réseau</span>
        </motion.h1>

        {/* Progress bar */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "100%", opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className="w-64 md:w-80 h-2 bg-secondary rounded-full overflow-hidden mb-4"
        >
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Progress text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-muted-foreground text-lg mb-8"
        >
          {Math.round(Math.min(progress, 100))}%
        </motion.p>

        {/* Enter button */}
        <AnimatePresence>
          {isComplete && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Button
                size="lg"
                onClick={handleEnter}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 text-lg"
              >
                Entrer
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
