"use client"

import { motion } from "framer-motion"
import { HelpCircle } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Comment faire un ticket?",
    answer:
      "Pour créer un ticket de support, rejoignez notre serveur Discord et utilisez le canal #support. Notre équipe vous répondra dans les plus brefs délais.",
  },
  {
    question: "Quand le jeu sortira-t-il ?",
    answer:
      "Le jeu est actuellement en développement actif. Rejoignez notre Discord pour suivre les mises à jour et être informé de la date de sortie officielle.",
  },
  {
    question: "Comment devenir conducteur ?",
    answer:
      "Pour devenir conducteur, vous devez d'abord compléter la formation dans le jeu. Une fois la formation terminée, vous pourrez conduire tous les trains disponibles.",
  },
  {
    question: "Y a-t-il des gamepasses disponibles ?",
    answer:
      "Oui ! Nous proposons plusieurs gamepasses qui vous permettent de débloquer des trains exclusifs, des accessoires personnalisés et d'autres avantages. Visitez notre boutique dans le jeu.",
  },
  {
    question: "Comment rejoindre la communauté ?",
    answer:
      "Rejoignez notre serveur Discord officiel pour discuter avec d'autres joueurs, participer aux événements et recevoir les dernières nouvelles du développement.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="relative container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-4">
            <HelpCircle size={16} />
            Aide
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Questions fréquentes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Les réponses rapides aux questions les plus courantes
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card/50 backdrop-blur border border-border rounded-lg px-6 data-[state=open]:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
