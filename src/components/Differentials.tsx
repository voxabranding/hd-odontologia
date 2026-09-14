import {
  CalendarCheck,
  Users,
  HeartPulse,
  ClipboardList,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const differentials = [
  {
    icon: CalendarCheck,
    title: "Experiência desde 2006",
    description:
      "Mais de 18 anos de prática clínica consolidada em Serra Talhada e região.",
  },
  {
    icon: Users,
    title: "+25 mil pacientes",
    description:
      "Uma trajetória construída sobre a confiança de milhares de pessoas.",
  },
  {
    icon: HeartPulse,
    title: "Atendimento humanizado",
    description:
      "Escuta atenta, acolhimento e respeito ao tempo de cada paciente.",
  },
  {
    icon: ClipboardList,
    title: "Planejamento personalizado",
    description:
      "Cada tratamento é pensado individualmente, com transparência em cada etapa.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança no tratamento",
    description:
      "Protocolos cuidadosos e comunicação clara para que você se sinta seguro.",
  },
  {
    icon: Sparkles,
    title: "Foco em qualidade de vida",
    description:
      "Tratamentos que vão além da estética — devolvem conforto e autoestima.",
  },
];

export default function Differentials() {
  return (
    <section className="floating-section" aria-labelledby="differentials-heading">
      <div className="floating-card p-6 sm:p-10 lg:p-16">
        {/* Section header — centered */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-text-muted font-medium mb-4 justify-center">
              <span className="w-8 h-px bg-stone-300" />
              Diferenciais
              <span className="w-8 h-px bg-stone-300" />
            </span>
            <h2
              id="differentials-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal mb-5"
            >
              Por que escolher a HD Odontologia
            </h2>
            <p className="text-text-light text-base sm:text-lg leading-relaxed">
              Pilares que sustentam nossa forma de cuidar de cada sorriso.
            </p>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {differentials.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 80}>
              <div className="group relative p-7 sm:p-8 rounded-2xl bg-cream/60 border border-sand/40 hover:bg-white hover:shadow-card hover:border-transparent transition-all duration-500 h-full">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white text-stone group-hover:text-charcoal group-hover:shadow-soft transition-all duration-400 mb-5">
                  <item.icon size={22} strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="font-heading text-lg font-semibold text-charcoal mb-2">
                  {item.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
