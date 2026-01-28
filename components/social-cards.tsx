"use client"

import type React from "react"
import { Github, Linkedin, Facebook } from "lucide-react"
import { useRef, useState } from "react"

interface Card {
  icon: React.ReactNode
  title: string
  url: string
  buttonText: string
}

const cards: Card[] = [
  {
    icon: <Facebook className="w-20 h-20" />,
    title: "Facebook",
    url: "https://www.facebook.com/Thanhson09012004",
    buttonText: "Follow me",
  },
  {
    icon: <Github className="w-20 h-20" />,
    title: "GitHub",
    url: "https://github.com/Sone901",
    buttonText: "Follow me",
  },
  {
    icon: <Linkedin className="w-20 h-20" />,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/tranthanhson-20040109-tts/",
    buttonText: "Connect",
  },
]

export default function SocialCards() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  const handleMouseMove = (index: number, e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRefs.current[index]
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    card.style.setProperty("--mouse-x", `${x}px`)
    card.style.setProperty("--mouse-y", `${y}px`)
  }

  return (
    <section className="px-5 py-12 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-purple-400 border-b-4 border-purple-900 pb-3 mb-8">🔗 Connect With Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={card.title}
            ref={(el) => {
              cardRefs.current[index] = el
            }}
            onMouseMove={(e) => handleMouseMove(index, e)}
            className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer border border-slate-700"
            style={
              {
                "--mouse-x": "0px",
                "--mouse-y": "0px",
              } as React.CSSProperties
            }
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(6, 182, 212, 0.15), transparent 40%)`,
              }}
            />

            <div className="absolute inset-0 bg-slate-950 rounded-2xl flex flex-col justify-center items-center gap-6 z-10">
              <div className="text-slate-700 group-hover:text-cyan-400 transition-colors duration-300">
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold text-white">{card.title}</h3>
              <a
                href={card.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-4/5 py-3 px-4 border border-cyan-500 rounded-lg flex justify-center items-center gap-2 text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 no-underline font-medium"
              >
                <i className="fa-solid fa-link text-lg" />
                <span>{card.buttonText}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
