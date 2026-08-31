import type { Metadata } from "next";
import Hero from "@/components/Hero";
import BrandStrip from "@/components/BrandStrip";
import ServicesSection from "@/components/ServicesSection";
import ServiceAreaMatrix from "@/components/ServiceAreaMatrix";
import ProcessSteps from "@/components/ProcessSteps";
import TrustPillars from "@/components/TrustPillars";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { BUSINESS_INFO, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "COOL FIX REPAIR | Doorstep Appliance Repair Mumbai, Navi Mumbai & Thane (₹299 Visit)",
  description: `Doorstep refrigerator repair, washing machine repair, microwave oven repair & AC repair in Mumbai, Navi Mumbai & Thane. ₹299 visiting charge, 1-year warranty with proper bill. Call ${BUSINESS_INFO.phone}.`,
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandStrip />
      <ServicesSection />
      <ProcessSteps />
      <TrustPillars />
      <ServiceAreaMatrix />
      <FAQSection />
      <CTASection />
    </>
  );
}
