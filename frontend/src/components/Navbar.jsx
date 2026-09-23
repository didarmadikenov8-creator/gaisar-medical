import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Plus, Phone } from "lucide-react";
import { NAV_LINKS, PHONE_DISPLAY, PHONE_TEL, scrollToId } from "@/lib/site";
import { useAppointment } from "@/context/AppointmentContext";
import { EASE } from "@/components/Reveal";

const Logo = ({ light = false }) => (
  <button
    data-testid="logo-medica"
    onClick={() => scrollToId("home")}
    className="flex items-center gap-2.5"
    aria-label="MEDICA — на главную"
  >
    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy text-white">
      <Plus size={16} strokeWidth={2.5} />
    </span>
    <span
      className={`font-display text-2xl font-semibold tracking-wide ${
        light ? "text-white" : "text-navy"
      }`}
    >
      MEDICA
    </span>
  </button>
);

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { openModal } = useAppointment();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (window.__lenis) menuOpen ? window.__lenis.stop() : window.__lenis.start();
  }, [menuOpen]);

  const go = (id) => {
    setMenuOpen(false);
    setTimeout(() => scrollToId(id), 60);
  };

  return (
    <>
      <header
        data-testid="site-header"
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-line bg-white/90 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Logo />

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((l) => (
              <button
                key={l.id}
                data-testid={`nav-link-${l.id}`}
                onClick={() => go(l.id)}
                className="text-sm font-medium text-steel transition-colors duration-200 hover:text-teal focus-visible:text-teal focus:outline-none"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-6 lg:flex">
            <a
              data-testid="header-phone-link"
              href={PHONE_TEL}
              className="flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-teal"
            >
              <Phone size={15} className="text-teal" />
              {PHONE_DISPLAY}
            </a>
            <button
              data-testid="header-appointment-button"
              onClick={() => openModal()}
              className="rounded-full bg-navy px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-teal hover:shadow-lg hover:shadow-teal/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
            >
              Записаться
            </button>
          </div>

          <button
            data-testid="mobile-menu-toggle"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-white text-navy lg:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col bg-white pt-24 lg:hidden"
          >
            <nav className="flex flex-1 flex-col gap-2 px-6">
              {NAV_LINKS.map((l, i) => (
                <motion.button
                  key={l.id}
                  data-testid={`mobile-nav-link-${l.id}`}
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.4, ease: EASE }}
                  onClick={() => go(l.id)}
                  className="border-b border-line py-4 text-left font-display text-3xl font-medium text-navy transition-colors hover:text-teal"
                >
                  {l.label}
                </motion.button>
              ))}
            </nav>
            <div className="space-y-3 px-6 pb-10">
              <a
                data-testid="mobile-menu-phone-link"
                href={PHONE_TEL}
                className="flex items-center gap-2 text-base font-semibold text-navy"
              >
                <Phone size={16} className="text-teal" />
                {PHONE_DISPLAY}
              </a>
              <button
                data-testid="mobile-menu-appointment-button"
                onClick={() => {
                  setMenuOpen(false);
                  openModal();
                }}
                className="w-full rounded-full bg-navy py-3.5 text-sm font-semibold text-white transition-colors hover:bg-teal"
              >
                Записаться на приём
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
