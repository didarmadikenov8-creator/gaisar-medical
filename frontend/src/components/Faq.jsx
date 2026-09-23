import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal, Eyebrow, EASE } from "@/components/Reveal";

const FAQS = [
  {
    q: "Как записаться на приём?",
    a: "Заполните форму записи на сайте — заявка автоматически откроется в WhatsApp, и администратор подтвердит время. Также можно позвонить по телефону или написать нам напрямую в WhatsApp.",
  },
  {
    q: "Нужно ли направление?",
    a: "Для большинства консультаций направление не требуется. Если для приёма у конкретного специалиста оно всё-таки нужно, администратор подскажет при записи.",
  },
  {
    q: "Можно ли записаться через WhatsApp?",
    a: "Да. Нажмите на кнопку WhatsApp в любом разделе сайта — чат откроется с готовым сообщением, останется только его отправить.",
  },
  {
    q: "Какие способы оплаты доступны?",
    a: "В демо-версии шаблона указаны базовые способы: наличные и банковская карта. Актуальный перечень способов оплаты уточняйте у администратора.",
  },
  {
    q: "Как подготовиться к приёму?",
    a: "Возьмите с собой документ и результаты предыдущих обследований, если они есть. Приходите на 10–15 минут раньше — администратор поможет заполнить документы.",
  },
];

export const Faq = () => {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="faq"
      data-testid="faq-section"
      className="border-y border-line bg-white py-16 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <Reveal>
            <div className="flex justify-center">
              <Eyebrow>FAQ</Eyebrow>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-3xl font-medium leading-tight tracking-tight text-navy sm:text-4xl lg:text-5xl">
              Частые вопросы
            </h2>
          </Reveal>
        </div>

        <div className="border-t border-line">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={0.05 * i}>
                <div
                  className="border-b border-line"
                  data-testid={`faq-item-${i}`}
                >
                  <button
                    data-testid={`faq-toggle-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                  >
                    <span className="text-base font-semibold text-navy sm:text-lg">
                      {f.q}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "rotate-45 border-teal bg-teal text-white"
                          : "border-line text-navy"
                      }`}
                    >
                      <Plus size={16} />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <p className="pb-7 pr-12 text-sm leading-relaxed text-steel sm:text-base">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
