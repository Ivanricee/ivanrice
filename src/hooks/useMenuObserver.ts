import { useEffect, useState } from 'react'

interface Props {
  updateDimensions: (label: string) => void
}
const sectionIds = ['inicio', 'experience', 'projects', 'aboutme'] as string[]
export function useMenuObserver() {
  const [activeSection, setActiveSection] = useState<string>('inicio')
  const [dimensions, setDimensions] = useState({ width: 0, left: 0 })
  const updateDimensions = (label: string) => {
    const element = document.getElementById(`menu-item-${label}`)
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
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            updateDimensions(entry.target.id)
            return setActiveSection(entry.target.id)
          }
        }
      },
      {
        rootMargin: '0px 0px -35% 0px',
        threshold: 0,
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [sectionIds])

  return { activeSection, setActiveSection, updateDimensions, dimensions }
}
