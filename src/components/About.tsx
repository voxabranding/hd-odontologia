import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { DOCTOR_NAME, CRO } from "@/lib/constants";

export default function About() {
  return (
    <section
      id="sobre"
      className="floating-section"
      aria-labelledby="about-heading"
    >
      <div className="floating-card p-6 sm:p-10 lg:p-16 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — doctor photo */}
          <ScrollReveal variant="left">
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Decorative backdrop */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-[2rem] bg-sand-light/70 -z-10" />

              {/* Photo */}
              <div className="relative w-full aspect-[3/4] rounded-2xl lg:rounded-3xl shadow-elevated overflow-hidden border border-black/[0.04]">
                <Image
                  src="/images/dr-hermes-hero.webp"
                  alt="Dr. Hermes Dário — HD Odontologia"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 90vw, 450px"
                />
              </div>

              {/* Floating CRO badge */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-5 bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl px-5 py-3 sm:px-6 sm:py-4 shadow-float border border-black/[0.04]">
                <p className="text-xs text-text-muted mb-0.5">Registro</p>
                <p className="font-heading text-base sm:text-lg font-semibold text-charcoal">
                  {CRO}
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — content */}
          <div>
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-text-muted font-medium mb-4">
                <span className="w-8 h-px bg-stone-300" />
                Sobre
              </span>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2
                id="about-heading"
                className="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal mb-4 leading-tight"
              >
                {DOCTOR_NAME.replace("Dr. ", "")}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-text-muted text-sm tracking-wide font-medium mb-6">
                {CRO} · Atuando desde 2006
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p className="text-text-light text-base sm:text-lg leading-relaxed mb-5">
                São mais de 18 anos de dedicação à odontologia, com uma trajetória
                construída sobre a confiança de cada paciente atendido. À frente
                da HD Odontologia, o Dr. Hermes Dário combina experiência técnica
                com uma abordagem humanizada, onde o cuidado começa na escuta.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <p className="text-text-light text-base sm:text-lg leading-relaxed mb-5">
                Com mais de 25 mil pacientes tratados, sua atuação é reconhecida
                em Serra Talhada e região, especialmente nas áreas de implantes
                dentários, próteses e reabilitação oral. Cada tratamento é
                planejado de forma individual, respeitando as necessidades e o
                tempo de cada pessoa.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <p className="text-text-light text-base sm:text-lg leading-relaxed mb-8">
                A HD Odontologia nasceu da crença de que um bom tratamento vai
                além da técnica — passa pela confiança, pela transparência e
                pelo compromisso de cuidar de verdade.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={600}>
              <div className="flex items-center gap-6">
                <div className="flex flex-col">
                  <span className="font-heading text-2xl font-semibold text-charcoal">
                    +25 mil
                  </span>
                  <span className="text-xs text-text-muted">
                    pacientes tratados
                  </span>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="flex flex-col">
                  <span className="font-heading text-2xl font-semibold text-charcoal">
                    2006
                  </span>
                  <span className="text-xs text-text-muted">
                    início da atuação
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
