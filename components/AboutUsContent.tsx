"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { BUSINESS_INFO } from "@/lib/constants";
import { useWhatsAppBooking } from "@/components/WhatsAppBookingContext";
import BrandStrip from "@/components/BrandStrip";
import TrustPillars from "@/components/TrustPillars";
import CTASection from "@/components/CTASection";
import { Reveal, fadeLeft, fadeRight, customEase } from "@/components/MotionWrapper";
import {
  Wrench,
  Phone,
  MessageSquare,
  Award,
  UserCheck,
  CheckCircle2,
} from "lucide-react";

export default function AboutUsContent() {
  const { openBookingModal } = useWhatsAppBooking();
  const reduceMotion = useReducedMotion();

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <section className="bg-navy-950 text-white py-16 sm:py-20 relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <motion.div
            initial={reduceMotion ? {} : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: customEase }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold text-brand-300 mb-4"
          >
            <Award className="w-4 h-4 text-brand-400" />
            <span>10 Years Qualified Technician Experience</span>
          </motion.div>

          <motion.h1
            initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: customEase }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-3xl"
          >
            About COOL FIX REPAIR
          </motion.h1>

          <motion.p
            initial={reduceMotion ? {} : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35, ease: customEase }}
            className="text-base sm:text-lg text-slate-300 max-w-2xl mt-4 leading-relaxed"
          >
            Founded and managed by <strong>{BUSINESS_INFO.owner}</strong>, COOL FIX REPAIR provides dedicated doorstep home appliance repair across Mumbai, Navi Mumbai, and Thane.
          </motion.p>
        </div>
      </section>

      {/* Main Narrative & Values Section */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Business Story */}
          <Reveal className="lg:col-span-7 space-y-6 text-slate-700" variants={fadeLeft} duration={0.6}>
            <div>
              <span className="text-xs font-bold text-brand-700 uppercase tracking-wider bg-brand-50 border border-brand-200 px-3 py-1 rounded-full">
                Our Story & Expertise
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mt-3">
                Reliable Doorstep Repairs with Honest Diagnosis
              </h2>
            </div>

            <p className="text-sm sm:text-base leading-relaxed">
              When a refrigerator stops cooling or a washing machine fails mid-cycle, household routines are immediately disrupted. <strong>COOL FIX REPAIR</strong> was established by <strong>{BUSINESS_INFO.owner}</strong> to provide homeowners and businesses with fast, transparent, and qualified doorstep appliance repair services.
            </p>

            <p className="text-sm sm:text-base leading-relaxed">
              With <strong>10 Years of technician experience</strong>, we have diagnosed and repaired thousands of appliances across Mumbai, Navi Mumbai, and Thane. Our technicians are qualified, experienced, and equipped with the specialized diagnostic instruments required for modern inverter compressors, smart PCB motherboards, and complex mechanical assemblies.
            </p>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-sm">
              <h3 className="text-base font-bold text-navy-900 flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-brand-600" />
                <span>Our Core Operating Standards</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>100% Genuine Spare Parts:</strong> No low-grade replicas.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Fixed ₹299 Visit Fee:</strong> Complete doorstep diagnosis.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>1-year Warranty:</strong> Written warranty with official bill.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Extended Warranty Option:</strong> Available on customer request.</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-urgent hover:bg-urgent-dark text-white font-bold text-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>

              <button
                onClick={() => openBookingModal()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-whatsapp-dark hover:bg-whatsapp text-white font-bold text-sm transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Book on WhatsApp</span>
              </button>
            </div>
          </Reveal>

          {/* Right Column: Key Facts Card */}
          <Reveal className="lg:col-span-5 space-y-6" variants={fadeRight} delay={0.15} duration={0.6}>
            <div className="bg-navy-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-700 space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-700">
                <div className="w-12 h-12 rounded-xl bg-brand-500/20 border border-brand-400/40 flex items-center justify-center text-brand-300">
                  <Wrench className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Business Summary
                  </h3>
                  <p className="text-xs text-slate-300">
                    COOL FIX REPAIR
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start justify-between gap-4 py-2 border-b border-slate-800">
                  <span className="text-slate-400 text-xs uppercase font-semibold">Lead Person</span>
                  <span className="text-white font-bold text-right">{BUSINESS_INFO.owner}</span>
                </div>

                <div className="flex items-start justify-between gap-4 py-2 border-b border-slate-800">
                  <span className="text-slate-400 text-xs uppercase font-semibold">Experience</span>
                  <span className="text-white font-bold text-right">10 Years Qualified Experience</span>
                </div>

                <div className="flex items-start justify-between gap-4 py-2 border-b border-slate-800">
                  <span className="text-slate-400 text-xs uppercase font-semibold">Visiting Fee</span>
                  <span className="text-emerald-400 font-extrabold text-right">₹299 (Doorstep Diagnosis)</span>
                </div>

                <div className="flex items-start justify-between gap-4 py-2 border-b border-slate-800">
                  <span className="text-slate-400 text-xs uppercase font-semibold">Warranty Policy</span>
                  <span className="text-white font-bold text-right">1-year with Bill (Extended-Yr Option)</span>
                </div>

                <div className="flex items-start justify-between gap-4 py-2 border-b border-slate-800">
                  <span className="text-slate-400 text-xs uppercase font-semibold">Working Hours</span>
                  <span className="text-white font-bold text-right">8:00 AM – 9:00 PM (Daily)</span>
                </div>

                <div className="flex items-start justify-between gap-4 py-2 border-b border-slate-800">
                  <span className="text-slate-400 text-xs uppercase font-semibold">Complaints</span>
                  <span className="text-white font-bold text-right">Registered 24×7</span>
                </div>

                <div className="flex items-start justify-between gap-4 py-2">
                  <span className="text-slate-400 text-xs uppercase font-semibold">Coverage</span>
                  <span className="text-white font-bold text-right">Mumbai, Navi Mumbai, Thane</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <TrustPillars />
      <BrandStrip />
      <CTASection />
    </div>
  );
}
