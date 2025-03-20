import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

interface Experience {
  company: string
  role: string
  time: string
  description: string
  isLatest: boolean
}
const experiences: Experience[] = [
  {
    role: 'Freelance',
    company: '',
    time: 'Agosto 2021 - Presente',
    description:
      'Modelado y texturizado 3D. En Desarrollo Frontend, me enfoco en implementar nuevas funcionalidades, mejorar la optimización y accesibilidad, siguiendo las mejores prácticas. Mantengo un compromiso constante con el aprendizaje en 3D y Frontend.',
    isLatest: true,
  },
  {
    role: 'Ssr. Frontend Developer',
    company: 'SNGULAR',
    time: 'Abril - julio 2021 ',
    description:
      'Adopté herramientas de Frontend, colaboré en equipo para resolver problemas de UI/UX, gestioné y apoyé cambios en el sistema de diseño de componentes. Demostré flexibilidad, compromiso con las mejores prácticas y habilidades organizativas.',
    isLatest: false,
  },
  {
    role: 'Fullstack Developer',
    company: 'Campus Virtuales',
    time: 'Oct. 2013 - Oct. 2019 ',
    description:
      'Lideré el área de desarrollo, realizando proyectos internos y externos, gestioné el mantenimiento de aplicaciones. Implementé nuevas tecnologías para mejorar la eficiencia y adopté tecnologías emergentes, manteniendo mi aprendizaje actualizado en frontend y backend.',
    isLatest: false,
  },
]
export default function Experience() {
  return (
    <Accordion type="single" collapsible className="">
      {experiences.map((experience) => {
        const { role, company, time, description, isLatest } = experience
        return (
          <AccordionItem value={`item-${role}`} key={role} className="font-body">
            <AccordionTrigger className="py-4 [&[data-state=open]]:bg-linear-[140deg] [&[data-state=open]]:from-transparent [&[data-state=open]]:from-15% [&[data-state=open]]:to-orange-600/40 [&[data-state=open]]:pr-4">
              <div className="flex w-full flex-nowrap items-baseline justify-between gap-2">
                <div className="flex flex-col justify-start font-semibold">
                  <h3 className="font-title text-2xl text-pretty">{role}</h3>
                  <span className="text-base font-light">{company}</span>
                </div>
                <time className="text-sm font-light tracking-wide">{time}</time>
              </div>
            </AccordionTrigger>
            <AccordionContent className="to-background bg-linear-[195deg] from-orange-400/20 to-40%">
              <li className="flex w-full flex-col flex-nowrap">
                <p className="flex w-full items-center text-base font-light text-balance">
                  {description}
                </p>
              </li>
            </AccordionContent>
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}
