"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users } from "lucide-react"
import { AnimatedSection } from "./animated-section"

export const MissionVisionSection = () => (
  <AnimatedSection className="py-16 md:py-24 bg-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Ваш шлях до звільнення від залежностей</h2>
      <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
        Ми пропонуємо простір для навчання, практики та спілкування, де кожен може знайти свій шлях до внутрішньої
        рівноваги.
      </p>
      <div className="mt-12 grid md:grid-cols-2 gap-8">
        <Card className="text-left shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <Heart className="h-8 w-8 text-blue-500" />
              </div>
              <CardTitle className="text-2xl font-semibold text-gray-800">Наша Місія</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Створити сприятливе середовище для духовного розвитку, де кожна людина може розкрити свій потенціал,
              знайти внутрішній спокій та жити більш усвідомленим і щасливим життям.
            </p>
          </CardContent>
        </Card>
        <Card className="text-left shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <Users className="h-8 w-8 text-blue-500" />
              </div>
              <CardTitle className="text-2xl font-semibold text-gray-800">Наше Бачення</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Стати провідним центром духовного розвитку, що об'єднує людей у прагненні до гармонії, мудрості та
              співчуття, сприяючи позитивним змінам у суспільстві.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  </AnimatedSection>
)
