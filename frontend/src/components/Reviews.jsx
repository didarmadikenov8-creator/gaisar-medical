import { Quote, Star } from "lucide-react";
import { Reveal, Eyebrow } from "@/components/Reveal";

const REVIEWS = [
  {
    text: "Записаться удалось за пару минут, администратор сразу предложил удобное время. Приём начался вовремя, всё спокойно и по делу.",
    author: "Анна",
    meta: "пациент центра",
  },
  {
    text: "Понравилось внимание к деталям: врач объяснил рекомендации простым языком и ответил на все вопросы.",
    author: "Дмитрий",
    meta: "пациент центра",
  },
  {
    text: "Удобно, что результаты анализов и назначения собраны в одном месте, ничего не приходится искать самостоятельно.",
    author: "Мария",
    meta: "пациент центра",
  },
];

export const Reviews = () => (
  <section id="reviews" data-testid="reviews-section" className="py-16 sm:py-24 lg:py-32">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>Отзывы</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-3xl font-medium leading-tight tracking-tight text-navy sm:text-4xl lg:text-5xl">
              Что говорят наши пациенты
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.14}>
          <span
            data-testid="reviews-demo-badge"
            className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal-light/60 px-4 py-2 text-xs font-bold uppercase tracking-widest text-teal"
          >
            Демо-контент
          </span>
        </Reveal>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {REVIEWS.map((r, i) => (
          <Reveal key={r.author} delay={0.08 * i} className="h-full">
            <figure
              data-testid={`review-card-${i}`}
              className="relative flex h-full flex-col rounded-2xl border border-line bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/5"
            >
              <span className="absolute right-6 top-6 rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-steel/70">
                Демо-отзыв
              </span>
              <Quote size={28} className="text-teal/30" />
              <blockquote className="mt-5 flex-1 leading-relaxed text-steel">
                {r.text}
              </blockquote>
              <figcaption className="mt-7 border-t border-line pt-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-navy">{r.author}</p>
                    <p className="text-xs text-steel/70">{r.meta}</p>
                  </div>
                  <div className="flex gap-0.5 text-teal">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} size={13} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <p className="mt-8 text-xs text-steel/70" data-testid="reviews-demo-note">
          * Отзывы носят демонстрационный характер и приведены для показа
          структуры шаблона. Они не являются утверждениями реальных пациентов.
        </p>
      </Reveal>
    </div>
  </section>
);
