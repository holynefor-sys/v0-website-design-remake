"use client"

import { Button } from "@/components/ui/button"
import { FilePenLine } from "lucide-react"
import { AnimatedSection } from "./animated-section"

export const CtaSection = ({ onOpenForm }: { onOpenForm: () => void }) => (
  <AnimatedSection className="py-16 md:py-24 bg-gray-800 text-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold">Готові розпочати нове життя?</h2>
      <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
        Зв'яжіться з нами, щоб дізнатися більше про наші програми, або запишіться на найближчий курс.
      </p>
      <div className="mt-8">
        <Button
          size="lg"
          onClick={onOpenForm}
          className="px-12 py-7 text-xl font-semibold transition-all duration-300 hover:scale-110 hover:shadow-2xl"
        >
          <FilePenLine className="mr-2 h-7 w-7" />
          Отримати консультацію
        </Button>
      </div>
    </div>
  </AnimatedSection>
)
