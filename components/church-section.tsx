"use client"

import { AnimatedSection } from "./animated-section"
import { Church, Youtube } from "lucide-react"

export const ChurchSection = () => (
  <AnimatedSection className="py-16 md:py-24 bg-white text-center">
    <div className="container mx-auto px-4 max-w-3xl">
      <div className="flex justify-center items-center gap-3 mb-4">
        <Church className="h-10 w-10 text-blue-500" />
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Церква "Перемога"</h2>
      </div>
      <p className="text-gray-600 mb-4 leading-relaxed">
        Наш центр тісно співпрацює з церквою "Перемога", де проходять надихаючі богослужіння,
        <br />
        які допомагають зміцнити віру та знайти духовний спокій.
      </p>
      <p className="text-gray-600 leading-relaxed mb-6">
        Приєднуйтесь до нашої спільноти, щоб разом зростати у вірі та відчувати Божу присутність.
      </p>
      <div className="flex justify-center">
        <a
          href="https://www.youtube.com/@matthew_2819"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors duration-300"
        >
          <Youtube className="h-5 w-5" />
          Наш YouTube канал
        </a>
      </div>
    </div>
  </AnimatedSection>
)
