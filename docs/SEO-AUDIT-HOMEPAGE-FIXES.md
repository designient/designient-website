# Homepage SEO & Accessibility Audit – Fixing Plan

**Audit report:** website-audit-report-https___designient.com_.pdf  
**Date:** 10 February 2026  
**Homepage score (audit):** On-Page 85.5% | Performance 98% | Accessibility 95% | SEO 96% | Best Practices 96%

---

## Issues identified and status

### SEO (3 failed → addressed)

| Issue | Requirement | Status |
|-------|-------------|--------|
| **Title too long** | Keep under 60 characters for SERP display | **Fixed** – Shortened default title in `app/layout.tsx` and kept homepage title within limit. |
| **Description too long** | Keep under 160 characters for meta description | **Fixed** – Shortened default description in `app/layout.tsx` and homepage description in `app/page.tsx` (incl. Open Graph & Twitter). |
| **Render-blocking resources** | Reduce resources that block first paint | **Not changed** – Next.js and font `display: 'swap'` already limit blocking. Further gains would need code-splitting, critical CSS, or moving more scripts to `lazyOnload`. Optional follow-up. |

### Accessibility (2 failed → addressed)

| Issue | Requirement | Status |
|-------|-------------|--------|
| **Form inputs without labels** | Every form control must have an associated label | **Already compliant** – Hero and InquiryForm use `<label htmlFor="...">` with `className="sr-only"` so labels exist for screen readers. If the audit tool still flags this, consider making labels visible (e.g. above or beside fields) or adding `aria-label` on any custom controls. |
| **Duplicate ID attributes** | IDs must be unique in the document | **Fixed** – Hero form IDs prefixed with `hero-` (e.g. `hero-name`, `hero-email`). InquiryForm IDs prefixed with `inquiry-` (e.g. `inquiry-name`, `inquiry-email`). No duplicate IDs when both forms appear on the homepage. |

### What was already in good shape

- Canonical tag present  
- Single H1  
- Images have alt text  
- Favicon present  
- No HTTP links from HTTPS page  
- Good content rate  
- Social / Open Graph & Twitter tags  
- Structured data present  
- HTML `lang`, no deprecated elements, buttons/links/iframes with discernible text/titles  
- Indexability: no blocking, valid canonical, meta robots, page allows indexing  

---

## Files changed

1. **`app/layout.tsx`** – Shorter default `title` and `description` (≤60 and ≤160 chars).
2. **`app/page.tsx`** – Shorter `description` and OG/Twitter descriptions.
3. **`components/Hero.tsx`** – Form field IDs and label `htmlFor` updated to `hero-*`.
4. **`components/InquiryForm.tsx`** – Form field IDs and label `htmlFor` updated to `inquiry-*`.

---

## Optional follow-ups

- **Render-blocking:** Audit “20+ render blocking resources” – consider `next/dynamic` for below-the-fold sections, or review script loading in `next.config.js` and `_document`/layout if applicable.
- **Form labels:** If an auditor still reports “form inputs without labels,” ensure `CountryCodeSelect` (and any other custom controls) have either a visible label or `aria-label` / `aria-labelledby`.
- Re-run the same audit after deploy to confirm scores and that no new issues appear.
