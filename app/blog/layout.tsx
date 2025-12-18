import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Блог центру 'Перемога' | Новини та історії реабілітації",
  description:
    "Читайте новини, історії успіху та корисну інформацію про життя в центрі реабілітації Перемога. Дізнайтеся більше про наші програми та результати.",
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
