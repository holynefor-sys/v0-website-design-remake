"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FilePenLine } from "lucide-react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export const HeroSection = ({ onOpenForm }: { onOpenForm: () => void }) => {
  const router = useRouter()

  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white">
      <Image
        src="/images/головна.jpg"
        alt="Схід сонця над долиною"
        fill
        objectFit="cover"
        className="z-0 fixed inset-0 w-full h-full"
        priority
      />
      <div className="absolute inset-0 bg-black/50 z-10" />
      <motion.div
        className="z-20 p-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 1.5, // Faster animation
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          Почни жити
          <br />
          <span className="text-blue-400">повноцінним життям</span>
        </motion.h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
          Бог дає <span className="text-blue-400 font-semibold">справжню свободу</span>, мир, натхнення і сенс життя!
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={onOpenForm}>
            <FilePenLine className="mr-2 h-5 w-5" />
            Отримати консультацію
          </Button>
          <Button size="lg" variant="secondary" onClick={() => router.push("/about")}>
            Дізнатись більше
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
