const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-900 bg-zinc-950/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a
          href="#top"
          className="font-mono text-sm font-bold tracking-wider text-zinc-200 transition-colors hover:text-white"
        >
          <span>{"<Van'siem.dev/>"}</span>
        </a>
        <ul className="hidden gap-8 text-xs font-medium uppercase tracking-widest text-zinc-400 md:flex">
          <li>
            <a href="#about" className="transition-colors hover:text-white">
              À propos
            </a>
          </li>
          <li>
            <a href="#skills" className="transition-colors hover:text-white">
              Compétences
            </a>
          </li>
          <li>
            <a href="#projects" className="transition-colors hover:text-white">
              Projets
            </a>
          </li>
          <li>
            <a href="#education" className="transition-colors hover:text-white">
              Formation
            </a>
          </li>
          <li>
            <a href="#contact" className="transition-colors hover:text-white">
              Contact
            </a>
          </li>
        </ul>
        <a
          href="#contact"
          className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-xs font-medium uppercase tracking-wider text-zinc-200 transition-all hover:border-zinc-700 hover:bg-zinc-850"
        >
          Me contacter
        </a>
      </nav>
    </header>
  )
}

export default Navbar
