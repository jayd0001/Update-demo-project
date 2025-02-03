import { useEffect, useRef } from "react";

export function useScrollable() {
  const ref = useRef<HTMLDivElement>(null!);
  const leftArrow = useRef<HTMLButtonElement>(null!);
  const rightArrow = useRef<HTMLButtonElement>(null!);

  const scroll = (x: number) => {
    if (!ref.current) return;
    const left = (ref.current.clientWidth / 2) * x;
    ref.current.scrollBy({ left, behavior: "smooth" });
  };

  const updateScrollButtons = () => {
    if (!ref.current || !leftArrow.current || !rightArrow.current) return;

    const target = ref.current;
    leftArrow.current.style.display = target.scrollLeft > 10 ? "block" : "none";
    rightArrow.current.style.display =
      target.scrollLeft + target.clientWidth < target.scrollWidth - 10 ? "block" : "none";
  };

  useEffect(() => {
    updateScrollButtons();
  }, []);

  return { ref, leftArrow, rightArrow, scroll, updateScrollButtons };
}
