"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ShieldCheck } from "lucide-react"
import { useActionState } from "react"
import { submitApplication } from "@/app/actions"
import { useEffect, useRef } from "react"

const initialState = {
  message: "",
  success: false,
}

function SubmitButton() {
  const { pending } = useActionState()
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? "Надсилання..." : "Надіслати заявку"}
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

export function ApplicationForm({
  isOpen,
  onOpenChange,
}: { isOpen: boolean; onOpenChange: (isOpen: boolean) => void }) {
  const [state, formAction] = useActionState(submitApplication, initialState)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.message && state.success) {
      onOpenChange(false)
      formRef.current?.reset()
    }
  }, [state, onOpenChange])

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Заявка на допомогу</DialogTitle>
            <DialogDescription>
              <div className="flex items-center gap-2 mt-2 p-2 bg-blue-50 border border-blue-200 rounded-md">
                <ShieldCheck className="h-5 w-5 text-blue-500" />
                <span className="text-sm text-blue-700 font-medium">Форма повністю анонімна.</span>
              </div>
            </DialogDescription>
          </DialogHeader>
          <form action={formAction} ref={formRef} className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Ім'я</Label>
              <Input id="name" name="name" placeholder="Ваше ім'я" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Номер телефону</Label>
              <Input id="phone" name="phone" type="tel" placeholder="+380 (XX) XXX-XX-XX" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="problem">Ваша проблема</Label>
              <Textarea id="problem" name="problem" placeholder="Опишіть коротко вашу ситуацію" required rows={4} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="info">Додаткова інформація</Label>
              <Textarea
                id="info"
                name="info"
                placeholder="Будь-яка додаткова інформація, яку ви хочете надати"
                rows={4}
              />
            </div>
            <DialogFooter>
              <SubmitButton />
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Повідомлення про успіх */}
      {state.message && state.success && (
        <SuccessNotification
          message={state.message}
          onClose={() => {
            // Очищаємо стан після закриття повідомлення
            window.location.reload()
          }}
        />
      )}
    </>
  )
}
