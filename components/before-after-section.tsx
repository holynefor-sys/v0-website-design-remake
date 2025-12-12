"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "./animated-section"

export const BeforeAfterSection = () => (
  <AnimatedSection className="py-16 md:py-24 bg-gray-50">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Приклади трансформації після програми</h2>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <Card className="overflow-hidden shadow-lg">
          <Image
            src="/images/before-2.png"
            alt="Людина до проходження програми реабілітації в центрі Перемога"
            width={500}
            height={500}
            className="w-full h-auto object-cover"
          />
          <CardContent className="p-4 bg-white">
            <p className="text-center text-xl font-semibold text-gray-700 mb-2">До</p>
            <p className="text-sm text-gray-600 text-center">Фізичне виснаження, емоційна нестабільність, втрата зв'язку з родиною</p>
          </CardContent>
        </Card>
        <Card className="overflow-hidden shadow-lg">
          <Image
            src="/images/after-2.jpg"
            alt="Людина після перебу����ання в центрі"
            width={500}
            height={500}
            className="w-full h-auto object-cover"
          />
          <CardContent className="p-4 bg-white">
            <p className="text-center text-xl font-semibold text-gray-700 mb-2">Після</p>
            <p className="text-sm text-gray-600 text-center">Здорове тіло, емоційна стабільність, відновлені стосунки, повноцінне життя</p>
          </CardContent>
        </Card>
      </div>
    </div>
  </AnimatedSection>
)
