"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ApplicationForm } from "@/components/application-form"
import { HeroSection } from "@/components/hero-section"
import { MissionVisionSection } from "@/components/mission-vision-section"
import { BeforeAfterSection } from "@/components/before-after-section"
import { FeaturesSection } from "@/components/features-section"
import { StatsSection } from "@/components/stats-section"
import { CentersSection } from "@/components/centers-section"
import { CtaSection } from "@/components/cta-section"
import { AboutUsIntroSection } from "@/components/about-us-intro-section"
import { ChurchSection } from "@/components/church-section"
import { CallbackForm } from "@/components/callback-form"
import { PhoneCallChoiceDialog } from "@/components/phone-call-choice-dialog" // Імпортуємо новий компонент

export default function HomePage() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isCallbackFormOpen, setIsCallbackFormOpen] = useState(false)
  const [isPhoneChoiceOpen, setIsPhoneChoiceOpen] = useState(false) // Додано стан для PhoneCallChoiceDialog

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-white">
      <Header setIsCallbackFormOpen={setIsCallbackFormOpen} />
      <ApplicationForm isOpen={isFormOpen} onOpenChange={setIsFormOpen} />
      <CallbackForm isOpen={isCallbackFormOpen} onOpenChange={setIsCallbackFormOpen} />
      <PhoneCallChoiceDialog isOpen={isPhoneChoiceOpen} onOpenChange={setIsPhoneChoiceOpen} />{" "}
      {/* Рендеримо PhoneCallChoiceDialog */}
      <main>
        <HeroSection onOpenForm={() => setIsFormOpen(true)} />
        <AboutUsIntroSection />
        <BeforeAfterSection />
        <MissionVisionSection />
        <FeaturesSection />
        <StatsSection />
        <CentersSection />
        <ChurchSection />
        <CtaSection onOpenForm={() => setIsFormOpen(true)} />
      </main>
      <Footer setIsCallbackFormOpen={setIsCallbackFormOpen} setIsPhoneChoiceOpen={setIsPhoneChoiceOpen} />{" "}
      {/* Передаємо setIsPhoneChoiceOpen */}
    </div>
  )
}
