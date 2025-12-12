"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ApplicationForm } from "@/components/application-form"
import { notFound } from "next/navigation"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Heart,
  Users,
  ShieldCheck,
  GlassWater,
  Pill,
  Dice5,
  Camera,
  BookOpen,
  TrendingUp,
  Star,
  KeyRound,
  MessageCircle,
  FilePenLine,
} from "lucide-react"
import { BeforeAfterGallerySection } from "@/components/before-after-gallery-section"
import { CallbackForm } from "@/components/callback-form"
import { PhoneCallChoiceDialog } from "@/components/phone-call-choice-dialog"

// --- Fallback Content for other slugs ---
const pageContent: { [key: string]: { title: string; text: string } } = {
  // No fallback content needed for the main 3 pages
}

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
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Шлях до свободи</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Наша програма звільнення від залежностей базується на християнських цінностях, підтримці спільноти та
          перевірених методиках. Ми пропонуємо безпечне середовище, де ви можете знайти зцілення та надію.
        </p>
        <Button size="lg" onClick={onOpenForm}>
          <FilePenLine className="mr-2 h-5 w-5" />
          Отримати консультацію
        </Button>
      </div>
      <div className="flex justify-center items-center">
        <Card className="overflow-hidden shadow-xl rounded-lg max-w-md">
          <CardContent className="p-0">
            <Image
              src="/images/directions/2p.jpg" // Змінено на 2p.jpg
              alt="Група людей в дружній бесіді" // Оновлено alt
              width={600}
              height={750}
              className="w-full h-auto object-cover"
              unoptimized={true}
            />
            {/* Додано підпис для зображення "Водне Хрещення" */}
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
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Наша програма включає</h2>
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
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Ми допомагаємо подолати</h2>
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
  { src: "/images/directions/bbq.jpg", alt: "Спільний відпочинок на природі" },
  { src: "/images/directions/meal.jpg", alt: "Обід у центрі" },
  { src: "/images/directions/man-with-bible.jpg", alt: "Вивчення Біблії" },
  { src: "/images/directions/certificates.jpg", alt: "Вручення сертифікатів про закінчення курсу" },
]

const LifeMomentsSection = () => (
  <AnimatedSection className="py-16 md:py-24 bg-gray-50">
    <div className="container mx-auto px-4 text-center">
      <div className="flex justify-center items-center gap-3 mb-4">
        <Camera className="h-8 w-8 text-blue-500" />
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Моменти з життя центру</h2>
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
      {/* Removed button as per request */}
    </div>
  </section>
)

const DeepenFaithSection = ({ onOpenForm }: { onOpenForm: () => void }) => (
  <AnimatedSection className="py-16 md:py-24 bg-white">
    <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Поглиблення вашої віри</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Наші програми духовного зростання створені для того, щоб допомогти вам краще зрозуміти основи християнства,
          поглибити ваші стосунки з Богом та застосовувати біблійні принципи у повсякденному житті.
        </p>
        <Button size="lg" onClick={onOpenForm}>
          <FilePenLine className="mr-2 h-5 w-5" />
          Отримати консультацію
        </Button>
      </div>
      <Card className="overflow-hidden shadow-xl rounded-lg">
        <CardContent className="p-0">
          <Image
            src="/images/4.JPG"
            alt="Вивчення Біблії"
            width={600}
            height={400}
            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
            unoptimized={true}
          />
          <div className="p-6 bg-gray-50">
            {/* Removed: <h3 className="text-xl font-semibold text-gray-800">Вивчення Біблії</h3> */}
          </div>
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
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Напрямки навчання</h2>
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
  { src: "/images/directions/d1.jpg", alt: "Групове вивчення Біблії" },
  { src: "/images/22222.JPG", alt: "Улюблена команда" },
]

const SpiritualGrowthGallerySection = () => (
  <AnimatedSection className="py-16 md:py-24 bg-gray-50">
    <div className="container mx-auto px-4 text-center">
      <div className="flex justify-center items-center gap-3 mb-4">
        <Camera className="h-8 w-8 text-blue-500" />
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Моменти зростання</h2>
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
      <h1 className="text-4xl md:text-6xl font-extrabold">Пізнання Бога</h1>
      <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
        Відкрийте для себе любов, істину та мету вашого життя.
      </p>
    </div>
  </section>
)

const FirstStepSection = ({ onOpenForm }: { onOpenForm: () => void }) => (
  <AnimatedSection className="py-16 md:py-24 bg-white">
    <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Ваш перший крок до віри</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Цей курс призначений для всіх, хто шукає відповіді на фундаментальні питання про Бога, віру та сенс життя.
          Незалежно від вашого попереднього досвіду, ми пропонуємо відкритий та дружній простір для дослідження.
        </p>
        <Button size="lg" onClick={onOpenForm}>
          <FilePenLine className="mr-2 h-5 w-5" />
          Отримати консультацію
        </Button>
      </div>
      <Card className="overflow-hidden shadow-xl rounded-lg max-w-sm mx-auto">
        {" "}
        {/* Додано max-w-sm mx-auto для зменшення та центрування */}
        <CardContent className="p-0">
          <Image
            src="/images/directions/baptism.jpg" // Змінено на 2p.jpg
            alt="Водне Хрещення" // Оновлено alt
            width={400} // Зменшено ширину
            height={300} // Зменшено висоту
            className="w-full h-auto object-cover"
            unoptimized={true}
          />
          <div className="p-4 bg-white">
            {" "}
            {/* Додано блок для підпису */}
            <p className="text-center text-xl font-semibold text-gray-700">Водне Хрещення</p> {/* Оновлено підпис */}
          </div>
        </CardContent>
      </Card>
    </div>
  </AnimatedSection>
)

const keyTopics = [
  {
    icon: KeyRound,
    title: "Хто такий Бог?",
    text: "Дослідження природи Бога, Його характеру та любові до людства.",
  },
  {
    icon: Heart,
    title: "Сенс життя",
    text: "Пошук мети та призначення через призму християнського світогляду.",
  },
  {
    icon: MessageCircle,
    title: "Основи молитви",
    text: "Як будувати особисті стосунки з Богом через спілкування та молитву.",
  },
]

const KeyTopicsSection = () => (
  <AnimatedSection className="py-16 md:py-24 bg-gray-50">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Ключові теми курсу</h2>
      <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
        Ми розглянемо основні питання, що допоможуть вам
        <br />
        побудувати міцний фундамент віри
      </p>
      <div className="mt-12 grid sm:grid-cols-1 md:grid-cols-3 gap-8">
        {keyTopics.map((topic) => (
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
  { src: "/images/directions/1p.jpg", alt: "Молодіжне зібрання" },
  { src: "/images/directions/3p.jpg", alt: "Групове фото учасників" },
]

const KnowingGodGallerySection = () => (
  <AnimatedSection className="py-16 md:py-24 bg-gray-50">
    <div className="container mx-auto px-4 text-center">
      <div className="flex justify-center items-center gap-3 mb-4">
        <Camera className="h-8 w-8 text-blue-500" />
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Моменти пізнання Бога</h2>
      </div>
      <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
        Наше життя сповнене спілкування, підтримки та спільних перемог !
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

// --- Main Page Component ---

export default function DirectionPage({ params }: { params: { slug: string } }) {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const coursesRef = useRef<HTMLElement>(null)
  const [isCallbackFormOpen, setIsCallbackFormOpen] = useState(false)
  const [isPhoneChoiceOpen, setIsPhoneChoiceOpen] = useState(false)

  const handleScrollToCourses = () => {
    coursesRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (params.slug === "freedom-from-addiction") {
    return (
      <div className="bg-white">
        <Header setIsCallbackFormOpen={setIsCallbackFormOpen} setIsPhoneChoiceOpen={setIsPhoneChoiceOpen} />
        <ApplicationForm isOpen={isFormOpen} onOpenChange={setIsFormOpen} />
        <CallbackForm isOpen={isCallbackFormOpen} onOpenChange={setIsCallbackFormOpen} />
        <PhoneCallChoiceDialog isOpen={isPhoneChoiceOpen} onOpenChange={setIsPhoneChoiceOpen} />
        <main>
          <FreedomHeroSection />
          <PathToFreedomSection onOpenForm={() => setIsFormOpen(true)} />
          <ProgramIncludesSection />
          <BeforeAfterGallerySection
            title="Приклади трансформації"
            description="Подивіться, як змінюється життя наших учасників"
            pairs={[
              {
                beforeSrc: "/images/до2.jpeg",
                afterSrc: "/images/после2.jpeg",
                beforeAlt: "Людина до перебування в центрі",
                afterAlt: "Людина після перебування в центрі",
                description: "Приклад 1: Нове життя в родині", // Changed to Приклад 1
              },
              {
                beforeSrc: "/images/до1.jpeg",
                afterSrc: "/images/после1.jpeg",
                beforeAlt: "Людина до перебування в центрі",
                afterAlt: "Людина після перебування в центрі",
                description: "Приклад 2: Зміни після програми", // Changed to Приклад 2
              },
            ]}
          />
          <LifeMomentsSection />
          <WeHelpOvercomeSection />
        </main>
        <Footer setIsCallbackFormOpen={setIsCallbackFormOpen} setIsPhoneChoiceOpen={setIsPhoneChoiceOpen} />
      </div>
    )
  }

  if (params.slug === "spiritual-growth") {
    return (
      <div className="bg-white">
        <Header setIsCallbackFormOpen={setIsCallbackFormOpen} setIsPhoneChoiceOpen={setIsPhoneChoiceOpen} />
        <ApplicationForm isOpen={isFormOpen} onOpenChange={setIsFormOpen} />
        <CallbackForm isOpen={isCallbackFormOpen} onOpenChange={setIsCallbackFormOpen} />
        <PhoneCallChoiceDialog isOpen={isPhoneChoiceOpen} onOpenChange={setIsPhoneChoiceOpen} />
        <main>
          <SpiritualGrowthHeroSection onOpenForm={() => setIsFormOpen(true)} />
          <StudyDirectionsSection />
          <DeepenFaithSection onOpenForm={() => setIsFormOpen(true)} />
          <SpiritualGrowthGallerySection />
        </main>
        <Footer setIsCallbackFormOpen={setIsCallbackFormOpen} setIsPhoneChoiceOpen={setIsPhoneChoiceOpen} />
      </div>
    )
  }

  if (params.slug === "knowing-god") {
    return (
      <div className="bg-white">
        <Header setIsCallbackFormOpen={setIsCallbackFormOpen} setIsPhoneChoiceOpen={setIsPhoneChoiceOpen} />
        <ApplicationForm isOpen={isFormOpen} onOpenChange={setIsFormOpen} />
        <CallbackForm isOpen={isCallbackFormOpen} onOpenChange={setIsCallbackFormOpen} />
        <PhoneCallChoiceDialog isOpen={isPhoneChoiceOpen} onOpenChange={setIsPhoneChoiceOpen} />
        <main>
          <KnowingGodHeroSection />
          <KeyTopicsSection />
          <FirstStepSection onOpenForm={() => setIsFormOpen(true)} />
          <KnowingGodGallerySection />
        </main>
        <Footer setIsCallbackFormOpen={setIsCallbackFormOpen} setIsPhoneChoiceOpen={setIsPhoneChoiceOpen} />
      </div>
    )
  }

  const content = pageContent[params.slug]

  if (!content) {
    notFound()
  }

  return (
    <div className="bg-white">
      <Header setIsCallbackFormOpen={setIsCallbackFormOpen} setIsPhoneChoiceOpen={setIsPhoneChoiceOpen} />
      <main className="pt-32 pb-16 min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">{content.title}</h1>
          <p className="text-lg text-gray-600 max-w-4xl leading-relaxed">{content.text}</p>
        </div>
      </main>
      <Footer setIsCallbackFormOpen={setIsCallbackFormOpen} setIsPhoneChoiceOpen={setIsPhoneChoiceOpen} />
    </div>
  )
}
