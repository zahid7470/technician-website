"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal, Stagger, StaggerItem, fadeUp } from "./MotionWrapper";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();

  const faqs = [
    {
      q: "What is your doorstep visiting and diagnostic charge?",
      a: "Our standard doorstep inspection and diagnostic charge is ₹299 across all service locations in Mumbai, Navi Mumbai, and Thane. Our qualified technician will inspect your appliance, identify the root cause, and provide a clear estimate before proceeding with repairs.",
    },
    {
      q: "What warranty do you provide on repair services?",
      a: "We provide a 1-year warranty with an official bill for all repairs and replaced genuine spare parts. Additionally, Extended warranty option is available if the customer requests it.",
    },
    {
      q: "Which appliance brands do you repair?",
      a: "We repair all major domestic and commercial brands including Samsung, Whirlpool, LG, Bosch, Siemens, Godrej, Haier, BPL, IFB, AmazonBasics, Voltas, Panasonic, Daikin, Hitachi, Carrier, and others.",
    },
    {
      q: "What areas in Mumbai, Navi Mumbai, and Thane do you cover?",
      a: "We cover all areas of Mumbai (with primary focus on South Mumbai and Western Mumbai), all locations in Navi Mumbai (Vashi, Nerul, Belapur, Kharghar, Panvel, etc.), and Thane.",
    },
    {
      q: "What are your service and booking hours?",
      a: "Our doorstep technician service operates daily from 8:00 AM to 9:00 PM. Complaints and inquiries can be registered 24×7 via phone call (75068 21162) or WhatsApp.",
    },
    {
      q: "Do you use genuine spare parts for repairs?",
      a: "Yes. We strictly use genuine and high-grade manufacturer-compatible spare parts to ensure durability, efficiency, and safety for your home appliances.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-20 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-12">
          <span className="text-xs font-bold text-brand-700 tracking-wider uppercase bg-brand-50 border border-brand-200 px-3 py-1 rounded-full">
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-900 mt-2">
            Clear Answers to Common Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Everything you need to know about our repair charges, warranty, and doorstep process.
          </p>
        </Reveal>

        <Stagger className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <StaggerItem key={idx}>
                <div className="border border-slate-200 rounded-xl overflow-hidden transition-all bg-slate-50/50">
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-navy-900 text-sm sm:text-base hover:text-brand-600 focus:outline-none transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-brand-600" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={reduceMotion ? { height: "auto" } : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={reduceMotion ? {} : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
