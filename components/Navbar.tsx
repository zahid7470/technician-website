"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BUSINESS_INFO } from "@/lib/constants";
import { useWhatsAppBooking } from "./WhatsAppBookingContext";
import { Phone, MessageSquare, Menu, X, ShieldCheck, Clock } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openBookingModal } = useWhatsAppBooking();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-navy-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Doorstep Service @ ₹299 Visit Charge
            </span>
            <span className="hidden md:flex items-center gap-1 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-brand-400" />
              8:00 AM – 9:00 PM (Complaints 24×7)
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline text-slate-400">
              Mumbai • Navi Mumbai • Thane
            </span>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 text-white font-bold hover:text-brand-300 transition-colors"
            >
              <Phone className="w-3 h-3 text-urgent" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-shadow duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center group focus:outline-none"
              aria-label="COOL FIX REPAIR Home"
            >
              <div className="relative w-[180px] h-[55px] shrink-0">
                <Image
                  src="/logo.png"
                  alt="COOL FIX REPAIR Logo"
                  fill
                  priority
                  sizes="150px"
                  className="object-contain"
                />
              </div>
            </Link>



            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-150 ${active
                      ? "bg-brand-50 text-brand-700 font-bold"
                      : "text-slate-700 hover:text-brand-600 hover:bg-slate-50"
                      }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA Action Group */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 border-slate-800 text-slate-900 hover:bg-slate-900 hover:text-white font-bold text-sm transition-all duration-150 cursor-pointer shadow-sm"
              >
                <Phone className="w-4 h-4 text-urgent" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>

              <button
                onClick={() => openBookingModal()}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-whatsapp-dark hover:bg-whatsapp text-white font-bold text-sm shadow-md shadow-emerald-900/10 hover:shadow-lg transition-all duration-150 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Booking</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                aria-label="Call technician now"
                className="p-2.5 rounded-lg bg-urgent/10 text-urgent-dark font-bold text-xs flex items-center gap-1"
              >
                <Phone className="w-4 h-4" />
                <span>Call</span>
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none cursor-pointer"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl text-base font-semibold transition-colors ${active
                      ? "bg-brand-50 text-brand-700 font-bold"
                      : "text-slate-700 hover:bg-slate-50"
                      }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 text-white font-bold text-sm shadow-sm"
              >
                <Phone className="w-4 h-4 text-urgent" />
                <span>Direct Call ({BUSINESS_INFO.phone})</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openBookingModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-whatsapp-dark text-white font-bold text-sm shadow-sm cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Book on WhatsApp (₹299 Visit)</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
