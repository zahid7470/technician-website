import type { Metadata } from "next";
import { BUSINESS_INFO } from "@/lib/constants";
import AboutUsContent from "@/components/AboutUsContent";

export const metadata: Metadata = {
  title: "About Us — COOL FIX REPAIR",
  description: "Learn about COOL FIX REPAIR. 10 Years of hands-on appliance repair experience across Mumbai, Navi Mumbai, and Thane. Genuine spare parts & 1-year warranty.",
  alternates: {
    canonical: "/about-us",
  },
};

export default function AboutUsPage() {
  return <AboutUsContent />;
}
