"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [ratio, setRatio] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setRatio(entry.intersectionRatio);
      },
      {
        threshold: Array.from({ length: 21 }, (_, i) => i / 20),
      }
    );

    const el = ref.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="transition-opacity duration-150 ease-in-out"
      style={{
        opacity: ratio,
      }}
    >
      {children}
    </div>
  );
}