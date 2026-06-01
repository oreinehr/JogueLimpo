# Jogue Limpo com Capão — Design System

A complete, accessible and scalable design system for **Jogue Limpo com Capão**, a
civic environmental initiative for waste collection, recycling, environmental
education and public awareness in the city of Capão. The system is built to feel
like a **modern city hall / environmental-impact gov-tech platform**: trustworthy,
clean, optimistic and community-driven.

> **Source material provided:** a single brand asset — `uploads/Logo_Capao.png`
> (the rising-sun-over-water-and-leaves emblem). No codebase, Figma file or existing
> product screens were supplied. Every token, component and screen in this system was
> derived from the logo's color story and the written brand brief. If a production
> codebase or Figma file exists, re-attach it so the UI kits can be reconciled with
> the real product.

---

## 1. Brand Foundation

- **Missão (Mission)** — Tornar o descarte correto de resíduos simples e acessível
  para todos, promovendo reciclagem, limpeza urbana e a preservação ambiental de Capão.
- **Visão (Vision)** — Uma cidade onde cada morador, escola e empresa participa
  ativamente de um ciclo sustentável de resíduos — água limpa, ruas limpas, futuro limpo.
- **Valores (Values)** — Sustentabilidade · Confiança · Educação · Comunidade ·
  Transparência · Positividade · Modernidade.
- **Posicionamento (Positioning)** — A plataforma pública oficial que conecta moradores,
  cooperativas e a prefeitura em torno de uma cidade mais limpa. Não é uma ONG distante
  nem um app frio de protocolo — é **prática, próxima e confiável**.
- **Personalidade** — Sustentável, confiável, educativa, comunitária, moderna, positiva,
  transparente.
- **Público-alvo** — Moradores, famílias, estudantes, empresas locais, cooperativas de
  reciclagem e órgãos públicos.

---

## 2. Content Fundamentals (voz e tom)

The voice is **clear, warm and civic** — a friendly city service, never bureaucratic.

- **Language:** Portuguese (pt-BR). All product copy, labels and dates are in Portuguese.
- **Person:** Speak directly to the citizen using **você** ("Solicitar coleta",
  "Você sabia?", "Agende a coleta"). Warm and inclusive, never the cold institutional "o cidadão deverá".
- **Casing:** Sentence case for body and most UI. Headings use sentence case too
  ("Cidade limpa começa em casa"). Reserve UPPERCASE only for short overlines / eyebrows
  ("EDUCAÇÃO AMBIENTAL") with wide letter-spacing.
- **Tone:** Optimistic and action-oriented. Lead with the helpful action ("Agendar",
  "Saiba mais"), follow with a short benefit. Educate without lecturing.
- **Length:** Short. Card bodies 1–2 lines. Buttons are verbs ("Solicitar coleta",
  "Agendar", "Saiba mais", "Cancelar").
- **Emoji:** **Not used.** The brand expresses warmth through color, soft shapes and
  iconography — not emoji. (Avoids a juvenile tone unsuited to a public platform.)
- **Numbers & stats:** Use Brazilian formatting (12,4 t — comma decimal). Pair every
  stat with a plain-language label and, when relevant, a trend ("+18% vs. abril").
- **Example microcopy:**
  - CTA: *"Solicitar coleta"* · *"Agende a coleta"* · *"Ver dias de coleta"*
  - Success: *"Coleta confirmada — sua solicitação foi agendada para quinta-feira."*
  - Educational: *"Você sabia? Pilhas e baterias precisam de pontos de coleta específicos."*

---

## 3. Visual Foundations

**Color vibe.** The whole palette is pulled directly from the logo: deep **navy**
(#093660, clean water + trust), bright **teal** (#0A7E9B, sustainability + innovation),
**forest green** (#064C34, nature) and **olive** (#717441, earth + responsibility).
Teal is the primary action color; green is the secondary/eco color; olive is an earthy
accent. Backgrounds are predominantly white and a very light cool gray (`--gray-50`),
keeping the feel clean and trustworthy. Navy is the default ink color for text.

**Type.** Headings in **Plus Jakarta Sans** (geometric, friendly, modern — civic but
warm), body in **Mulish** (highly legible, soft terminals, excellent for accessibility).
Headings are tight (negative tracking on large sizes); body is generous (1.6 line-height).
See `colors_and_type.css` for the full semantic scale (H1–H6, body L/M/S, caption, overline).

**Shape language.** Organic and friendly, echoing the logo's flowing sun/water/leaf
forms. Generous corner radii: cards use `--radius-lg` (16px), buttons are fully **pill**
shaped (`--radius-pill`), inputs use `--radius-md` (10px). Avoid hard 0px corners.

**Backgrounds.** Mostly flat white / light gray. **Gradients are used sparingly** and
only as a brand device — a teal→green diagonal on campaign headers / hero panels
(`linear-gradient(135deg, var(--primary-500), var(--secondary-600))`). No noisy textures,
no purple gradients, no glassmorphism by default. Full-bleed photography is encouraged in
heroes (see Photography Direction).

**Cards.** White surface, 1px `--border` (gray-200), `--radius-lg`, soft `--shadow-sm`.
Hoverable cards lift with `translateY(-2px)` + `--shadow-lg`. No colored-left-border cards.

**Elevation / shadows.** Soft and **navy-tinted** (`rgba(9,54,96,…)`) rather than pure
black, so shadows feel like cool daylight. Four steps: sm / md / lg / xl.

**Borders.** 1px gray-200 for resting separators; 1.5px gray-300 for input borders
(crisper, more tactile). Focus rings are a 3px `--primary-100` halo + teal border.

**Motion.** Calm and purposeful. 200ms `--ease-out` default for color/shadow; 120ms for
press feedback. **No bounces.** Buttons scale to 0.97 on `:active`. Cards translate up on
hover. Respect `prefers-reduced-motion` in production.

**Hover states.** Filled buttons darken one step (500→600→700) and gain `--shadow-md`.
Outline/ghost buttons fill with `--primary-50`. Links go `--primary-600`. Press states
darken further and shrink slightly (0.97).

**Transparency & blur.** Used lightly — translucent white badges over gradient headers
(`rgba(255,255,255,.9)`), and a blurred sticky top-nav in the landing page. Not a
dominant motif.

**Layout.** 12-column grid on desktop (max container ~1200px, 24px gutter, 24–32px
margins). Sticky translucent header. Generous vertical rhythm using the 8px spacing scale.

---

## 4. Iconography

- **Library:** **[Lucide](https://lucide.dev)** — loaded from CDN
  (`https://unpkg.com/lucide@latest/dist/umd/lucide.js`, then `lucide.createIcons()`).
- **Style:** Rounded, outline, 2px stroke, friendly and simple — matches the brief's ask
  for "Rounded / Outline / Sustentável / Simples / Amigável". Icons inherit `currentColor`,
  usually `--primary-700` on light surfaces.
- **Common glyphs:** `recycle`, `leaf`, `trash-2`, `truck`, `calendar-check`, `map-pin`,
  `sprout`, `droplets`, `sun`, `trees`, `graduation-cap`, `megaphone`, `bell`, `users`,
  `bar-chart-3`, `route`, `clipboard-list`, `package`, `trending-up`, `heart-handshake`.
- **Emoji:** never used as icons. **Unicode chars** are not used as icons either.
- **SVG/PNG:** the only raster brand asset is the logo (`assets/logo-capao.png`, with a
  white-background original at `assets/logo-capao-original.png`). All other iconography is
  vector via Lucide.
- *Substitution flag:* No proprietary icon set was provided, so Lucide (closest match to
  the requested rounded-outline-friendly style) is used as the system icon library. Swap
  for a bespoke set later if desired.

---

## 5. Accessibility

- Targets **WCAG 2.1 AA**. Body text (navy `#093660` / gray-700 on white) far exceeds
  4.5:1. Primary teal `#0A7E9B` on white passes AA for large text and UI; for small text
  on teal use white (passes). Use `--primary-700`/`--navy` for small text on light tints.
- Focus is always visible (3px teal halo). Hit targets ≥ 44px on touch surfaces; pill
  buttons meet this at default `btn` size.
- Clear type hierarchy, semantic headings, labelled inputs with hint/error text bound to
  fields. Color is never the only signal — alerts and field states pair color with an icon
  and text.

---

## Index — what's in this system

| File | What it is |
|---|---|
| `README.md` | This document — context, brand, content & visual foundations, iconography, a11y. |
| `SKILL.md` | Agent Skill manifest so this system can be used inside Claude Code. |
| `colors_and_type.css` | **Source of truth** for all design tokens: color scales, semantic colors, fonts, type scale, spacing, radius, shadows, motion. |
| `components.css` | Reusable component styles: buttons, inputs, badges, alerts, cards. |
| `assets/` | Brand assets: `logo-capao.png` (transparent bg), `logo-capao-original.png` (white bg). |
| `preview/` | Design System cards (colors, type, spacing, radius, elevation, components, badges, alerts, logo, icons). Self-contained HTML — CSS is inlined. |
| `ui_kits/landing-page/` | Hi-fi clickable recreation of the public Landing Page. |
| `ui_kits/admin-dashboard/` | Hi-fi recreation of the Administrative Dashboard. |

> **Important build note:** the preview environment does **not** serve external `<link>`
> stylesheets, so every HTML file in `preview/` and `ui_kits/` **inlines** the contents of
> `colors_and_type.css` / `components.css` inside a `<style>` block. The two root `.css`
> files remain the canonical source — edit them, then re-inline. For production React/Next.js
> you would import the CSS normally.

---

## Using in React / Next.js

Tokens map cleanly to CSS variables (drop `colors_and_type.css` + `components.css` into
your global styles), or convert to a Tailwind theme / Figma variables. Component classes
(`.btn .btn-primary`, `.input`, `.badge-reciclavel`, `.alert-success`, `.card`) are
framework-agnostic and can back React components directly.
# JogueLimpo
