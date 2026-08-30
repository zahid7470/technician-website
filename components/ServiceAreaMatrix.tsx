"use client";

import React from "react";
import { BUSINESS_INFO } from "@/lib/constants";
import { useWhatsAppBooking } from "./WhatsAppBookingContext";
import { MapPin, MessageSquare, Phone } from "lucide-react";
import { Reveal, Stagger, StaggerItem, fadeUp, fadeRight } from "./MotionWrapper";

export default function ServiceAreaMatrix() {
  const { openBookingModal } = useWhatsAppBooking();

  return (
    <section id="service-areas" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-brand-700 tracking-wider uppercase bg-brand-50 border border-brand-200 px-3 py-1 rounded-full">
            Doorstep Technician Coverage
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-900 mt-2">
            Service Areas Across Mumbai, Navi Mumbai & Thane
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Our qualified technicians provide doorstep service across all key regions with our standard <strong>₹299</strong> inspection charge.
          </p>
        </Reveal>

        <Stagger className="grid grid-cols-1 lg:grid-cols-3 gap-8" slow>
          {BUSINESS_INFO.serviceAreas.map((area, idx) => (
            <StaggerItem key={idx} duration={0.5}>
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center font-bold">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-navy-900">
                        {area.region}
                      </h3>
                      <p className="text-xs text-brand-700 font-semibold">
                        {area.focus}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 mb-4">
                    Doorstep technician visits available between 8:00 AM – 9:00 PM.
                  </p>

                  {/* Suburbs Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {area.locations.map((loc, lIdx) => (
                      <span
                        key={lIdx}
                        className="text-xs bg-slate-100 text-slate-700 hover:bg-brand-50 hover:text-brand-800 transition-colors px-2.5 py-1 rounded-md border border-slate-200/60"
                      >
                        {loc}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-slate-700">
                    Visit Fee: ₹299
                  </span>
                  <button
                    onClick={() => openBookingModal(`Service in ${area.region}`)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-whatsapp-dark hover:bg-whatsapp text-white text-xs font-bold transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Book in Area</span>
                  </button>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Quick Area Inquiry Banner */}
        <Reveal className="mt-10" variants={fadeRight} delay={0.15}>
          <div className="bg-navy-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-lg font-bold text-white">
                Don&apos;t see your specific location listed?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                We cover all locations across Mumbai, Navi Mumbai, and Thane. Contact us directly to check slot availability.
              </p>
            </div>

            <div className="flex items-center gap-3 flex-shrink-0">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="px-4 py-2.5 rounded-xl bg-urgent hover:bg-urgent-dark text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-colors cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
