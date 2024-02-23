type FixedHeader = {
  headerStatic: HTMLElement;
  headerFixed: HTMLElement;
};
export function fixedHeader({ headerStatic, headerFixed }: FixedHeader) {
  const headerTop = 130;
  const borderHeight = 24;
  if (!headerStatic || !headerFixed) return 0;
  const scrollPosition = window.scrollY;
  if (scrollPosition >= headerTop + borderHeight) {
    headerStatic.classList.remove("block");
    headerStatic.classList.add("hidden");
    headerFixed.classList.remove("hidden");
    headerFixed.classList.add("block");
  } else {
    headerFixed.classList.remove("block");
    headerFixed.classList.add("hidden");
    headerStatic.classList.remove("hidden");
    headerStatic.classList.add("block");
  }
}

type MenuRoutingObserver = {
  navItems: NodeListOf<Element>;
  sections: NodeListOf<Element>;
};
export function menuRoutingObserver({
  navItems,
  sections,
}: MenuRoutingObserver) {
  const IObserver = new IntersectionObserver(callbackObserver, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  function callbackObserver(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navItems.forEach((item) => {
          if (item.getAttribute("aria-label") === entry.target.id) {
            item.classList.add("bg-green-lime-500/80");
            item.classList.add("text-american-blue-800");
          } else {
            item.classList.remove("bg-green-lime-500/80");
            item.classList.remove("text-american-blue-800");
          }
        });
      }
    });
  }
  sections.forEach((section) => {
    IObserver.observe(section);
  });
}
