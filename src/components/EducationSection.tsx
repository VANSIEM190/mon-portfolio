import { GraduationCap } from 'lucide-react'
import { education } from '../utils/data'

const EducationSection = () => {
  return (
    <section
      id="education"
      className="relative border-t border-zinc-200 bg-[#f7f6f1] px-4 py-24 sm:px-6 sm:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-16">
          <div className="mb-4 font-mono text-xs tracking-widest text-zinc-500 uppercase">
            04 — Formation
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Cursus &amp;{' '}
            <span className="font-serif font-medium text-indigo-950 italic">
              certifications
            </span>
          </h2>
        </div>

        <div className="relative space-y-6 border-l border-zinc-200 pl-8 sm:pl-10">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-colors hover:border-zinc-300 sm:p-7"
            >
              {/* Point de la timeline, aligné sur la ligne verticale */}
              <div className="absolute top-7 -left-[41px] flex h-4 w-4 items-center justify-center rounded-full border border-zinc-300 bg-[#f7f6f1] transition-colors group-hover:border-zinc-500 sm:-left-[49px]">
                <div className="h-1.5 w-1.5 rounded-full bg-zinc-400 group-hover:bg-zinc-700" />
              </div>

              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-bold text-zinc-900">
                  {edu.degree}
                </h3>
                <span className="font-mono text-xs whitespace-nowrap text-zinc-500 sm:text-right">
                  {edu.period}
                </span>
              </div>

              <div className="mt-1.5 flex items-center gap-2 text-xs font-medium text-zinc-600">
                <GraduationCap className="h-3.5 w-3.5 text-zinc-400" />
                {edu.school}
              </div>

              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-600">
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
