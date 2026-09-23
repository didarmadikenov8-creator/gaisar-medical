import {
  Stethoscope,
  HeartPulse,
  Brain,
  Baby,
  Scan,
  FlaskConical,
  ArrowRight,
} from "lucide-react";
import { useAppointment } from "@/context/AppointmentContext";
import { Reveal, Eyebrow } from "@/components/Reveal";

const SERVICES = [
  {
    icon: Stethoscope,
    title: "Терапия",
    desc: "Первичный приём, профилактика и ведение хронических заболеваний для взрослых.",
  },
  {
    icon: HeartPulse,
    title: "Кардиология",
    desc: "Диагностика и наблюдение при заболеваниях сердца и сосудов.",
  },
  {
    icon: Brain,
    title: "Неврология",
    desc: "Консультации при головных болях, болях в спине и нарушениях сна.",
  },
  {
    icon: Baby,
    title: "Педиатрия",
    desc: "Наблюдение детей с рождения: плановые осмотры и рекомендации для родителей.",
  },
  {
    icon: Scan,
    title: "УЗИ и диагностика",
    desc: "Ультразвуковые и функциональные исследования на современном оборудовании.",
  },
  {
    icon: FlaskConical,
    title: "Лабораторные исследования",
    desc: "Анализы крови, мочи и другие исследования с быстрым результатом.",
  },
];

export const Services = () => {
  const { openModal } = useAppointment();

  return (
    <section id="services" data-testid="services-section" className="py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <Reveal>
            <Eyebrow>Услуги</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-3xl font-medium leading-tight tracking-tight text-navy sm:text-4xl lg:text-5xl">
              Медицинская помощь для всей семьи
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-4 text-base text-steel">
              Основные направления нашего центра
            </p>
          </Reveal>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={0.06 * i} className="h-full">
              <article
                data-testid={`service-card-${i}`}
                className="group flex h-full flex-col rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-teal/50 hover:shadow-xl hover:shadow-navy/5 sm:p-8"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-light text-teal transition-colors duration-300 group-hover:bg-navy group-hover:text-white">
                  <s.icon size={22} strokeWidth={1.8} />
                </span>
                <h3 className="mt-6 text-lg font-semibold text-navy">
                  {s.title}
                </h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-steel">
                  {s.desc}
                </p>
                <button
                  data-testid={`service-more-link-${i}`}
                  onClick={() => openModal(s.title)}
                  className="mt-6 flex items-center gap-2 self-start text-sm font-semibold text-teal transition-colors hover:text-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                >
                  Подробнее
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
