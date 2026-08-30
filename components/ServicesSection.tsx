"use client";

import React from "react";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";
import { useWhatsAppBooking } from "./WhatsAppBookingContext";
import { Refrigerator, WashingMachine, Flame, Wind, CheckCircle2, ArrowRight, ShieldCheck, Phone, MessageSquare } from "lucide-react";
import { Reveal, Stagger, StaggerItem, fadeUp, fadeLeft } from "./MotionWrapper";

export default function ServicesSection() {
  const { openBookingModal } = useWhatsAppBooking();

  const getServiceIcon = (id: string) => {
    switch (id) {
      case "refrigerator":
        return <Refrigerator className="w-6 h-6 text-brand-600" />;
      case "washing-machine":
        return <WashingMachine className="w-6 h-6 text-brand-600" />;
      case "oven":
        return <Flame className="w-6 h-6 text-brand-600" />;
      case "ac":
        return <Wind className="w-6 h-6 text-brand-600" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-brand-600" />;
    }
  };

  return (
    <section id="services-overview" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12" variants={fadeLeft}>
          <div>
            <span className="text-xs font-bold text-brand-700 tracking-wider uppercase bg-brand-50 border border-brand-200 px-3 py-1 rounded-full">
              Doorstep Appliance Repairs
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-900 mt-2">
              Our Professional Repair Services
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mt-1">
              Fixed ₹299 doorstep inspection & diagnosis charge across Mumbai, Navi Mumbai, and Thane. Genuine spare parts backed by a 6-month warranty.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-700 hover:text-brand-800 transition-colors flex-shrink-0"
          >
            <span>View All Detailed Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>

        {/* 4 Core Services Grid */}
        <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-8" slow>
          {BUSINESS_INFO.services.map((svc) => (
            <StaggerItem key={svc.id} duration={0.5}>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7 hover:border-brand-300 hover:shadow-lg transition-all duration-200 flex flex-col justify-between h-full">
                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                        {getServiceIcon(svc.id)}
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-navy-900">
                          {svc.title}
                        </h3>
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md mt-0.5">
                          Visiting Charge: {svc.visitingCharge}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {svc.fullDescription}
                  </p>

                  {/* Common Issues Checklist */}
                  <div className="space-y-2 mb-6">
                    <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Common Problems Solved:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                      {svc.commonIssues.slice(0, 4).map((issue, idx) => (
                        <div key={idx} className="flex items-start gap-2 bg-white border border-slate-200/80 rounded-lg p-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 flex-shrink-0 mt-0.5" />
                          <span className="leading-snug">{issue}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <div className="text-xs text-slate-500 font-medium">
                    Includes 6-Month Warranty with Bill
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-300 hover:border-slate-400 bg-white text-slate-800 text-xs font-bold transition-colors cursor-pointer"
                    >
                      <Phone className="w-3.5 h-3.5 text-urgent" />
                      <span>Call Now</span>
                    </a>

                    <button
                      onClick={() => openBookingModal(svc.title)}
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-whatsapp-dark hover:bg-whatsapp text-white text-xs font-bold transition-colors cursor-pointer shadow-sm"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp Booking</span>
                    </button>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
