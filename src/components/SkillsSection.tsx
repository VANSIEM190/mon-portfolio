import { skills, stack } from '../utils/data'
import { Sparkles } from 'lucide-react'

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="relative border-t border-zinc-900 px-4 py-24 sm:px-6 sm:py-32 bg-zinc-950"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <div className="mb-4 font-mono text-xs uppercase tracking-widest text-zinc-500">
            03 — Compétences
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Maîtrise technologique
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-x-16">
          {skills.map(skill => (
            <div key={skill.name} className="space-y-2">
              <div className="flex items-end justify-between text-sm">
                <span className="font-medium text-zinc-300">{skill.name}</span>
                <span className="font-mono text-xs text-zinc-500">
                  {skill.level}%
                </span>
              </div>
              <div className="h-1 w-full rounded-full bg-zinc-900">
                <div
                  className="h-full rounded-full bg-zinc-400 transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Stack Grid */}
        <div className="mt-24 grid gap-6 md:grid-cols-3">
          {stack.map(s => (
            <div
              key={s.label}
              className="rounded-2xl border border-zinc-900 bg-zinc-900/30 p-6 backdrop-blur-sm transition-all hover:border-zinc-800"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300">
                <s.icon className="h-4 w-4" />
              </div>
              <h3 className="mb-3 text-base font-semibold text-white">
                {s.label}
              </h3>
              <ul className="space-y-2 text-xs text-zinc-400">
                {s.items.map(item => (
                  <li key={item} className="flex items-center gap-2 font-mono">
                    <Sparkles className="h-3 w-3 text-zinc-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
