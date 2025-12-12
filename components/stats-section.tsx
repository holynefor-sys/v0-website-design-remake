"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import CountUp from "react-countup"

export const StatsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  const stats = [
    { value: 150, label: "Щасливих сімей", suffix: "+" },
    { value: 1000, label: "Учасників", suffix: "+" },
    { value: 15, label: "Років досвіду", suffix: "+" },
  ]

  return (
    <section ref={ref} className="py-16 md:py-20 bg-blue-500 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <h4 className="text-4xl md:text-5xl font-bold">
                {isInView && <CountUp end={stat.value} duration={2.5} />}
                {stat.suffix}
              </h4>
              <p className="mt-2 text-lg text-blue-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
