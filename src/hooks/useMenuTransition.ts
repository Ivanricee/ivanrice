import { useEffect, useRef } from "react";
import type { MutableRefObject } from "react";

export default function useMenuTransition(): [
  MutableRefObject<HTMLUListElement | null>,
  MutableRefObject<HTMLDivElement | null>
] {
  const liListRef = useRef<HTMLUListElement | null>(null);
  const backdropMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (liListRef.current && backdropMenuRef.current) {
      const listItems = Array.from(liListRef.current.children);
      const backdropMenu = backdropMenuRef.current;

      const firstListItem = listItems[0];
      const { left, top, width, height } =
        firstListItem.getBoundingClientRect();

      const placeBackdrop = ({
        backdropMenu,
        left,
        top,
        width,
        height,
      }: any) => {
        backdropMenu.style.setProperty("--left", `${left}px`);
        backdropMenu.style.setProperty("--top", `${top}px`);
        backdropMenu.style.setProperty("--width", `${width}px`);
        backdropMenu.style.setProperty("--height", `${height}px`);
      };

      placeBackdrop({ backdropMenu, left, top, width, height });

      const mouseLeaveHandlers: { [key: string]: () => void } = {};

      listItems.forEach((item, index) => {
        const mouseEnterHandler = ({
          target,
        }: {
          target: EventTarget | null;
        }) => {
          const { left, top, width, height } = (
            target as Element
          ).getBoundingClientRect();
          placeBackdrop({ backdropMenu, left, top, width, height });
          backdropMenu.style.opacity = "1";

          const mouseLeaveHandler = () => {
            backdropMenu.style.opacity = "0";
          };

          item.addEventListener("mouseleave", mouseLeaveHandler);
          mouseLeaveHandlers[index] = mouseLeaveHandler;
        };

        item.addEventListener("mouseenter", mouseEnterHandler);

        return () => {
          item.removeEventListener("mouseenter", mouseEnterHandler);
          if (mouseLeaveHandlers[index]) {
            item.removeEventListener("mouseleave", mouseLeaveHandlers[index]);
          }
        };
      });
    }
  }, []);

  return [liListRef, backdropMenuRef];
}
