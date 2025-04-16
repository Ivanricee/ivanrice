import { Button } from './button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip'

// Componente que define solo los símbolos SVG que necesitas
export function IconSymbols() {
  // Crear un objeto con los iconos que quieres usar
  const selectedIcons = {
    'arrow-right': (
      <svg>
        <path d="M7 7h10v10" />
        <path d="M7 17 17 7" />
      </svg>
    ),
    cv: (
      <>
        <path
          d="M13 9L15 15L17 9M10 15C9.06812 15 8.60218 15 8.23463 14.8478C7.74458 14.6448 7.35523 14.2554 7.15224 13.7654C7 13.3978 7 12.9319 7 12C7 11.0681 7 10.6022 7.15224 10.2346C7.35523 9.74458 7.74458 9.35523 8.23463 9.15224C8.60218 9 9.06812 9 10 9M7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20Z"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </>
    ),
    github: (
      <>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </>
    ),
    linkedin: (
      <>
        <path stroke="none" d="M0 0h24v24H0z" fill="none" stroke-width="1.5" />
        <path
          d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"
          stroke-width="1.5"
        />
        <path d="M8 11l0 5" stroke-width="1.5" />
        <path d="M8 8l0 .01" stroke-width="1.5" />
        <path d="M12 16l0 -5" stroke-width="1.5" />
        <path d="M16 16v-3a2 2 0 0 0 -4 0" stroke-width="1.5" />
      </>
    ),
    image: (
      <>
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
        <circle cx="9" cy="9" r="2" />
        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
      </>
    ),
    instagram: (
      <>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </>
    ),
    artstation: (
      <>
        <path d="M0 17.723l2.027 3.505h.001a2.424 2.424 0 0 0 2.164 1.333h13.457l-2.792-4.838H0zm24 .025c0-.484-.143-.935-.388-1.314L15.728 2.728a2.424 2.424 0 0 0-2.142-1.289H9.419L21.598 22.54l1.92-3.325c.378-.637.482-.919.482-1.467zm-11.129-3.462L7.428 4.858l-5.444 9.428h10.887z" />
      </>
    ),
    mail: (
      <>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </>
    ),
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
      {Object.entries(selectedIcons).map(([name, paths]) => {
        return (
          <symbol
            key={name}
            id={`icon-${name}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {paths}
          </symbol>
        )
      })}
    </svg>
  )
}
type BaseIconProps = {
  name: string
  size?: number
  className?: string
}
type iconButtonProps = BaseIconProps & {
  isButton: true
  url: string
  tooltipContent: string
}
type iconNonButtonProps = BaseIconProps & {
  isButton?: false
  url?: never
  tooltipContent?: never
}
type IconProps = iconButtonProps | iconNonButtonProps
export function Icon({
  name,
  isButton = false,
  size = 24,
  className = '',
  url,
  tooltipContent,
}: IconProps) {
  const svgElement = (
    <svg width={size} height={size} className={className}>
      <use href={`#icon-${name}`} />
    </svg>
  )
  if (isButton && url)
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Button
              size="icon"
              asChild
              className="group/icon  rounded-none shadow-lg hover:shadow-orange-300/10"
            >
              <a href={url} target="_blank" rel="noopener noreferrer">
                {svgElement}
              </a>
            </Button>
          </TooltipTrigger>
          <TooltipContent>{tooltipContent}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  return svgElement
}
