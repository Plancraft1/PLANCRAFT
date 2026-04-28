import { useLayoutEffect, useState } from "react";

export function useDataAttrObserver(
  attr: string,
  options?: IntersectionObserverInit,
  deps: any[] = []
) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useLayoutEffect(() => {
    const elements = document.querySelectorAll(`[${attr}]`);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          setIsIntersecting(entry.isIntersecting);
        }),
      options
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, deps);

  const reset = () => setIsIntersecting(false);

  return [isIntersecting, reset] as const;
}
