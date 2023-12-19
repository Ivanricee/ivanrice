import {
  CLOUDINARY_HIGH,
  CLOUDINARY_LOW,
  CLOUDINARY_URL,
  CLOUDINARY_VIDEO,
  CLOUDINARY_VIDEO_URL,
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
  media: string[];
  slide: boolean;
}
export default function CarouselPortfolio({ media, slide }: Props) {
  const getMediaLowQSrc = () => {
    const firstMedia = media[0];
    const isImg = firstMedia.endsWith("webp");
    if (isImg) return `${CLOUDINARY_URL}${CLOUDINARY_LOW}${media[0]}`;
    return `${CLOUDINARY_VIDEO_URL}${CLOUDINARY_VIDEO}${media[0]}`;
  };

  const mediaLowQSrc = getMediaLowQSrc();
  const [imageList, setImageList] = useState<string[] | null>(null);
  const [loadAnimate, setLoadAnimate] = useState(false);

  useEffect(() => {
    let loadedMedia = 0;
    let HQMedia: string[] = [];
    const getMediaHighSrc = (url: string) => {
      const isImg = url.endsWith("webp");
      if (isImg) return `${CLOUDINARY_URL}${CLOUDINARY_HIGH}${url}`;
      return `${CLOUDINARY_VIDEO_URL}${CLOUDINARY_VIDEO}${url}`;
    };
    media.forEach((url, index) => {
      const isImg = url.endsWith("webp");
      if (isImg) {
        const img = new Image();
        img.src = getMediaHighSrc(url);
        img.onload = () => {
          loadedMedia++;
          HQMedia[index] = img.src;
          if (loadedMedia === media.length) {
            setLoadAnimate(true);
            setImageList(HQMedia);
          }
        };
      } else {
        fetch(getMediaHighSrc(url))
          .then((response) => response.blob())
          .then((blob) => {
            loadedMedia++;
            HQMedia[index] = URL.createObjectURL(blob);
            if (loadedMedia === media.length) {
              setLoadAnimate(true);
              setImageList(HQMedia);
            }
          });
      }
    });
  }, []);

  return (
    <div className="h-full ">
      <div
        className={`text-center w-full h-full flex absolute justify-center items-center ${
          loadAnimate ? "animate-fadeOut" : ""
        }`}
      >
        <img
          src={mediaLowQSrc}
          alt="carousel image"
          className={`w-full h-full object-contain absolute rounded-2xl `}
        />
        <div role="status">
          <svg
            aria-hidden="true"
            className="inline w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300 opacity-40"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>

      {imageList && imageList.length > 0 && (
        <Carousel theme={theme} slide={slide} pauseOnHover={true}>
          {imageList?.map((url) => {
            if (url.endsWith("webp"))
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

            return (
              <video
                key={url}
                src={url}
                className={`w-full h-full object-contain absolute rounded-2xl ${
                  loadAnimate ? "animate-fadeIn" : ""
                }`}
                autoPlay
                loop
                muted
                playsInline
                controls
              />
            );
          })}
        </Carousel>
      )}
    </div>
  );
}
