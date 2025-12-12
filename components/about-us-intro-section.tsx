"use client"

import { AnimatedSection } from "./animated-section"

export const AboutUsIntroSection = () => (
  <AnimatedSection className="py-16 md:py-24 bg-gray-50 text-center">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Допомога</h2>
      <p className="text-gray-600 mb-4 leading-relaxed">
        Наш центр був створений людьми, які колись самі пройшли через складні випробування та знайшли шлях до
        звільнення. Їхній особистий досвід став фундаментом для бажання допомагати іншим.
      </p>
      <p className="text-gray-600 leading-relaxed">
        Тут ви знайдете справжню <span className="text-blue-500 font-semibold">підтримку</span>, професійну{" "}
        <span className="text-blue-500 font-semibold">допомогу</span>, духовне{" "}
        <span className="text-blue-500 font-semibold">наставництво</span> через{" "}
        <span className="text-blue-500 font-semibold">молитву</span> та{" "}
        <span className="text-blue-500 font-semibold">міцне братерство</span>. І найголовніше – все це повністю{" "}
        <u className="font-semibold">анонімно</u>.
      </p>
    </div>
  </AnimatedSection>
)
