import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { waLink, WA_DEFAULT_MSG, MAP_EMBED_SRC, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import { Reveal, Eyebrow } from "@/components/Reveal";

export const Contacts = () => (
  <section id="contacts" data-testid="contacts-section" className="pb-16 pt-4 sm:pb-24 lg:pb-32">
    <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
      <div className="lg:col-span-5">
        <Reveal>
          <Eyebrow>Контакты</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-5 font-display text-3xl font-medium leading-tight tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Мы рядом и на связи
          </h2>
        </Reveal>

        <div className="mt-10 space-y-6">
          <Reveal delay={0.1}>
            <div className="flex items-start gap-4" data-testid="contacts-address">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-light text-teal">
                <MapPin size={20} strokeWidth={1.8} />
              </span>
              <div>
                <p className="text-sm font-semibold text-navy">Адрес</p>
                <p className="mt-1 text-sm leading-relaxed text-steel">
                  ЖК Alma City 5, г. Алматы
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="flex items-start gap-4" data-testid="contacts-phone">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-light text-teal">
                <Phone size={20} strokeWidth={1.8} />
              </span>
              <div>
                <p className="text-sm font-semibold text-navy">Телефон</p>
                <a
                  href={PHONE_TEL}
                  data-testid="contacts-phone-link"
                  className="mt-1 block text-sm text-steel transition-colors hover:text-teal"
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.22}>
            <div className="flex items-start gap-4" data-testid="contacts-hours">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-light text-teal">
                <Clock size={20} strokeWidth={1.8} />
              </span>
              <div>
                <p className="text-sm font-semibold text-navy">График работы</p>
                <p className="mt-1 text-sm text-steel">
                  Ежедневно с 08:00 до 20:00
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.28}>
          <a
            data-testid="contacts-whatsapp-button"
            href={waLink(WA_DEFAULT_MSG)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-teal focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
          >
            <MessageCircle size={16} />
            Написать в WhatsApp
          </a>
        </Reveal>
      </div>

      <Reveal delay={0.15} className="lg:col-span-7">
        <div
          data-testid="contacts-map"
          className="h-[360px] overflow-hidden rounded-3xl border border-line shadow-lg shadow-navy/5 sm:h-[460px] lg:h-full lg:min-h-[480px]"
        >
          <iframe
            title="Карта — ЖК Alma City 5, Алматы"
            src={MAP_EMBED_SRC}
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            className="block h-full w-full"
          />
        </div>
      </Reveal>
    </div>
  </section>
);
