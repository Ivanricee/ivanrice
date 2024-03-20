/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
export interface CardInfo {
  id: number;
  urls: string[];
  title: string;
  longTitle: string;
  software: string[];
  caption: string;
  type: string;
  links: { text: string; src: string }[];
}
