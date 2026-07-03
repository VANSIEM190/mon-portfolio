import { GraduationCap } from 'lucide-react'
import { education } from '../utils/data'

const EducationSection = () => {
  return (
    <section
      id="education"
      className="relative border-t border-zinc-900 px-4 py-24 sm:px-6 sm:py-32 bg-zinc-950"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-16">
          <div className="mb-4 font-mono text-xs uppercase tracking-widest text-zinc-500">
            04 — Formation
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Cursus & Certifications
          </h2>
        </div>

        <div className="relative border-l border-zinc-900 pl-6 space-y-12">
          {education.map((edu, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -left-7.75 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-zinc-950 border border-zinc-800 transition-all group-hover:border-zinc-500">
                <div className="h-1.5 w-1.5 rounded-full bg-zinc-700 group-hover:bg-zinc-400" />
              </div>

              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-bold text-zinc-200 group-hover:text-white transition-colors">
                  {edu.degree}
                </h3>
                <span className="font-mono text-xs text-zinc-500 sm:text-right">
                  {edu.period}
                </span>
              </div>

              <div className="mt-1 flex items-center gap-2 text-xs font-medium text-zinc-400">
                <GraduationCap className="h-3.5 w-3.5 text-zinc-500" />
                {edu.school}
              </div>

              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-500">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EducationSection
