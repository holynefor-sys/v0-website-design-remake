"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "./animated-section"

interface BeforeAfterPair {
  beforeSrc: string
  afterSrc: string
  beforeAlt: string
  afterAlt: string
  description: string
}

interface BeforeAfterGallerySectionProps {
  title: string
  description: string
  pairs: BeforeAfterPair[]
}

export const BeforeAfterGallerySection = ({ title, description, pairs }: BeforeAfterGallerySectionProps) => (
  <AnimatedSection className="py-16 md:py-24 bg-gray-50">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{title}</h2>
      <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">{description}</p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {pairs.map((pair, index) => (
          <div key={index} className="flex flex-col items-center gap-8">
            <p className="text-center text-xl font-semibold text-gray-700">{pair.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <Card className="overflow-hidden shadow-lg">
                <div className="relative w-full aspect-square">
                  <Image
                    src={pair.beforeSrc || "/placeholder.svg"}
                    alt={pair.beforeAlt}
                    width={500}
                    height={500}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-4 bg-white">
                  <p className="text-center text-xl font-semibold text-gray-700">До</p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden shadow-lg">
                <div className="relative w-full aspect-square">
                  <Image
                    src={pair.afterSrc || "/placeholder.svg"}
                    alt={pair.afterAlt}
                    width={500}
                    height={500}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-4 bg-white">
                  <p className="text-center text-xl font-semibold text-gray-700">Після</p>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  </AnimatedSection>
)
