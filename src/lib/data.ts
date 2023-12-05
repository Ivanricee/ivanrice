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
      "/v1700179030/portfolio/model/mictlantecuhtli/mictlantecuhtli_ao_g2ynqp.jpg",
      "/v1700179026/portfolio/model/mictlantecuhtli/diffuse_ind_iyoy4z.jpg",
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
      "/v1700179638/portfolio/model/Ghibli/byke_mpidi9.png",
      "/v1700179681/portfolio/model/Ghibli/lighting_raw_nuhwlq.jpg",
      "/v1700179664/portfolio/model/Ghibli/REFERENCES_vbdopx.jpg",
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
      "/v1606776535/portfolio/model/midnightgospel/sec_dktemn.jpg",
      "/v1606776535/portfolio/model/midnightgospel/thrids_2_eflw2k.jpg",
      "/v1700182921/portfolio/model/midnightgospel/gray_shaed_ttscyo.jpg",
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
    urls: [
      "/v1606775187/portfolio/model/cyberpunk/nave-final_v6m09q.webp",
      "/v1606774993/portfolio/model/cyberpunk/LIGHT_uu7hiw.jpg",
      "/v1606774993/portfolio/model/cyberpunk/SPEC_dgjnox.jpg",
      "/v1606774994/portfolio/model/cyberpunk/emission_qyjzyw.jpg",
      "/v1606774993/portfolio/model/cyberpunk/UVMAP_utl350.jpg",
      "/v1606775523/portfolio/model/cyberpunk/ivan-bautista-wip2_hd2o1r.jpg",
    ],
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
