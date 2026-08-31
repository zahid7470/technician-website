import { BUSINESS_INFO, SITE_URL } from "@/lib/constants";

export default function JsonLd() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HomeAndConstructionBusiness",
        "@id": `${SITE_URL}/#business`,
        "name": BUSINESS_INFO.name,
        "founder": {
          "@type": "Person",
          "name": BUSINESS_INFO.owner,
          "jobTitle": "Lead Technician",
        },
        "telephone": BUSINESS_INFO.phoneInternational,
        "email": BUSINESS_INFO.email,
        "url": SITE_URL,
        "logo": `${SITE_URL}/logo.svg`,
        "image": `${SITE_URL}/logo.svg`,
        "description": "Doorstep all-brand appliance repair service in Mumbai, Navi Mumbai, and Thane. Expert repair for Refrigerators, Washing Machines, Microwave Ovens, and ACs with 1-year warranty and ₹299 visiting charge.",
        "priceRange": "₹299 (Doorstep Visiting Charge)",
        "areaServed": [
          {
            "@type": "City",
            "name": "Mumbai",
          },
          {
            "@type": "City",
            "name": "Navi Mumbai",
          },
          {
            "@type": "City",
            "name": "Thane",
          },
        ],
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            "opens": "08:00",
            "closes": "21:00",
          },
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Appliance Repair Services",
          "itemListElement": BUSINESS_INFO.services.map((svc, idx) => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": svc.title,
              "description": svc.fullDescription,
              "provider": {
                "@type": "LocalBusiness",
                "name": BUSINESS_INFO.name,
                "telephone": BUSINESS_INFO.phoneInternational,
              },
            },
            "price": "299",
            "priceCurrency": "INR",
            "position": idx + 1,
          })),
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
