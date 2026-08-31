"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { BUSINESS_INFO } from "@/lib/constants";
import { useWhatsAppBooking } from "./WhatsAppBookingContext";
import { customEase } from "./MotionWrapper";
import { Phone, MessageSquare, ShieldCheck, CheckCircle2, Wrench, Clock, Zap } from "lucide-react";

export default function Hero() {
  const { openBookingModal } = useWhatsAppBooking();
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative bg-gradient-to-b from-navy-950 via-navy-900 to-slate-900 text-white overflow-hidden pt-10 pb-20 lg:pt-16 lg:pb-28">
      {/* Background Decorative Tech Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

      {/* Subtle Glow Accents */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Pill */}
            <motion.div
              initial={reduceMotion ? {} : { opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: customEase }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-700 text-xs font-semibold text-brand-300 shadow-inner"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Doorstep Technician Service Across Mumbai, Navi Mumbai & Thane</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: customEase }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-balance"
            >
              Expert Home Appliance Repair with{" "}
              <span className="bg-gradient-to-r from-brand-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent">
                1-year Warranty
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={reduceMotion ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35, ease: customEase }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Qualified & experienced technicians for <strong>Refrigerator</strong>, <strong>Washing Machine</strong>, <strong>Microwave Oven</strong> & <strong>AC Repair</strong>. Doorstep inspection at only <strong>₹299</strong> with genuine spare parts.
            </motion.p>

            {/* Above-the-fold Quick Stats / Trust Points */}
            <motion.div
              initial={reduceMotion ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45, ease: customEase }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-left"
            >
              <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-3 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-brand-400 font-bold text-base sm:text-lg">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span>₹299</span>
                </div>
                <div className="text-[11px] sm:text-xs text-slate-300 mt-0.5">
                  Visiting & Diagnosis
                </div>
              </div>

              <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-3 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-brand-400 font-bold text-base sm:text-lg">
                  <Wrench className="w-5 h-5 text-brand-400 flex-shrink-0" />
                  <span>10 Years</span>
                </div>
                <div className="text-[11px] sm:text-xs text-slate-300 mt-0.5">
                  Technician Experience
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 bg-slate-800/60 border border-slate-700/60 rounded-xl p-3 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-brand-400 font-bold text-base sm:text-lg">
                  <Clock className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span>24×7</span>
                </div>
                <div className="text-[11px] sm:text-xs text-slate-300 mt-0.5">
                  Complaint Registration
                </div>
              </div>
            </motion.div>

            {/* Primary Action Buttons */}
            <motion.div
              initial={reduceMotion ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55, ease: customEase }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-urgent hover:bg-urgent-dark text-white font-extrabold text-base shadow-lg shadow-orange-950/30 hover:shadow-orange-900/40 transition-all duration-200 cursor-pointer active:scale-[0.99]"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now ({BUSINESS_INFO.phone})</span>
              </a>

              <button
                onClick={() => openBookingModal()}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-whatsapp-dark hover:bg-whatsapp text-white font-extrabold text-base shadow-lg shadow-emerald-950/30 hover:shadow-emerald-900/40 transition-all duration-200 cursor-pointer active:scale-[0.99]"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Book on WhatsApp</span>
              </button>
            </motion.div>

            {/* Reassurance text */}
            <motion.div
              initial={reduceMotion ? {} : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7, ease: customEase }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2 text-xs text-slate-400 pt-1"
            >
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                1-year Warranty with Bill
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Genuine Spare Parts
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                All Major Brands Serviced
              </span>
            </motion.div>
          </div>

          {/* Right Column: Interactive Quick Booking Box */}
          <motion.div
            initial={reduceMotion ? {} : { opacity: 0, x: 40, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.3, ease: customEase }}
            className="lg:col-span-5"
          >
            <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-7 shadow-2xl border border-slate-200 relative">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center font-bold">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-navy-900 leading-tight">
                      Fast Doorstep Service
                    </h2>
                    <p className="text-xs text-slate-500">
                      Standard visiting charge: ₹299
                    </p>
                  </div>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full">
                  Available Today
                </span>
              </div>

              {/* Service Selection Quick Launcher */}
              <div className="mt-5 space-y-2.5">
                <div className="text-xs font-semibold text-slate-600">
                  Select your appliance for instant WhatsApp booking:
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {BUSINESS_INFO.services.map((svc) => (
                    <button
                      key={svc.id}
                      onClick={() => openBookingModal(svc.title)}
                      className="p-3 rounded-xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50/50 text-left transition-all group flex flex-col justify-between cursor-pointer"
                    >
                      <span className="text-xs font-bold text-navy-900 group-hover:text-brand-700">
                        {svc.title}
                      </span>
                      <span className="text-[10px] text-slate-500 mt-1 flex items-center justify-between">
                        <span>Visit: ₹299</span>
                        <span className="text-whatsapp-dark font-semibold group-hover:translate-x-0.5 transition-transform">→</span>
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
