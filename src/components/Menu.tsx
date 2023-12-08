import useMenuTransition from "@/hooks/useMenuTransition";
import { useEffect, useRef } from "react";

interface Props {
  hasBackBtn: string | false;
  currentPath: string;
}
export default function Menu({ hasBackBtn, currentPath }: Props) {
  const [liListRef, backdropMenuRef] = useMenuTransition();

  let isPortfolio = currentPath.includes("/portfolio");
  let isAbout = currentPath.includes("/about");

  return (
    <>
      <nav className=" md:pb-4 pt-3 md:pt-7">
        <div className=" flex justify-between text-base md:text-2xl font-medium ">
          {hasBackBtn ? (
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center p-2 px-6 md:px-4 font-medium text-slate-500 rounded-lg bg-slate-50/50 hover:text-slate-900 hover:bg-slate-100/90 "
            >
              <svg
                className="h-4 w-4 md:w-6 md:h-6 text-slate-600 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 5H1m0 0 4 4M1 5l4-4"
                />
              </svg>
            </button>
          ) : (
            ""
          )}

          <ul
            className="flex gap-4 font-medium  w-full justify-end  z-10  [&>li>a]:p-2 [&>li>a]:px-3"
            ref={liListRef}
          >
            <li className={`${isAbout ? "underline" : ""}`}>
              <a href="#">About</a>
            </li>
            <li className={`${isPortfolio ? "underline" : ""}`}>
              <a href="#">Portfolio</a>
            </li>
          </ul>
        </div>
      </nav>
      <div
        id="menu-backddrop"
        ref={backdropMenuRef}
        className="absolute bg-slate-100/40 backdrop-blur-lg rounded
        translate-x-[var(--left)] translate-y-[var(--top)] left-0 top-0
        w-[var(--width)] h-[var(--height)] z-0 opacity-0
        transition-all duration-300 delay-75 ease-in-out"
      ></div>
    </>
  );
}
