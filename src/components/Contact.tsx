import { MapPin, Phone } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import WhatsAppButton from "./WhatsAppButton";
import {
  ADDRESS,
  PHONE_DISPLAY,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  WHATSAPP_MESSAGES,
  getWhatsAppUrl,
} from "@/lib/constants";

export default function Contact() {
  return (
    <section
      id="contato"
      className="floating-section"
      aria-labelledby="contact-heading"
    >
      <div className="floating-card p-6 sm:p-10 lg:p-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — information */}
          <div>
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-text-muted font-medium mb-4">
                <span className="w-8 h-px bg-stone-300" />
                Contato
              </span>
              <h2
                id="contact-heading"
                className="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal mb-5"
              >
                Venha nos conhecer.
              </h2>
              <p className="text-text-light text-base sm:text-lg leading-relaxed mb-10">
                Estamos prontos para receber você. Agende sua avaliação e venha
                conhecer a HD Odontologia.
              </p>
            </ScrollReveal>

            {/* Contact cards */}
            <div className="space-y-4">
              <ScrollReveal delay={100}>
                <div className="flex items-start gap-4 p-5 sm:p-6 rounded-xl bg-cream/60 hover:bg-cream transition-colors duration-300">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white text-stone shrink-0">
                    <MapPin size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal text-sm mb-1">
                      Endereço
                    </h3>
                    <p className="text-text-light text-sm leading-relaxed">
                      {ADDRESS.street}
                      <br />
                      {ADDRESS.neighborhood}
                      <br />
                      {ADDRESS.city} — {ADDRESS.state}
                      <br />
                      <span className="text-text-muted">{ADDRESS.zip}</span>
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <a
                  href={getWhatsAppUrl(WHATSAPP_MESSAGES.default)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-5 sm:p-6 rounded-xl bg-cream/60 hover:bg-cream transition-colors duration-300 group"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white text-stone group-hover:text-accent shrink-0 transition-colors duration-300">
                    <Phone size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal text-sm mb-1">
                      WhatsApp
                    </h3>
                    <p className="text-text-light text-sm">{PHONE_DISPLAY}</p>
                  </div>
                </a>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-5 sm:p-6 rounded-xl bg-cream/60 hover:bg-cream transition-colors duration-300 group"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white text-stone group-hover:text-accent shrink-0 transition-colors duration-300">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal text-sm mb-1">
                      Instagram
                    </h3>
                    <p className="text-text-light text-sm">
                      {INSTAGRAM_HANDLE}
                    </p>
                  </div>
                </a>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={400}>
              <div className="mt-8">
                <WhatsAppButton
                  message={WHATSAPP_MESSAGES.default}
                  variant="primary"
                  size="lg"
                  icon
                >
                  Agendar avaliação
                </WhatsAppButton>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — map placeholder */}
          <ScrollReveal variant="right">
            <div className="relative h-full min-h-[400px] lg:min-h-0">
              <div className="image-placeholder w-full h-full min-h-[400px] rounded-2xl lg:rounded-3xl shadow-soft">
                {/* Map pin indicator */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-elevated">
                      <MapPin size={20} className="text-accent" />
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2.5 shadow-elevated text-center">
                      <p className="text-xs font-medium text-charcoal">
                        HD Odontologia
                      </p>
                      <p className="text-[10px] text-text-muted mt-0.5">
                        {ADDRESS.neighborhood} — {ADDRESS.city}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
