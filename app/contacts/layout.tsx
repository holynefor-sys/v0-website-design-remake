import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Контакти центру 'Перемога' | Телефони, адреси центрів реабілітації в Україні",
  description:
    "Зв'яжіться з центром 'Перемога' за телефонами +380 67 815 47 65, +380 68 174 56 80. Адреси центрів в Івано-Франківську та Запорізькій області. Безкоштовна консультація 24/7.",
}

export default function ContactsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
