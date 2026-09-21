# Moboto — Prototype

A car marketplace connecting buyers and sellers. This repo is a wireframed, desktop-only prototype used to nail down flow structure before visual design and real functionality are layered in.

## Running it

```bash
npm install
npm run dev
```

Open the printed local URL. Every screen renders inside a fixed 1280×860 desktop canvas on the right; the left panel documents why each screen exists and how it connects to the rest of the flow.

## How it's organized

- `src/data/screens.ts` — single registry of every screen: route, flow group, release (`mvp` / `r2` / `r3`), and the documentation shown in the left panel.
- `src/screens/{foundation,buyer,seller,shared}/` — one component per screen.
- `src/components/layout/` — the docs panel, screen nav, canvas frame, and the release-visibility menu.
- `src/components/app-chrome/` — the marketplace's own top nav, rendered inside the canvas.
- `src/components/ui/` — shared wireframe primitives (buttons, cards, inputs, image placeholders, stepper).

Use the **Releases** menu (top right) to show or hide Release 2 / Release 3 screens in the navigator — MVP is always visible.
