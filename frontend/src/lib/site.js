export const PHONE_DISPLAY = "+7 747 310 0916";
export const PHONE_TEL = "tel:+77473100916";
export const WA_NUMBER = "77473100916";

export const waLink = (text) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

export const WA_DEFAULT_MSG =
  "Здравствуйте! Хочу узнать подробнее об услугах медицинского центра.";

export const buildAppointmentMsg = ({ name, phone, direction }) =>
  `Здравствуйте! Хочу записаться на приём.\nИмя: ${name}\nТелефон: ${phone}\nНаправление: ${direction}`;

export const DIRECTIONS = [
  "Терапия",
  "Кардиология",
  "Неврология",
  "Педиатрия",
  "УЗИ и диагностика",
  "Лабораторные исследования",
];

export const NAV_LINKS = [
  { id: "home", label: "Главная" },
  { id: "services", label: "Услуги" },
  { id: "doctors", label: "Врачи" },
  { id: "about", label: "О центре" },
  { id: "reviews", label: "Отзывы" },
  { id: "contacts", label: "Контакты" },
];

export const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  if (window.__lenis) {
    window.__lenis.scrollTo(el, { offset: -76, duration: 1.2 });
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

export const MAP_EMBED_SRC = `https://maps.google.com/maps?q=${encodeURIComponent(
  "Alma City 5, Almaty, Kazakhstan"
)}&z=16&output=embed`;
