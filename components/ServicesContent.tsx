"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { BUSINESS_INFO } from "@/lib/constants";
import { useWhatsAppBooking } from "@/components/WhatsAppBookingContext";
import BrandStrip from "@/components/BrandStrip";
import CTASection from "@/components/CTASection";
import { Reveal, fadeUp, customEase } from "@/components/MotionWrapper";
import {
  Refrigerator,
  WashingMachine,
  Flame,
  Wind,
  CheckCircle2,
  Phone,
  MessageSquare,
  ShieldCheck,
  Wrench,
  Clock,
} from "lucide-react";

export default function ServicesContent() {
  const { openBookingModal } = useWhatsAppBooking();
  const reduceMotion = useReducedMotion();

  const getServiceIcon = (id: string) => {
    switch (id) {
      case "refrigerator":
        return <Refrigerator className="w-8 h-8 text-brand-600" />;
      case "washing-machine":
        return <WashingMachine className="w-8 h-8 text-brand-600" />;
      case "oven":
        return <Flame className="w-8 h-8 text-brand-600" />;
      case "ac":
        return <Wind className="w-8 h-8 text-brand-600" />;
      default:
        return <Wrench className="w-8 h-8 text-brand-600" />;
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header Banner */}
      <section className="bg-navy-950 text-white py-16 sm:py-20 relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <motion.div
            initial={reduceMotion ? {} : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: customEase }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold text-brand-300 mb-4"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Doorstep Diagnosis Fee: ₹299 (Fixed)</span>
          </motion.div>

          <motion.h1
            initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: customEase }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-3xl"
          >
            Home Appliance Repair Services
          </motion.h1>

          <motion.p
            initial={reduceMotion ? {} : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35, ease: customEase }}
            className="text-base sm:text-lg text-slate-300 max-w-2xl mt-4 leading-relaxed"
          >
            Professional doorstep repair and maintenance for all domestic and commercial brands across Mumbai, Navi Mumbai, and Thane. Genuine spare parts backed by a 6-month warranty.
          </motion.p>

          <motion.div
            initial={reduceMotion ? {} : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: customEase }}
            className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-6"
          >
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-urgent hover:bg-urgent-dark text-white font-bold text-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Technician: {BUSINESS_INFO.phone}</span>
            </a>

            <button
              onClick={() => openBookingModal()}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-whatsapp-dark hover:bg-whatsapp text-white font-bold text-sm transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Book on WhatsApp</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {BUSINESS_INFO.services.map((svc, idx) => (
          <Reveal
            id={svc.id}
            key={svc.id}
            variants={fadeUp}
            duration={0.6}
            className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm hover:shadow-md transition-shadow scroll-mt-28"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0 shadow-sm">
                    {getServiceIcon(svc.id)}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-brand-700 uppercase tracking-wider bg-brand-50 px-2.5 py-1 rounded-md">
                      Service #{idx + 1}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mt-1">
                      {svc.title}
                    </h2>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {svc.fullDescription}
                </p>

                {/* Sub-types */}
                <div>
                  <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5">
                    Appliance Types Supported:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {svc.types.map((type, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs bg-slate-100 text-slate-800 font-medium px-3 py-1.5 rounded-lg border border-slate-200"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Problem checklist */}
                <div>
                  <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5">
                    Common Faults Diagnosed & Repaired:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                    {svc.commonIssues.map((issue, iIdx) => (
                      <div
                        key={iIdx}
                        className="flex items-start gap-2 bg-slate-50 border border-slate-200/80 rounded-lg p-2.5"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{issue}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Pricing & Quick Book Card */}
              <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-6">
                <div className="border-b border-slate-200 pb-4">
                  <div className="text-xs text-slate-500 font-medium">Doorstep Inspection Fee</div>
                  <div className="text-3xl font-black text-navy-900 mt-1">
                    {svc.visitingCharge}
                    <span className="text-xs font-normal text-slate-500 ml-2">
                      (Includes full diagnosis)
                    </span>
                  </div>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span><strong>6-Month Warranty</strong> on genuine spare parts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-brand-600 flex-shrink-0" />
                    <span><strong>1-Year Warranty</strong> option available on request</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span>Service: <strong>8:00 AM – 9:00 PM</strong> (Complaints 24×7)</span>
                  </div>
                </div>

                <div className="space-y-2.5 pt-2">
                  <button
                    onClick={() => openBookingModal(svc.title)}
                    className="w-full py-3 px-4 rounded-xl bg-whatsapp-dark hover:bg-whatsapp text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Book {svc.title} on WhatsApp</span>
                  </button>

                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="w-full py-3 px-4 rounded-xl bg-navy-900 hover:bg-slate-800 text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-urgent" />
                    <span>Call: {BUSINESS_INFO.phone}</span>
                  </a>
                </div>

                <div className="text-[11px] text-center text-slate-500">
                  All brands supported: Samsung, Whirlpool, LG, Bosch, Godrej, IFB, Siemens, Haier & all others.
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      <BrandStrip />
      <CTASection />
    </div>
  );
}
