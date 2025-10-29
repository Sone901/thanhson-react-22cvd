"use client"
import WeatherWidget from "./weather-widget"

export default function Contact() {
  const contacts = [
    {
      icon: "📧",
      label: "Email",
      value: "thson.tran.2004@gmail.com",
      href: "mailto:thson.tran.2004@gmail.com",
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+84 358 893 537",
      href: "tel:+84358893537",
    },
    {
      icon: "📍",
      label: "Location",
      value: "Ho Chi Minh City, Vietnam",
      href: "#",
    },
  ]

  return (
    <section className="flex flex-col gap-5">
      <h2 className="text-3xl font-bold text-purple-400 border-b-4 border-purple-900 pb-3">📞 Contact</h2>

      <div className="flex flex-col gap-3">
        {contacts.map((contact) => (
          <div
            key={contact.label}
            className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg hover:bg-slate-700 hover:translate-x-1 transition-all duration-300 border-l-4 border-purple-900"
          >
            <span className="text-2xl min-w-8">{contact.icon}</span>
            <div className="text-gray-200">
              <strong className="block">{contact.label}:</strong>
              <a href={contact.href} className="text-cyan-400 hover:text-purple-400 hover:underline transition-colors">
                {contact.value}
              </a>
            </div>
          </div>
        ))}
      </div>

      <WeatherWidget />
    </section>
  )
}
