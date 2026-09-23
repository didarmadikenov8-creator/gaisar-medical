import { UserCheck, Microscope, ClipboardList } from "lucide-react";
import { Reveal, Eyebrow } from "@/components/Reveal";

const ABOUT_IMG =
  "https://images.unsplash.com/photo-1759262151080-e05ba1c6294f?crop=entropy&cs=srgb&fm=jpg&q=85";

const ADVANTAGES = [
  {
    icon: UserCheck,
    title: "Индивидуальный подход",
    desc: "Врач подбирает план обследования под вашу ситуацию.",
  },
  {
    icon: Microscope,
    title: "Современное оборудование",
    desc: "Точная диагностика и быстрые результаты исследований.",
  },
  {
    icon: ClipboardList,
    title: "Понятные рекомендации",
    desc: "Простым языком — что делать дальше и почему.",
  },
];

export const About = () => (
  <section id="about" data-testid="about-section" className="py-16 sm:py-24 lg:py-32">
    <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
      <Reveal className="lg:col-span-7">
        <div className="relative">
          <img
            src={ABOUT_IMG}
            alt="Интерьер медицинского центра"
            loading="lazy"
            data-testid="about-photo"
            className="h-[360px] w-full rounded-3xl object-cover sm:h-[460px] lg:h-[560px]"
          />
          <div className="absolute -bottom-5 right-6 rounded-2xl border border-line bg-white px-6 py-4 shadow-xl sm:right-10">
            <p className="font-display text-3xl font-semibold text-teal">7</p>
            <p className="text-xs font-medium text-steel">
              дней в неделю на связи
            </p>
          </div>
        </div>
      </Reveal>

      <div className="lg:col-span-5">
        <Reveal>
          <Eyebrow>О центре</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-5 font-display text-3xl font-medium leading-tight tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Медицина с вниманием к человеку
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-5 leading-relaxed text-steel">
            Мы объединяем современную диагностику, опыт специалистов и
            внимательное отношение к каждому пациенту.
          </p>
        </Reveal>

        <div className="mt-10 space-y-7">
          {ADVANTAGES.map((a, i) => (
            <Reveal key={a.title} delay={0.1 + i * 0.08}>
              <div className="flex items-start gap-4" data-testid={`about-advantage-${i}`}>
                <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-light text-teal">
                  <a.icon size={20} strokeWidth={1.8} />
                </span>
                <div>
                  <h3 className="font-semibold text-navy">{a.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-steel">
                    {a.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);
