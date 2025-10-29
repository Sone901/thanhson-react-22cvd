export default function About() {
  const skills = ["HTML/CSS", "JavaScript", "React", "Git"]

  return (
    <section className="flex flex-col gap-5">
      <h2 className="text-3xl font-bold text-purple-400 border-b-4 border-purple-900 pb-3">📝 About Me</h2>
      <p className="bg-gradient-to-br from-cyan-500/10 to-teal-500/10 text-gray-200 leading-relaxed text-lg p-5 rounded-lg border-l-4 border-purple-700 shadow-md hover:shadow-lg hover:from-cyan-500/15 hover:to-teal-500/15 transition-all duration-300">
        I'm a passionate young developer with a love for web technologies. Currently a 4th year student at Information
        Technology University. I enjoy creating modern, responsive, and user-friendly web applications. Always ready to
        learn new technologies and tackle complex challenges.
      </p>

      <div>
        <h3 className="text-purple-400 text-lg font-semibold mb-3">🛠️ Skills</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
