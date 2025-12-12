"use client"

import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Card } from "@/components/ui/card"
import { KeyRound, DollarSign, Shirt, BarChart3, Check, X, PhoneOff, Camera } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { useEffect, useState } from "react"
import { CallbackForm } from "@/components/callback-form"
import { PhoneCallChoiceDialog } from "@/components/phone-call-choice-dialog"

/* ----------  Sections ---------- */

const ConditionsHeroSection = () => (
  <section className="relative h-[60vh] flex items-center justify-center text-center text-white">
    <Image
      src="/images/навчання.jpg"
      alt="Академічна шапка на відкритій книзі"
      fill
      className="object-cover z-0 fixed inset-0 w-full h-full"
      priority
    />
    <div className="absolute inset-0 bg-black/50 z-10" />
    <div className="z-20 p-4">
      <h1 className="text-4xl md:text-6xl font-extrabold">Умови навчання</h1>
      <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
        Все, що потрібно знати про життя та навчання в нашому центрі.
      </p>
    </div>
  </section>
)

const InfoCardsSection = () => (
  <AnimatedSection className="py-16 md:py-24 bg-white">
    <div className="container mx-auto px-4 space-y-8">
      <Card className="p-8 bg-gray-50 border-l-4 border-blue-500">
        <div className="flex items-start gap-4">
          <KeyRound className="h-8 w-8 text-blue-500 mt-1" />
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Ваше рішення - ключ до змін</h2>
            <p className="text-gray-600 leading-relaxed">
              Головною умовою прийняття до центру є ваше щире та тверде рішення змінювати своє життя. Ми розробили
              спеціальний графік та програму, що спрямовані на глибоку трансформацію. Ваша готовність слідувати їм –
              запорука успіху.
            </p>
          </div>
        </div>
      </Card>
      <Card className="p-8 bg-gray-50 border-l-4 border-blue-500">
        <div className="flex items-start gap-4">
          <DollarSign className="h-8 w-8 text-blue-500 mt-1" />
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Умови оплати</h2>
            <p className="text-gray-600 leading-relaxed">
              Для тих, хто звертається до нас вперше, програма є <span className="font-bold">безкоштовною</span>. Якщо
              ви вже проходили реабілітацію раніше і маєте фінансову можливість, ми просимо про добровільну пожертву в
              розмірі <span className="font-bold">5000-8000 грн на місяць</span> для покриття витрат на проживання та
              харчування.
            </p>
          </div>
        </div>
      </Card>
    </div>
  </AnimatedSection>
)

const whatToBring = [
  "Змінний одяг та взуття на 2-3 тижні",
  "Засоби особистої гігієни",
  "Паспорт або інший документ, що посвідчує особу",
  "Спортивний одяг для занять",
  "Кімнатні капці",
]

const basicRules = [
  { text: "Дотримання розпорядку дня", ok: true },
  { text: "Активна участь у всіх заходах програми", ok: true },
  { text: "Шанобливе ставлення до служителів та інших учасників", ok: true },
  { text: "Підтримання чистоти та порядку", ok: true },
  { text: "Категорична заборона на алкоголь, наркотики та будь-які психоактивні речовини", ok: false },
]

const RulesSection = () => (
  <AnimatedSection className="py-16 md:py-24 bg-gray-50">
    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <Shirt className="h-8 w-8 text-blue-500" />
          <h2 className="text-2xl font-bold text-gray-800">Що брати з-собою</h2>
        </div>
        <p className="text-gray-600 mb-6">
          Ми просимо взяти лише найнеобхідніше. Ми забезпечуємо комфортні умови та триразове харчування.
        </p>
        <ul className="space-y-3">
          {whatToBring.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <Check className="h-5 w-5 text-green-500" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="flex items-center gap-3 mb-4">
          <BarChart3 className="h-8 w-8 text-blue-500" />
          <h2 className="text-2xl font-bold text-gray-800">Основні правила</h2>
        </div>
        <p className="text-gray-600 mb-6">
          Дотримання правил є обов&apos;язковим для всіх учасників програми та запорукою успішної реабілітації.
        </p>
        <ul className="space-y-3">
          {basicRules.map((rule) => (
            <li key={rule.text} className="flex items-center gap-3">
              {rule.ok ? <Check className="h-5 w-5 text-green-500" /> : <X className="h-5 w-5 text-red-500" />}
              <span className="text-gray-700">{rule.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </AnimatedSection>
)

const PhoneAlertSection = () => (
  <AnimatedSection className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <Alert variant="default" className="bg-blue-50 border-blue-200 max-w-3xl mx-auto py-6">
        <PhoneOff className="h-5 w-5 text-blue-500" />
        <AlertTitle className="font-bold text-blue-800">Обмеження використання телефону</AlertTitle>
        <AlertDescription className="text-blue-700">
          На початковому етапі реабілітації (перші 30 днів) використання особистих мобільних телефонів та інших гаджетів
          обмежується. Це необхідно для того, щоб ви могли повністю зосередитись на програмі та своєму внутрішньому
          стані, не відволікаючись на зовнішній світ. Зв&apos;язок з рідними можливий через телефон центру за
          встановленим графіком.
        </AlertDescription>
      </Alert>
    </div>
  </AnimatedSection>
)

const leisureActivities = [
  { title: "Гра у волейбол", img: "/images/volleyball.jpg" },
  { title: "Ранкова зарядка", img: "/images/ранкова зарядка.JPG" },
  { title: "Відпочинок на річці", img: "/images/відпочинок на річці.jpg" },
  { title: "Спільний обід", img: "/images/lunch.jpg" },
]

const LeisureSection = () => (
  <AnimatedSection className="py-16 md:py-24 bg-white">
    <div className="container mx-auto px-4 text-center">
      <div className="flex justify-center items-center gap-3 mb-4">
        <Camera className="h-8 w-8 text-blue-500" />
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Дозвілля та відпочинок</h2>
      </div>
      <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
        Ми віримо, що відновлення включає не тільки навчання, але й здоровий відпочинок. У вільний час наші учасники
        займаються спортом, творчістю та проводять час разом. Ми також регулярно знімаємо відео про наше життя та
        заходи.
      </p>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {leisureActivities.map((activity) => (
          <div key={activity.title} className="group relative overflow-hidden rounded-lg shadow-lg">
            <Image
              src={activity.img || "/placeholder.svg"}
              alt={activity.title}
              width={400}
              height={300}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Removed overlay div */}
            <div className="absolute inset-0 flex items-end p-4">
              <h3 className="text-white text-lg font-semibold">{activity.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  </AnimatedSection>
)

/* ----------  Page Component ---------- */

export default function ConditionsPage() {
  const [isCallbackFormOpen, setIsCallbackFormOpen] = useState(false)
  const [isPhoneChoiceOpen, setIsPhoneChoiceOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-white">
      <Header setIsCallbackFormOpen={setIsCallbackFormOpen} setIsPhoneChoiceOpen={setIsPhoneChoiceOpen} />
      <main>
        <ConditionsHeroSection />
        <InfoCardsSection />
        <RulesSection />
        <PhoneAlertSection />
        <LeisureSection />
      </main>
      <Footer setIsCallbackFormOpen={setIsCallbackFormOpen} setIsPhoneChoiceOpen={setIsPhoneChoiceOpen} />
      <CallbackForm isOpen={isCallbackFormOpen} onOpenChange={setIsCallbackFormOpen} />
      <PhoneCallChoiceDialog isOpen={isPhoneChoiceOpen} onOpenChange={setIsPhoneChoiceOpen} />
    </div>
  )
}
