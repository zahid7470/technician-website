"use client";

import React from "react";
import { BUSINESS_INFO } from "@/lib/constants";
import { Check } from "lucide-react";
import { Reveal, Stagger, StaggerItem, fadeUp, scaleIn } from "./MotionWrapper";

export default function BrandStrip() {
  return (
    <section className="bg-slate-100/80 border-y border-slate-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-6">
          <span className="text-xs font-bold text-brand-700 tracking-wider uppercase bg-brand-50 border border-brand-200 px-3 py-1 rounded-full">
            All Major Brands Repaired
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-navy-900 mt-2">
            Genuine Spare Parts for Leading Appliance Brands
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Our qualified technicians carry diagnostic tools and parts compatible with all domestic & international brands.
          </p>
        </Reveal>

        {/* Brand Grid */}
        <Stagger className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3">
          {BUSINESS_INFO.brands.map((brand) => (
            <StaggerItem key={brand} variants={scaleIn}>
              <div className="bg-white border border-slate-200/80 rounded-xl p-3 text-center shadow-sm hover:shadow-md hover:border-brand-300 transition-all group flex flex-col items-center justify-center min-h-[70px]">
                <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-brand-600 transition-colors">
                  {brand}
                </span>
                <span className="text-[10px] text-slate-400 font-medium flex items-center gap-1 mt-0.5">
                  <Check className="w-2.5 h-2.5 text-emerald-500" />
                  Supported
                </span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
