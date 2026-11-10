# Roda – Car services that come to you

An on-demand car services landing page (fuel delivery, car wash, battery, tyres, engine oil, roadside rescue) 
## Stack
Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Lucide React · Geist

## Run
```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Languages
English and Portuguese via the EN/PT switch in the header (remembers your choice, defaults to the browser language). Portuguese text lives in `lib/pt.ts` (English source text -> Portuguese); add or edit entries there. `components/Lang.tsx` applies it.

## What's inside
- Sticky nav with Services dropdown, working mobile hamburger menu, "Rescue me!" and "Download app" actions
- Hero where the headline word follows the selected service (auto-rotates, stops once you choose; respects reduced motion)
- Six alternating service cards with operating hours
- Booking form: service, area, time, name and Angolan mobile validation, with a confirmation state (demo, nothing is sent)
- Accessible FAQ accordion
- "Everything app" section with a CSS phone mockup, reviews carousel, business/fleet block
- Footer with contact details, floating WhatsApp button, app-download modal

## Structure
```
app/          layout.tsx, page.tsx, globals.css (design tokens)
components/   Home, Navbar, Hero, Services, Booking, Sections (Faq, AppSection, Reviews, Business, Footer), Modal
lib/data.tsx  Services, areas, FAQ and reviews: edit this to change content
```

## Customising
- **Brand colours:** `@theme` tokens in `app/globals.css`
- **Services / copy:** `lib/data.tsx`
- **Real images:** replace the icon tiles in `components/Services.tsx` with `next/image`
- **Bookings:** replace the `submit` handler in `components/Booking.tsx` with an API call
