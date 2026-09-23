import { ArrowRight, MessageCircle } from "lucide-react";
import { waLink, WA_DEFAULT_MSG } from "@/lib/site";
import { useAppointment } from "@/context/AppointmentContext";
import { Reveal } from "@/components/Reveal";

export const CtaBand = () => {
  const { openModal } = useAppointment();

  return (
    <section data-testid="cta-section" className="py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-navy px-6 py-16 text-center sm:px-12 lg:py-24" data-testid="cta-band">
            <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -bottom-32 -right-16 h-96 w-96 rounded-full border border-teal/20" />
            <div className="pointer-events-none absolute right-[12%] top-[18%] h-24 w-24 rounded-full bg-teal/20 blur-2xl" />

            <h2 className="relative mx-auto max-w-2xl font-display text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Не откладывайте заботу о здоровье
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
              Оставьте заявку — администратор поможет подобрать специалиста и
              удобное время
            </p>
            <div className="relative mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                data-testid="cta-appointment-button"
                onClick={() => openModal()}
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-navy transition-all duration-300 hover:bg-teal hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-teal sm:w-auto"
              >
                Записаться на приём
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <a
                data-testid="cta-whatsapp-button"
                href={waLink(WA_DEFAULT_MSG)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full border border-white/25 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-teal hover:bg-teal focus:outline-none focus-visible:ring-2 focus-visible:ring-teal sm:w-auto"
              >
                <MessageCircle size={16} />
                Написать в WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
