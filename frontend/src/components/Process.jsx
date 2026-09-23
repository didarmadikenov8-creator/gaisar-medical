import { Reveal, Eyebrow } from "@/components/Reveal";

const STEPS = [
  {
    num: "01",
    title: "Оставляете заявку",
    desc: "Через форму на сайте или WhatsApp — это займёт минуту.",
  },
  {
    num: "02",
    title: "Подбираем специалиста",
    desc: "Администратор предложит врача и удобное время приёма.",
  },
  {
    num: "03",
    title: "Приходите на приём",
    desc: "Заранее подготовим ваши документы — без ожидания в очереди.",
  },
  {
    num: "04",
    title: "Получаете рекомендации",
    desc: "Понятный план обследования и дальнейших шагов.",
  },
];

export const Process = () => (
  <section
    id="process"
    data-testid="process-section"
    className="border-y border-line bg-white py-16 sm:py-24 lg:py-32"
  >
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-16 max-w-2xl">
        <Reveal>
          <Eyebrow>Как это работает</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-5 font-display text-3xl font-medium leading-tight tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Как проходит обращение
          </h2>
        </Reveal>
      </div>

      <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div className="absolute left-0 right-0 top-[34px] hidden border-t border-line lg:block" />
        {STEPS.map((s, i) => (
          <Reveal key={s.num} delay={0.1 * i}>
            <div className="relative" data-testid={`process-step-${i}`}>
              <span className="relative z-10 flex h-[68px] w-[68px] items-center justify-center rounded-full border border-navy/10 bg-white font-display text-2xl font-semibold text-navy transition-colors duration-300 hover:border-teal hover:text-teal">
                {s.num}
              </span>
              <h3 className="mt-6 text-lg font-semibold text-navy">
                {s.title}
              </h3>
              <p className="mt-2 max-w-[260px] text-sm leading-relaxed text-steel">
                {s.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
