import { Button } from '@/components/ui/button'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import type { ModalData } from '@/env'
import { CLOUDINARY_HIGH, CLOUDINARY_URL } from '@/lib/constants'
import { cn } from '@/lib/utils'

import { CloudinaryVideo } from './CloudinaryVideo'
interface Props {
  detail: ModalData
  onOpenChange: (isOppen: boolean) => void
}
const urlImgBase = `${CLOUDINARY_URL}${CLOUDINARY_HIGH}`
export function ProjectItemDetail({ detail, onOpenChange }: Props) {
  const color = detail.media[0]?.bg || ''

  return (
    <Dialog open={detail.isOpen} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          `max-h-svh w-full min-w-full bg-radial from-[var(--image-bg)]/50 from-55% to-transparent md:min-w-2xl lg:min-w-4xl`
        )}
        style={{ '--image-bg': color } as React.CSSProperties}
      >
        <DialogHeader>
          <DialogTitle>{detail.title}</DialogTitle>
        </DialogHeader>
        <div className="w-full">
          <Carousel className=" px-8 backdrop-blur-sm">
            <CarouselContent className="flex min-h-80 items-center  lg:min-h-[30rem]">
              {detail.media.map((image, index) => (
                <CarouselItem key={index}>
                  {image.url.endsWith('webp') ? (
                    <img
                      src={`${urlImgBase}${image.url}`}
                      alt={image.caption}
                      loading="lazy"
                      className=" mx-auto max-h-[calc(80vh-2rem)] max-w-full object-contain"
                    />
                  ) : (
                    <CloudinaryVideo id={image.url} />
                  )}
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <DialogFooter>
          <Button type="button" className="rounded-none" onClick={() => onOpenChange(false)}>
            Cerrar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
