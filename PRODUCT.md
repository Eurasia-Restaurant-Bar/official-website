# Product

## Register

product

## Users

Eurasia Restaurant & Bar staff and the owner, managing the restaurant's own website. They use the admin tool occasionally — updating prices, adding a seasonal item, checking incoming reservations — not as a constant daily workflow. Critically, they often do this from a phone or tablet at the restaurant, not a desk, so touch ergonomics and small-screen clarity matter as much as desktop layout.

## Product Purpose

A small internal admin panel (behind a password) for a single restaurant's marketing site. Two jobs: (1) manage the public menu — categories and items, including creating/reordering/deleting whole categories — and (2) review incoming reservation requests. Success looks like a non-technical restaurant owner completing an edit (e.g. "raise the price of Chicken Momo," "add a new drink," "add a Desserts category") in a few taps without confusion, on any device.

## Brand Personality

Plain, fast, low-friction. This is a utility screen, not a showcase — it should feel like a clean, obvious form, not an extension of the restaurant's warm/editorial public-facing brand. Confidence comes from clarity (what will this button do?) not decoration.

## Anti-references

Not a dense spreadsheet-style form where every field for every row is editable inline at once — that's the current state and it's the problem being fixed. Not over-styled or playful; this isn't the public site. Avoid anything that requires horizontal scrolling on a phone.

## Design Principles

- Read mode by default, edit mode on demand — don't show 8 live input fields per menu item when the owner just wants to glance at the list.
- Every primary action reachable with a thumb on a phone-width screen: adequate tap targets, no reliance on hover.
- One clear action per control — no ambiguous icon-only buttons without a label or accessible name.
- Destructive actions (delete item, delete category) get a confirmation step; nothing catastrophic behind a single accidental tap.
- Progressive disclosure over information density: collapse what isn't being actively edited.

## Accessibility & Inclusion

No specific WCAG level requested. Default to WCAG AA: ≥4.5:1 text contrast, visible focus states, labeled form controls (no icon-only buttons without aria-label), touch targets ≥44px given the phone/tablet-first usage.
