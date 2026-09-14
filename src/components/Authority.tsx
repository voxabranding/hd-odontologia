"use client";

import { useState, useRef, useEffect } from "react";
import { Award, Users, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { DOCTOR_NAME, CRO } from "@/lib/constants";

export default function Authority() {
  const stats = [
    {
      icon: Calendar,
      value: "Desde 2006",
      label: "cuidando de sorrisos em Serra Talhada",
    },
    {
      icon: Users,
      value: "+25 mil",
      label: "pacientes tratados com dedicação",
    },
    {
      icon: Award,
      value: DOCTOR_NAME,
      label: CRO,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Drag-to-scroll state for mouse / trackpad emulation
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);
  const hasMoved = useRef(false);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollPosition = container.scrollLeft;

    let closestIndex = 0;
    let minDistance = Infinity;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      const distance = Math.abs(card.offsetLeft - container.offsetLeft - scrollPosition);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  const scrollToIndex = (index: number) => {
    const target = cardRefs.current[index];
    if (target && scrollRef.current) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
      setActiveIndex(index);
    }
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    if (!scrollRef.current) return;
    isDragging.current = true;
    hasMoved.current = false;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    startScrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.3;
    if (Math.abs(walk) > 4) {
      hasMoved.current = true;
    }
    scrollRef.current.scrollLeft = startScrollLeft.current - walk;
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  const handleCardClick = (index: number) => {
    if (hasMoved.current) return;
    scrollToIndex(index);
  };

  return (
    <section className="floating-section" aria-label="Credenciais">
      <div className="floating-card p-4 sm:p-8 lg:p-12 overflow-hidden">
        {/* Mobile: Carousel showing 1 card + 50% of the next card | Desktop: 3-column Grid */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          className="flex sm:grid sm:grid-cols-3 gap-3 sm:gap-6 lg:gap-10 overflow-x-auto sm:overflow-visible snap-x snap-mandatory scroll-smooth scrollbar-none py-1 cursor-grab active:cursor-grabbing select-none"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
            touchAction: "pan-x pan-y",
          }}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              onClick={() => handleCardClick(index)}
              className="w-[68%] sm:w-auto shrink-0 snap-start"
            >
              <div className="relative group text-center sm:text-left p-5 sm:p-8 rounded-2xl bg-cream/70 sm:bg-transparent border border-sand/50 sm:border-transparent hover:bg-cream/90 transition-all duration-300 h-full flex flex-col items-center sm:items-start justify-center min-h-[175px] sm:min-h-0">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white sm:bg-sand-light text-stone shadow-soft sm:shadow-none mb-3 sm:mb-4">
                  <stat.icon size={20} strokeWidth={1.5} />
                </div>

                {/* Value */}
                <p className="font-heading text-lg sm:text-2xl font-semibold text-charcoal mb-1 leading-snug">
                  {stat.value}
                </p>

                {/* Label */}
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  {stat.label}
                </p>

                {/* Desktop bottom line accent */}
                <div className="hidden sm:block absolute bottom-0 left-6 sm:left-8 right-6 sm:right-8 h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Navigation Bar: Prev Arrow, Dots, Next Arrow */}
        <div className="flex sm:hidden justify-between items-center mt-3 pt-1 px-1">
          <button
            type="button"
            onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
            disabled={activeIndex === 0}
            className="p-1.5 text-stone hover:text-charcoal disabled:opacity-20 transition-opacity cursor-pointer"
            aria-label="Item anterior"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex items-center gap-1.5">
            {stats.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => scrollToIndex(index)}
                aria-label={`Ver credencial ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === index
                    ? "w-6 bg-accent"
                    : "w-1.5 bg-stone-300 hover:bg-stone-400"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollToIndex(Math.min(stats.length - 1, activeIndex + 1))}
            disabled={activeIndex === stats.length - 1}
            className="p-1.5 text-stone hover:text-charcoal disabled:opacity-20 transition-opacity cursor-pointer"
            aria-label="Próximo item"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
