"use client";

import React, { useState, useEffect } from "react";
import { BUSINESS_INFO } from "@/lib/constants";
import { MessageSquare, Send, CheckCircle2, ShieldAlert } from "lucide-react";

interface WhatsAppFormProps {
  initialService?: string;
  onSuccess?: () => void;
  isModal?: boolean;
}

export default function WhatsAppForm({ initialService = "", onSuccess, isModal = false }: WhatsAppFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(initialService || "Refrigerator Repair");
  const [brand, setBrand] = useState("Samsung");
  const [customBrand, setCustomBrand] = useState("");
  const [issue, setIssue] = useState("");
  const [location, setLocation] = useState("");
  const [preferredTime, setPreferredTime] = useState("Morning (8:00 AM – 12:00 PM)");

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const selectedBrand = brand === "Other" ? (customBrand || "Other Brand") : brand;

    const messageText = `*🔧 COOL FIX REPAIR — Service Inquiry*
━━━━━━━━━━━━━━━━━━━━
*Customer Name:* ${name.trim()}
*Phone Number:* ${phone.trim()}
*Service Required:* ${service}
*Appliance Brand:* ${selectedBrand}
*Location / Area:* ${location.trim()}
*Preferred Time Slot:* ${preferredTime}
*Issue Description:* ${issue.trim() || "Inspection & Diagnosis needed"}
━━━━━━━━━━━━━━━━━━━━
*Doorstep Visiting Charge:* ₹299 (Acknowledged)
*Warranty Requested:* 6-Month Warranty with Bill

Please confirm technician availability.`;

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.phoneInternational.replace("+", "")}?text=${encodedMessage}`;

    // Open WhatsApp in a new window/tab
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    if (onSuccess) {
      onSuccess();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="bg-sky-50 border border-sky-200 rounded-xl p-3 flex items-start gap-2.5 text-xs text-sky-900">
        <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold">Quick Doorstep Booking:</span> Visiting charge is <strong className="text-sky-950 font-bold">₹299</strong> with 6-month warranty on genuine spare parts.
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="form-name" className="block text-xs font-semibold text-slate-700 mb-1">
            Your Name <span className="text-rose-500">*</span>
          </label>
          <input
            id="form-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Rahul Sharma"
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-brand-600 focus:ring-2 focus:ring-brand-100 outline-none transition-colors"
          />
        </div>

        <div>
          <label htmlFor="form-phone" className="block text-xs font-semibold text-slate-700 mb-1">
            Phone Number <span className="text-rose-500">*</span>
          </label>
          <input
            id="form-phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="e.g. 9876543210"
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-brand-600 focus:ring-2 focus:ring-brand-100 outline-none transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="form-service" className="block text-xs font-semibold text-slate-700 mb-1">
            Service Required <span className="text-rose-500">*</span>
          </label>
          <select
            id="form-service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-brand-600 focus:ring-2 focus:ring-brand-100 outline-none transition-colors bg-white"
          >
            <option value="Refrigerator Repair">Refrigerator Repair</option>
            <option value="Washing Machine Repair">Washing Machine Repair</option>
            <option value="Microwave & Oven Repair">Microwave & Oven Repair</option>
            <option value="AC Repair & Servicing">AC Repair & Servicing</option>
          </select>
        </div>

        <div>
          <label htmlFor="form-brand" className="block text-xs font-semibold text-slate-700 mb-1">
            Appliance Brand <span className="text-rose-500">*</span>
          </label>
          <select
            id="form-brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-brand-600 focus:ring-2 focus:ring-brand-100 outline-none transition-colors bg-white"
          >
            {BUSINESS_INFO.brands.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
            <option value="Other">Other Brand</option>
          </select>
        </div>
      </div>

      {brand === "Other" && (
        <div>
          <label htmlFor="form-custom-brand" className="block text-xs font-semibold text-slate-700 mb-1">
            Specify Brand Name
          </label>
          <input
            id="form-custom-brand"
            type="text"
            value={customBrand}
            onChange={(e) => setCustomBrand(e.target.value)}
            placeholder="Enter appliance brand"
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-brand-600 focus:ring-2 focus:ring-brand-100 outline-none transition-colors"
          />
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="form-location" className="block text-xs font-semibold text-slate-700 mb-1">
            Location / Area in Mumbai, Navi Mumbai, Thane <span className="text-rose-500">*</span>
          </label>
          <input
            id="form-location"
            type="text"
            required
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g. Andheri West, Vashi, Thane..."
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-brand-600 focus:ring-2 focus:ring-brand-100 outline-none transition-colors"
          />
        </div>

        <div>
          <label htmlFor="form-time" className="block text-xs font-semibold text-slate-700 mb-1">
            Preferred Time Slot
          </label>
          <select
            id="form-time"
            value={preferredTime}
            onChange={(e) => setPreferredTime(e.target.value)}
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-brand-600 focus:ring-2 focus:ring-brand-100 outline-none transition-colors bg-white"
          >
            <option value="Morning (8:00 AM – 12:00 PM)">Morning (8:00 AM – 12:00 PM)</option>
            <option value="Afternoon (12:00 PM – 4:00 PM)">Afternoon (12:00 PM – 4:00 PM)</option>
            <option value="Evening (4:00 PM – 9:00 PM)">Evening (4:00 PM – 9:00 PM)</option>
            <option value="Urgent / Immediate Slot">Urgent / Immediate Slot</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="form-issue" className="block text-xs font-semibold text-slate-700 mb-1">
          Problem Description (Optional)
        </label>
        <textarea
          id="form-issue"
          rows={isModal ? 2 : 3}
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
          placeholder="e.g. Refrigerator not cooling, washing machine making abnormal sound, etc."
          className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:border-brand-600 focus:ring-2 focus:ring-brand-100 outline-none transition-colors resize-none"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-whatsapp-dark hover:bg-whatsapp text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2.5 shadow-md shadow-emerald-900/10 hover:shadow-lg transition-all duration-200 cursor-pointer text-sm sm:text-base active:scale-[0.99]"
      >
        <MessageSquare className="w-5 h-5" />
        <span>Open WhatsApp with Details</span>
        <Send className="w-4 h-4 ml-1" />
      </button>

      <p className="text-[11px] text-center text-slate-500">
        🔒 Directly opens WhatsApp chat with business number <strong>75068 21162</strong>. You can review before sending.
      </p>
    </form>
  );
}
