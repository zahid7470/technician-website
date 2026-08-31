"use client";

import React from "react";
import { MessageSquare, Wrench, CheckCircle2, FileCheck } from "lucide-react";
import { Reveal, Stagger, StaggerItem, fadeUp } from "./MotionWrapper";

export default function ProcessSteps() {
  const steps = [
    {
      num: "01",
      title: "Book Inspection",
      desc: "Call 75068 21162 or send a pre-filled WhatsApp message with your appliance type and address.",
      icon: <MessageSquare className="w-6 h-6 text-brand-600" />,
    },
    {
      num: "02",
      title: "Doorstep Visit @ ₹299",
      desc: "Our qualified technician arrives at your doorstep to inspect and diagnose the appliance issue accurately.",
      icon: <Wrench className="w-6 h-6 text-brand-600" />,
    },
    {
      num: "03",
      title: "Genuine Parts Repair",
      desc: "We explain the diagnosis transparently and repair the fault using only genuine spare parts.",
      icon: <CheckCircle2 className="w-6 h-6 text-brand-600" />,
    },
    {
      num: "04",
      title: "1-year Warranty & Bill",
      desc: "Receive an official invoice along with a 1-year repair warranty (Extended warranty option available on request).",
      icon: <FileCheck className="w-6 h-6 text-brand-600" />,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-brand-700 tracking-wider uppercase bg-brand-50 border border-brand-200 px-3 py-1 rounded-full">
            Simple 4-Step Process
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-900 mt-2">
            How Our Doorstep Service Works
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Transparent, professional, and reliable repair service from initial inquiry to final warranty handover.
          </p>
        </Reveal>

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <StaggerItem key={idx} duration={0.5}>
              <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 relative flex flex-col justify-between hover:border-brand-300 hover:shadow-md transition-all h-full">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                      {step.icon}
                    </div>
                    <span className="text-2xl font-black text-slate-300">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-navy-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] font-semibold text-brand-700">
                  Step {idx + 1} of 4
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
