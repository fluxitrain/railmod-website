"use client"

import { RFRLogo } from "./rfr-logo"

const footerLinks = {
  navigation: [
    { name: "Accueil", href: "#accueil" },
    { name: "Services", href: "#services" },
    { name: "Actualités", href: "#actualites" },
    { name: "FAQ", href: "#faq" },
  ],
  legal: [
    { name: "Conditions d'utilisation", href: "#" },
    { name: "Politique de confidentialité", href: "#" },
  ],
  social: [
    { name: "Discord", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "Roblox", href: "#" },
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
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
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
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
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
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
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
