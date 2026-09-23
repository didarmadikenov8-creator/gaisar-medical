import { useAppointment } from "@/context/AppointmentContext";
import { Reveal, Eyebrow } from "@/components/Reveal";

const DOCTORS = [
  {
    name: "Алия Серикова",
    spec: "Терапевт",
    exp: "Стаж — 14 лет",
    direction: "Терапия",
    img: "https://images.unsplash.com/photo-1758691462651-611d730c5272?crop=entropy&cs=srgb&fm=jpg&q=85",
  },
  {
    name: "Арман Нурланов",
    spec: "Кардиолог",
    exp: "Стаж — 18 лет",
    direction: "Кардиология",
    img: "https://images.pexels.com/photos/32254658/pexels-photo-32254658.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=640",
  },
  {
    name: "Елена Ким",
    spec: "Невролог",
    exp: "Стаж — 11 лет",
    direction: "Неврология",
    img: "https://images.unsplash.com/photo-1781296134652-1f9ad66dd29a?crop=entropy&cs=srgb&fm=jpg&q=85",
  },
  {
    name: "Тимур Смайлов",
    spec: "Врач УЗИ-диагностики",
    exp: "Стаж — 9 лет",
    direction: "УЗИ и диагностика",
    img: "https://images.unsplash.com/photo-1758691463393-a2aa9900af8a?crop=entropy&cs=srgb&fm=jpg&q=85",
  },
];

export const Doctors = () => {
  const { openModal } = useAppointment();

  return (
    <section
      id="doctors"
      data-testid="doctors-section"
      className="border-y border-line bg-white py-16 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <Reveal>
            <Eyebrow>Врачи</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-3xl font-medium leading-tight tracking-tight text-navy sm:text-4xl lg:text-5xl">
              Специалисты, которым доверяют
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {DOCTORS.map((d, i) => (
            <Reveal key={d.name} delay={0.07 * i} className="h-full">
              <article
                data-testid={`doctor-card-${i}`}
                className="group flex h-full flex-col"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-slate-100">
                  <img
                    src={d.img}
                    alt={`Фото: ${d.name}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    data-testid={`doctor-photo-${i}`}
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-steel backdrop-blur">
                    Демо
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-navy">
                  {d.name}
                </h3>
                <p className="mt-1 text-sm text-teal">{d.spec}</p>
                <p className="mt-0.5 text-xs text-steel/80">{d.exp}</p>
                <button
                  data-testid={`doctor-appointment-button-${i}`}
                  onClick={() => openModal(d.direction)}
                  className="mt-4 w-full rounded-full border border-navy/15 py-2.5 text-sm font-semibold text-navy transition-all duration-300 hover:border-navy hover:bg-navy hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                >
                  Записаться
                </button>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 text-xs text-steel/70" data-testid="doctors-demo-note">
            * Демо-данные шаблона: имена, фотографии и стаж врачей будут
            заменены на реальные данные клиники.
          </p>
        </Reveal>
      </div>
    </section>
  );
};
