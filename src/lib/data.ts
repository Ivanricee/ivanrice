import type { CardInfo } from "../env";
import { CLOUDINARY_URL } from "./constants";

export const CARD_INFO: CardInfo[] = [
  {
    id: 1,
    urls: [
      "/v1700180330/portfolio/model/christmas/christmas_snowman_ecngcw.webp",
      "/v1700180349/portfolio/model/christmas/little_christmas_ivan_bautista_unxbbg.webp",
    ],
    title: "CHRISTMAS",
    longTitle: "Little Christmas",
    software: ["maya", "redshift", "mari", "zbrush", "rizom uv"],
    caption: "Snowman Little Christmas. Rendered with redshift",
    type: "3d",
  },
  {
    id: 2,
    urls: ["/v1700182548/portfolio/model/snowman/final_ig_imytwj.webp"],
    title: "SNOWMAN",
    longTitle: "Snowman lights",
    software: [
      "maya",
      "redshift",
      "mari",
      "substance 3D",
      "zbrush",
      "rizom uv",
    ],
    caption: "A practice of snow and lighting",
    type: "3d",
  },
  {
    id: 3,
    urls: [
      "/v1700179021/portfolio/model/mictlantecuhtli/mictlantecuhtli_cut_bmmbxs.webp",
    ],
    title: "MICTLANTECUHTLI",
    longTitle: "Mictlantecuhtli - Señor del Mictlan.",
    software: ["maya", "arnold", "mari"],
    caption: "Made with Arnold render.",
    type: "3d",
  },

  {
    id: 4,
    urls: [
      "/v1700179626/portfolio/model/Ghibli/ghibli_totoro_autumn_2_bfxe5a.webp",
    ],
    title: "GHIBLI",
    longTitle: "Ghibli Train Station",
    software: [
      "maya",
      "redshift",
      "mari",
      "substance 3D",
      "zbrush",
      "rizom uv",
    ],
    caption: "3D fan art of Ghibli's Totoro, inspired by autumn.  🍂🎨",
    type: "3d",
  },
  {
    id: 5,
    urls: [
      "/v1606776535/portfolio/model/midnightgospel/final_img_c_mzsgrf.webp",
    ],
    title: "CLANCY",
    longTitle: "Clancy - Fan Art",
    software: [
      "maya",
      "redshift",
      "mari",
      "substance 3D",
      "zbrush",
      "rizom uv",
    ],
    caption: "Clancy from The midnight gospel.",
    type: "3d",
  },
  {
    id: 6,
    urls: ["/v1606775187/portfolio/model/cyberpunk/nave-final_v6m09q.webp"],
    title: "SPACESHIP",
    longTitle: "Steampunk spaceship",
    software: [
      "maya",
      "arnold",
      "nuke",
      "mari",
      "substance 3D",
      "zbrush",
      "rizom uv",
    ],
    caption:
      "steampunk spaceship. Copper material practice with arnold render.",
    type: "3d",
  },
];

const transform = "e_grayscale,q_auto:eco";
export const SOFTWARE: Record<string, string> = {
  maya: `${CLOUDINARY_URL}${transform}${"/v1609285677/portfolio/icons/maya_mvhgmh.avif"}`,
  redshift: `${CLOUDINARY_URL}${transform}${"/v1609286796/portfolio/icons/redshift_bzbnze.avif"}`,
  mari: `${CLOUDINARY_URL}${transform}${"/v1609285677/portfolio/icons/mari_uq9jsd.avif"}`,
  "substance 3D": `${CLOUDINARY_URL}${transform}${"/v1609285677/portfolio/icons/substance_bpjo6v.avif"}`,
  zbrush: `${CLOUDINARY_URL}${transform}${"/v1609285678/portfolio/icons/zbrush_fgroar.avif"}`,
  "rizom uv": `${CLOUDINARY_URL}${transform}${"/v1609285677/portfolio/icons/rizomuv_uaxnda.avif"}`,
  arnold: `${CLOUDINARY_URL}${transform}${"/v1609285677/portfolio/icons/arnold_fywzrf.avif"}`,
  nuke: `${CLOUDINARY_URL}${transform}${"/v1609285677/portfolio/icons/nuke_th3pum.avif"}`,
};
