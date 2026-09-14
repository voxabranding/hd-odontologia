import ScrollReveal from "./ScrollReveal";
import WhatsAppButton from "./WhatsAppButton";
import { WHATSAPP_MESSAGES } from "@/lib/constants";

const primaryServices = [
  {
    title: "Implantes Dentários",
    description:
      "Recupere a função e a estética dos seus dentes com segurança e planejamento individualizado.",
    message: WHATSAPP_MESSAGES.implants,
  },
  {
    title: "Dentes Fixos",
    description:
      "Volte a sorrir e se alimentar com conforto. Soluções fixas que devolvem qualidade de vida.",
    message: WHATSAPP_MESSAGES.protocol,
  },
  {
    title: "Prótese Protocolo",
    description:
      "Reabilitação completa para quem busca segurança e naturalidade no sorriso.",
    message: WHATSAPP_MESSAGES.protocol,
  },
];

const secondaryServices = [
  {
    title: "Lentes de Contato Dental",
    description: "Transformação estética com laminados ultrafinos e resultado natural.",
    message: WHATSAPP_MESSAGES.aesthetics,
  },
  {
    title: "Facetas",
    description: "Correção de forma, cor e alinhamento para um sorriso harmônico.",
    message: WHATSAPP_MESSAGES.aesthetics,
  },
  {
    title: "Aparelhos",
    description: "Tratamento ortodôntico para alinhamento e saúde dos dentes.",
    message: WHATSAPP_MESSAGES.aligners,
  },
  {
    title: "Aparelho Invisível",
    description: "Alinhamento discreto, confortável e eficiente para o seu dia a dia.",
    message: WHATSAPP_MESSAGES.aligners,
  },
  {
    title: "Estética Odontológica",
    description: "Procedimentos que valorizam a beleza natural do seu sorriso.",
    message: WHATSAPP_MESSAGES.aesthetics,
  },
  {
    title: "Prevenção e Saúde Bucal",
    description: "Cuidado contínuo para manter a saúde e o bem-estar da sua boca.",
    message: WHATSAPP_MESSAGES.treatments,
  },
];

export default function Specialties() {
  return (
    <section
      id="tratamentos"
      className="floating-section"
      aria-labelledby="specialties-heading"
    >
      <div className="floating-card p-6 sm:p-10 lg:p-16">
        {/* Section header */}
        <ScrollReveal>
          <div className="max-w-2xl mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-text-muted font-medium mb-4">
              <span className="w-8 h-px bg-stone-300" />
              Tratamentos
            </span>
            <h2
              id="specialties-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal mb-5"
            >
              Cada sorriso tem
              <br />
              uma história.
            </h2>
            <p className="text-text-light text-base sm:text-lg leading-relaxed">
              Conheça os tratamentos que já transformaram a vida de mais de 25
              mil pacientes em Serra Talhada e região.
            </p>
          </div>
        </ScrollReveal>

        {/* Primary services — large editorial cards */}
        <div className="grid lg:grid-cols-3 gap-5 lg:gap-6 mb-8 lg:mb-10">
          {primaryServices.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 100}>
              <div className="group relative bg-cream/60 rounded-2xl p-7 sm:p-9 border border-sand/40 hover:bg-white hover:shadow-card hover:border-transparent transition-all duration-500 hover:-translate-y-1 h-full flex flex-col">
                {/* Image placeholder */}
                <div className="image-placeholder w-full aspect-[16/10] rounded-xl mb-6" />

                {/* Content */}
                <h3 className="font-heading text-xl sm:text-2xl font-semibold text-charcoal mb-3">
                  {service.title}
                </h3>
                <p className="text-text-light text-sm leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>

                <WhatsAppButton
                  message={service.message}
                  variant="ghost"
                  size="sm"
                  className="self-start !px-0 !text-charcoal hover:!text-accent-dark group-hover:!translate-x-1 font-medium"
                >
                  Saber mais →
                </WhatsAppButton>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-accent/0 group-hover:bg-accent/40 rounded-full transition-all duration-500" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Secondary services — compact grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {secondaryServices.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 80}>
              <a
                href={`https://wa.me/5587988585207?text=${encodeURIComponent(service.message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-5 sm:p-6 rounded-xl bg-cream/40 hover:bg-white hover:shadow-soft border border-sand/30 transition-all duration-400"
              >
                <div className="w-1 h-8 rounded-full bg-sand group-hover:bg-accent transition-colors duration-400 mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-heading text-base sm:text-lg font-semibold text-charcoal mb-1 group-hover:text-accent-dark transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
