/// <reference types="astro/client" />
export interface CardInfo {
  id: number;
  urls: string[];
  title: string;
  longTitle: string;
  software: string[];
  caption: string;
  type: string;
  links: { title: string; href: string }[];
}
