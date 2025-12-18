"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { CallbackForm } from "@/components/callback-form"
import { PhoneCallChoiceDialog } from "@/components/phone-call-choice-dialog"
import Link from "next/link"

/* ----------  Blog Posts Data ---------- */

const blogPosts = [
  {
    id: 1,
    title: "Як ми допомагаємо звільнитись від залежностей",
    excerpt:
      "Наша програма реабілітації базується на християнських цінностях, підтримці спільноти та перевірених методиках. Дізнайтеся більше про наш підхід до відновлення.",
    image: "/images/directions/2p.jpg",
    date: "15 листопада 2024",
    readTime: "5 хв",
    category: "Реабілітація",
  },
  {
    id: 2,
    title: "Життя в нашому центрі: розпорядок дня",
    excerpt:
      "Структурований розпорядок дня є важливою частиною процесу відновлення. Дізнайтеся, як проходить типовий день в центрі Перемога.",
    image: "/images/directions/meal.jpg",
    date: "8 листопада 2024",
    readTime: "4 хв",
    category: "Життя в центрі",
  },
  {
    id: 3,
    title: "Духовне зростання через вивчення Біблії",
    excerpt:
      "Систематичне вивчення Святого Письма є основою нашої програми духовного зростання. Відкрийте для себе силу Божого Слова.",
    image: "/images/4.JPG",
    date: "1 листопада 2024",
    readTime: "6 хв",
    category: "Духовність",
  },
  {
    id: 4,
    title: "Історії трансформації: від залежності до свободи",
    excerpt:
      "Реальні історії наших випускників, які змогли подолати залежність та почати нове життя завдяки програмі центру Перемога.",
    image: "/images/after-2.jpg",
    date: "25 жовтня 2024",
    readTime: "7 хв",
    category: "Історії успіху",
  },
  {
    id: 5,
    title: "Підтримка спільноти: чому це важливо",
    excerpt:
      "Відновлення не відбувається в ізоляції. Дізнайтеся, як наша спільнота підтримує кожного учасника на шляху до звільнення.",
    image: "/images/3333.JPG",
    date: "18 жовтня 2024",
    readTime: "5 хв",
    category: "Спільнота",
  },
  {
    id: 6,
    title: "Наші центри в Україні: де ми працюємо",
    excerpt:
      "Центр Перемога має два сучасних центри в Івано-Франківську та Запорізькій області. Дізнайтеся більше про наші локації та можливості.",
    image: "/images/frankivsk.jpg",
    date: "10 жовтня 2024",
    readTime: "4 хв",
    category: "Про нас",
  },
]

/* ----------  Sections ---------- */

const BlogHeroSection = () => (
  <section className="relative h-[50vh] flex items-center justify-center text-center text-white">
    <Image
      src="/images/1111.jpg"
      alt="Блог центру Перемога"
      fill
      className="object-cover z-0 fixed inset-0 w-full h-full"
      priority
    />
    <div className="absolute inset-0 bg-black/60 z-10" />
    <div className="z-20 p-4">
      <h1 className="text-4xl md:text-6xl font-extrabold">Блог</h1>
      <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
        Новини, історії та корисна інформація про життя в центрі
      </p>
    </div>
  </section>
)

const BlogPostsSection = () => (
  <AnimatedSection className="py-16 md:py-24 bg-white">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Card
            key={post.id}
            className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {post.category}
              </div>
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">{post.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
              <div className="flex items-center text-blue-500 font-semibold hover:text-blue-600 transition-colors cursor-pointer">
                <span>Читати далі</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </AnimatedSection>
)

const BlogCtaSection = () => (
  <AnimatedSection className="py-16 md:py-24 bg-gray-900 text-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Хочете дізнатися більше?</h2>
      <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-8">
        Зв'яжіться з нами, щоб отримати докладну консультацію про наші програми та можливості
      </p>
      <Link
        href="/contacts"
        className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 text-lg font-semibold"
      >
        Зв'язатися з нами
        <ArrowRight className="h-5 w-5" />
      </Link>
    </div>
  </AnimatedSection>
)

/* ----------  Page Component ---------- */

export default function BlogPage() {
  const [isCallbackFormOpen, setIsCallbackFormOpen] = useState(false)
  const [isPhoneChoiceOpen, setIsPhoneChoiceOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-white">
      <Header setIsCallbackFormOpen={setIsCallbackFormOpen} setIsPhoneChoiceOpen={setIsPhoneChoiceOpen} />
      <main>
        <BlogHeroSection />
        <BlogPostsSection />
        <BlogCtaSection />
      </main>
      <Footer setIsCallbackFormOpen={setIsCallbackFormOpen} setIsPhoneChoiceOpen={setIsPhoneChoiceOpen} />
      <CallbackForm isOpen={isCallbackFormOpen} onOpenChange={setIsCallbackFormOpen} />
      <PhoneCallChoiceDialog isOpen={isPhoneChoiceOpen} onOpenChange={setIsPhoneChoiceOpen} />
    </div>
  )
}
