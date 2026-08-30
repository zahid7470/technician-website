import type { Metadata } from "next";
import { BUSINESS_INFO } from "@/lib/constants";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact & Book Technician — COOL FIX REPAIR | Mumbai, Navi Mumbai & Thane",
  description: `Contact COOL FIX REPAIR. Call ${BUSINESS_INFO.phone} or book via WhatsApp. Doorstep repair for Refrigerator, Washing Machine, Microwave Oven & AC across Mumbai, Navi Mumbai, and Thane. ₹299 visit fee.`,
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
