"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="floating-section pt-20 sm:pt-24 lg:pt-28"
      aria-label="Página inicial"
    >
      <div className="floating-card relative overflow-hidden min-h-[580px] sm:min-h-[640px] lg:min-h-[680px] xl:min-h-[720px] flex flex-col justify-end p-6 sm:p-10 lg:p-16 bg-charcoal">
        {/* Background Image filling the entire hero */}
        <Image
          src="/images/dr-hermes-hero.webp"
          alt="Dr. Hermes Dário de Azevedo Junior — HD Odontologia"
          fill
          className="object-cover object-[center_6%] sm:object-[center_10%] lg:object-[70%_15%]"
          priority
          sizes="100vw"
        />

        {/* Mobile Gradient: darker at bottom for text contrast, clear at top for Dr. Hermes smile */}
        <div className="lg:hidden absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/85 via-48% to-transparent pointer-events-none" />

        {/* Desktop Gradients: left side scrim for editorial typography, Dr. Hermes clear on right */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 via-45% to-transparent to-75% pointer-events-none" />
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent pointer-events-none" />

        {/* Content on top of image */}
        <div
          className={`relative z-10 max-w-xl transition-all duration-700 delay-150 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Main heading — pure white */}
          <h1
            style={{ color: "#ffffff" }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] font-medium !text-white leading-[1.12] mb-3 sm:mb-5 drop-shadow-md"
          >
            Seu sorriso de volta.
            <span className="block mt-1 !text-white" style={{ color: "#ffffff" }}>
              Com segurança.
            </span>
          </h1>

          {/* Supporting text */}
          <p
            style={{ color: "rgba(255, 255, 255, 0.9)" }}
            className="!text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 max-w-lg drop-shadow-sm"
          >
            Há mais de 18 anos cuidando de sorrisos e transformando histórias em
            Serra Talhada. Experiência, cuidado e atenção em cada tratamento.
          </p>

          {/* Proof Strip */}
          <div className="flex items-center gap-3 pt-5 mt-6 border-t border-white/10 text-xs sm:text-sm text-stone-300 font-medium">
            <span>+25 mil pacientes atendidos</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>Dr. Hermes Dário</span>
          </div>
        </div>
      </div>
    </section>
  );
}
