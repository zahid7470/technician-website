import type { Metadata } from "next";
import { BUSINESS_INFO } from "@/lib/constants";
import AboutUsContent from "@/components/AboutUsContent";

export const metadata: Metadata = {
  title: "About Us — COOL FIX REPAIR | Zaheer Ahmed Ansari",
  description: "Learn about COOL FIX REPAIR and lead technician Zaheer Ahmed Ansari. 6 years of hands-on appliance repair experience across Mumbai, Navi Mumbai, and Thane. ₹299 visit fee.",
  alternates: {
    canonical: "/about-us",
  },
};

export default function AboutUsPage() {
  return <AboutUsContent />;
}
