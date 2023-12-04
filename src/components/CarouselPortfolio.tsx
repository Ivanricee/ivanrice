import {
  CLOUDINARY_HIGH,
  CLOUDINARY_LOW,
  CLOUDINARY_URL,
} from "@/lib/constants";
import { Carousel } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { useEffect, useState } from "react";
const theme: CustomFlowbiteTheme["carousel"] = {
  indicators: {
    active: {
      off: "bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
      on: "bg-white dark:bg-gray-800",
    },
    base: "h-3 w-3 rounded-full",
    wrapper:
      "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3 bg-secondaryBack/30 p-2 rounded-full",
  },
  control: {
    base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-secondaryBack/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
    icon: "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6",
  },
  scrollContainer: {
    base: "overflow-hidden flex h-full snap-mandatory overflow-y-hidden scroll-smooth rounded-lg overflow-x-hidden",
    snap: "snap-x",
  },
};
interface Props {
  imgs: string[];
}
export default function CarouselPortfolio({ imgs }: Props) {
  const imgLowQ = `${CLOUDINARY_URL}${CLOUDINARY_LOW}${imgs[0]}`;
  const [imageList, setImageList] = useState<string[] | null>(null);
  const [loadAnimate, setLoadAnimate] = useState(false);

  useEffect(() => {
    let loadedImgs = 0;
    let HQImages: string[] = [];
    imgs.forEach((url, index) => {
      const img = new Image();
      img.src = `${CLOUDINARY_URL}${CLOUDINARY_HIGH}${url}`;
      img.onload = () => {
        loadedImgs++;
        HQImages[index] = img.src;
        if (loadedImgs === imgs.length) {
          setLoadAnimate(true);
          setImageList(HQImages);
        }
      };
    });
  }, []);

  return (
    <div className="h-full ">
      <img
        src={imgLowQ}
        alt="carousel image"
        className={`w-full h-full object-contain absolute rounded-2xl ${
          loadAnimate ? "animate-fadeOut" : ""
        }`}
      />
      {imageList && imageList.length > 0 && (
        <Carousel theme={theme} pauseOnHover>
          {imageList?.map((url) => {
            console.log({ imageList });
            return (
              <img
                key={url}
                src={url}
                alt="carousel image"
                className={`w-full h-full object-contain absolute  rounded-2xl ${
                  loadAnimate ? "animate-fadeIn" : ""
                }`}
              />
            );
          })}
        </Carousel>
      )}
    </div>
  );
}
