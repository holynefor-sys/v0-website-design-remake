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
import { Label } from "@/components/ui/label"
import { Phone, ArrowRight } from "lucide-react"
import { useActionState } from "react"
import { submitCallbackRequest } from "@/app/actions"
import { useEffect, useRef } from "react"

const initialState = {
  message: "",
  success: false,
}

function SubmitButton() {
  const { pending } = useActionState()
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? "Надсилання..." : "Зв'яжіться зі мною"}
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

export function CallbackForm({ isOpen, onOpenChange }: { isOpen: boolean; onOpenChange: (isOpen: boolean) => void }) {
  const [state, formAction] = useActionState(submitCallbackRequest, initialState)
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
            <DialogTitle>Запит на зворотний дзвінок</DialogTitle>
            <DialogDescription>
              Введіть ваш номер телефону, і ми зв'яжемося з вами найближчим часом. Форма повністю{" "}
              <u className="font-semibold">анонімна</u>.
            </DialogDescription>
          </DialogHeader>
          <form action={formAction} ref={formRef} className="grid gap-4 py-4">
            <div className="grid gap-2">
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
