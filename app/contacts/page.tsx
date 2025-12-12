"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, ArrowRight, User, MessageSquare, Info } from "lucide-react"
import { useActionState, useEffect, useRef, useState } from "react"
import { submitContactForm } from "./actions"
import { AnimatedSection } from "@/components/animated-section"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { CallbackForm } from "@/components/callback-form"
import { PhoneCallChoiceDialog } from "@/components/phone-call-choice-dialog"

/* ----------  Sections ---------- */

const ContactsHeroSection = () => (
  <section className="relative h-[60vh] flex items-center justify-center text-center text-white">
    <Image
      src="/images/контакти.jpg"
      alt="Старовинне перо пише на папері"
      fill
      className="object-cover z-0 fixed inset-0 w-full h-full"
      priority
    />
    <div className="absolute inset-0 bg-black/50 z-10" />
    <div className="z-20 p-4">
      <h1 className="text-4xl md:text-6xl font-extrabold">Зв&apos;яжіться з нами</h1>
      <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
        Ми завжди раді відповісти на ваші запитання
        <br />
        та допомогти на шляху !
      </p>
    </div>
  </section>
)

const initialState = {
  message: "",
  success: false,
}

function SubmitButton() {
  const { pending } = useActionState(submitContactForm, initialState)
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? "Надсилання..." : "Надіслати"}
      {!pending && <ArrowRight className="ml-2 h-4 w-4" />}
    </Button>
  )
}

// Компонент для показу повідомлення про успіх
function SuccessNotification({ message, onClose }: { message: string; onClose: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, 4000)
    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg z-[10001] max-w-sm">
      <div className="flex items-center gap-2">
        <span>✅</span>
        <span>{message}</span>
      </div>
    </div>
  )
}

const ContactInfoAndFormSection = () => {
  const [state, formAction] = useActionState(submitContactForm, initialState)
  const [showSuccess, setShowSuccess] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.message && state.success) {
      setShowSuccess(true)
      formRef.current?.reset()
    }
  }, [state])

  return (
    <>
      <AnimatedSection className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Контактна Інформація</h2>
            <p className="text-gray-600 mb-8">
              Використовуйте ці номери, щоб зв&apos;язатися з нами. Ми завжди готові допомогти.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Phone className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">Основний телефон</h3>
                  <a href="tel:+380678154765" className="text-gray-600 hover:text-blue-500 text-base">
                    +380 67 815 47 65
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Phone className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">Додатковий телефон</h3>
                  <a href="tel:+380681745680" className="text-gray-600 hover:text-blue-500 text-base">
                    +380 68 174 56 80
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="w-full shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl">Напишіть нам</CardTitle>
              <CardDescription>Заповніть форму, і ми зв'яжемося з вами найближчим часом.</CardDescription>
            </CardHeader>
            <form ref={formRef} action={formAction}>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Ім'я</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input id="name" name="name" placeholder="Ваше ім'я" required className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Номер телефону</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+380 (XX) XXX-XX-XX"
                      required
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="problem">Ваша проблема</Label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-4 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Textarea
                      id="problem"
                      name="problem"
                      placeholder="Опишіть коротко вашу ситуацію"
                      required
                      rows={4}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="info">Додаткова інформація</Label>
                  <div className="relative">
                    <Info className="absolute left-3 top-4 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Textarea
                      id="info"
                      name="info"
                      placeholder="Будь-яка додаткова інформація, яку ви хочете надати"
                      rows={4}
                      className="pl-10"
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <SubmitButton />
              </CardFooter>
            </form>
          </Card>
        </div>
      </AnimatedSection>

      {/* Наші ресурси */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Наші ресурси</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Слідкуйте за нашими новинами та діяльністю в соціальних мережах
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <a
              href="https://www.facebook.com/peremogacentre/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 hover:border-blue-300"
            >
              <div className="p-2 bg-blue-100 rounded-lg">
                <svg className="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <span className="font-medium text-gray-800">Facebook</span>
            </a>
            <a
              href="https://www.instagram.com/peremogacentre?igsh=Y2M5Zjljdm53ZTB6&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 hover:border-pink-300"
            >
              <div className="p-2 bg-pink-100 rounded-lg">
                <svg className="h-6 w-6 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-2.618-4.919-6.98-.058-1.265-.073-1.689-.073-4.948 0-3.259.014-3.668.072-4.948.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <span className="font-medium text-gray-800">Instagram</span>
            </a>
            <a
              href="https://www.tiktok.com/@peremogacentre?_t=ZM-8zPqiSAdNNm&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 hover:border-gray-800"
            >
              <div className="p-2 bg-gray-100 rounded-lg">
                <svg className="h-6 w-6 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </div>
              <span className="font-medium text-gray-800">TikTok</span>
            </a>
            <a
              href="https://www.youtube.com/@Учбово-духовнийцентрПеремога"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 hover:border-red-300"
            >
              <div className="p-2 bg-red-100 rounded-lg">
                <svg className="h-6 w-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
              <span className="font-medium text-gray-800">YouTube</span>
            </a>
          </div>
        </div>
      </AnimatedSection>

      {/* Повідомлення про успіх */}
      {showSuccess && state.message && state.success && (
        <SuccessNotification
          message={state.message}
          onClose={() => {
            setShowSuccess(false)
          }}
        />
      )}
    </>
  )
}

/* ----------  Page Component ---------- */

export default function ContactsPage() {
  const [isCallbackFormOpen, setIsCallbackFormOpen] = useState(false)
  const [isPhoneChoiceOpen, setIsPhoneChoiceOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-white">
      <Header setIsCallbackFormOpen={setIsCallbackFormOpen} setIsPhoneChoiceOpen={setIsPhoneChoiceOpen} />
      <main>
        <ContactsHeroSection />
        <ContactInfoAndFormSection />
      </main>
      <Footer setIsCallbackFormOpen={setIsCallbackFormOpen} setIsPhoneChoiceOpen={setIsPhoneChoiceOpen} />
      <CallbackForm isOpen={isCallbackFormOpen} onOpenChange={setIsCallbackFormOpen} />
      <PhoneCallChoiceDialog isOpen={isPhoneChoiceOpen} onOpenChange={setIsPhoneChoiceOpen} />
    </div>
  )
}
