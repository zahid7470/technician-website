"use client";

import React from "react";
import { BUSINESS_INFO } from "@/lib/constants";
import { useWhatsAppBooking } from "./WhatsAppBookingContext";
import { Phone, MessageSquare, ShieldCheck, Clock } from "lucide-react";
import { Reveal, fadeUp, scaleIn } from "./MotionWrapper";

export default function CTASection() {
  const { openBookingModal } = useWhatsAppBooking();

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 text-white relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <Reveal variants={scaleIn}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold text-brand-300">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>Same-Day Doorstep Technician Available</span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-balance">
            Need Fast Appliance Repair in Mumbai, Navi Mumbai, or Thane?
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Book your doorstep visit today for just <strong>₹299</strong>. We repair Refrigerators, Washing Machines, Microwave Ovens & ACs with <strong>genuine spare parts</strong> and a <strong>6-month warranty with proper bill</strong>.
          </p>
        </Reveal>

        {/* Action Buttons */}
        <Reveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 pt-4 max-w-md mx-auto sm:max-w-none">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-urgent hover:bg-urgent-dark text-white font-bold text-sm sm:text-base shadow-lg shadow-orange-950/30 transition-all duration-200 cursor-pointer"
            >
              <Phone className="w-5 h-5" />
              <span>Call {BUSINESS_INFO.phone}</span>
            </a>

            <button
              onClick={() => openBookingModal()}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-whatsapp-dark hover:bg-whatsapp text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-950/30 transition-all duration-200 cursor-pointer"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Book on WhatsApp</span>
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.4} variants={scaleIn}>
          <div className="pt-2 flex items-center justify-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Managed by Zaheer Ahmed Ansari • 6 Years Technician Experience</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
