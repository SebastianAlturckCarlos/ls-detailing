# LS Detailing — Website

Dark-themed single-page marketing site for LS Detailing (Junction City, KS).
Built with Vite + React, Tailwind CSS v4, Framer Motion, and react-compare-slider.

## Run locally

```bash
npm install
npm run dev      # dev server at http://localhost:5173
npm run build    # production build → dist/
npm run preview  # serve the production build locally
```

## Where things live

- `src/config.js` — **all business info in one place**: phone, address, socials,
  service areas, and the quote-form email. Edit here, it updates site-wide.
- `src/components/` — one file per section (Navbar, Hero, Marquee, Services,
  BeforeAfter, Quote, Footer).
- `public/images/` — before/after photos and the hero shot. Add new before/after
  pairs to the `jobs` array in `src/components/BeforeAfter.jsx`.
- Pricing lives in the `packages` array in `src/components/Services.jsx`.

## Quote-form email automation (one-time setup)

The form uses [FormSubmit](https://formsubmit.co) — free, no account, no backend.

1. In `src/config.js`, replace `quoteEmail: 'REPLACE_ME@example.com'` with
   Luis's real email address.
2. Deploy (or run locally) and submit the form once. FormSubmit emails a
   one-time confirmation link to that address — click it.
3. Done. Every quote request now arrives as a formatted email (name, phone,
   vehicle, package, notes). Most carriers also let you forward email to SMS
   if he wants texts.

**Until the email is configured**, the form automatically falls back to opening
a pre-filled text message to (787) 932-8915 on the customer's phone, so no
lead is lost in the meantime.

## Before launch — checklist

- [ ] Set the real quote email in `src/config.js` (see above)
- [ ] Replace the Facebook search link in `src/config.js` with the exact
      page URL for "Luis Detailing"
- [ ] Add the real Instagram profile URL in `src/config.js` (it's also linked
      from the Before & After section)
- [ ] Deploy: `dist/` is fully static — drop it on Netlify, Vercel, or
      Cloudflare Pages (all free). `npm run build`, then upload/connect repo.
