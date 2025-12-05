"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function PhoneCallChoiceDialog({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
}) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Зв'яжіться з нами</DialogTitle>
          <DialogDescription>Оберіть номер, на який бажаєте зателефонувати:</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <a href="tel:+380678154765" className="w-full">
            <Button className="w-full text-lg py-6">
              <Phone className="mr-2 h-5 w-5" />
              +380 67 815 47 65
            </Button>
          </a>
          <a href="tel:+380681745680" className="w-full">
            <Button className="w-full text-lg py-6">
              <Phone className="mr-2 h-5 w-5" />
              +380 68 174 56 80
            </Button>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  )
}
