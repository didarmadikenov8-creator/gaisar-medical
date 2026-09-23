import { useEffect } from "react";
import Lenis from "lenis";
import { Toaster } from "@/components/ui/sonner";
import { AppointmentProvider } from "@/context/AppointmentContext";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustMarquee } from "@/components/TrustMarquee";
import { Services } from "@/components/Services";
import { Doctors } from "@/components/Doctors";
import { About } from "@/components/About";
import { Process } from "@/components/Process";
import { Reviews } from "@/components/Reviews";
import { Faq } from "@/components/Faq";
import { CtaBand } from "@/components/CtaBand";
import { Contacts } from "@/components/Contacts";
import { Footer } from "@/components/Footer";
import { AppointmentModal } from "@/components/AppointmentModal";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    window.__lenis = lenis;
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <AppointmentProvider>
      <div className="min-h-screen bg-mist font-body text-ink">
        <Navbar />
        <main>
          <Hero />
          <TrustMarquee />
          <Services />
          <Doctors />
          <About />
          <Process />
          <Reviews />
          <Faq />
          <CtaBand />
          <Contacts />
        </main>
        <Footer />
        <FloatingWhatsApp />
        <AppointmentModal />
        <Toaster position="top-center" richColors />
      </div>
    </AppointmentProvider>
  );
}

export default App;
