"use client";

import React from "react";
import { BUSINESS_INFO } from "@/lib/constants";
import { ShieldCheck, Wrench, FileCheck2, Clock, CheckCircle2, Award } from "lucide-react";
import { Reveal, Stagger, StaggerItem, fadeUp, scaleIn } from "./MotionWrapper";

export default function TrustPillars() {
  const pillars = [
    {
      title: "10 Years Technician Experience",
      desc: "Managed by Zaheer Ahmed Ansari with 10 Years of hands-on expertise repairing domestic and commercial appliances.",
      icon: <Award className="w-6 h-6 text-brand-600" />,
    },
    {
      title: "Genuine Spare Parts Used",
      desc: "We strictly install 100% authentic spare parts for Samsung, LG, Whirlpool, Bosch, IFB, Godrej, and all leading brands.",
      icon: <Wrench className="w-6 h-6 text-brand-600" />,
    },
    {
      title: "1-year Warranty with Proper Bill",
      desc: "Every completed repair includes a 1-year written warranty and official bill, with a Extended warranty option on request.",
      icon: <FileCheck2 className="w-6 h-6 text-brand-600" />,
    },
    {
      title: "Fixed ₹299 Visiting Charge",
      desc: "Zero hidden charges. Transparent diagnostic and inspection fee at your doorstep across Mumbai, Navi Mumbai, and Thane.",
      icon: <ShieldCheck className="w-6 h-6 text-brand-600" />,
    },
    {
      title: "24×7 Complaint Registration",
      desc: "Log your repair request anytime through WhatsApp or direct call. Regular service hours run from 8:00 AM to 9:00 PM.",
      icon: <Clock className="w-6 h-6 text-brand-600" />,
    },
    {
      title: "All-Brand Compatibility",
      desc: "Comprehensive diagnostic knowledge covering refrigerators, washing machines, microwaves, ovens, and ACs of any make.",
      icon: <CheckCircle2 className="w-6 h-6 text-brand-600" />,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-brand-400 tracking-wider uppercase bg-brand-950/80 border border-brand-800 px-3 py-1 rounded-full">
            Why Choose COOL FIX REPAIR
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-2">
            Committed to Quality, Speed & Honest Pricing
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2">
            We believe in honest technician service, clear diagnosis, and genuine parts that ensure your appliances last.
          </p>
        </Reveal>

        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p, idx) => (
            <StaggerItem key={idx} variants={scaleIn} duration={0.45}>
              <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 hover:border-brand-500/60 transition-all flex flex-col justify-between h-full">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center mb-4">
                    {p.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
