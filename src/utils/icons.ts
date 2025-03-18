import fs from 'fs'
import path from 'path'

function fetchSVGIcon(icon: string) {
  const svgPath = path.resolve('public/svg', `${icon}.svg`)
  try {
    const svgContent = fs.readFileSync(svgPath, 'utf-8')
    return svgContent
  } catch (err) {
    console.error('SVG read error:', err)
    return null
  }
}
const iconDir: Record<string, () => string | null> = {
  artstation: () => fetchSVGIcon('brand-artstation'),
  github: () => fetchSVGIcon('brand-github'),
  gmail: () => fetchSVGIcon('brand-gmail'),
  instagram: () => fetchSVGIcon('brand-instagram'),
  linkedin: () => fetchSVGIcon('brand-linkedin'),
  seemore: () => fetchSVGIcon('brand-external-link'),
  demo: () => fetchSVGIcon('brand-link'),
  close: () => fetchSVGIcon('brand-square-rounded-x'),
  download: () => fetchSVGIcon('brand_download'),
  cv: () => fetchSVGIcon('brand-file-cv'),
}
export type IconName = keyof typeof iconDir

export function getIcon(icon: IconName) {
  const iconItem = iconDir[icon] ?? null
  return iconItem
}
