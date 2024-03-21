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
    caption:
      "Escena de muñecos de nieve, inspirada por la textura de arcilla y la temporada navideña.",
    type: "3D",
    links: [
      {
        text: "instagram",
        src: "https://www.instagram.com/p/CX5kzGmLG8R/",
      },
      {
        text: "artstation",
        src: "https://www.artstation.com/artwork/6bNWDr",
      },
    ],
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
    caption:
      "Snowman: una práctica con nieve y luces, donde los autos rodean a un gigante muñeco de nieve.",
    type: "3D",
    links: [
      {
        text: "instagram",
        src: "https://www.instagram.com/p/CJO0HkwjFUd/",
      },
      {
        text: "artstation",
        src: "https://www.artstation.com/artwork/mDgzZy",
      },
    ],
  },
  {
    id: 3,
    urls: [
      "/v1700179021/portfolio/model/mictlantecuhtli/mictlantecuhtli_cut_bmmbxs.webp",
      "/v1700179030/portfolio/model/mictlantecuhtli/mictlantecuhtli_ao_g2ynqp.webp",
      "/v1700179026/portfolio/model/mictlantecuhtli/diffuse_ind_iyoy4z.webp",
    ],
    title: "MICTLAN",
    longTitle: "Mictlantecuhtli",
    software: ["maya", "arnold", "mari"],
    caption:
      "Inspirado en el dios azteca de la muerte Mictlantecuhtli, realizado con un estilo toon.",
    type: "3D",
    links: [
      {
        text: "instagram",
        src: "https://www.instagram.com/p/CkcD_GpDMff/",
      },
      {
        text: "artstation",
        src: "https://www.artstation.com/artwork/xYABK4",
      },
    ],
  },

  {
    id: 4,
    urls: [
      "/v1700179626/portfolio/model/Ghibli/ghibli_totoro_autumn_2_bfxe5a.webp",
      "/v1700179638/portfolio/model/Ghibli/byke_mpidi9.webp",
      "/v1700179681/portfolio/model/Ghibli/lighting_raw_nuhwlq.webp",
      "/v1700179664/portfolio/model/Ghibli/REFERENCES_vbdopx.webp",
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
    caption:
      "Fan art en 3D del Totoro de Ghibli, inspirado en el otoño japonés. 🍂🎨",
    type: "3D",
    links: [
      {
        text: "instagram",
        src: "https://www.instagram.com/p/CkrRmQlPWEx/",
      },
      {
        text: "artstation",
        src: "https://www.artstation.com/artwork/3qX3z2",
      },
    ],
  },
  {
    id: 5,
    urls: [
      "/v1606776535/portfolio/model/midnightgospel/final_img_c_mzsgrf.webp",
      "/v1606776535/portfolio/model/midnightgospel/sec_dktemn.webp",
      "/v1606776535/portfolio/model/midnightgospel/thrids_2_eflw2k.webp",
      "/v1700182921/portfolio/model/midnightgospel/gray_shaed_ttscyo.webp",
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
    caption: "Fan art de Clancy, personaje de 'The Midnight Gospel'.",
    type: "3D",
    links: [
      {
        text: "instagram",
        src: "https://www.instagram.com/p/CFTW_GyA7aa/",
      },
      {
        text: "artstation",
        src: "https://www.artstation.com/artwork/YeJ3Qw",
      },
    ],
  },
  {
    id: 6,
    urls: [
      "/v1606775187/portfolio/model/cyberpunk/nave-final_v6m09q.webp",
      "/v1606774993/portfolio/model/cyberpunk/LIGHT_uu7hiw.webp",
      "/v1606774993/portfolio/model/cyberpunk/SPEC_dgjnox.webp",
      "/v1606774994/portfolio/model/cyberpunk/emission_qyjzyw.webp",
      "/v1606774993/portfolio/model/cyberpunk/UVMAP_utl350.webp",
      "/v1606775523/portfolio/model/cyberpunk/ivan-bautista-wip2_hd2o1r.webp",
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
    type: "3D",
    links: [
      {
        text: "instagram",
        src: "https://www.instagram.com/p/CFTVUBfArXe",
      },
      {
        text: "artstation",
        src: "https://www.artstation.com/artwork/q9LeDz",
      },
    ],
  },
  {
    id: 7,
    urls: [
      "/v1702071603/portfolio/frontend/discord/cover_dmo4zq.webp",
      "portfolio/frontend/discord/Browser_vlmm8c.webm",
      "portfolio/frontend/discord/Browser_vlmm8c.webm",
    ],
    title: "DISCORD",
    longTitle: "Discord Clone",
    software: ["react", "redux", "twilio", "graphql", "figma"],
    caption:
      "Clon con funciones similares a Discord, incluyendo diseño frontal, interacciones básicas y características de video.",
    type: "frontend",
    links: [
      { text: "demo", src: "https://community-chat-discord.vercel.app/1/1" },
      { text: "github", src: "https://github.com/Ivanricee/Community-chat" },
    ],
  },
  {
    id: 8,
    urls: [
      "/v1702080763/portfolio/frontend/evidence%20tool/responsive_gpvchp.webp",
      /*"/l_text:Roboto_34px_bold:Agregar%20Participante,co_rgb:90f0a7,g_north,y_40,eo_4/v1702080771/portfolio/frontend/evidence%20tool/Add_participant_l1mee9.webm",
      "/l_text:Roboto_34px_bold:Preguntas,co_rgb:90f0a7,g_north,y_40,eo_4/v1702080772/portfolio/frontend/evidence%20tool/Quiz_i5lqsk.webm",
      "/l_text:Roboto_34px_bold:Evidencias,co_rgb:90f0a7,g_north,y_40,eo_4/v1702080769/portfolio/frontend/evidence%20tool/Evidences_dgq5rm.webm",
      "/l_text:Roboto_34px_bold:Deudas,co_rgb:90f0a7,g_north,y_40,eo_4/v1702080770/portfolio/frontend/evidence%20tool/finance_x9d9my.webm",*/
      "portfolio/frontend/evidence%20tool/Add_participant_l1mee9.webm",
      "portfolio/frontend/evidence%20tool/Quiz_i5lqsk.webm",
      "portfolio/frontend/evidence%20tool/Evidences_dgq5rm.webm",
      "portfolio/frontend/evidence%20tool/finance_x9d9my.webm",
      "/v1702080762/portfolio/frontend/evidence%20tool/supabase_schema_uk8aia.webp",
    ],
    title: "EVIDENCE TOOL",
    longTitle: "Evidence Monitoring tool",
    software: ["next", "supabase", "tailwind", "mui"],
    caption:
      "Administra sanciones de usuarios en tiempo real mediante preguntas, apuestas y clips de Twitch como evidencia.",
    type: "frontend",
    links: [
      { text: "demo", src: "https://realtime-evidence-tracker.vercel.app" },
      {
        text: "github",
        src: "https://github.com/Ivanricee/realtime-evidence-tracker",
      },
    ],
  },
  {
    id: 9,
    urls: [
      "/v1702090713/portfolio/frontend/countries/cover_subieb.webp",
      "portfolio/frontend/countries/Browser_pvsqww.webm",
      "portfolio/frontend/countries/Mobile_kihkqy.webm",
    ],
    title: "COUNTRIES",
    longTitle: "Countries Finder",
    software: ["react", "redux"],
    caption:
      "Explora y filtra países por región. Al hacer clic, accede a detalles de la bandera seleccionada. ",
    type: "frontend",
    links: [
      { text: "demo", src: "https://countries-finder-ivanrice.vercel.app/" },
      {
        text: "github",
        src: "https://github.com/Ivanricee/countries-finder",
      },
    ],
  },
  {
    id: 10,
    urls: [
      "/v1702338812/portfolio/frontend/cards/cover_pj1ebf.webp",
      "portfolio/frontend/cards/card-browser_uedxy4.webm",
      "portfolio/frontend/cards/card_mobile_rhmkoz.webm",
    ],
    title: "BANK CARD",
    longTitle: "Interactive Bank Card",
    software: ["react", "react hook form", "vitest"],
    caption:
      "Formulario con validación y actualizaciones en tiempo real, incluyendo mensajes de error.",
    type: "frontend",
    links: [
      { text: "demo", src: "https://bank-card.vercel.app/" },
      {
        text: "github",
        src: "https://github.com/Ivanricee/Interactive-card-form",
      },
    ],
  },
  {
    id: 11,
    urls: [
      "/v1702090998/portfolio/frontend/shor-url/cover_fkxq2a.webp",
      "portfolio/frontend/shor-url/Browser_myslco.webm",
      "portfolio/frontend/shor-url/Mobile_xpet1s.webm",
    ],
    title: "SHORTLY URL",
    longTitle: "Shortly URL",
    software: ["react"],
    caption:
      "Acorta URLs, gestiona enlaces y copia con un solo clic, incluso después de actualizar la página.",
    type: "frontend",
    links: [
      { text: "demo", src: "https://shorturl-ivnrice.vercel.app/" },
      {
        text: "github",
        src: "https://github.com/Ivanricee/shorturl",
      },
    ],
  },
];

const transform2 = "e_grayscale,q_auto:eco,f_avif,w_50,h_50";
const transform = "e_colorize,co_rgb:fde3e3,q_auto:eco,f_avif,w_50,h_50";
export const SOFTWARE: Record<string, string> = {
  maya: `${CLOUDINARY_URL}${transform}${"/v1609285677/portfolio/icons/maya_mvhgmh.avif"}`,
  redshift: `${CLOUDINARY_URL}${transform2}${"/v1609286796/portfolio/icons/redshift_bzbnze.avif"}`,
  mari: `${CLOUDINARY_URL}${transform}${"/v1609285677/portfolio/icons/mari_uq9jsd.avif"}`,
  "substance 3D": `${CLOUDINARY_URL}${transform}${"/v1609285677/portfolio/icons/substance_bpjo6v.avif"}`,
  zbrush: `${CLOUDINARY_URL}${transform}${"/v1609285678/portfolio/icons/zbrush_fgroar.avif"}`,
  "rizom uv": `${CLOUDINARY_URL}${transform}${"/v1609285677/portfolio/icons/rizomuv_uaxnda.avif"}`,
  arnold: `${CLOUDINARY_URL}${transform}${"/v1609285677/portfolio/icons/arnold_fywzrf.avif"}`,
  nuke: `${CLOUDINARY_URL}${transform}${"/v1609285677/portfolio/icons/nuke_th3pum.avif"}`,
  react: `${CLOUDINARY_URL}${transform}${"/v1702929515/portfolio/icons/frontend/pngwing.com_bteiuk.avif"}`,
  redux: `${CLOUDINARY_URL}${transform}${"/v1702929735/portfolio/icons/frontend/reactRedux_qdzxyv.avif"}`,
  twilio: `${CLOUDINARY_URL}${"/e_colorize,co_rgb:fde3e3,q_auto:eco,f_avif,c_crop,h_748,x_610,y_295/v1702930127/portfolio/icons/frontend/twilio_uhi2yw.avif"}`,
  graphql: `${CLOUDINARY_URL}${transform}${"/v1702929508/portfolio/icons/frontend/graphql_yfzgzh.avif"}`,
  figma: `${CLOUDINARY_URL}${transform}${"/v1702929506/portfolio/icons/frontend/figma_zxcnoa.avif"}`,
  next: `${CLOUDINARY_URL}${transform}${"/v1708407050/portfolio/icons/frontend/1657707878-nextjs_logo_wdrwua.avif"}`,
  supabase: `${CLOUDINARY_URL}${transform}${"/v1702929866/portfolio/icons/frontend/supabase-logo-wordmark--dark_bopwfm.avif"}`,
  tailwind: `${CLOUDINARY_URL}${transform}${"/v1702929997/portfolio/icons/frontend/tailwind_giofmq.avif"}`,
  mui: `${CLOUDINARY_URL}${transform}${"/v1702929510/portfolio/icons/frontend/mui_qw7c69.avif"}`,
  "react hook form": `${CLOUDINARY_URL}${transform2}${"/v1702929603/portfolio/icons/frontend/react-hook-form_l9larm.avif"}`,
  vitest: `${CLOUDINARY_URL}${transform}${"/v1609285677/portfolio/icons/maya_mvhgmh.avif"}`,
};
