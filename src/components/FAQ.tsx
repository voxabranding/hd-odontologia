"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { PHONE_DISPLAY, INSTAGRAM_HANDLE, ADDRESS } from "@/lib/constants";

const faqs = [
  {
    question: "Como agendar uma avaliação?",
    answer: `Você pode agendar sua avaliação diretamente pelo WhatsApp, no número ${PHONE_DISPLAY}. Nossa equipe vai orientar sobre os próximos passos e responder suas dúvidas iniciais.`,
  },
  {
    question: "Vocês atendem pacientes com medo de dentista?",
    answer:
      "Sim. Acolhimento e escuta fazem parte do nosso atendimento desde o primeiro momento. Muitos dos nossos pacientes chegaram com histórias de medo ou experiências negativas — e encontraram na HD Odontologia um ambiente de cuidado e tranquilidade. Cada etapa é explicada com transparência, respeitando o seu tempo.",
  },
  {
    question: "Como funciona a avaliação para implantes?",
    answer:
      "A avaliação é o primeiro passo. Nela, o Dr. Hermes Dário analisa o seu caso de forma individualizada, considerando sua saúde bucal, necessidades e expectativas. A partir dessa avaliação, é possível definir o melhor plano de tratamento para você. Para mais detalhes, entre em contato pelo WhatsApp.",
  },
  {
    question: "Quais tratamentos a HD Odontologia realiza?",
    answer:
      "A HD Odontologia atua em implantes dentários, próteses, prótese protocolo, dentes fixos, lentes de contato dental, facetas, aparelhos ortodônticos, aparelho invisível, estética odontológica e prevenção e saúde bucal. Para saber qual tratamento é indicado para o seu caso, agende uma avaliação.",
  },
  {
    question: "Como chegar até a clínica?",
    answer: `A HD Odontologia fica na ${ADDRESS.street}, no bairro ${ADDRESS.neighborhood}, em ${ADDRESS.city} — ${ADDRESS.state}. Para facilitar, entre em contato pelo WhatsApp e nossa equipe pode enviar a localização exata.`,
  },
  {
    question: "Como acompanhar a HD Odontologia nas redes sociais?",
    answer: `Você pode acompanhar nosso trabalho, casos e conteúdos sobre saúde bucal pelo Instagram ${INSTAGRAM_HANDLE}. Lá compartilhamos informações sobre tratamentos, resultados e o dia a dia da clínica.`,
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-border/60 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 sm:py-6 text-left group cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="font-heading text-base sm:text-lg font-medium text-charcoal pr-4 group-hover:text-accent-dark transition-colors duration-300">
          {question}
        </span>
        <ChevronDown
          size={18}
          className={`text-text-muted shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div className={`faq-content ${isOpen ? "open" : ""}`}>
        <div>
          <p className="text-text-light text-sm sm:text-base leading-relaxed pb-5 sm:pb-6 pr-8">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="floating-section" aria-labelledby="faq-heading">
      <div className="floating-card p-6 sm:p-10 lg:p-16">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left — header */}
          <div className="lg:col-span-4">
            <ScrollReveal>
              <div className="lg:sticky lg:top-28">
                <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-text-muted font-medium mb-4">
                  <span className="w-8 h-px bg-stone-300" />
                  Dúvidas
                </span>
                <h2
                  id="faq-heading"
                  className="font-heading text-3xl sm:text-4xl font-medium text-charcoal mb-5"
                >
                  Perguntas frequentes
                </h2>
                <p className="text-text-light text-base leading-relaxed">
                  Reunimos as principais dúvidas de quem está considerando
                  iniciar um tratamento. Se a sua não estiver aqui, fale com
                  nossa equipe pelo WhatsApp.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — accordion */}
          <div className="lg:col-span-8">
            <ScrollReveal delay={150}>
              <div className="bg-cream/50 rounded-2xl p-6 sm:p-8 lg:p-10 border border-sand/40">
                {faqs.map((faq, index) => (
                  <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === index}
                    onToggle={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                  />
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
