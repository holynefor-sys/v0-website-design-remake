import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Напрямки центру 'Перемога' | Програми реабілітації та духовного зростання",
  description:
    "Дізнайтеся про наші програми: звільнення від залежностей, духовне зростання, пізнання Бога та жіночий центр. Комплексний підхід до відновлення.",
}

export default function DirectionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
