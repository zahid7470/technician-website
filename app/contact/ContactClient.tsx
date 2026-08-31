"use client";

import React from "react";
import { BUSINESS_INFO } from "@/lib/constants";
import WhatsAppForm from "@/components/WhatsAppForm";
import ServiceAreaMatrix from "@/components/ServiceAreaMatrix";
import FAQSection from "@/components/FAQSection";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Wrench,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";

export default function ContactClient() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <section className="bg-navy-950 text-white py-16 sm:py-20 relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold text-brand-300 mb-4">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>Complaints Registered 24×7</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-3xl">
            Contact & Book Doorstep Service
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mt-4 leading-relaxed">
            Directly connect with <strong>{BUSINESS_INFO.name}</strong> ({BUSINESS_INFO.owner}). Call us directly or submit your inquiry below to launch a pre-filled WhatsApp message.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Details & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-bold text-brand-700 uppercase tracking-wider bg-brand-50 px-2.5 py-1 rounded-md">
                  Direct Inquiries
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-navy-900 mt-2">
                  Get In Touch
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Technician visits available daily across Mumbai, Navi Mumbai, and Thane.
                </p>
              </div>

              <div className="space-y-4">
                {/* Phone Contact */}
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-brand-500 hover:bg-brand-50/50 transition-all group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-urgent group-hover:scale-105 transition-transform shadow-sm">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-500">Direct Technician Phone</div>
                    <div className="text-base font-extrabold text-navy-900 group-hover:text-brand-700">
                      {BUSINESS_INFO.phone}
                    </div>
                  </div>
                </a>

                {/* Email Contact */}
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-brand-500 hover:bg-brand-50/50 transition-all group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-brand-600 group-hover:scale-105 transition-transform shadow-sm">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold text-slate-500">Email Address</div>
                    <div className="text-xs sm:text-sm font-bold text-navy-900 group-hover:text-brand-700 truncate">
                      {BUSINESS_INFO.email}
                    </div>
                  </div>
                </a>

                {/* Working Hours */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-amber-500 shadow-sm flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-500">Service & Booking Hours</div>
                    <div className="text-xs sm:text-sm font-bold text-navy-900 mt-0.5">
                      Doorstep Service: 8:00 AM – 9:00 PM
                    </div>
                    <div className="text-[11px] text-emerald-600 font-semibold mt-0.5">
                      Complaints Registered 24×7
                    </div>
                  </div>
                </div>

                {/* Visiting Charge Box */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-emerald-50/80 border border-emerald-200 text-emerald-950">
                  <div className="w-12 h-12 rounded-xl bg-white border border-emerald-200 flex items-center justify-center text-emerald-600 shadow-sm flex-shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-emerald-800">Doorstep Inspection Fee</div>
                    <div className="text-base font-black text-emerald-950">
                      ₹299 (Fixed Diagnostic Charge)
                    </div>
                    <div className="text-[11px] text-emerald-800 mt-0.5">
                      1-year warranty provided with official bill on all repairs.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive WhatsApp Lead Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="mb-6">
              <div className="flex items-center gap-2 text-whatsapp-dark font-bold text-xs uppercase tracking-wider">
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp Booking</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-navy-900 mt-1">
                Send Repair Inquiry via WhatsApp
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Fill in your appliance details to generate a formatted message for business number <strong>75068 21162</strong>.
              </p>
            </div>

            <WhatsAppForm isModal={false} />
          </div>
        </div>
      </section>

      <ServiceAreaMatrix />
      <FAQSection />
    </div>
  );
}
