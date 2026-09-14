"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  variant?: "up" | "left" | "right" | "scale";
  delay?: number;
  threshold?: number;
  stagger?: boolean;
}

export default function ScrollReveal({
  children,
  className = "",
  variant = "up",
  delay = 0,
  threshold = 0.15,
  stagger = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      element.classList.add("visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("visible");
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  const variantClass = {
    up: "reveal",
    left: "reveal-left",
    right: "reveal-right",
    scale: "reveal-scale",
  }[variant];

  const staggerClass = stagger ? "stagger" : "";

  return (
    <div
      ref={ref}
      className={`${variantClass} ${staggerClass} ${className}`}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  );
}
