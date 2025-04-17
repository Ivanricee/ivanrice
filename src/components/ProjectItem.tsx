import { CLOUDINARY_LOW, CLOUDINARY_URL } from '@/lib/constants'
import { CARD_INFO, SOFTWARE } from '../lib/data'
import { ArrowUpRight, Github, Image, Instagram } from 'lucide-react'
import { ArtstationIcon } from './ui/ArtstationIcon'
import { Button } from './ui/button'
import { Fragment, useState } from 'react'
import { ProjectItemDetail } from './ProjectItemDetail'
import type { Media, ModalData } from '@/env'
import { Icon } from '@/components/ui/Icon'
interface Props {
  type: 'frontend' | '3D'
}

const imageUrlBase = `${CLOUDINARY_URL}${CLOUDINARY_LOW}`

export function ProjectItem({ type }: Props) {
  const [modal, setModal] = useState<ModalData>({
    media: [],
    title: '',
    isOpen: false,
  })
  const setIsOpen = (isOpen: boolean, media?: Media[], title?: string) => {
    if (media && title) return setModal({ isOpen, media, title })
    setModal((prevModal) => ({ ...prevModal, isOpen }))
  }

  const projectsByType = CARD_INFO.filter((project) => project.type === type)
  return (
    <>
      <ProjectItemDetail detail={modal} onOpenChange={setIsOpen} />
      <article className="animate-in fade-in-45 zoom-in-[100.5%] mt-20 w-full duration-700 ease-in-out">
        <ul className="font-body flex flex-col gap-20">
          {projectsByType.map((project, index) => {
            const { id, caption, media, links, longTitle, software, title, type } = project
            return (
              <li className="group relative" key={id}>
                {/* Número de proyecto */}
                <div className="absolute -top-20 -left-4 font-mono text-9xl font-bold text-orange-200/5  will-change-[mix-blend-mode,opacity] select-none">
                  {(index + 1).toString().padStart(2, '0')}
                </div>

                <div className="relative grid gap-8 md:grid-cols-2">
                  {/* wrapper button */}
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => setIsOpen(true, media, longTitle)}
                    className="group/inner relative min-h-[250px] cursor-pointer overflow-hidden border-2 transition-all duration-700 group-hover:border-2
                    group-hover:border-orange-500/20 group-hover:shadow-2xl group-hover:shadow-orange-600/10 "
                  >
                    {/* overlay */}
                    <div
                      className="from-background/90 absolute inset-0 z-10 flex flex-col items-center justify-center bg-linear-to-tl
                      from-30% to-orange-500/15  p-4 text-orange-50/90 opacity-0 backdrop-blur-xs transition-all duration-300
                      group-hover:opacity-100 group-hover/inner:text-orange-400    "
                    >
                      <Image
                        size={40}
                        className=" -translate-x-1 transition-transform duration-300 group-hover/inner:translate-x-0"
                      />
                      Ver Más del Proyecto
                    </div>
                    <img
                      src={`${imageUrlBase}${media[0].url}`}
                      alt={title}
                      decoding="async"
                      loading={'lazy'}
                      className="h-full w-full cursor-pointer object-cover opacity-90 transition-all duration-1000 ease-in-out group-hover:scale-105"
                    />

                    {/* Etiqueta de tipo */}
                    <div className="absolute top-0 right-0 z-20">
                      <span className="bg-orange-500/85 px-3 py-1 font-mono text-xs font-bold text-black">
                        {type}
                      </span>
                    </div>
                  </div>

                  {/* Contenido del proyecto */}
                  <div className="relative flex flex-col justify-center">
                    <div className="pointer-events-none absolute top-3 bottom-3 w-2/3 -translate-x-12 bg-orange-300/10 mix-blend-exclusion blur-3xl transition-all duration-700 select-none group-hover:w-9/12 group-hover:opacity-0" />
                    <div className="pointer-events-none absolute top-3 bottom-3 w-2/3 -translate-x-12 bg-orange-300/10 opacity-0 mix-blend-normal blur-3xl transition-all duration-700 select-none group-hover:w-full group-hover:rounded-r-2xl group-hover:opacity-100" />
                    <h3 className="font-title mb-3 bg-gradient-to-r from-orange-400 from-20% to-orange-900 to-95% bg-clip-text text-xl font-bold tracking-tight text-transparent">
                      {longTitle}
                    </h3>

                    <p className="mb-4 text-[0.92rem] text-orange-50/90">{caption}</p>

                    <div className="mb-4 flex flex-wrap gap-2">
                      {software.map((tech) => (
                        <span
                          key={tech}
                          className="font-body flex justify-center gap-1 border-2 border-orange-200/10 px-3 py-1 text-xs text-orange-200/80 capitalize "
                        >
                          <img
                            src={SOFTWARE[tech]}
                            alt={tech}
                            width={10}
                            height={10}
                            className="h-4 w-4"
                          />
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="w-full border-b border-orange-100/10"></div>
                    <div className="my-2 flex flex-wrap  gap-2">
                      {links.map((link) => {
                        if (link.text === 'demo') {
                          return (
                            <Button
                              asChild
                              className="group/inner inline-flex items-center gap-1.5 rounded-none font-medium  text-orange-400
                              uppercase shadow-lg transition-colors hover:text-orange-400 hover:shadow-orange-300/10"
                              key={`${link.src}${id}`}
                            >
                              <a
                                key={link.src}
                                href={link.src}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Demo
                                <ArrowUpRight
                                  size={16}
                                  className=" transition-all duration-300 group-hover/inner:translate-x-0.5"
                                />
                              </a>
                            </Button>
                          )
                        }
                        return (
                          <Fragment key={`${link.src}${id}`}>
                            {link.text === 'instagram' && (
                              <Icon
                                name="instagram"
                                size={17}
                                className=" ease-in-cst size-[1.25rem] text-orange-400 transition-all duration-300 group-hover/icon:scale-110 "
                                isButton
                                url={link.src}
                                tooltipContent="Instagram"
                              />
                            )}
                            {link.text === 'artstation' && (
                              <Icon
                                name="artstation"
                                size={20}
                                className=" ease-in-cst size-[1.25rem] text-orange-400 transition-all duration-300 group-hover/icon:scale-110 "
                                isButton
                                url={link.src}
                                tooltipContent="Artstation"
                              />
                            )}
                            {link.text === 'github' && (
                              <Icon
                                name="github"
                                size={20}
                                className=" ease-in-cst size-[1.15rem] text-orange-400 transition-all duration-300 group-hover/icon:scale-110 "
                                isButton
                                url={link.src}
                                tooltipContent="GitHub"
                              />
                            )}
                          </Fragment>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
          {/**
     *
    <li
      style={`grid-area: footer;`}
      className="border-american-blue-500/50 text-green-lime-300 from-american-blue-950/50 via-american-blue-800/65 relative z-20 flex h-64 w-full items-center justify-center overflow-hidden rounded-xl border-2 bg-gradient-to-bl from-10% via-30% to-indigo-800/30 to-82% text-xl sm:h-full"
    >
      {
        isFront ? (
          <div className="flex flex-nowrap items-center gap-2">
            <a
              href="https://github.com/Ivanricee"
              target="_blank"
              rel="noopener"
              className="translate-y-0.5 text-sm font-bold uppercase transition-all duration-700 hover:underline"
            >
              VER MÁS
            </a>
            <Icons name="seemore" size="1.3rem" stroke={2} />
          </div>
        ) : (
          <div className="flex flex-nowrap items-center gap-2">
            <a
              href="https://www.instagram.com/ivanrice_/"
              target="_blank"
              rel="noopener"
              className="translate-y-0.5 text-sm font-bold uppercase transition-all duration-700 hover:underline"
            >
              VER MÁS
            </a>
            <Icons name="seemore" size="1.3rem" stroke={2} />
          </div>
        )
      }
    </li>
     */}
        </ul>
      </article>
    </>
  )
}
