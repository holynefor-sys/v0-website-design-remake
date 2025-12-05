"use client"

import { useState } from "react"
import { Phone } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function FloatingPhoneButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Плаваюча кнопка */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-[9999] animate-pulse"
        aria-label="Зателефонувати"
      >
        <Phone className="h-6 w-6" />
      </button>

      {/* Діалог з вибором номера */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[400px]">
          <DialogHeader>
            <DialogTitle className="text-center text-xl">Оберіть номер телефону</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <a href="tel:+380678154765" className="w-full">
              <Button className="w-full text-lg py-6 bg-blue-500 hover:bg-blue-600">
                <Phone className="mr-3 h-5 w-5" />
                +380 67 815 47 65
              </Button>
            </a>
            <a href="tel:+380681745680" className="w-full">
              <Button className="w-full text-lg py-6 bg-blue-500 hover:bg-blue-600">
                <Phone className="mr-3 h-5 w-5" />
                +380 68 174 56 80
              </Button>
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
