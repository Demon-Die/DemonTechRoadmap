"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.intersectionRatio >= 0.25);
      },
      {
        threshold: [0, 0.25],
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);


  return (
    <div
      ref={ref}
      className={`
        transition-all duration-750 ease-in
        ${
          visible ? "opacity-100 translate-y-0" : 
            scrollDirection === "down" ? "opacity-0 translate-y-6" : "opacity-0 -translate-y-6"
        } 
      `}
    >
      {children}
    </div>
  );
}