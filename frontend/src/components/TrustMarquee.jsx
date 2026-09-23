import { Plus } from "lucide-react";

const ITEMS = [
  "10+ направлений",
  "Опытные специалисты",
  "7 дней в неделю",
  "Удобная онлайн-запись",
];

export const TrustMarquee = () => {
  const row = [...ITEMS, ...ITEMS];
  return (
    <section
      data-testid="trust-marquee"
      className="overflow-hidden border-y border-line bg-white py-6"
      aria-label="Преимущества центра"
    >
      <div className="flex w-max animate-[marquee_38s_linear_infinite] items-center gap-10 hover:[animation-play-state:paused]">
        {row.map((item, i) => (
          <div key={i} className="flex items-center gap-10">
            <span className="whitespace-nowrap text-sm font-semibold uppercase tracking-[0.18em] text-navy">
              {item}
            </span>
            <Plus size={14} className="text-teal" />
          </div>
        ))}
      </div>
    </section>
  );
};
