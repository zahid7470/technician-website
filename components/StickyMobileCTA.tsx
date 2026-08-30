"use client";

import React from "react";
import { BUSINESS_INFO } from "@/lib/constants";
import { useWhatsAppBooking } from "./WhatsAppBookingContext";
import { Phone, MessageSquare } from "lucide-react";

export default function StickyMobileCTA() {
  const { openBookingModal } = useWhatsAppBooking();

  return (
    <aside aria-label="Quick contact actions" className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-slate-200/90 p-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.12)]">
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2">
        {/* Direct Call Button */}
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-slate-900 active:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-sm transition-transform active:scale-[0.98]"
          aria-label={`Call technician at ${BUSINESS_INFO.phone}`}
        >
          <Phone className="w-4 h-4 text-urgent animate-bounce" />
          <div className="flex flex-col text-left">
            <span className="leading-tight">Call Now</span>
            <span className="text-[10px] text-slate-300 font-medium">₹299 Visit</span>
          </div>
        </a>

        {/* WhatsApp Button */}
        <button
          onClick={() => openBookingModal()}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-whatsapp-dark active:bg-whatsapp text-white font-bold text-xs sm:text-sm shadow-sm transition-transform active:scale-[0.98] cursor-pointer"
          aria-label="Book technician on WhatsApp"
        >
          <MessageSquare className="w-4 h-4" />
          <div className="flex flex-col text-left">
            <span className="leading-tight">WhatsApp</span>
            <span className="text-[10px] text-emerald-100 font-medium">Quick Reply</span>
          </div>
        </button>
      </div>
    </aside>
  );
}
