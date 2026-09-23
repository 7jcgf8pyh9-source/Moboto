# Moboto — Prototype

A car marketplace connecting buyers and sellers. Moboto is a **mobile-only app** — this repo is a wireframed mobile prototype used to nail down flow structure before visual design and real functionality are layered in. The prototype itself is viewed in a desktop browser, but only as a wrapper: the actual app UI renders inside a fixed phone frame, with a documentation panel alongside it explaining the flow.

## Running it

```bash
npm install
npm run dev
```

Open the printed local URL. Every screen renders inside a fixed 390×844 phone frame (status bar, home indicator, bottom tab bar) on the right; the left panel documents why each screen exists and how it connects to the rest of the flow.

## How it's organized

- `src/data/screens.ts` — single registry of every screen: route, flow group, release (`mvp` / `r2` / `r3`), and the documentation shown in the left panel.
- `src/screens/{foundation,buyer,seller,shared}/` — one component per screen, built mobile-first (single column, full-width touch targets, bottom sheets, sticky bottom CTAs).
- `src/components/layout/` — the docs panel, screen nav, phone frame, and the release-visibility menu.
- `src/components/app-chrome/` — the marketplace app's own mobile chrome: header (back button/title), bottom tab bar (Home/Saved/Sell/Inbox/Account), icons.
- `src/components/ui/` — shared wireframe primitives (buttons, cards, inputs, image placeholders, bottom sheet, mobile step indicator).

Use the **Releases** menu (top right, in the desktop wrapper) to show or hide Release 2 / Release 3 screens in the navigator and bottom tab bar — MVP is always visible.
