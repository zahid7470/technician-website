You are a **Senior Next.js Developer, Technical SEO Engineer, Local SEO Specialist, Web Performance Engineer, Accessibility Engineer, and UI/UX Developer**.

Build a **production-ready, highly SEO-optimized, fast, accessible, mobile-first static website** for **COOL FIX REPAIR**, using modern Next.js architecture and optimized specifically for **Cloudflare deployment**.

## 1. BUSINESS INFORMATION — SOURCE OF TRUTH

Use the following information throughout the website. **Do not invent or fabricate any business claims, reviews, ratings, certifications, addresses, pricing, experience, or services.**

**Person:** Zaheer Ahmed Ansari
**Business:** COOL FIX REPAIR
**Phone:** 75068 21162
**Email:** [coolfixrepair01@gmail.com](mailto:coolfixrepair01@gmail.com)
**Visiting Charges:** ₹299

### Services

* All-brand Refrigerator Repair
* All-brand Washing Machine Repair
* All-brand Oven Repair
* AC Repair

### Experience & Parts

* Qualified & experienced technicians
* 6 years technician experience
* Genuine spare parts used

### Service Areas

* Mumbai — all areas
* Primary focus: South Mumbai and Western Mumbai
* Navi Mumbai — all locations
* Thane

### Availability

* Regular service: 8:00 AM – 9:00 PM
* Complaints can be registered 24×7

### Brands

Samsung, Whirlpool, LG, Bosch, Siemens, Godrej, Haier, BPL, IFB, Amazon, and all brands.

### Warranty

* 6-month warranty with proper bill
* 1-year warranty option available if the customer wants it

### Reviews / Testimonials

There are currently no written testimonials. Customers have verbally told the office that the service is good, fast, and technicians are good. **Do not present these as fabricated written reviews, star ratings, or named testimonials.**

No technician/business photographs are currently available. Use the provided business logo where appropriate.

---

## 2. WEBSITE STRUCTURE

Create exactly these primary pages:

* `/` — Home
* `/services` — Services
* `/about-us` — About Us
* `/contact` — Contact

Create a clear navigation system connecting all pages.

The website should feel like a **professional local appliance-repair business**, with strong conversion-focused CTAs for **Call** and **WhatsApp**.

---

## 3. DESIGN & UX

Create a modern, trustworthy, professional repair-service website.

Requirements:

* Fully responsive/mobile-first
* Excellent typography and visual hierarchy
* Clear service sections
* Strong above-the-fold CTA
* Prominent **Call Now** and **WhatsApp** buttons
* Sticky/floating mobile CTA where appropriate
* Smooth scrolling
* Subtle professional animations
* Use **Framer Motion** for meaningful entrance, reveal, hover, and scroll animations
* Animations must not negatively affect accessibility or Core Web Vitals
* Respect `prefers-reduced-motion`
* Do not overuse animations

Use the supplied COOL FIX REPAIR logo.

---

## 4. WHATSAPP LEAD FORM

Implement a client-side WhatsApp inquiry flow with **no API/backend required**.

When the user clicks WhatsApp, provide a short repair inquiry form collecting useful information such as:

* Customer name
* Phone number
* Service required
* Brand
* Problem/issue
* Location/area
* Preferred time

After submission, dynamically generate a properly encoded WhatsApp message and open WhatsApp using the business number **7506821162**.

The message should be pre-filled with the customer's submitted information.

Do not automatically send the message. WhatsApp should open with the message ready for the customer to send.

The **Call Now** button must use the `tel:` protocol with the business phone number.

---

## 5. LOCAL SEO — HIGH PRIORITY

The website must be aggressively optimized for **legitimate local SEO**, without keyword stuffing.

Naturally target relevant search intent around:

* refrigerator repair in Mumbai
* refrigerator repair Mumbai
* washing machine repair in Mumbai
* washing machine repair Mumbai
* oven repair in Mumbai
* AC repair in Mumbai
* appliance repair Mumbai
* refrigerator repair South Mumbai
* appliance repair South Mumbai
* appliance repair Western Mumbai
* refrigerator repair Navi Mumbai
* washing machine repair Navi Mumbai
* appliance repair Navi Mumbai
* appliance repair Thane
* AC repair Thane
* refrigerator repair Thane

Also naturally incorporate relevant **brand + service + location** combinations where genuinely useful.

Use keywords naturally in:

* Page titles
* Meta descriptions
* H1/H2 headings where appropriate
* Visible service content
* Image alt text when descriptive
* Internal links
* Structured data where applicable

**Do not keyword stuff, hide keywords, or create unnatural repetitive text.**

---

## 6. TECHNICAL SEO

Use the Next.js Metadata API.

Every indexable page must have:

* Unique SEO title
* Unique meta description
* Canonical URL
* Open Graph metadata
* Appropriate robots metadata
* Correct heading hierarchy
* Semantic HTML
* Crawlable internal links

Create:

* `app/sitemap.ts`
* `app/robots.ts`

Use `NEXT_PUBLIC_SITE_URL` for the production domain rather than inventing a domain.

Ensure all important pages are included in the sitemap.

---

## 7. STRUCTURED DATA

Implement accurate Schema.org JSON-LD based only on supplied business information.

Use appropriate local-business/service schemas where applicable.

Business data must accurately represent:

* COOL FIX REPAIR
* Phone
* Email
* Services
* Service areas
* Visiting charge where appropriate
* Opening/availability information where appropriate

**Never fabricate:**

* Star ratings
* Review counts
* Customer testimonials
* Street address
* Coordinates
* Certifications
* Awards
* Business registration information
* Unsupported claims

---

## 8. PERFORMANCE & CLOUDflare

The website is a **static website with no API calls, database, authentication, CMS, or server-side data fetching**.

Optimize specifically for **Cloudflare deployment**.

Requirements:

* Static generation wherever possible
* No unnecessary server runtime
* No API routes
* No external API calls
* Minimal JavaScript
* Prefer Server Components
* Use Client Components only for genuinely interactive features such as WhatsApp form, mobile menu, and Framer Motion interactions
* Avoid unnecessary dependencies
* Optimize images with `next/image` where appropriate
* Optimize fonts
* Prevent layout shifts
* Lazy-load non-critical media
* Minimize network requests
* Keep JavaScript bundles small
* Avoid unnecessary hydration

The architecture must be suitable for deployment through Cloudflare's Next.js hosting/deployment ecosystem.

---

## 9. CORE WEB VITALS

Optimize toward excellent:

* LCP
* INP
* CLS
* FCP
* TTFB
* Total Blocking Time

Target Lighthouse:

* Performance: 90+
* Accessibility: 90+
* Best Practices: 90+
* SEO: 90+

Never manipulate metrics or sacrifice usability to achieve scores.

---

## 10. ACCESSIBILITY

Use semantic HTML and ensure:

* Keyboard navigation
* Accessible forms
* Proper labels
* Visible focus states
* Correct heading hierarchy
* Accessible buttons and links
* Descriptive image alt text
* Sufficient contrast
* Mobile-friendly touch targets
* Screen-reader compatibility
* `prefers-reduced-motion` support

Use ARIA only when necessary.

---

## 11. AI / SEARCH CRAWLER READINESS

Make all important business information available in crawlable HTML.

Create:

* `/llms.txt`
* `/llms-full.txt`

These must contain only accurate information supplied for COOL FIX REPAIR.

Ensure:

* Important content does not depend entirely on JavaScript
* Normal HTML links are used
* Pages are easily crawlable
* No accidental `noindex`
* Robots configuration does not unnecessarily block legitimate crawlers
* Sitemap and canonical URLs are correct
* Information architecture is clear

---

## 12. CONTENT RULE

You may write professional website copy **using only the supplied business facts**.

You may organize, structure, and naturally phrase the information for the website and SEO.

However, **never invent factual claims**.

Do not fabricate:

* Reviews
* Ratings
* Testimonials
* Years beyond 6 years
* Addresses
* Guarantees beyond the stated warranty
* Certifications
* Awards
* Technician numbers
* Response-time guarantees
* Pricing other than ₹299 visiting charge
* Additional services
* Unsupported business claims

---

## 13. FINAL QUALITY CHECK

Before finishing:

1. Verify all four routes.
2. Verify navigation.
3. Verify Call buttons.
4. Verify WhatsApp form and pre-filled message.
5. Verify mobile responsiveness.
6. Verify animations.
7. Verify metadata on every page.
8. Verify canonical URLs.
9. Verify sitemap.
10. Verify robots.txt.
11. Verify structured data.
12. Verify `llms.txt` and `llms-full.txt`.
13. Run build/type/lint checks.
14. Check for broken links.
15. Check console errors.
16. Check accessibility.
17. Optimize Lighthouse/Core Web Vitals.
18. Confirm there are **no API calls or unnecessary dynamic dependencies**.
19. Confirm the website is suitable for Cloudflare deployment.
20. Confirm all business information matches the source information exactly.

### PRIORITY ORDER

1. Accurate business information
2. Conversion and usability
3. Mobile experience
4. Local SEO
5. Technical SEO
6. Accessibility
7. Performance/Core Web Vitals
8. Cloudflare deployment compatibility
9. AI/search crawler discoverability
10. Maintainable Next.js architecture

Build the website as a **real production business website**, not as a generic template or portfolio.
