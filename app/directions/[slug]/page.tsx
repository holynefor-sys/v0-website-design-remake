"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Heart,
  Users,
  ShieldCheck,
  GlassWater,
  Pill,
  Dice5,
  BookOpen,
  TrendingUp,
  Star,
  FilePenLine,
  Camera,
  Sparkles,
} from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { ApplicationForm } from "@/components/application-form"
import { CallbackForm } from "@/components/callback-form"
import { PhoneCallChoiceDialog } from "@/components/phone-call-choice-dialog"

/* ----------  Data ---------- */

const validSlugs = ["freedom-from-addiction", "spiritual-growth", "knowing-god", "womens-center"]

// --- Sections for 'Freedom from Addiction' page ---

const FreedomHeroSection = () => (
  <section className="relative h-[60vh] flex items-center justify-center text-center text-white">
    <Image
      src="/images/звільнення.jpg"
      alt="Птах, що летить до світла"
      fill
      className="object-cover z-0 fixed inset-0 w-full h-full"
      priority
    />
    <div className="absolute inset-0 bg-black/60 z-10" />
    <div className="z-20 p-4 absolute inset-0 flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-6xl font-extrabold">Звільнення від залежностей</h1>
      <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
        Новий початок і шлях до повноцінного життя.
      </p>
    </div>
  </section>
)

const PathToFreedomSection = ({ onOpenForm }: { onOpenForm: () => void }) => (
  <AnimatedSection className="py-16 md:py-24 bg-white">
    <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Шлях до свободи - наш досвід та методика</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Наша програма звільнення від залежностей базується на християнських цінностях, підтримці спільноти та
          перевірених методиках. Ми пропонуємо безпечне середовище, де ви можете знайти зцілення та надію.
        </p>
        <Button
          size="lg"
          onClick={onOpenForm}
          className="px-10 py-7 text-xl font-semibold transition-all duration-300 hover:scale-110"
        >
          <FilePenLine className="mr-2 h-7 w-7" />
          Отримати консультацію
        </Button>
      </div>
      <div className="flex justify-center items-center">
        <Card className="overflow-hidden shadow-xl rounded-lg max-w-md">
          <CardContent className="p-0">
            <Image
              src="/images/directions/2p.jpg"
              alt="Група учасників програми звільнення від залежностей в дружній бесіді"
              width={600}
              height={750}
              className="w-full h-auto object-cover"
              unoptimized={true}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  </AnimatedSection>
)

const programFeatures = [
  {
    icon: Heart,
    title: "Духовна основа",
    text: "Відновлення через молитву, вивчення Біблії та особисті стосунки з Богом.",
  },
  {
    icon: Users,
    title: "Підтримка спільноти",
    text: "Групи підтримки, наставництво та життя в християнському братерстві.",
  },
  {
    icon: ShieldCheck,
    title: "Розвиток навичок",
    text: "Навчання навичкам подолання труднощів та побудови здорового способу життя.",
  },
]

const ProgramIncludesSection = () => (
  <AnimatedSection className="py-16 md:py-24 bg-gray-50">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Комплексна програма реабілітації</h2>
      <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
        Комплексний підхід для відновлення душі, розуму та тіла.
      </p>
      <div className="mt-12 grid sm:grid-cols-1 md:grid-cols-3 gap-8">
        {programFeatures.map((feature) => (
          <Card key={feature.title} className="p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-6">
              <div className="p-5 bg-blue-100 rounded-full">
                <feature.icon className="h-10 w-10 text-blue-500" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
            <p className="text-gray-600">{feature.text}</p>
          </Card>
        ))}
      </div>
    </div>
  </AnimatedSection>
)

const addictionTypes = [
  {
    icon: GlassWater,
    title: "Алкогольна залежність",
    text: "Комплексна підтримка на шляху до тверезого та усвідомленого життя.",
  },
  {
    icon: Pill,
    title: "Наркотична залежність",
    text: "Допомога у звільненні від хімічної залежності та відновленні здоров'я.",
  },
  {
    icon: Dice5,
    title: "Ігрова залежність",
    text: "Подолання залежності від азартних ігор та повернення контролю над своїм життям.",
  },
]

const WeHelpOvercomeSection = () => (
  <AnimatedSection className="py-16 md:py-24 bg-white">
    <div className="container mx-auto px-4 text-center">
      <div className="flex justify-center items-center gap-3 mb-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Види залежностей, з якими ми працюємо</h2>
      </div>
      <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
        Наша програма розрахована на допомогу людям з різними видами залежностей.
      </p>
      <div className="mt-12 grid sm:grid-cols-1 md:grid-cols-3 gap-8">
        {addictionTypes.map((addiction) => (
          <Card key={addiction.title} className="p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-6">
              <div className="p-5 bg-blue-100 rounded-full">
                <addiction.icon className="h-10 w-10 text-blue-500" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">{addiction.title}</h3>
            <p className="text-gray-600">{addiction.text}</p>
          </Card>
        ))}
      </div>
    </div>
  </AnimatedSection>
)

const galleryImages = [
  { src: "/images/directions/bbq.jpg", alt: "Спільний відпочинок учасників програми реабілітації на природі" },
  { src: "/images/directions/meal.jpg", alt: "Спільний обід учасників центру Перемога в їдальні" },
  {
    src: "/images/directions/man-with-bible.jpg",
    alt: "Учасник програми вивчає Біблію як частину духовного відновлення",
  },
  {
    src: "/images/directions/certificates.jpg",
    alt: "Урочисте вручення сертифікатів випускникам програми реабілітації",
  },
]

const LifeMomentsSection = () => (
  <AnimatedSection className="py-16 md:py-24 bg-gray-50">
    <div className="container mx-auto px-4 text-center">
      <div className="flex justify-center items-center gap-3 mb-4">
        <Camera className="h-8 w-8 text-blue-500" />
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Життя в центрі - моменти відновлення</h2>
      </div>
      <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
        Наше життя сповнене спілкування, підтримки та спільних перемог !
      </p>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {galleryImages.map((image, index) => (
          <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              width={400}
              height={500}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              unoptimized={true}
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-white text-sm">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </AnimatedSection>
)

const FreedomBeforeAfterSection = () => (
  <AnimatedSection className="py-16 md:py-24 bg-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Приклади трансформації</h2>
      <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600 mb-12">Реальні історії змін наших випускників</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        <Card className="overflow-hidden shadow-lg">
          <div className="relative">
            <Image
              src="/images/before-1.JPG"
              alt="Перший учасник до програми"
              width={400}
              height={500}
              className="w-full h-80 object-cover"
            />
            <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              До
            </div>
          </div>
          <CardContent className="p-4 bg-white">
            <p className="text-sm text-gray-600 text-center">Залежність, втрата надії</p>
          </CardContent>
        </Card>
        <Card className="overflow-hidden shadow-lg">
          <div className="relative">
            <Image
              src="/images/after-1.JPG"
              alt="Перший учасник після програми"
              width={400}
              height={500}
              className="w-full h-80 object-cover"
            />
            <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Після
            </div>
          </div>
          <CardContent className="p-4 bg-white">
            <p className="text-sm text-gray-600 text-center">Відновлення, нова надія</p>
          </CardContent>
        </Card>
        <Card className="overflow-hidden shadow-lg">
          <Image
            src="/images/before-2.png"
            alt="Другий учасник до програми"
            width={400}
            height={500}
            className="w-full h-80 object-cover"
          />
          <CardContent className="p-4 bg-white">
            <p className="text-center text-base font-semibold text-gray-700 mb-2">До</p>
            <p className="text-sm text-gray-600 text-center">Фізичне виснаження, емоційна нестабільність</p>
          </CardContent>
        </Card>
        <Card className="overflow-hidden shadow-lg md:col-start-2 lg:col-start-2">
          <Image
            src="/images/after-2.jpg"
            alt="Другий учасник після програми"
            width={400}
            height={500}
            className="w-full h-80 object-cover"
          />
          <CardContent className="p-4 bg-white">
            <p className="text-center text-base font-semibold text-gray-700 mb-2">Після</p>
            <p className="text-sm text-gray-600 text-center">Здорове тіло, емоційна стабільність, повноцінне життя</p>
          </CardContent>
        </Card>
        <Card className="overflow-hidden shadow-lg md:col-start-1 lg:col-start-3">
          <Image
            src="/images/1111.jpg"
            alt="Третій учасник після програми"
            width={400}
            height={500}
            className="w-full h-80 object-cover"
          />
          <CardContent className="p-4 bg-white">
            <p className="text-center text-base font-semibold text-gray-700 mb-2">Після</p>
            <p className="text-sm text-gray-600 text-center">Нове життя в радості та спільноті</p>
          </CardContent>
        </Card>
      </div>
    </div>
  </AnimatedSection>
)

// --- Sections for 'Spiritual Growth' page ---

const SpiritualGrowthHeroSection = ({ onOpenForm }: { onOpenForm: () => void }) => (
  <section className="relative h-[60vh] flex items-center justify-center text-center text-white">
    <Image
      src="/images/рост.jpg"
      alt="Етапи росту рослини"
      fill
      className="object-cover z-0 fixed inset-0 w-full h-full"
      priority
    />
    <div className="absolute inset-0 bg-black/60 z-10" />
    <div className="z-20 p-4 absolute inset-0 flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-6xl font-extrabold">Духовне зростання</h1>
      <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
        Зміцнюйте свою віру та йдіть шляхом світла.
      </p>
    </div>
  </section>
)

const DeepenFaithSection = ({ onOpenForm }: { onOpenForm: () => void }) => (
  <AnimatedSection className="py-16 md:py-24 bg-white">
    <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Поглиблення вашої віри через навчання</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Наші програми духовного зростання створені для того, щоб допомогти вам краще зрозуміти основи християнства,
          поглибити ваші стосунки з Богом та застосовувати біблійні принципи у повсякденному житті.
        </p>
        <Button
          size="lg"
          onClick={onOpenForm}
          className="px-10 py-7 text-xl font-semibold transition-all duration-300 hover:scale-110"
        >
          <FilePenLine className="mr-2 h-7 w-7" />
          Отримати консультацію
        </Button>
      </div>
      <Card className="overflow-hidden shadow-xl rounded-lg">
        <CardContent className="p-0">
          <Image
            src="/images/4.JPG"
            alt="Групове вивчення Біблії в центрі духовного зростання Перемога"
            width={600}
            height={400}
            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
            unoptimized={true}
          />
          <div className="p-6 bg-gray-50"></div>
        </CardContent>
      </Card>
    </div>
  </AnimatedSection>
)

const studyDirections = [
  {
    icon: BookOpen,
    title: "Вивчення Біблії",
    text: "Систематичне дослідження Святого Письма, від основ до глибоких теологічних тем.",
  },
  {
    icon: TrendingUp,
    title: "Особистісний розвиток",
    text: "Тренінги з розвитку християнського характеру, лідерства та служіння.",
  },
  {
    icon: Star,
    title: "Практичне християнство",
    text: "Навчання тому, як жити згідно з вірою в сім'ї, на роботі та в суспільстві.",
  },
]

const StudyDirectionsSection = () => (
  <AnimatedSection className="py-16 md:py-24 bg-gray-50">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Напрямки християнського навчання</h2>
      <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
        Ми пропонуємо різноманітні курси для всебічного духовного розвитку.
      </p>
      <div className="mt-12 grid sm:grid-cols-1 md:grid-cols-3 gap-8">
        {studyDirections.map((direction) => (
          <Card key={direction.title} className="p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-6">
              <div className="p-5 bg-blue-100 rounded-full">
                <direction.icon className="h-10 w-10 text-blue-500" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">{direction.title}</h3>
            <p className="text-gray-600">{direction.text}</p>
          </Card>
        ))}
      </div>
    </div>
  </AnimatedSection>
)

const spiritualGrowthGalleryImages = [
  { src: "/images/directions/d1.jpg", alt: "Учасники програми духовного зростання за вивченням Святого Письма" },
  { src: "/images/22222.JPG", alt: "Дружня команда учасників програм духовного розвитку" },
]

const SpiritualGrowthGallerySection = () => (
  <AnimatedSection className="py-16 md:py-24 bg-gray-50">
    <div className="container mx-auto px-4 text-center">
      <div className="flex justify-center items-center gap-3 mb-4">
        <Camera className="h-8 w-8 text-blue-500" />
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Моменти духовного зростання в спільноті</h2>
      </div>
      <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
        Наше життя сповнене спілкування, підтримки та спільних перемог !
      </p>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {spiritualGrowthGalleryImages.map((image, index) => (
          <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              width={600}
              height={450}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              unoptimized={true}
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-white text-sm">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </AnimatedSection>
)

// --- Sections for 'Knowing God' page ---

const KnowingGodHeroSection = () => (
  <section className="relative h-[60vh] flex items-center justify-center text-center text-white">
    <Image
      src="/images/пізнання Бога.jpeg"
      alt="Відкрита Біблія"
      fill
      className="object-cover z-0 fixed inset-0 w-full h-full"
      priority
    />
    <div className="absolute inset-0 bg-black/60 z-10" />
    <div className="z-20 p-4 absolute inset-0 flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-6xl font-extrabold">Пізнання Бога - перший крок до віри</h1>
      <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
        Відкрийте для себе любов та милість Творця.
      </p>
    </div>
  </section>
)

const IntroToFaithSection = ({ onOpenForm }: { onOpenForm: () => void }) => (
  <AnimatedSection className="py-16 md:py-24 bg-white">
    <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
      <Card className="overflow-hidden shadow-xl rounded-lg order-2 lg:order-1">
        <CardContent className="p-0">
          <Image
            src="/images/directions/3p.jpg"
            alt="Вивчення основ християнської віри в центрі Перемога"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
            unoptimized={true}
          />
        </CardContent>
      </Card>
      <div className="order-1 lg:order-2">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Ваш шлях до пізнання Бога</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Якщо ви тільки починаєте свій шлях у вірі або хочете краще зрозуміти християнство, наша програма "Пізнання
          Бога" створена спеціально для вас. Ми допоможемо вам відкрити біблійні істини, знайти відповіді на ваші
          запитання та побудувати міцні основи віри.
        </p>
        <Button
          size="lg"
          onClick={onOpenForm}
          className="px-10 py-7 text-xl font-semibold transition-all duration-300 hover:scale-110"
        >
          <FilePenLine className="mr-2 h-7 w-7" />
          Отримати консультацію
        </Button>
      </div>
    </div>
  </AnimatedSection>
)

const faithTopics = [
  {
    icon: BookOpen,
    title: "Основи християнства",
    text: "Хто такий Бог, хто такий Ісус Христос, що таке спасіння та благодать.",
  },
  {
    icon: Heart,
    title: "Життя з Богом",
    text: "Молитва, читання Біблії, спілкування з Богом у повсякденному житті.",
  },
  {
    icon: Users,
    title: "Церква та спільнота",
    text: "Роль церкви в житті віруючого, важливість християнського братерства.",
  },
]

const WhatYouWillLearnSection = () => (
  <AnimatedSection className="py-16 md:py-24 bg-gray-50">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Що ви дізнаєтесь</h2>
      <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
        Наша програма охоплює найважливіші теми для початку вашого духовного шляху.
      </p>
      <div className="mt-12 grid sm:grid-cols-1 md:grid-cols-3 gap-8">
        {faithTopics.map((topic) => (
          <Card key={topic.title} className="p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-6">
              <div className="p-5 bg-blue-100 rounded-full">
                <topic.icon className="h-10 w-10 text-blue-500" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">{topic.title}</h3>
            <p className="text-gray-600">{topic.text}</p>
          </Card>
        ))}
      </div>
    </div>
  </AnimatedSection>
)

const knowingGodGalleryImages = [
  { src: "/images/directions/baptism.jpg", alt: "Водне хрещення учасників центру Перемога" },
  { src: "/images/directions/1p.jpg", alt: "Біблійні заняття в центрі Перемога для нових віруючих" },
]

const KnowingGodGallerySection = () => (
  <AnimatedSection className="py-16 md:py-24 bg-white">
    <div className="container mx-auto px-4 text-center">
      <div className="flex justify-center items-center gap-3 mb-4">
        <Camera className="h-8 w-8 text-blue-500" />
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Пізнання Бога в дії</h2>
      </div>
      <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
        Переживання Божої любові та благодаті в нашій спільноті
      </p>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {knowingGodGalleryImages.map((image, index) => (
          <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              width={600}
              height={450}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              unoptimized={true}
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-white text-sm">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </AnimatedSection>
)

// --- Sections for 'Womens Center' page ---

const WomensCenterHeroSection = () => (
  <section className="relative h-[60vh] flex items-center justify-center text-center text-white">
    <Image
      src="/images/1111.jpg"
      alt="Жіночий центр Перемога"
      fill
      className="object-cover z-0 fixed inset-0 w-full h-full"
      priority
    />
    <div className="absolute inset-0 bg-black/60 z-10" />
    <div className="z-20 p-4 absolute inset-0 flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-6xl font-extrabold">Жіночий Центр</h1>
      <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
        Підтримка, відновлення та нова надія для жінок
      </p>
    </div>
  </section>
)

const WomensCenterIntroSection = ({ onOpenForm }: { onOpenForm: () => void }) => (
  <AnimatedSection className="py-16 md:py-24 bg-white">
    <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Безпечний простір для жіночого відновлення
        </h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Наш жіночий центр створений спеціально для підтримки жінок, які прагнуть змінити своє життя. Ми розуміємо
          унікальні виклики, з якими стикаються жінки, і пропонуємо комплексну програму відновлення в атмосфері
          підтримки та розуміння.
        </p>
        <Button
          size="lg"
          onClick={onOpenForm}
          className="px-10 py-7 text-xl font-semibold transition-all duration-300 hover:scale-110"
        >
          <FilePenLine className="mr-2 h-7 w-7" />
          Отримати консультацію
        </Button>
      </div>
      <div className="flex justify-center items-center">
        <Card className="overflow-hidden shadow-xl rounded-lg max-w-md">
          <CardContent className="p-0">
            <Image
              src="/images/3333.JPG"
              alt="Спільнота жінок в центрі Перемога"
              width={600}
              height={750}
              className="w-full h-auto object-cover"
              unoptimized={true}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  </AnimatedSection>
)

const womensProgramFeatures = [
  {
    icon: Heart,
    title: "Емоційне зцілення",
    text: "Робота з травмами, страхами та емоційними ранами в безпечному середовищі.",
  },
  {
    icon: Users,
    title: "Жіноча спільнота",
    text: "Підтримка від жінок, які розуміють ваш шлях та готові допомогти.",
  },
  {
    icon: Sparkles,
    title: "Особистісне зростання",
    text: "Розвиток впевненості, самоповаги та навичок для нового життя.",
  },
]

const WomensProgramSection = () => (
  <AnimatedSection className="py-16 md:py-24 bg-gray-50">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Наша програма для жінок</h2>
      <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
        Комплексний підхід до відновлення жіночого здоров'я - душі, тіла та розуму
      </p>
      <div className="mt-12 grid sm:grid-cols-1 md:grid-cols-3 gap-8">
        {womensProgramFeatures.map((feature) => (
          <Card key={feature.title} className="p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-6">
              <div className="p-5 bg-pink-100 rounded-full">
                <feature.icon className="h-10 w-10 text-pink-500" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
            <p className="text-gray-600">{feature.text}</p>
          </Card>
        ))}
      </div>
    </div>
  </AnimatedSection>
)

const womensCenterGalleryImages = [
  { src: "/images/2222.JPG", alt: "Жінки центру Перемога на груповому занятті" },
  { src: "/images/22222.JPG", alt: "Жіноча спільнота центру Перемога" },
]

const WomensCenterGallerySection = () => (
  <AnimatedSection className="py-16 md:py-24 bg-white">
    <div className="container mx-auto px-4 text-center">
      <div className="flex justify-center items-center gap-3 mb-4">
        <Camera className="h-8 w-8 text-pink-500" />
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Життя в жіночому центрі</h2>
      </div>
      <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
        Підтримка, дружба та спільне зростання в атмосфері любові та розуміння
      </p>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {womensCenterGalleryImages.map((image, index) => (
          <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              width={600}
              height={450}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              unoptimized={true}
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-white text-sm">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </AnimatedSection>
)

/* ----------  Page Component ---------- */

export default function DirectionsDetailPage({ params }: { params: { slug: string } }) {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isCallbackFormOpen, setIsCallbackFormOpen] = useState(false)
  const [isPhoneChoiceOpen, setIsPhoneChoiceOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { slug } = params

  if (!validSlugs.includes(slug)) {
    return <div>Сторінка не знайдена</div>
  }

  return (
    <div className="bg-white">
      <Header setIsCallbackFormOpen={setIsCallbackFormOpen} setIsPhoneChoiceOpen={setIsPhoneChoiceOpen} />
      <ApplicationForm isOpen={isFormOpen} onOpenChange={setIsFormOpen} />
      <CallbackForm isOpen={isCallbackFormOpen} onOpenChange={setIsCallbackFormOpen} />
      <PhoneCallChoiceDialog isOpen={isPhoneChoiceOpen} onOpenChange={setIsPhoneChoiceOpen} />
      <main>
        {slug === "freedom-from-addiction" && (
          <>
            <FreedomHeroSection />
            <PathToFreedomSection onOpenForm={() => setIsFormOpen(true)} />
            <ProgramIncludesSection />
            <WeHelpOvercomeSection />
            <FreedomBeforeAfterSection />
            <LifeMomentsSection />
          </>
        )}
        {slug === "spiritual-growth" && (
          <>
            <SpiritualGrowthHeroSection onOpenForm={() => setIsFormOpen(true)} />
            <DeepenFaithSection onOpenForm={() => setIsFormOpen(true)} />
            <StudyDirectionsSection />
            <SpiritualGrowthGallerySection />
          </>
        )}
        {slug === "knowing-god" && (
          <>
            <KnowingGodHeroSection />
            <IntroToFaithSection onOpenForm={() => setIsFormOpen(true)} />
            <WhatYouWillLearnSection />
            <KnowingGodGallerySection />
          </>
        )}
        {slug === "womens-center" && (
          <>
            <WomensCenterHeroSection />
            <WomensCenterIntroSection onOpenForm={() => setIsFormOpen(true)} />
            <WomensProgramSection />
            <WomensCenterGallerySection />
          </>
        )}
      </main>
      <Footer setIsCallbackFormOpen={setIsCallbackFormOpen} setIsPhoneChoiceOpen={setIsPhoneChoiceOpen} />
    </div>
  )
}
