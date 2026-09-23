import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronDown } from "lucide-react";
import { toast } from "sonner";
import { useAppointment } from "@/context/AppointmentContext";
import { DIRECTIONS, buildAppointmentMsg, waLink } from "@/lib/site";
import { EASE } from "@/components/Reveal";

const inputCls =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-[15px] text-ink placeholder:text-slate-400 transition focus:border-teal focus:outline-none focus:ring-4 focus:ring-teal/10";

const errorCls = "mt-1.5 text-xs text-red-500";

export const AppointmentModal = () => {
  const { modal, closeModal } = useAppointment();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [direction, setDirection] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (modal.open) {
      setDirection(modal.direction || "");
      setErrors({});
      window.__lenis?.stop();
    } else {
      window.__lenis?.start();
    }
  }, [modal.open, modal.direction]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && closeModal();
    if (modal.open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modal.open, closeModal]);

  const digits = (s) => s.replace(/\D/g, "");

  const validate = () => {
    const e = {};
    if (name.trim().length < 2) e.name = "Укажите имя";
    if (digits(phone).length < 10) e.phone = "Введите корректный номер телефона";
    if (!direction) e.direction = "Выберите направление";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    const msg = buildAppointmentMsg({
      name: name.trim(),
      phone: phone.trim(),
      direction,
    });
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
    toast.success("Заявка сформирована — отправьте сообщение в WhatsApp");
    closeModal();
    setName("");
    setPhone("");
    setDirection("");
  };

  return (
    <AnimatePresence>
      {modal.open && (
        <motion.div
          data-testid="appointment-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-navy/60 p-4 backdrop-blur-sm"
          onClick={closeModal}
        >
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 28, scale: 0.97 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="relative w-full max-w-md rounded-3xl bg-white p-8"
            onClick={(e) => e.stopPropagation()}
            data-testid="appointment-modal"
          >
            <button
              data-testid="appointment-modal-close"
              onClick={closeModal}
              aria-label="Закрыть форму"
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-line text-steel transition-colors hover:text-navy"
            >
              <X size={16} />
            </button>

            <h3 className="font-display text-3xl font-semibold text-navy">
              Запись на приём
            </h3>
            <p className="mt-2 text-sm text-steel">
              Заполните форму — заявка откроется в WhatsApp
            </p>

            <form className="mt-7 space-y-5" onSubmit={submit} noValidate>
              <div>
                <label
                  htmlFor="ap-name"
                  className="mb-1.5 block text-sm font-medium text-navy"
                >
                  Имя
                </label>
                <input
                  id="ap-name"
                  data-testid="appointment-field-name"
                  type="text"
                  placeholder="Ваше имя"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputCls}
                />
                {errors.name && (
                  <p className={errorCls} data-testid="appointment-error-name">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="ap-phone"
                  className="mb-1.5 block text-sm font-medium text-navy"
                >
                  Телефон
                </label>
                <input
                  id="ap-phone"
                  data-testid="appointment-field-phone"
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={inputCls}
                />
                {errors.phone && (
                  <p className={errorCls} data-testid="appointment-error-phone">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="ap-direction"
                  className="mb-1.5 block text-sm font-medium text-navy"
                >
                  Направление
                </label>
                <div className="relative">
                  <select
                    id="ap-direction"
                    data-testid="appointment-field-direction"
                    value={direction}
                    onChange={(e) => setDirection(e.target.value)}
                    className={`${inputCls} appearance-none pr-10 ${
                      direction ? "text-ink" : "text-slate-400"
                    }`}
                  >
                    <option value="" disabled>
                      Выберите направление
                    </option>
                    {DIRECTIONS.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={16}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-steel"
                  />
                </div>
                {errors.direction && (
                  <p className={errorCls} data-testid="appointment-error-direction">
                    {errors.direction}
                  </p>
                )}
              </div>

              <button
                data-testid="appointment-modal-submit-button"
                type="submit"
                className="w-full rounded-full bg-navy py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-teal focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
              >
                Записаться
              </button>
              <p className="text-center text-xs text-steel/70">
                Нажимая кнопку, вы откроете WhatsApp с готовым сообщением
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
