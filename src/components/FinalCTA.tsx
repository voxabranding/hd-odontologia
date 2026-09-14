import ScrollReveal from "./ScrollReveal";
import WhatsAppButton from "./WhatsAppButton";
import { WHATSAPP_MESSAGES } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section className="floating-section" aria-label="Agendar avaliação">
      <div className="floating-card-dark relative py-16 sm:py-24 lg:py-28 px-6 sm:px-10 lg:px-16 overflow-hidden">
        {/* Ambient lighting inside dark card */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(180, 154, 106, 0.4) 0%, transparent 60%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(180, 154, 106, 0.25) 0%, transparent 60%)",
            }}
          />
        </div>

        <div className="relative max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-stone font-medium mb-6 justify-center">
              <span className="w-8 h-px bg-stone-600" />
              HD Odontologia
              <span className="w-8 h-px bg-stone-600" />
            </span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2
              style={{ color: "#faf8f5" }}
              className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] font-medium !text-cream leading-tight mb-6"
            >
              Talvez o próximo capítulo da sua história comece com um sorriso.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-stone text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Converse com a equipe da HD Odontologia e descubra as
              possibilidades para o seu caso. Estamos aqui para ouvir você.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <WhatsAppButton
              message={WHATSAPP_MESSAGES.default}
              variant="secondary"
              size="lg"
              icon
            >
              Agendar minha avaliação
            </WhatsAppButton>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
