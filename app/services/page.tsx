import type { Metadata } from "next";
import { BUSINESS_INFO } from "@/lib/constants";
import ServicesContent from "@/components/ServicesContent";

export const metadata: Metadata = {
  title: "Appliance Repair Services in Mumbai, Navi Mumbai & Thane — COOL FIX REPAIR",
  description: "Doorstep repair services for Refrigerators, Washing Machines, Microwave Ovens & ACs across Mumbai, Navi Mumbai & Thane. ₹299 visit charge, genuine parts & 1-year warranty.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
