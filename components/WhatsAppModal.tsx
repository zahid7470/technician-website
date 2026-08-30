"use client";

import React, { useEffect } from "react";
import { useWhatsAppBooking } from "./WhatsAppBookingContext";
import WhatsAppForm from "./WhatsAppForm";
import { X, ShieldCheck, Wrench } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppModal() {
  const { isOpen, prefillService, closeBookingModal } = useWhatsAppBooking();

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeBookingModal();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, closeBookingModal]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto overscroll-contain p-3 sm:items-center sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeBookingModal}
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
            aria-hidden="true"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative z-10 my-3 w-full max-w-lg overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl sm:my-8"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Header */}
            <div className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-700 bg-gradient-to-r from-navy-900 to-navy-800 p-4 text-white sm:p-6">
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-brand-400/40 bg-brand-600/30 text-brand-300">
                  <Wrench className="h-5 w-5" />
                </div>

                <div className="min-w-0">
                  <h2
                    id="modal-title"
                    className="text-base font-bold tracking-tight sm:text-lg"
                  >
                    Book Technician on WhatsApp
                  </h2>

                  <p className="text-xs text-slate-300">
                    Fast Doorstep Service • ₹299 Visiting Charge
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={closeBookingModal}
                aria-label="Close dialog"
                className="ml-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-slate-300 transition-colors hover:bg-slate-700 hover:text-white cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-4 sm:p-6">
              <WhatsAppForm
                initialService={prefillService}
                onSuccess={closeBookingModal}
                isModal={true}
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

