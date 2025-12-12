"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart, BookOpen, Users, TrendingUp, FilePenLine } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { ApplicationForm } from "@/components/application-form"
import { CallbackForm } from "@/components/callback-form"
import { PhoneCallChoiceDialog } from "@/components/phone-call-choice-dialog"

/* ----------  Sections ---------- */

const AboutHeroSection = () => (
  <section className="relative h-[60vh] flex items-center justify-center text-center text-white">
    <Image
      src="/images/2222.JPG"
      alt="Команда центру 'Перемога' на зустрічі"
      fill
      className="object-cover z-0 fixed inset-0 w-full h-full"
      priority
    />
    <div className="absolute inset-0 bg-black/50 z-10" />
    <div className="z-20 p-4">
      <h1 className="text-4xl md:text-6xl font-extrabold">Про Центр &quot;Перемога&quot;</h1>
      <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
        Наш шлях до створення простору для
        <br />
        гармонії, зростання та спільноти.
      </p>
    </div>
  </section>
)

const HistorySection = ({ onOpenForm }: { onOpenForm: () => void }) => (
  <AnimatedSection className="py-16 md:py-24 bg-white">
    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
      {/* Text */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Наша Історія</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Центр &quot;Перемога&quot; був заснований у 2008 році групою однодумців з мрією створити місце, де кожен міг
          би знайти шлях до внутрішнього спокою та самопізнання.
        </p>
        <p className="text-gray-600 mb-8 leading-relaxed">
          За роки існування ми перетворилися на провідний духовний центр, що провів сотні курсів, ретритів та семінарів.
          Наша спільнота об&apos;єднує тисячі людей, які прагнуть до усвідомленого життя.
        </p>
        {/* Removed button as per request */}
      </div>

      {/* Image */}
      <div>
        <Image
          src="/images/1111.jpg"
          alt="Команда святкує річницю центру"
          width={600}
          height={500}
          className="rounded-lg shadow-xl w-full h-auto object-cover"
        />
      </div>
    </div>
  </AnimatedSection>
)

const values = [
  {
    icon: Heart,
    title: "Співчуття",
    text: "Ми плекаємо доброту та розуміння до себе та інших.",
  },
  {
    icon: BookOpen,
    title: "Мудрість",
    text: "Ми прагнемо до знань, що ведуть до глибокого саморозуміння.",
  },
  {
    icon: Users,
    title: "Спільнота",
    text: "Ми будуємо підтримуюче середовище для спільного зростання.",
  },
  {
    icon: TrendingUp,
    title: "Розвиток",
    text: "Ми віримо в постійне самовдосконалення та розкриття потенціалу.",
  },
]

const ValuesSection = () => (
  <AnimatedSection className="py-16 md:py-24 bg-gray-50">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Наші Цінності</h2>
      <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
        Наші основні принципи, що керують кожним аспектом нашої діяльності.
      </p>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((val) => (
          <Card key={val.title} className="p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-blue-100 rounded-full">
                <val.icon className="h-8 w-8 text-blue-500" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{val.title}</h3>
            <p className="text-gray-600">{val.text}</p>
          </Card>
        ))}
      </div>
    </div>
  </AnimatedSection>
)

const TeamSection = () => (
  <AnimatedSection className="py-16 md:py-24 bg-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Команда</h2>
      <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
        Наші досвідчені наставники, готові поділитися своїми знаннями та досвідом.
      </p>
      <div className="mt-12 grid sm:grid-cols-1 lg:grid-cols-2 gap-8">
        <Image
          src="/images/2222.JPG"
          alt="Команда центру Перемога"
          width={600}
          height={450}
          className="rounded-lg shadow-xl w-full h-96 object-cover"
        />
        <Image
          src="/images/3333.JPG"
          alt="Велика спільнота центру Перемога"
          width={600}
          height={450}
          className="rounded-lg shadow-xl w-full h-96 object-cover"
        />
      </div>
    </div>
  </AnimatedSection>
)

const JoinCommunitySection = ({ onOpenForm }: { onOpenForm: () => void }) => (
  <section className="py-16 md:py-24 bg-gray-900 text-white text-center">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Приєднуйтесь до нашої родини
        <br />
      </h2>
      <p className="max-w-2xl mx-auto text-lg text-gray-300">Зробіть перший крок до свободи, яку має для Вас Ісус !</p>
      <div className="mt-8">
        <Button size="lg" onClick={onOpenForm}>
          <FilePenLine className="mr-2 h-5 w-5" />
          Отримати консультацію
        </Button>
      </div>
    </div>
  </section>
)

/* ----------  Page Component ---------- */

export default function AboutPage() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isCallbackFormOpen, setIsCallbackFormOpen] = useState(false)
  const [isPhoneChoiceOpen, setIsPhoneChoiceOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-white">
      <Header setIsCallbackFormOpen={setIsCallbackFormOpen} setIsPhoneChoiceOpen={setIsPhoneChoiceOpen} />
      <ApplicationForm isOpen={isFormOpen} onOpenChange={setIsFormOpen} />
      <CallbackForm isOpen={isCallbackFormOpen} onOpenChange={setIsCallbackFormOpen} />
      <PhoneCallChoiceDialog isOpen={isPhoneChoiceOpen} onOpenChange={setIsPhoneChoiceOpen} />
      <main>
        <AboutHeroSection />
        <HistorySection onOpenForm={() => setIsFormOpen(true)} />
        <ValuesSection />
        <TeamSection />
        <JoinCommunitySection onOpenForm={() => setIsFormOpen(true)} />
      </main>
      <Footer setIsCallbackFormOpen={setIsCallbackFormOpen} setIsPhoneChoiceOpen={setIsPhoneChoiceOpen} />
    </div>
  )
}
