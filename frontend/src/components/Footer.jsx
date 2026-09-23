import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Instagram, Send, MessageCircle, X } from "lucide-react";
import { NAV_LINKS, scrollToId, waLink, WA_DEFAULT_MSG, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import { EASE } from "@/components/Reveal";

export const Footer = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const year = new Date().getFullYear();

  return (
    <footer data-testid="site-footer" className="bg-navy-deep text-white/70">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-navy">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M5.5 0h3v5.5H14v3H8.5V14h-3V8.5H0v-3h5.5V0z" fill="currentColor" />
                </svg>
              </span>
              <span className="font-display text-2xl font-semibold tracking-wide text-white">
                GAISAR
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              Демо-шаблон сайта частного медицинского центра. Все данные на
              странице — демонстрационные.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                data-testid="footer-social-instagram"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-all duration-300 hover:border-teal hover:bg-teal hover:text-white"
              >
                <Instagram size={16} />
              </a>
              <a
                data-testid="footer-social-telegram"
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-all duration-300 hover:border-teal hover:bg-teal hover:text-white"
              >
                <Send size={16} />
              </a>
              <a
                data-testid="footer-social-whatsapp"
                href={waLink(WA_DEFAULT_MSG)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-all duration-300 hover:border-teal hover:bg-teal hover:text-white"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
              Навигация
            </h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.id}>
                  <button
                    data-testid={`footer-nav-link-${l.id}`}
                    onClick={() => scrollToId(l.id)}
                    className="text-sm text-white/60 transition-colors hover:text-teal-light"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
              Контакты
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              <li>ЖК Alma City 5, г. Алматы</li>
              <li>
                <a
                  data-testid="footer-phone-link"
                  href={PHONE_TEL}
                  className="transition-colors hover:text-teal-light"
                >
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>Ежедневно с 08:00 до 20:00</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
              Документы
            </h3>
            <ul className="mt-5 space-y-3">
              <li>
                <button
                  data-testid="privacy-policy-button"
                  onClick={() => setPrivacyOpen(true)}
                  className="text-sm text-white/60 transition-colors hover:text-teal-light"
                >
                  Политика конфиденциальности
                </button>
              </li>
              <li>
                <button
                  data-testid="footer-consent-button"
                  onClick={() => setPrivacyOpen(true)}
                  className="text-sm text-white/40 transition-colors hover:text-teal-light"
                >
                  Согласие на обработку данных
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row">
          <p>© {year} GAISAR. Демо-шаблон.</p>
          <p>Не является публичной офертой</p>
        </div>
      </div>

      <AnimatePresence>
        {privacyOpen && (
          <motion.div
            data-testid="privacy-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-navy/60 p-4 backdrop-blur-sm"
            onClick={() => setPrivacyOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.97 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="relative max-h-[80vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                data-testid="privacy-modal-close"
                onClick={() => setPrivacyOpen(false)}
                aria-label="Закрыть"
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-line text-steel transition-colors hover:text-navy"
              >
                <X size={16} />
              </button>
              <h3 className="font-display text-2xl font-semibold text-navy">
                Политика конфиденциальности
              </h3>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-steel">
                <p>
                  Это демонстрационный текст для шаблона сайта. Здесь будет
                  размещена политика конфиденциальности вашей клиники: какие
                  данные собираются, цели обработки, порядок хранения и права
                  пациентов.
                </p>
                <p>
                  Форма записи на сайте не отправляет данные на сервер —
                  заявка формируется в виде сообщения WhatsApp на стороне
                  вашего устройства.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};
