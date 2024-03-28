/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
export type Image = {
  url: string;
  bg: string;
};
export interface CardInfo {
  id: number;
  image: Image[];
  title: string;
  longTitle: string;
  software: string[];
  caption: string;
  type: string;
  links: { text: string; src: string }[];
}
