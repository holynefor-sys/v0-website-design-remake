import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Умови навчання в центрі 'Перемога' | Безкоштовна реабілітація в Україні",
  description:
    "Дізнайтеся про умови проживання та навчання в центрі реабілітації 'Перемога'. Безкоштовна програма для новачків. Що брати з собою, правила перебування та розпорядок дня.",
}

export default function ConditionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
