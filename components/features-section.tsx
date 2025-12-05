"use client"

import { BookOpen, Users, Heart } from "lucide-react"
import { AnimatedSection } from "./animated-section"

export const FeaturesSection = () => (
  <AnimatedSection className="py-16 md:py-24 bg-white">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div className="p-6">
          <BookOpen className="h-12 w-12 mx-auto text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Навчання</h3>
          <p className="text-gray-600">Поглиблена програма вивчення Біблії та духовних принципів.</p>
        </div>
        <div className="p-6">
          <Users className="h-12 w-12 mx-auto text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Спільнота Однодумців</h3>
          <p className="text-gray-600">Знайдіть підтримку та натхнення у колі людей, що поділяють ваші цінності.</p>
        </div>
        <div className="p-6">
          <Heart className="h-12 w-12 mx-auto text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Досвідчені Наставники</h3>
          <p className="text-gray-600">Навчайтеся у практиків з багаторічним досвідом, готових ділитися знаннями.</p>
        </div>
      </div>
    </div>
  </AnimatedSection>
)
