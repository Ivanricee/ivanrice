import { useState, useEffect } from 'react'

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeItem, setActiveItem] = useState(0)
  const [dimensions, setDimensions] = useState({ width: 0, left: 0 })

  const navItems = [
    {
      title: 'Inicio',
      url: '/ivanrice/#inicio',
      ariaLabel: 'header',
    },
    {
      title: 'Experiencia',
      url: '/ivanrice/#experience',
      ariaLabel: 'experience',
    },
    {
      title: 'Proyectos',
      url: '/ivanrice/#projects',
      ariaLabel: 'projects/?type=frontend',
    },
    {
      title: 'Sobre Mi',
      url: '/ivanrice/#aboutme',
      ariaLabel: 'aboutme',
    },
  ]

  const updateDimensions = (index: number) => {
    const element = document.getElementById(`menu-item-${index}`)
    if (element) {
      const rect = element.getBoundingClientRect()
      const parentRect = element.parentElement?.getBoundingClientRect()
      setDimensions({
        width: rect.width,
        left: parentRect ? rect.left - parentRect.left : rect.left,
      })
    }
  }

  useEffect(() => {
    if (window.innerWidth >= 768) {
      updateDimensions(activeItem)
    }

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        updateDimensions(activeItem)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [activeItem])

  return (
    <section className="relative mb-16 flex w-full justify-center">
      {/* Desktop Menu */}
      <div className="fixed top-0 right-0 left-0 z-50 flex justify-center">
        <nav
          className="font-title relative h-16 w-full max-w-2xl  border border-orange-500/20 bg-black/30 backdrop-blur-xl"
          aria-label="Main navigation"
        >
          <div className=" flex h-full items-center justify-end md:justify-between">
            <div className="relative hidden h-full md:flex">
              {/* Background Slider */}
              <div
                className="ease-spring absolute h-full  bg-gradient-to-r from-orange-600/35 to-orange-400/25
              shadow-2xl shadow-orange-500/40 backdrop-blur-sm
              transition-all duration-500 focus-visible:ring-[3px] focus-visible:outline-1"
                style={{
                  width: `${dimensions.width}px`,
                  left: `${dimensions.left}px`,
                }}
              />

              {navItems.map((item, index) => (
                <a
                  key={item.title}
                  id={`menu-item-${index}`}
                  href={item.url}
                  onClick={(e) => {
                    setActiveItem(index)
                  }}
                  className={`group relative flex h-full items-center px-8 transition-colors duration-300 ${
                    activeItem === index
                      ? ' text-orange-50/90 '
                      : 'text-orange-50/70 hover:text-orange-50/90'
                  }`}
                  aria-current={activeItem === index ? 'page' : undefined}
                  aria-label={item.ariaLabel}
                >
                  <span className="relative z-10  text-sm tracking-widest uppercase">
                    {item.title}
                  </span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="group relative z-50 p-6 transition-colors hover:bg-orange-500/10 md:hidden"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <div className="relative h-6 w-6">
                <span
                  className={`absolute left-0 block h-0.5 w-full transform bg-orange-400 transition-all duration-300 ${
                    isMenuOpen ? 'top-3 rotate-45' : 'top-1'
                  }`}
                />
                <span
                  className={`absolute top-3 left-0 block h-0.5 w-full bg-orange-400 transition-all duration-200 ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`absolute left-0 block h-0.5 w-full transform bg-orange-400 transition-all duration-300 ${
                    isMenuOpen ? 'top-3 -rotate-45' : 'top-5'
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>
      </div>
      {/* Spacer for fixed navigation */}
      <div className="h-16"></div>
      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`font-title ease-in-cst fixed inset-0 z-40 backdrop-blur-sm transition-all duration-500 md:hidden ${
          isMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!isMenuOpen}
      >
        {/* Backdrop */}
        <div
          className={`ease-in-cst absolute inset-0 bg-black/40`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Menu Content */}
        <div
          className={`ease-in-cst bg-background/70 to-background absolute right-0 h-full w-3/4
            transform bg-linear-to-b from-orange-400/5 shadow-2xl transition-transform duration-300 ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div className="flex flex-col px-4 pt-20">
            <div>
              {navItems.map((item, index) => (
                <a
                  key={item.title}
                  href={item.url}
                  onClick={() => {
                    setActiveItem(index)
                    setIsMenuOpen(false)
                  }}
                  className={`block  px-4 py-6  text-sm tracking-wider uppercase transition-colors duration-300 ${
                    activeItem === index
                      ? 'bg-orange-500/20 text-orange-400'
                      : 'text-white/70 hover:bg-orange-500/10 hover:text-white'
                  }`}
                  aria-current={activeItem === index ? 'page' : undefined}
                >
                  {item.title}
                </a>
              ))}
            </div>

            {/* Mobile Menu Footer */}
            <div className="mt-auto border-t border-orange-500/10 pt-6" />
          </div>
        </div>
      </div>
    </section>
  )
}
