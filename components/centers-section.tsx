"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin } from "lucide-react"
import { AnimatedSection } from "./animated-section"

export const CentersSection = () => (
  <AnimatedSection className="py-16 md:py-24 bg-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Наші Центри</h2>
      <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
        Безпечні та комфортні простори для відновлення та духовного зростання.
      </p>
      <div className="mt-12 grid md:grid-cols-2 gap-8">
        <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Image
            src="/images/frankivsk.jpg"
            alt="Центр в Івано-Франківську"
            width={500}
            height={300}
            className="w-full h-64 object-cover"
          />
          <CardContent className="p-6 text-left">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Центр в Івано-Франківську</h3>
            <div className="flex items-center text-gray-600">
              <MapPin className="h-5 w-5 mr-2 text-blue-500" />
              <span>м. Івано-Франківськ</span>
            </div>
          </CardContent>
        </Card>
        <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Image
            src="/images/zaporizhzhia-center.jpg"
            alt="Центр у Запорізькій області"
            width={500}
            height={300}
            className="w-full h-64 object-cover"
          />
          <CardContent className="p-6 text-left">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Центр у Запорізькій області</h3>
            <div className="flex items-center text-gray-600">
              <MapPin className="h-5 w-5 mr-2 text-blue-500" />
              <span>Запорізька область</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </AnimatedSection>
)
