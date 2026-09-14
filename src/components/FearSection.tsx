import { HeartHandshake } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import WhatsAppButton from "./WhatsAppButton";
import { WHATSAPP_MESSAGES } from "@/lib/constants";

export default function FearSection() {
  return (
    <section className="floating-section" aria-labelledby="fear-heading">
      <div className="floating-card py-14 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-16 overflow-hidden">
        {/* Subtle warm background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-30"
            style={{
              background:
                "radial-gradient(circle, rgba(180, 154, 106, 0.08) 0%, transparent 60%)",
            }}
          />
        </div>

        <div className="relative max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-sand-light text-stone mb-8">
              <HeartHandshake size={26} strokeWidth={1.5} />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2
              id="fear-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-[2.8rem] font-medium text-charcoal mb-6 leading-tight"
            >
              Se o medo fez você adiar seu tratamento, talvez esteja na hora de tentar de um jeito diferente.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-text-light text-base sm:text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
              Muitos dos nossos pacientes chegaram com histórias parecidas:
              experiências negativas, receio da dor, anos adiando o cuidado com
              a saúde bucal. Na HD Odontologia, escuta e acolhimento fazem parte
              do tratamento desde o primeiro momento.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="text-text-light text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Cada etapa é explicada com transparência. O planejamento respeita o
              seu tempo. E o cuidado vai além do procedimento — porque
              confiança se constrói aos poucos.
            </p>
          </ScrollReveal>

          {/* Pillars */}
          <ScrollReveal delay={400}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-12 max-w-2xl mx-auto">
              {[
                "Acolhimento",
                "Escuta atenta",
                "Planejamento cuidadoso",
                "Segurança no processo",
              ].map((pillar) => (
                <div
                  key={pillar}
                  className="py-3.5 px-4 rounded-xl bg-cream/70 border border-sand/40 text-sm text-text-light font-medium"
                >
                  {pillar}
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={500}>
            <WhatsAppButton
              message={WHATSAPP_MESSAGES.fear}
              variant="primary"
              size="lg"
              icon
            >
              Quero conversar sobre meu caso
            </WhatsAppButton>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
