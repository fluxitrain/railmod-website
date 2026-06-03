"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from "react"

type Theme = "dark" | "light" | "system"
type ColorScheme = "blue" | "green" | "red" | "orange" | "purple" | "teal" | "pink" | "yellow"

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  colorScheme: ColorScheme
  setColorScheme: (color: ColorScheme) => void
  fontSize: number
  setFontSize: (size: number) => void
  animations: boolean
  setAnimations: (enabled: boolean) => void
  notifications: boolean
  setNotifications: (enabled: boolean) => void
  sounds: boolean
  setSounds: (enabled: boolean) => void
  compactMode: boolean
  setCompactMode: (enabled: boolean) => void
  highContrast: boolean
  setHighContrast: (enabled: boolean) => void
  reducedMotion: boolean
  setReducedMotion: (enabled: boolean) => void
  autoPlay: boolean
  setAutoPlay: (enabled: boolean) => void
}

export const colorSchemes: Record<ColorScheme, { name: string; primary: string; accent: string; ring: string; preview: string }> = {
  blue: { name: "Bleu", primary: "oklch(0.65 0.25 250)", accent: "oklch(0.55 0.2 280)", ring: "oklch(0.65 0.25 250)", preview: "#4F87FF" },
  green: { name: "Vert", primary: "oklch(0.65 0.2 145)", accent: "oklch(0.55 0.15 160)", ring: "oklch(0.65 0.2 145)", preview: "#34D399" },
  red: { name: "Rouge", primary: "oklch(0.6 0.25 25)", accent: "oklch(0.55 0.2 10)", ring: "oklch(0.6 0.25 25)", preview: "#EF4444" },
  orange: { name: "Orange", primary: "oklch(0.7 0.2 55)", accent: "oklch(0.6 0.18 45)", ring: "oklch(0.7 0.2 55)", preview: "#F97316" },
  purple: { name: "Violet", primary: "oklch(0.6 0.25 300)", accent: "oklch(0.5 0.2 320)", ring: "oklch(0.6 0.25 300)", preview: "#A855F7" },
  teal: { name: "Turquoise", primary: "oklch(0.65 0.15 195)", accent: "oklch(0.55 0.12 210)", ring: "oklch(0.65 0.15 195)", preview: "#14B8A6" },
  pink: { name: "Rose", primary: "oklch(0.65 0.22 350)", accent: "oklch(0.55 0.18 330)", ring: "oklch(0.65 0.22 350)", preview: "#EC4899" },
  yellow: { name: "Jaune", primary: "oklch(0.75 0.18 85)", accent: "oklch(0.65 0.15 70)", ring: "oklch(0.75 0.18 85)", preview: "#EAB308" },
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark")
  const [colorScheme, setColorSchemeState] = useState<ColorScheme>("blue")
  const [fontSize, setFontSizeState] = useState(16)
  const [animations, setAnimationsState] = useState(true)
  const [notifications, setNotificationsState] = useState(true)
  const [sounds, setSoundsState] = useState(true)
  const [compactMode, setCompactModeState] = useState(false)
  const [highContrast, setHighContrastState] = useState(false)
  const [reducedMotion, setReducedMotionState] = useState(false)
  const [autoPlay, setAutoPlayState] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("rfr-theme") as Theme | null
    const savedColor = localStorage.getItem("rfr-color") as ColorScheme | null
    const savedFontSize = localStorage.getItem("rfr-font-size")
    const savedAnimations = localStorage.getItem("rfr-animations")
    const savedNotifs = localStorage.getItem("rfr-notifications")
    const savedSounds = localStorage.getItem("rfr-sounds")
    const savedCompact = localStorage.getItem("rfr-compact")
    const savedContrast = localStorage.getItem("rfr-contrast")
    const savedReducedMotion = localStorage.getItem("rfr-reduced-motion")
    const savedAutoPlay = localStorage.getItem("rfr-autoplay")

    if (savedTheme) setThemeState(savedTheme)
    if (savedColor) setColorSchemeState(savedColor)
    if (savedFontSize) setFontSizeState(parseInt(savedFontSize))
    if (savedAnimations !== null) setAnimationsState(savedAnimations === "true")
    if (savedNotifs !== null) setNotificationsState(savedNotifs === "true")
    if (savedSounds !== null) setSoundsState(savedSounds === "true")
    if (savedCompact !== null) setCompactModeState(savedCompact === "true")
    if (savedContrast !== null) setHighContrastState(savedContrast === "true")
    if (savedReducedMotion !== null) setReducedMotionState(savedReducedMotion === "true")
    if (savedAutoPlay !== null) setAutoPlayState(savedAutoPlay === "true")
  }, [])

  useEffect(() => {
    if (!mounted) return

    const root = document.documentElement
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    
    // Apply theme
    if (theme === "system") {
      root.classList.toggle("dark", systemDark)
      root.classList.toggle("light", !systemDark)
    } else {
      root.classList.remove("dark", "light")
      root.classList.add(theme)
    }

    // Apply color scheme
    const colors = colorSchemes[colorScheme]
    root.style.setProperty("--primary", colors.primary)
    root.style.setProperty("--accent", colors.accent)
    root.style.setProperty("--ring", colors.ring)
    root.style.setProperty("--chart-1", colors.primary)
    root.style.setProperty("--chart-2", colors.accent)
    root.style.setProperty("--sidebar-primary", colors.primary)
    root.style.setProperty("--sidebar-ring", colors.ring)

    // Apply font size
    root.style.fontSize = `${fontSize}px`

    // Apply reduced motion
    if (reducedMotion || !animations) {
      root.classList.add("reduce-motion")
    } else {
      root.classList.remove("reduce-motion")
    }

    // Apply high contrast
    if (highContrast) {
      root.classList.add("high-contrast")
    } else {
      root.classList.remove("high-contrast")
    }

    // Apply compact mode
    if (compactMode) {
      root.classList.add("compact")
    } else {
      root.classList.remove("compact")
    }

  }, [theme, colorScheme, fontSize, animations, highContrast, compactMode, reducedMotion, mounted])

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    localStorage.setItem("rfr-theme", newTheme)
  }

  const setColorScheme = (newColor: ColorScheme) => {
    setColorSchemeState(newColor)
    localStorage.setItem("rfr-color", newColor)
  }

  const setFontSize = (size: number) => {
    setFontSizeState(size)
    localStorage.setItem("rfr-font-size", size.toString())
  }

  const setAnimations = (enabled: boolean) => {
    setAnimationsState(enabled)
    localStorage.setItem("rfr-animations", enabled.toString())
  }

  const setNotifications = (enabled: boolean) => {
    setNotificationsState(enabled)
    localStorage.setItem("rfr-notifications", enabled.toString())
  }

  const setSounds = (enabled: boolean) => {
    setSoundsState(enabled)
    localStorage.setItem("rfr-sounds", enabled.toString())
  }

  const setCompactMode = (enabled: boolean) => {
    setCompactModeState(enabled)
    localStorage.setItem("rfr-compact", enabled.toString())
  }

  const setHighContrast = (enabled: boolean) => {
    setHighContrastState(enabled)
    localStorage.setItem("rfr-contrast", enabled.toString())
  }

  const setReducedMotion = (enabled: boolean) => {
    setReducedMotionState(enabled)
    localStorage.setItem("rfr-reduced-motion", enabled.toString())
  }

  const setAutoPlay = (enabled: boolean) => {
    setAutoPlayState(enabled)
    localStorage.setItem("rfr-autoplay", enabled.toString())
  }

  return (
    <ThemeContext.Provider
      value={{
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
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
