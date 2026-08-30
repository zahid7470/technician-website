"use client";

import React from "react";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";
import { useWhatsAppBooking } from "./WhatsAppBookingContext";
import { Phone, Mail, MapPin, Clock, ShieldCheck, Wrench, MessageSquare, ArrowRight } from "lucide-react";

export default function Footer() {
  const { openBookingModal } = useWhatsAppBooking();

  return (
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-24 lg:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Col 1 & 2: Brand & Trust Details */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-navy-900 flex items-center justify-center text-white border border-brand-500/30">
                <svg className="w-5 h-5 text-brand-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14"/>
                  <circle cx="12" cy="12" r="3" fill="#0f172a" stroke="#22c55e" strokeWidth="2"/>
                </svg>
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">
                COOL<span className="text-brand-400">FIX</span> REPAIR
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Doorstep home appliance repair service managed by <strong>{BUSINESS_INFO.owner}</strong>. Backed by 6 years of qualified technician experience, genuine spare parts, and a 6-month warranty with proper bill.
            </p>

            <div className="bg-navy-900 border border-slate-800 rounded-xl p-4 space-y-2.5 max-w-md">
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Doorstep Visiting & Diagnosis Charge: <strong className="text-white">{BUSINESS_INFO.visitingCharge}</strong></span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <Clock className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <span>Service: 8:00 AM – 9:00 PM | Complaints: 24×7</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <Wrench className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>6-Month Warranty with Bill (1-Year Option Available)</span>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h3 className="text-white text-sm font-bold tracking-wider uppercase mb-4">
              Repair Services
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {BUSINESS_INFO.services.map((svc) => (
                <li key={svc.id}>
                  <Link
                    href={`/services#${svc.id}`}
                    className="hover:text-brand-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-brand-400 transition-colors" />
                    <span>{svc.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Navigation */}
          <div>
            <h3 className="text-white text-sm font-bold tracking-wider uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-brand-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand-400 transition-colors">
                  All Services & Pricing
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-brand-400 transition-colors">
                  About Zaheer Ahmed Ansari
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-400 transition-colors">
                  Contact & Bookings
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact & Emergency */}
          <div>
            <h3 className="text-white text-sm font-bold tracking-wider uppercase mb-4">
              Direct Contact
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center gap-2.5 text-white font-bold hover:text-brand-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-urgent" />
                  <span>{BUSINESS_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="flex items-center gap-2.5 hover:text-brand-400 transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-brand-400 flex-shrink-0" />
                  <span>{BUSINESS_INFO.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                <span>Mumbai, Navi Mumbai & Thane</span>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => openBookingModal()}
                  className="w-full py-2.5 px-3 rounded-lg bg-whatsapp-dark hover:bg-whatsapp text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Book on WhatsApp</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Coverage Suburbs Directory for Local SEO */}
        <div className="py-8 border-b border-slate-800/80 text-xs text-slate-400">
          <div className="font-semibold text-slate-300 mb-2.5">
            Key Service Areas in Mumbai, Navi Mumbai & Thane:
          </div>
          <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-slate-400">
            {BUSINESS_INFO.serviceAreas.flatMap((area) => area.locations).map((loc, idx) => (
              <span key={idx} className="hover:text-brand-300 transition-colors">
                {loc} •
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} COOL FIX REPAIR. All rights reserved. Managed by Zaheer Ahmed Ansari.
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Visiting Charge: ₹299</span>
            <span>•</span>
            <span>6-Month Warranty</span>
            <span>•</span>
            <span>Genuine Parts</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
