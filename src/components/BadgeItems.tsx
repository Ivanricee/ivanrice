import { CLOUDINARY_URL } from "@/lib/constants";
import { Badge } from "flowbite-react";

interface Props {
  items: { src: string; text: string }[];
  isLink?: boolean;
}
const transform = "q_auto:eco,f_avif,w_50,h_50";
const imgSMedia: { [key: string]: string } = {
  github: `${CLOUDINARY_URL}${transform}/v1703043998/portfolio/icons/github_ctttgh.avif`,
  artstation: `${CLOUDINARY_URL}${transform}/v1703028343/portfolio/icons/artstation_ecauis.avif`,
  instagram: `${CLOUDINARY_URL}${transform}/v1703028343/portfolio/icons/instagram_vmxjaz.avif`,
};
const hasImg = (img: string) =>
  img === "github" || img === "artstation" || img === "instagram";

export default function BadgeItems({ items, isLink = false }: Props) {
  return (
    <div className="flex flex-wrap gap-2 caption opacity-70">
      {items.map((item) => {
        return (
          <div key={item.src} className="flex flex-wrap gap-2">
            {isLink ? (
              <a
                href={item.src}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-2.5 py-0.5 rounded text-lg  bg-red-200/80 text-slate-800 hover:bg-red-300 underline capitalize"
              >
                <span>
                  {hasImg(item.text) ? (
                    <img
                      src={imgSMedia[item.text]}
                      width={35}
                      className="object-contain"
                    />
                  ) : (
                    item.text
                  )}
                </span>
              </a>
            ) : (
              <Badge color="dark">
                <div className="flex gap-2">
                  <img src={item.src} width={18} className="object-contain" />
                  <span className="text-base capitalize font-normal">
                    {item.text}
                  </span>
                </div>
              </Badge>
            )}
          </div>
        );
      })}
    </div>
  );
}
