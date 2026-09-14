import ScrollReveal from "./ScrollReveal";
import WhatsAppButton from "./WhatsAppButton";
import { WHATSAPP_MESSAGES } from "@/lib/constants";

export default function Transformations() {
  return (
    <section
      id="transformacoes"
      className="floating-section"
      aria-labelledby="transformations-heading"
    >
      <div className="floating-card p-6 sm:p-10 lg:p-16">
        {/* Section header */}
        <ScrollReveal>
          <div className="max-w-2xl mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-text-muted font-medium mb-4">
              <span className="w-8 h-px bg-stone-300" />
              Transformações
            </span>
            <h2
              id="transformations-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal mb-5"
            >
              Histórias reais.
              <br />
              Sorrisos reais.
            </h2>
            <p className="text-text-light text-base sm:text-lg leading-relaxed">
              Cada tratamento na HD Odontologia carrega uma história de
              transformação — não apenas estética, mas de autoestima,
              confiança e qualidade de vida.
            </p>
          </div>
        </ScrollReveal>

        {/* Cases grid — placeholders for real content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {[1, 2, 3].map((item) => (
            <ScrollReveal key={item} delay={item * 100}>
              <div className="group bg-cream/50 rounded-2xl overflow-hidden border border-sand/40 hover:bg-white hover:shadow-card transition-all duration-500 hover:-translate-y-1">
                {/* Before/After placeholder */}
                <div className="relative">
                  <div className="image-placeholder w-full aspect-[4/3]" />
                  <div className="absolute bottom-3 left-3 flex gap-1.5">
                    <span className="px-2.5 py-1 text-[10px] tracking-wider uppercase font-medium bg-white/90 backdrop-blur-sm rounded-md text-text-light">
                      Antes
                    </span>
                    <span className="px-2.5 py-1 text-[10px] tracking-wider uppercase font-medium bg-charcoal/80 backdrop-blur-sm rounded-md text-cream">
                      Depois
                    </span>
                  </div>
                </div>

                {/* Testimonial placeholder */}
                <div className="p-6 sm:p-7">
                  <div className="w-full h-px bg-border/60 mb-5" />
                  <p className="text-text-muted text-sm leading-relaxed italic mb-4">
                    &ldquo;Espaço reservado para depoimento real do
                    paciente.&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="image-placeholder w-9 h-9 rounded-full shrink-0" />
                    <div>
                      <p className="text-xs font-medium text-charcoal">
                        Nome do paciente
                      </p>
                      <p className="text-[11px] text-text-muted">
                        Tratamento realizado
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Video placeholder */}
        <ScrollReveal>
          <div className="bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-soft mb-12">
            <div className="image-placeholder w-full aspect-video relative">
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-elevated">
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7 text-charcoal ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-text-muted text-sm">
                Espaço reservado para vídeo de depoimento ou caso clínico real.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal>
          <div className="text-center">
            <p className="text-text-light text-base mb-6">
              Quer saber como a HD Odontologia pode ajudar no seu caso?
            </p>
            <WhatsAppButton
              message={WHATSAPP_MESSAGES.default}
              variant="primary"
              size="lg"
              icon
            >
              Agendar minha avaliação
            </WhatsAppButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
