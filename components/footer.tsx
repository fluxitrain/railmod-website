"use client"

import Link from "next/link"
import { RFRLogo } from "./rfr-logo"
import { ExternalLink } from "lucide-react"

const footerLinks = {
  navigation: [
    { name: "Accueil", href: "/" },
    { name: "Mises a jour", href: "/mises-a-jour" },
    { name: "Discussions", href: "/discussions" },
    { name: "Support", href: "/support" },
    { name: "Parametres", href: "/parametres" },
    { name: "Credits", href: "/credits" },
  ],
  legal: [
    { name: "Conditions d'utilisation", href: "/conditions-utilisation" },
    { name: "Politique de confidentialite", href: "/politique-confidentialite" },
  ],
  social: [
    { name: "Discord", href: "https://discord.gg/yBcuJAuCNZ", external: true },
    { name: "Roblox", href: "#", external: true },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <RFRLogo size="sm" animated={false} />
              <span className="font-bold text-lg">RFR</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Le plus grand simulateur ferroviaire français sur Roblox.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Légal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">Communauté</h3>
            <ul className="space-y-2">
              {footerLinks.social.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                  >
                    {link.name}
                    {link.external && <ExternalLink className="w-3 h-3" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} RFR - Roblox Ferroviaire Réseau. Tous droits réservés.
          </p>
          <p className="text-sm text-muted-foreground">
            Fait avec ❤️ pour la communauté ferroviaire
          </p>
        </div>
      </div>
    </footer>
  )
}
