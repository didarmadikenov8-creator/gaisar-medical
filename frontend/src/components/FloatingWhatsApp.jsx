import { MessageCircle } from "lucide-react";
import { waLink, WA_DEFAULT_MSG } from "@/lib/site";

export const FloatingWhatsApp = () => (
  <a
    data-testid="whatsapp-floating-button"
    href={waLink(WA_DEFAULT_MSG)}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Написать в WhatsApp"
    className="group fixed bottom-5 right-5 z-[60] flex items-center gap-3"
  >
    <span className="hidden rounded-full border border-line bg-white px-4 py-2 text-xs font-semibold text-navy opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100 sm:block">
      Написать в WhatsApp
    </span>
    <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 transition-transform duration-300 hover:scale-105">
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20" />
      <MessageCircle size={24} fill="currentColor" strokeWidth={0} />
    </span>
  </a>
);
