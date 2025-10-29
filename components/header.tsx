"use client"

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 text-white py-16 px-8 text-center">
      <div className="flex flex-col items-center gap-5">
        <img
          src="/professional-avatar.jpg"
          alt="Tran Thanh Son Avatar"
          className="w-36 h-36 rounded-full border-4 border-white object-cover shadow-lg hover:scale-105 hover:rotate-1 transition-transform duration-300"
        />
        <h1 className="text-5xl font-bold drop-shadow-lg">Tran Thanh Son</h1>
        <p className="text-xl font-semibold opacity-95">Full Stack Developer | Web Designer</p>
        <p className="text-base opacity-85 italic">
          4th Year Student - University of Science | Passionate about web development and UI/UX design
        </p>
      </div>
    </header>
  )
}
