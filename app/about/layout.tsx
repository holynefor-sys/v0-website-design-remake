import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Про центр 'Перемога' | Історія, місія та цінності центру реабілітації",
  description: "Дізнайтеся про історію центру 'Перемога' з 2008 року, нашу місію та цінності. Команда досвідчених наставників та тисячі успішно відновлених життів в Україні."
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
