/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
export type Media = {
  url: string
  bg: string
  caption?: string
}
export type ModalData = {
  media: Media[]
  title: string
  isOpen: boolean
}
export interface CardInfo {
  id: number
  media: Media[]
  title: string
  longTitle: string
  software: string[]
  caption: string
  type: string
  links: { text: string; src: string }[]
}
declare global {
  interface Window {
    cloudinary: any
  }
}
