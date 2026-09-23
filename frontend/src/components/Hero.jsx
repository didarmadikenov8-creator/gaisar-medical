import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CalendarCheck } from "lucide-react";
import { scrollToId } from "@/lib/site";
import { useAppointment } from "@/context/AppointmentContext";
import { EASE } from "@/components/Reveal";

const HERO_IMG =
  "https://images.pexels.com/photos/15962798/pexels-photo-15962798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1100&w=800";
const HERO_INSET_IMG =
  "https://images.unsplash.com/photo-1772751541531-e084e8f56630?crop=entropy&cs=srgb&fm=jpg&q=85";

const lineWrap = "block overflow-hidden pb-[0.14em] -mb-[0.14em]";
const lineInner = (i) => ({
  initial: { y: "112%" },
  animate: { y: "0%" },
  transition: { duration: 1, ease: EASE, delay: 0.15 + i * 0.13 },
});

export const Hero = () => {
  const { openModal } = useAppointment();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const badgeY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section
      id="home"
      ref={ref}
      data-testid="hero-section"
      className="relative overflow-hidden pt-28 lg:min-h-[100vh] lg:items-center lg:pt-0"
    >
      {/* decorative background */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full border border-teal/10" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-[360px] w-[360px] rounded-full bg-teal-light/40 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:py-24 lg:px-8">
        {/* Left */}
        <div className="lg:col-span-6 xl:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-teal"
          >
            <span className="h-px w-8 bg-teal" />
            Современная медицина рядом с вами
          </motion.div>

          <h1 className="font-display text-4xl font-medium leading-[1.06] tracking-tight text-navy sm:text-5xl lg:text-[64px]">
            <span className={lineWrap}>
              <motion.span className="block" {...lineInner(0)}>
                Забота о вашем
              </motion.span>
            </span>
            <span className={lineWrap}>
              <motion.span
                className="block italic text-teal"
                {...lineInner(1)}
              >
                здоровье
              </motion.span>
            </span>
            <span className={lineWrap}>
              <motion.span className="block" {...lineInner(2)}>
                начинается здесь
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.65 }}
            className="mt-6 max-w-md text-base leading-relaxed text-steel sm:text-lg"
          >
            Диагностика, консультации специалистов и персональный подход к
            каждому пациенту
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.8 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <button
              data-testid="hero-appointment-button"
              onClick={() => openModal()}
              className="group flex items-center justify-center gap-2 rounded-full bg-navy px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-teal hover:shadow-xl hover:shadow-teal/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
            >
              Записаться на приём
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
            <button
              data-testid="hero-services-button"
              onClick={() => scrollToId("services")}
              className="rounded-full border border-navy/20 px-8 py-4 text-sm font-semibold text-navy transition-all duration-300 hover:border-teal hover:text-teal focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
            >
              Наши услуги
            </button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.05 }}
            className="mt-9 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-medium uppercase tracking-wider text-steel/80"
          >
            <span>Опытные специалисты</span>
            <span className="h-1 w-1 rounded-full bg-teal" />
            <span>Современная диагностика</span>
            <span className="h-1 w-1 rounded-full bg-teal" />
            <span>Удобная запись</span>
          </motion.p>
        </div>

        {/* Right — image composition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.35 }}
          className="relative h-[460px] sm:h-[540px] lg:col-span-6 lg:h-[600px]"
          data-testid="hero-image-composition"
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-teal/15 lg:h-[560px] lg:w-[560px]" />

          <motion.div
            style={{ y: imgY }}
            className="absolute right-0 top-0 h-[86%] w-[74%] overflow-hidden rounded-b-3xl rounded-t-[999px] shadow-2xl shadow-navy/20"
          >
            <img
              src={HERO_IMG}
              alt="Врач медицинского центра MEDICA"
              className="h-full w-full object-cover"
              data-testid="hero-main-image"
            />
          </motion.div>

          <motion.div
            style={{ y: badgeY }}
            className="absolute bottom-[6%] left-0 w-[46%] overflow-hidden rounded-2xl border-4 border-white shadow-xl"
          >
            <img
              src={HERO_INSET_IMG}
              alt="Интерьер клиники"
              className="h-full w-full object-cover"
              data-testid="hero-inset-image"
            />
          </motion.div>

          <motion.div
            style={{ y: badgeY }}
            className="absolute bottom-[24%] right-0 flex items-center gap-3 rounded-2xl border border-line bg-white/95 p-4 shadow-lg backdrop-blur"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-light text-teal">
              <CalendarCheck size={18} />
            </span>
            <div>
              <p className="text-sm font-semibold text-navy">Удобная запись</p>
              <p className="text-xs text-steel">ответим в WhatsApp</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
