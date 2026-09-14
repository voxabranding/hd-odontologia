import { Heart, Smile, Shield, Utensils } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import WhatsAppButton from "./WhatsAppButton";
import { WHATSAPP_MESSAGES } from "@/lib/constants";

const benefits = [
  {
    icon: Smile,
    title: "Segurança para sorrir",
    description: "Sem preocupações ao conversar, rir ou se expressar.",
  },
  {
    icon: Utensils,
    title: "Conforto para se alimentar",
    description: "Volte a comer os alimentos que você gosta, com tranquilidade.",
  },
  {
    icon: Heart,
    title: "Autoestima renovada",
    description: "Um sorriso que reflete como você se sente por dentro.",
  },
  {
    icon: Shield,
    title: "Qualidade de vida",
    description: "Saúde bucal que impacta positivamente o seu dia a dia.",
  },
];

export default function ImplantsHighlight() {
  return (
    <section className="floating-section" aria-labelledby="implants-heading">
      <div className="floating-card p-6 sm:p-10 lg:p-16 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — large media placeholder */}
          <ScrollReveal variant="left">
            <div className="relative">
              <div className="image-placeholder w-full aspect-[4/5] sm:aspect-[3/4] rounded-2xl lg:rounded-3xl shadow-elevated" />

              {/* Decorative floating element */}
              <div
                className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 w-32 h-32 lg:w-40 lg:h-40 rounded-2xl bg-sand-light/80 -z-10"
              />
              <div
                className="absolute -top-3 -left-3 lg:-top-5 lg:-left-5 w-20 h-20 lg:w-24 lg:h-24 rounded-xl bg-accent/5 -z-10"
              />
            </div>
          </ScrollReveal>

          {/* Right — content */}
          <div>
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-text-muted font-medium mb-4">
                <span className="w-8 h-px bg-stone-300" />
                Implantes & Dentes Fixos
              </span>
              <h2
                id="implants-heading"
                className="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal mb-6 leading-tight"
              >
                Voltar a sorrir é também voltar a viver com liberdade.
              </h2>
              <p className="text-text-light text-base sm:text-lg leading-relaxed mb-10 max-w-lg">
                Para quem convive com a insegurança de dentes ausentes ou
                próteses desconfortáveis, os implantes dentários representam uma
                nova possibilidade — de conforto, confiança e qualidade de vida.
              </p>
            </ScrollReveal>

            {/* Benefits grid */}
            <div className="grid sm:grid-cols-2 gap-5 mb-10">
              {benefits.map((benefit, index) => (
                <ScrollReveal key={benefit.title} delay={index * 100}>
                  <div className="flex items-start gap-3.5 group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-cream text-stone group-hover:text-charcoal group-hover:bg-sand-light transition-colors duration-300 shrink-0 mt-0.5">
                      <benefit.icon size={18} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-medium text-charcoal text-sm mb-0.5">
                        {benefit.title}
                      </h3>
                      <p className="text-text-muted text-xs leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={400}>
              <WhatsAppButton
                message={WHATSAPP_MESSAGES.implants}
                variant="primary"
                size="md"
                icon
              >
                Quero saber mais
              </WhatsAppButton>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
