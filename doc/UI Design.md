# UI Design System
## Web + Mobile App — Complete Implementation Guide

---

## Table of Contents

1. [Visual Identity](#1-visual-identity)
2. [Color Palette](#2-color-palette)
3. [Typography](#3-typography)
4. [Spacing System](#4-spacing-system)
5. [Border Radius & Shadows](#5-border-radius--shadows)
6. [Icons & Images](#6-icons--images)
7. [Components](#7-components)
8. [Web Layout (Desktop)](#8-web-layout-desktop)
9. [Mobile App Layout (PWA)](#9-mobile-app-layout-pwa)
10. [Navigation](#10-navigation)
11. [Animations & Motion](#11-animations--motion)
12. [Responsive Breakpoints](#12-responsive-breakpoints)
13. [CSS Variables](#13-css-variables)
14. [PWA Setup](#14-pwa-setup)

---

## 1. Visual Identity

### Design Personality

| Trait | Description |
|-------|-------------|
| **Mood** | Dark & premium on splash/hero · Clean & airy on inner screens |
| **Feel** | Modern professional — not corporate, not casual |
| **Voice** | Confident, minimal, trustworthy |
| **Key Look** | Black + White + Single teal accent · Pill shapes · Cut-out photos bleeding off cards |

### Two Themes That Work Together

```
DARK THEME           →   Used for: Hero sections, Splash screen, Headers
────────────────────────────────────────────────────────
Background:  #0D0D1A  (near-black navy)
Text:        #FFFFFF
Accent glow: Teal radial gradient

LIGHT THEME          →   Used for: All inner pages, Cards, Dashboard
────────────────────────────────────────────────────────
Background:  #F4F4F6  (off-white gray)
Cards:       #FFFFFF
Text:        #111111
```

---

## 2. Color Palette

### Full Color Tokens

```css
/* ── Backgrounds ──────────────────────────────── */
--bg-dark:          #0D0D1A;    /* Dark hero / splash */
--bg-dark-mid:      #131325;    /* Slightly lighter dark section */
--bg-light:         #F4F4F6;    /* App/page background */
--bg-surface:       #FFFFFF;    /* Cards, modals, panels */
--bg-surface-soft:  #F9F9FB;    /* Subtle alternate surface */

/* ── Text ─────────────────────────────────────── */
--text-primary:     #111111;    /* Headings, important text */
--text-secondary:   #555555;    /* Body text, descriptions */
--text-muted:       #999999;    /* Labels, meta info, placeholders */
--text-on-dark:     #FFFFFF;    /* Text on dark backgrounds */
--text-on-dark-dim: rgba(255,255,255,0.60);  /* Dimmed on dark */

/* ── Accent (use sparingly) ───────────────────── */
--accent:           #5BC8C5;    /* Primary teal accent */
--accent-hover:     #3AABA8;    /* Teal hover state */
--accent-light:     #D6F4F2;    /* Soft teal — chips, tags */
--accent-glow:      rgba(91, 200, 197, 0.25); /* Glow behind illustrations */

/* ── Feature / Banner ─────────────────────────── */
--feature-bg:       #7ED6D6;    /* Teal-cyan feature card bg */
--feature-text:     #0D3333;    /* Dark text on feature cards */

/* ── Buttons ──────────────────────────────────── */
--btn-primary-bg:   #111111;    /* Main CTA button */
--btn-primary-text: #FFFFFF;
--btn-ghost-border: #DDDDDD;    /* Outlined button border */
--btn-ghost-text:   #111111;

/* ── UI Scaffolding ───────────────────────────── */
--border:           #EBEBEB;    /* Dividers, card borders */
--border-dark:      rgba(255,255,255,0.10); /* Dividers on dark bg */
--chip-bg:          #F0F0F0;    /* Default chip background */
--chip-text:        #333333;
--selected-bg:      #111111;    /* Selected state (calendar, tabs) */
--selected-text:    #FFFFFF;

/* ── Status Colors ────────────────────────────── */
--success:          #22C55E;
--warning:          #F59E0B;
--error:            #EF4444;
--info:             #3B82F6;
```

### Usage Rules

```
✅ DO
  - Use --accent only for 1–2 highlight elements per screen
  - Use --btn-primary-bg (#111111) for all primary CTAs
  - Keep backgrounds either --bg-dark OR --bg-light, never mixed on same screen
  - Use --bg-surface (white) exclusively for card interiors

❌ DON'T
  - Don't use teal for text — only for backgrounds/borders/icons
  - Don't use more than one accent color
  - Don't put colored buttons — black only for CTA
  - Don't use pure white (#FFF) as page background — use --bg-light
```

---

## 3. Typography

### Font Choice

```
Display / Headings:   "Sora" — Bold, geometric, modern
                      Google Fonts: https://fonts.google.com/specimen/Sora

Body / UI Text:       "DM Sans" — Clean, readable, professional
                      Google Fonts: https://fonts.google.com/specimen/DM+Sans
```

```html
<!-- Add to your <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
```

```css
--font-display: 'Sora', sans-serif;
--font-body:    'DM Sans', sans-serif;
```

### Type Scale

| Token | Size (Desktop) | Size (Mobile) | Weight | Usage |
|-------|---------------|---------------|--------|-------|
| `--text-hero` | 64px | 38px | 800 | Hero headline, splash screen |
| `--text-display` | 48px | 30px | 700 | Section headings |
| `--text-h1` | 36px | 26px | 700 | Page title |
| `--text-h2` | 28px | 22px | 700 | Card titles, lawyer names |
| `--text-h3` | 22px | 18px | 600 | Sub-section titles |
| `--text-h4` | 18px | 16px | 600 | Card headings |
| `--text-price` | 40px | 34px | 800 | Price display |
| `--text-body-lg` | 16px | 15px | 400 | Primary body text |
| `--text-body` | 14px | 13px | 400 | Secondary body text |
| `--text-sm` | 13px | 12px | 400 | Meta, captions |
| `--text-xs` | 11px | 10px | 500 | Labels, uppercase tags |
| `--text-btn` | 15px | 14px | 600 | Button text |
| `--text-nav` | 11px | 10px | 500 | Navigation labels |

### Text Styles

```css
/* Hero headline */
.text-hero {
  font-family: var(--font-display);
  font-size: clamp(38px, 6vw, 64px);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -1.5px;
}

/* Section heading */
.text-display {
  font-family: var(--font-display);
  font-size: clamp(28px, 4vw, 48px);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.5px;
}

/* Eyebrow label (above headline) */
.text-eyebrow {
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  color: var(--text-muted);
}

/* Body text */
.text-body {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.65;
  color: var(--text-secondary);
}

/* Price */
.text-price {
  font-family: var(--font-display);
  font-size: clamp(34px, 3vw, 40px);
  font-weight: 800;
  color: var(--text-primary);
  line-height: 1;
}
```

---

## 4. Spacing System

### Base Unit: 4px

```css
--space-1:   4px
--space-2:   8px
--space-3:   12px
--space-4:   16px
--space-5:   20px
--space-6:   24px
--space-8:   32px
--space-10:  40px
--space-12:  48px
--space-16:  64px
--space-20:  80px
--space-24:  96px
--space-32:  128px
```

### Layout Gutters

| Context | Value |
|---------|-------|
| Mobile screen padding | `20px` |
| Tablet screen padding | `32px` |
| Desktop screen padding | `80px` (or `max-width: 1280px` centered) |
| Card internal padding | `20px–24px` |
| Section vertical gap | `80px` (desktop) / `48px` (mobile) |
| Component gap | `24px` |
| Inline element gap | `8px–12px` |

### Desktop Container

```css
.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 80px;
}

@media (max-width: 1024px) { .container { padding: 0 40px; } }
@media (max-width: 768px)  { .container { padding: 0 20px; } }
```

---

## 5. Border Radius & Shadows

### Radius Scale

```css
--radius-xs:   6px;    /* Tags, tiny chips */
--radius-sm:   10px;   /* Small cards, inputs */
--radius-md:   16px;   /* Stats boxes, date chips */
--radius-lg:   20px;   /* Standard cards */
--radius-xl:   28px;   /* Feature cards, large panels */
--radius-2xl:  40px;   /* Hero image containers */
--radius-full: 9999px; /* Pills: buttons, badges */
```

### Where Each Radius Is Used

| Element | Radius |
|---------|--------|
| Primary button | `--radius-full` |
| Ghost button | `--radius-full` |
| Badge / tag | `--radius-full` |
| Standard card | `--radius-lg` (20px) |
| Feature banner | `--radius-xl` (28px) |
| Stats row box | `--radius-md` (16px) |
| Date picker chip | `--radius-md` (16px) |
| Input field | `--radius-sm` (10px) |
| Avatar circle | `--radius-full` |
| Round icon button | `--radius-full` |
| Image on profile card | `--radius-lg` on container |
| Desktop nav | `0` or `--radius-full` for pill nav |

### Shadow System

```css
/* Subtle card — default */
--shadow-xs:  0 1px 4px rgba(0,0,0,0.04), 0 2px 8px rgba(0,0,0,0.04);

/* Standard card */
--shadow-sm:  0 2px 8px rgba(0,0,0,0.05), 0 4px 20px rgba(0,0,0,0.06);

/* Elevated card / hover */
--shadow-md:  0 8px 24px rgba(0,0,0,0.08), 0 16px 40px rgba(0,0,0,0.08);

/* Modal / dropdown */
--shadow-lg:  0 20px 60px rgba(0,0,0,0.12), 0 8px 24px rgba(0,0,0,0.08);

/* Dark CTA button */
--shadow-btn: 0 4px 16px rgba(0,0,0,0.20), 0 2px 6px rgba(0,0,0,0.12);

/* Bottom navigation */
--shadow-nav: 0 -2px 20px rgba(0,0,0,0.06), 0 -1px 4px rgba(0,0,0,0.04);

/* Teal glow (accent elements) */
--shadow-glow: 0 0 40px rgba(91,200,197,0.30);
```

---

## 6. Icons & Images

### Icon Style

```
Library:     Lucide Icons (https://lucide.dev) — consistent stroke icons
Style:       Outlined / Stroke, NO filled icons except for active nav states
Stroke:      1.75px
Sizes:       16px (inline/meta)  20px (default)  24px (nav)  28px (feature)
Color:       --text-primary on light bg
             #FFFFFF on dark bg
             --text-muted for secondary/decorative
```

### Icon Button (Round)

```
Size:             44px × 44px  (min touch target)
Border-radius:    50%
Background:       #FFFFFF  (on light bg)
                  rgba(255,255,255,0.12) (on dark bg — frosted)
Border:           none  OR  1px solid var(--border)
Shadow:           var(--shadow-xs)
Icon size:        20px
Icon color:       --text-primary  OR  #FFFFFF

Hover:
  Background:     #F0F0F0  (light)  OR  rgba(255,255,255,0.20) (dark)
  Transform:      scale(1.05)
```

### Profile / Person Photos

```
Style:        Cut-out subject — person isolated, white or transparent background
Placement:    Overflow card container (bleed upward or to the right)
Blend:        mix-blend-mode: multiply  (when on white card bg, removes white bg)
Sizes:
  List card:    160px height, auto width, right-aligned
  Detail hero:  240px height, right-aligned, overlapping title text
  Avatar:       40px × 40px circle
  Avatar (lg):  56px × 56px circle

CSS for bleed:
  .card { position: relative; overflow: visible; }
  .card-photo {
    position: absolute;
    right: 0; bottom: 0;
    height: 160px;
    object-fit: contain;
  }
```

### Avatar Stack

```css
.avatar-stack {
  display: flex;
  align-items: center;
}
.avatar-stack img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid #FFFFFF;
  margin-left: -10px;
  object-fit: cover;
}
.avatar-stack img:first-child { margin-left: 0; }
```

### Hero / Splash Illustration

```
Type:         3D render or high-quality SVG illustration
Subject:      Domain-specific hero object (rendered with metallic/gradient finish)
Background:   Transparent PNG
Glow effect:  CSS radial-gradient behind the image
              background: radial-gradient(ellipse at center,
                var(--accent-glow) 0%, transparent 70%);
Size:         60% of screen width on mobile / 500px on desktop
```

---

## 7. Components

### 7.1 Primary Button (Pill CTA)

```
Visual:
  Background:     #111111
  Text:           #FFFFFF, 15px, font-weight 600
  Border-radius:  9999px
  Padding:        14px 32px
  Height:         52px (mobile full-width) / 48px (desktop inline)
  Min-width:      160px
  Shadow:         var(--shadow-btn)
  Font:           var(--font-body)

With Left Icon (Splash variant):
  Left:   36px circle (white bg, icon inside)
  Middle: Button label text
  Right:  "»" arrow or chevron

Hover:   background #1f1f1f, translateY(-1px)
Active:  scale(0.97)

Mobile:  width: 100% (full-width)
Desktop: width: auto (inline pill)
```

```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: var(--btn-primary-bg);
  color: var(--btn-primary-text);
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 600;
  padding: 14px 32px;
  border-radius: var(--radius-full);
  border: none;
  cursor: pointer;
  box-shadow: var(--shadow-btn);
  transition: all 200ms ease;
}
.btn-primary:hover {
  background: #1f1f1f;
  transform: translateY(-1px);
  box-shadow: 0 6px 24px rgba(0,0,0,0.25);
}
.btn-primary:active { transform: scale(0.97); }
```

### 7.2 Ghost / Outline Button

```
Background:     transparent
Border:         1.5px solid var(--border)  OR  1.5px solid #FFFFFF (on dark)
Text:           var(--text-primary)  OR  #FFFFFF (on dark)
Border-radius:  9999px
Padding:        13px 28px
Height:         48px

Hover:          background: var(--bg-surface-soft), border darkens
```

### 7.3 Round Icon Button

```css
.btn-icon {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--bg-surface);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: var(--shadow-xs);
  transition: all 150ms ease;
}
.btn-icon:hover {
  background: var(--chip-bg);
  transform: scale(1.05);
}
```

### 7.4 Badge / Chip

```
Height:         28px
Padding:        4px 12px
Border-radius:  9999px
Font-size:      11px–12px, weight 500

Variants:
  Default:  bg #F0F0F0, text #333333
  Accent:   bg var(--accent-light), text var(--accent-hover)
  Dark:     bg #111111, text #FFFFFF
  Outline:  bg transparent, border 1px solid var(--border), text --text-secondary
```

### 7.5 Feature Banner Card

```
Layout:       Horizontal — text left, visual right
Background:   var(--feature-bg)  [teal gradient option]
Border-radius: var(--radius-xl)
Padding:      20px 24px
Height:       ~160px (mobile) / ~180px (desktop)
Width:        100%

Content Left:
  Row 1 → Small icon dot group (3 dots as status indicator)
  Row 2 → Title: 17px, 700 weight, dark
  Row 3 → Subtitle: 13px, muted
  Row 4 → Large stat number (28px bold) + unit label
  Row 5 → Avatar stack + label

Content Right:
  Arrow button → 36px white circle with ↗ icon (top-right corner)
  OR stacked avatars

CSS gradient option:
  background: linear-gradient(135deg, #6DD5D5 0%, #4BBEBE 100%);
```

### 7.6 Person / Profile Card (List)

```
Layout:       Split — text left, photo right (overflowing)
Background:   var(--bg-surface)
Border-radius: var(--radius-lg)
Padding:      20px 20px 20px 20px
Min-height:   180px
Overflow:     visible

Text section (left, ~60% width):
  Badge chip    → "Cases Won 100+" — top
  Name          → 20px, 700 weight, --text-primary
  Location      → Pin icon + city — 12px, --text-muted
  Action row    → 2× round icon buttons (e.g. call, message)

Photo section (right):
  Image bleeds top and right of card
  Height: ~170px
  Position: absolute, right: 0, bottom: 0

Hover state:
  box-shadow: var(--shadow-md)
  transform: translateY(-2px)
  transition: 250ms ease
```

### 7.7 Stats Row

```
Layout:       3-column equal grid
Background:   var(--bg-surface-soft)
Border-radius: var(--radius-md)
Padding:      16px
Dividers:     1px solid var(--border) between columns

Each cell:
  Icon (16px, accent color)
  Value → 16px, 700 weight
  Label → 11px, --text-muted
  Gap between cells: 12px vertical

Desktop variant: 3 separate stat cards side-by-side with gap
```

### 7.8 Tab Bar

```
Container:
  Background:   var(--bg-surface-soft)
  Border-radius: var(--radius-sm)
  Padding:      4px
  Display:      flex

Each tab:
  Padding:      10px 16px
  Border-radius: 8px
  Icon:         20px
  Label:        11px (optional, or icon-only)

Active:
  Background:   #111111
  Icon + text:  #FFFFFF

Inactive:
  Background:   transparent
  Icon:         --text-muted
```

### 7.9 Date Picker Strip

```
Container:     horizontal scroll, no scrollbar, gap 8px

Section header:
  Left  →  Label text, 15px bold
  Right →  ‹ Month › navigation

Each date cell:
  Width:         52px
  Height:        64px
  Border-radius: var(--radius-md)
  Display:       flex column, center

  Default:
    Background:  var(--chip-bg)
    Number:      16px, 700, --text-primary
    Day name:    11px, --text-muted

  Selected:
    Background:  #111111
    Number:      16px, 700, #FFFFFF
    Day name:    11px, rgba(255,255,255,0.60)
    Shadow:      var(--shadow-sm)

  Hover:
    Background:  var(--border)

CSS:
  .date-strip { display:flex; gap:8px; overflow-x:auto;
                scrollbar-width:none; padding-bottom:4px; }
```

### 7.10 Input Field

```
Height:         48px
Background:     var(--bg-surface)
Border:         1.5px solid var(--border)
Border-radius:  var(--radius-sm)
Padding:        0 16px
Font-size:      14px
Color:          var(--text-primary)

Focus:
  Border:       1.5px solid var(--accent)
  Outline:      none
  Box-shadow:   0 0 0 3px var(--accent-light)

With icon:
  Padding-left: 44px
  Icon:         absolute, left 14px, --text-muted
```

### 7.11 Card Grid (Desktop)

```
Display:       grid
Columns:       repeat(auto-fill, minmax(300px, 1fr))
Gap:           24px

On tablet:     2 columns
On mobile:     1 column (stacked)
```

---

## 8. Web Layout (Desktop)

### 8.1 Page Structure

```
┌─────────────────────────────────────────────────────────────┐
│                      TOP NAVBAR                             │
│  Logo     Home  Browse  About  Pricing      [Sign In] [CTA] │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                    HERO SECTION (Dark)                      │
│   ┌──────────────────────┐   ┌───────────────────────────┐  │
│   │ Eyebrow label        │   │                           │  │
│   │ Big Headline Here    │   │   3D/Hero Illustration    │  │
│   │ Supporting subtitle  │   │   with glow effect        │  │
│   │                      │   │                           │  │
│   │ [CTA Button] [Ghost] │   └───────────────────────────┘  │
│   │                      │                                  │
│   │ ○ Stat  ○ Stat  ○ Stat│                                 │
│   └──────────────────────┘                                  │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                FEATURE BANNER (Full-width teal)             │
│   "72+ Professionals Available"  [arrow →]  [Avatars]      │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   SECTION HEADER          Filters: [All][Top][New][...]     │
│   "Browse Top Profiles"                  [Search bar]      │
│                                                             │
│   ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐     │
│   │  CARD 1  │ │  CARD 2  │ │  CARD 3  │ │  CARD 4  │     │
│   │  [photo] │ │  [photo] │ │  [photo] │ │  [photo] │     │
│   │  Name    │ │  Name    │ │  Name    │ │  Name    │     │
│   │  Role    │ │  Role    │ │  Role    │ │  Role    │     │
│   │  $Price  │ │  $Price  │ │  $Price  │ │  $Price  │     │
│   └──────────┘ └──────────┘ └──────────┘ └──────────┘     │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                    TESTIMONIALS SECTION                     │
│                    STATS / TRUST ROW                        │
│                    FOOTER                                   │
└─────────────────────────────────────────────────────────────┘
```

### 8.2 Desktop Navbar

```
Height:         68px
Background:     rgba(255,255,255,0.92)  with backdrop-filter: blur(20px)
Position:       sticky, top: 0
Border-bottom:  1px solid var(--border)
Z-index:        100
Padding:        0 80px

Layout:
  Left    →  Logo (icon + name) — 22px bold
  Center  →  Nav links — 14px, weight 500, gap 36px
  Right   →  Ghost button "Sign In" + Primary button "Get Started"

Nav link hover:
  Color:        var(--text-primary)
  After pseudo: 2px underline from accent color, slides in

On scroll (JS):
  Add class .scrolled → background: #FFFFFF, shadow: var(--shadow-xs)
```

### 8.3 Hero Section (Desktop)

```
Background:     var(--bg-dark) + mesh gradient
Min-height:     100vh  OR  700px
Display:        grid, 2 columns (55% text / 45% visual)
Align:          center
Padding:        120px 80px

Left column:
  Eyebrow label (uppercase, --text-on-dark-dim)
  H1 headline   (clamp 48px–72px, white, Sora 800)
  Subtitle      (16px, --text-on-dark-dim, max-width 480px)
  Button row    (Primary + Ghost, gap 12px, margin-top 40px)
  Stats row     (3 stats, white, separated by | dividers, margin-top 56px)

Right column:
  Illustration container
  Radial glow behind it:
    background: radial-gradient(ellipse 70% 60% at center,
                var(--accent-glow) 0%, transparent 70%);

Background mesh gradient:
  background:
    radial-gradient(ellipse 80% 60% at 10% 80%, rgba(60,200,197,0.12), transparent),
    radial-gradient(ellipse 60% 50% at 90% 20%, rgba(100,80,200,0.08), transparent),
    var(--bg-dark);
```

### 8.4 Profile / Detail Page (Desktop)

```
Layout:     2-column (40% sidebar / 60% main content)
Max-width:  1100px, centered
Gap:        40px

LEFT SIDEBAR (sticky):
┌──────────────────────┐
│  [←] Back            │
│                      │
│  [Large Profile Photo│
│   in rounded container│
│   with gradient bg]  │
│                      │
│  Name  22px bold     │
│  Role  14px muted    │
│  ★★★★☆  Reviews      │
│                      │
│  $150 /hour          │
│                      │
│  [Book Appointment]  │
│  [◎ Call]  [💬 Chat] │
└──────────────────────┘

RIGHT MAIN:
┌──────────────────────────────────────────┐
│  [Details Tab] [Call] [Video] [Message]  │ ← Tab bar
├──────────────────────────────────────────┤
│  ┌────────┐ ┌────────┐ ┌─────────────┐  │
│  │100+    │ │8 Years │ │ 50+         │  │ ← Stats row
│  │Wins    │ │Experience│ Endorsements│  │
│  └────────┘ └────────┘ └─────────────┘  │
│                                          │
│  Select Date  ‹ March ›                  │
│  [21 Fri][22 Sat][23 Sun][24 Mon][25 Tue]│ ← Date strip
│                                          │
│  About                                   │
│  Description text here...               │
│                                          │
│  [Time slots grid: 9AM 10AM 11AM 2PM...] │
└──────────────────────────────────────────┘
```

### 8.5 Desktop Footer

```
Background:     var(--bg-dark)
Padding:        80px 80px 40px
Grid:           4 columns

Col 1: Brand — Logo + tagline + social icons
Col 2: Navigation links
Col 3: Contact info
Col 4: Newsletter input + subscribe button

Bottom bar:
  Border-top: 1px solid var(--border-dark)
  Padding-top: 24px
  Flex row: © copyright text | Privacy | Terms
  Color: --text-on-dark-dim
```

---

## 9. Mobile App Layout (PWA)

### 9.1 Screen Dimensions

```
Design target:  390px × 844px (iPhone 14)
Max width:      430px
Screen padding: 20px horizontal
```

### 9.2 Splash Screen

```
Background:   var(--bg-dark) + radial teal glow

┌────────────────────┐
│ [Logo] AppName     │  ← Top-left, white, 22px
│                    │
│                    │
│   [HERO 3D IMAGE]  │  ← Center, ~55% screen height
│     (with glow)    │
│                    │
│  [small deco icons]│  ← Bottom-right of illustration
│                    │
│  EYEBROW LABEL     │  ← 11px uppercase, dimmed white
│  Big Headline      │  ← 38px, 800, white, Sora
│  Second line here  │
│                    │
│ [◉ Swipe to Start »]  ← Full-width black pill button
└────────────────────┘
```

### 9.3 Home / Dashboard Screen

```
Background:   var(--bg-light)

┌────────────────────┐
│ Hello [Name] 👋 [🔍]│  ← Greeting + round search btn
│ Welcome back!      │
├────────────────────┤
│ ┌──────────────────┐│
│ │  FEATURE CARD    ││  ← Full width, teal, 24px radius
│ │  Title           ││
│ │  72+ stat        ││
│ │  [avatars]   [↗] ││
│ └──────────────────┘│
├────────────────────┤
│ Top Profiles  See →│  ← Section header
│                    │
│ ┌──────────────────┐│
│ │[Badge] Name      ││  ← Person card with bleed photo
│ │ Role             ││
│ │ Location         ││
│ │ [📞][💬]  [Photo]││
│ └──────────────────┘│
│                    │
│ ┌──────────────────┐│
│ │ Card 2           ││
│ └──────────────────┘│
├────────────────────┤
│  [Home][Search][Bk][Me]│ ← Bottom nav bar
└────────────────────┘
```

### 9.4 Detail / Profile Screen

```
Background:   var(--bg-light)

┌────────────────────┐
│ [←]          [♡]  │  ← Back + favorite round buttons
│                    │
│  Name      [Photo] │  ← Name left, photo bleeds right
│  Dershowitz        │
│  Role label        │
│                    │
│  $150              │  ← 34px bold
│  /hour             │
├────────────────────┤
│ [Details][📞][🎥][💬]│ ← Tab bar
├────────────────────┤
│ ┌──┬──────┬──────┐ │
│ │💼 │ 8yr  │ 50+ │ │  ← Stats row (3 cols)
│ │100│ Exp  │ End │ │
│ └──┴──────┴──────┘ │
├────────────────────┤
│ Select Date ‹Mar›  │
│ [21F][22S][23S][24M│  ← Horizontal date scroll
├────────────────────┤
│ About              │
│ Description text.. │
│ Read More          │
├────────────────────┤
│ [  Book Now  ]     │  ← Full-width black pill CTA
└────────────────────┘
```

### 9.5 Search / Browse Screen

```
┌────────────────────┐
│ Search             │  ← Screen title
│ ┌──────────────────┐
│ │🔍 Search...      │  ← Search input, full width
│ └──────────────────┘
│                    │
│ [All][Top][New][Nearby]  ← Filter chips, scroll horizontal
│                    │
│ ┌──────────────────┐│
│ │ Result Card 1    ││
│ └──────────────────┘│
│ ┌──────────────────┐│
│ │ Result Card 2    ││
│ └──────────────────┘│
│      ...           │
├────────────────────┤
│  [Home][Search][Bk][Me]│
└────────────────────┘
```

---

## 10. Shared Page Sections

### 10.1 Stats / Trust Strip

```
Used on: Landing page (below hero), Between sections

Layout:     Row of 3–4 stats, centered
Background: var(--bg-surface-soft) or transparent
Padding:    40px 0

Each stat:
  Number:   clamp(32px, 4vw, 48px), weight 800, --text-primary
  Label:    13px, --text-muted
  Separator: 1px vertical line, --border (desktop only)

Mobile: 2×2 grid
```

### 10.2 Horizontal Scroll Card Row (Mobile)

```
On mobile, card grids convert to horizontal scroll:

.card-row {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding-bottom: 8px;
  scrollbar-width: none;
}
.card-row .card {
  min-width: 280px;
  scroll-snap-align: start;
  flex-shrink: 0;
}
```

### 10.3 Section Header Row

```
Layout:     flex row, space-between
Margin-bottom: 20px

Left:  Section title — 20px, 700
Right: "See All →" link — 13px, --text-muted, underline on hover
       OR filter chips
```

### 10.4 Empty State

```
Center-aligned, padding 60px 20px

Illustration:   Simple SVG or emoji icon, 80px
Title:          16px, 600, --text-primary
Subtitle:       13px, --text-muted
CTA Button:     (optional) Primary pill button
```

### 10.5 Loading Skeleton

```css
/* Skeleton shimmer for loading states */
.skeleton {
  background: linear-gradient(90deg,
    var(--chip-bg) 25%,
    var(--border) 50%,
    var(--chip-bg) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: var(--radius-sm);
}
@keyframes shimmer {
  from { background-position: 200% 0; }
  to   { background-position: -200% 0; }
}
```

---

## 11. Navigation

### 11.1 Desktop Top Navbar

```
Height:         68px
Position:       sticky top
Background:     rgba(255,255,255,0.92) + backdrop-filter: blur(20px)
Border-bottom:  1px solid var(--border)
Transition:     background 300ms ease on scroll

Content:
  Left:     Logo icon + brand name (22px bold)
  Center:   Nav links (Home, Browse, About, Pricing)
  Right:    [Sign In — ghost] [Get Started — primary pill]

Active link:
  Color:     var(--text-primary)
  Underline: 2px solid var(--accent), width 100%

Mobile:   Hamburger → full-screen overlay menu
```

### 11.2 Mobile Bottom Navigation

```
Height:         60px + safe-area-inset-bottom
Background:     var(--bg-surface)
Border-top:     1px solid var(--border)
Shadow:         var(--shadow-nav)
Position:       fixed bottom
Z-index:        90
Padding-bottom: env(safe-area-inset-bottom)

4 tabs layout:
  Icon: 24px
  Label: 10px, font-weight 500
  Gap icon→label: 2px
  Align: center vertical

Active tab:
  Icon:  filled or strong stroke, var(--text-primary)
  Label: var(--text-primary), weight 600
  Indicator: 4px dot above icon  OR  pill background behind icon+label

Inactive tab:
  Icon + Label: --text-muted
```

### 11.3 Back Navigation (Mobile Detail Screen)

```
Row: full width, padding 16px 20px
Left:  Round icon button (← icon)
Right: Round icon button (♡ heart)
Both:  44px, white, shadow-xs
```

---

## 12. Animations & Motion

### 12.1 Core Principles

```
1. Purposeful — every animation communicates something
2. Fast — 150ms for micro (hover), 250ms for transitions, 400ms for page
3. Natural — ease curves, not linear
4. Subtle on repeat — only animate once per page load where possible
```

### 12.2 Timing & Easing

```css
--ease-out:       cubic-bezier(0.16, 1, 0.3, 1);   /* Spring-like exit */
--ease-in-out:    cubic-bezier(0.4, 0, 0.2, 1);    /* Material standard */
--ease-bounce:    cubic-bezier(0.34, 1.56, 0.64, 1); /* Slight overshoot */

--duration-fast:   150ms;
--duration-base:   250ms;
--duration-slow:   400ms;
--duration-page:   350ms;
```

### 12.3 Key Animations

```css
/* Page / screen entry */
@keyframes fadeSlideUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
.screen-enter { animation: fadeSlideUp 350ms var(--ease-out) forwards; }

/* Staggered children */
.card:nth-child(1) { animation-delay: 0ms; }
.card:nth-child(2) { animation-delay: 60ms; }
.card:nth-child(3) { animation-delay: 120ms; }
.card:nth-child(4) { animation-delay: 180ms; }

/* Card hover lift */
.card {
  transition: transform 250ms var(--ease-out),
              box-shadow 250ms var(--ease-out);
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

/* Button press */
.btn-primary { transition: all 150ms ease; }
.btn-primary:active { transform: scale(0.96); }

/* Splash glow pulse */
@keyframes glowPulse {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50%       { opacity: 1;   transform: scale(1.08); }
}
.hero-glow { animation: glowPulse 4s ease-in-out infinite; }

/* Skeleton shimmer (see loading section) */

/* Mobile slide-in from right */
@keyframes slideInRight {
  from { transform: translateX(100%); }
  to   { transform: translateX(0); }
}
.mobile-screen-enter {
  animation: slideInRight 300ms var(--ease-out);
}
```

---

## 12. Responsive Breakpoints

### Strategy: Mobile-First

```css
/* ── Breakpoints ───────────────────── */
/* xs  — small phones     */  /* default, 320px+ */
/* sm  — large phones     */  @media (min-width: 430px)
/* md  — tablets          */  @media (min-width: 768px)
/* lg  — small desktop    */  @media (min-width: 1024px)
/* xl  — large desktop    */  @media (min-width: 1280px)
/* 2xl — wide screens     */  @media (min-width: 1536px)
```

### Key Breakpoint Behavior

| Component | Mobile (< 768px) | Tablet (768–1024px) | Desktop (> 1024px) |
|-----------|-----------------|--------------------|--------------------|
| Navigation | Bottom tab bar | Bottom tab bar | Top sticky navbar |
| Hero | Single column, stacked | Single column | 2-column split |
| Card grid | 1 col / horiz scroll | 2 columns | 3–4 columns |
| Detail page | Stacked full-screen | Stacked, wider | 2-column sidebar |
| Footer | 1 column stacked | 2 columns | 4 columns |
| Buttons | Full-width | Full-width | Auto width inline |
| Typography | Scaled down (~0.75×) | Medium (~0.875×) | Full scale |

### Fluid Typography

```css
/* Use clamp() for fluid font scaling */
h1 { font-size: clamp(26px, 5vw, 48px); }
h2 { font-size: clamp(22px, 4vw, 36px); }
.hero-text { font-size: clamp(38px, 7vw, 72px); }
```

### Desktop App Shell (Center on large screens)

```css
/* On desktop, if showing the mobile app view, center it */
@media (min-width: 768px) {
  .mobile-app-shell {
    max-width: 390px;
    margin: 40px auto;
    border-radius: 44px;
    overflow: hidden;
    box-shadow: 0 40px 80px rgba(0,0,0,0.25);
    min-height: 844px;
  }
}
```

---

## 13. CSS Variables

Paste this block as your global design token foundation:

```css
:root {

  /* ── Colors ──────────────────────────────── */
  --bg-dark:          #0D0D1A;
  --bg-dark-mid:      #131325;
  --bg-light:         #F4F4F6;
  --bg-surface:       #FFFFFF;
  --bg-surface-soft:  #F9F9FB;

  --text-primary:     #111111;
  --text-secondary:   #555555;
  --text-muted:       #999999;
  --text-on-dark:     #FFFFFF;
  --text-on-dark-dim: rgba(255, 255, 255, 0.60);

  --accent:           #5BC8C5;
  --accent-hover:     #3AABA8;
  --accent-light:     #D6F4F2;
  --accent-glow:      rgba(91, 200, 197, 0.25);

  --feature-bg:       #7ED6D6;
  --feature-text:     #0D3333;

  --btn-primary-bg:   #111111;
  --btn-primary-text: #FFFFFF;
  --btn-ghost-border: #DDDDDD;
  --btn-ghost-text:   #111111;

  --border:           #EBEBEB;
  --border-dark:      rgba(255, 255, 255, 0.10);
  --chip-bg:          #F0F0F0;
  --chip-text:        #333333;
  --selected-bg:      #111111;
  --selected-text:    #FFFFFF;

  --success:          #22C55E;
  --warning:          #F59E0B;
  --error:            #EF4444;
  --info:             #3B82F6;

  /* ── Typography ──────────────────────────── */
  --font-display: 'Sora', sans-serif;
  --font-body:    'DM Sans', sans-serif;

  --text-hero:     clamp(38px, 7vw, 64px);
  --text-display:  clamp(28px, 4vw, 48px);
  --text-h1:       clamp(24px, 3.5vw, 36px);
  --text-h2:       clamp(20px, 2.5vw, 28px);
  --text-h3:       clamp(17px, 2vw, 22px);
  --text-h4:       clamp(15px, 1.5vw, 18px);
  --text-price:    clamp(32px, 3.5vw, 40px);
  --text-body-lg:  16px;
  --text-body:     14px;
  --text-sm:       13px;
  --text-xs:       11px;
  --text-btn:      15px;
  --text-nav:      11px;

  /* ── Spacing ─────────────────────────────── */
  --space-1:  4px;
  --space-2:  8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-5:  20px;
  --space-6:  24px;
  --space-8:  32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;

  /* ── Border Radius ───────────────────────── */
  --radius-xs:   6px;
  --radius-sm:   10px;
  --radius-md:   16px;
  --radius-lg:   20px;
  --radius-xl:   28px;
  --radius-2xl:  40px;
  --radius-full: 9999px;

  /* ── Shadows ─────────────────────────────── */
  --shadow-xs:   0 1px 4px rgba(0,0,0,0.04), 0 2px 8px rgba(0,0,0,0.04);
  --shadow-sm:   0 2px 8px rgba(0,0,0,0.05), 0 4px 20px rgba(0,0,0,0.06);
  --shadow-md:   0 8px 24px rgba(0,0,0,0.08), 0 16px 40px rgba(0,0,0,0.08);
  --shadow-lg:   0 20px 60px rgba(0,0,0,0.12), 0 8px 24px rgba(0,0,0,0.08);
  --shadow-btn:  0 4px 16px rgba(0,0,0,0.20), 0 2px 6px rgba(0,0,0,0.12);
  --shadow-nav:  0 -2px 20px rgba(0,0,0,0.06), 0 -1px 4px rgba(0,0,0,0.04);
  --shadow-glow: 0 0 40px rgba(91,200,197,0.30);

  /* ── Transitions ─────────────────────────── */
  --ease-out:     cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out:  cubic-bezier(0.4, 0, 0.2, 1);
  --ease-bounce:  cubic-bezier(0.34, 1.56, 0.64, 1);

  --duration-fast: 150ms;
  --duration-base: 250ms;
  --duration-slow: 400ms;
}
```

---

## 14. PWA Setup

### manifest.json

```json
{
  "name": "Your App Name",
  "short_name": "App",
  "description": "App description",
  "start_url": "/",
  "display": "standalone",
  "orientation": "portrait-primary",
  "background_color": "#0D0D1A",
  "theme_color": "#111111",
  "icons": [
    { "src": "/icons/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/icons/icon-512.png", "sizes": "512x512", "type": "image/png" },
    { "src": "/icons/icon-512-maskable.png", "sizes": "512x512",
      "type": "image/png", "purpose": "maskable" }
  ],
  "screenshots": [
    { "src": "/screenshots/mobile.png", "sizes": "390x844",
      "type": "image/png", "form_factor": "narrow" },
    { "src": "/screenshots/desktop.png", "sizes": "1280x800",
      "type": "image/png", "form_factor": "wide" }
  ]
}
```

### index.html Head Tags

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#111111">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Your App">
<link rel="manifest" href="/manifest.json">
<link rel="apple-touch-icon" href="/icons/icon-192.png">
```

### Safe Area CSS

```css
/* Respect notch, Dynamic Island, home indicator */
.app-root {
  padding-top:    env(safe-area-inset-top);
  padding-left:   env(safe-area-inset-left);
  padding-right:  env(safe-area-inset-right);
}
.bottom-nav {
  padding-bottom: calc(env(safe-area-inset-bottom) + 8px);
}
```

### Scroll Behavior

```css
html, body {
  overscroll-behavior: none;
  -webkit-overflow-scrolling: touch;
}
.screen {
  height: 100dvh;
  overflow-y: auto;
  overscroll-behavior-y: contain;
  scrollbar-width: none;
}
.screen::-webkit-scrollbar { display: none; }
```

---

## 16. Implementation Checklist

### Design Setup
- [ ] Add Google Fonts (Sora + DM Sans) to `<head>`
- [ ] Paste CSS variables into global stylesheet
- [ ] Set `box-sizing: border-box` globally
- [ ] Configure `max-width: 1280px` container
- [ ] Add safe-area inset padding

### Web (Desktop) Pages
- [ ] Sticky top navbar with blur backdrop
- [ ] Dark hero section with 2-col layout + glow illustration
- [ ] Feature banner (full-width teal strip)
- [ ] Card grid section (3–4 cols, responsive)
- [ ] Stats / trust row
- [ ] Detail page with sidebar + main content
- [ ] Footer (4-col dark)

### Mobile (PWA) Screens
- [ ] Splash / onboarding screen (dark)
- [ ] Home / dashboard screen
- [ ] Browse / search screen
- [ ] Detail / profile screen
- [ ] Fixed bottom navigation bar

### Components
- [ ] Primary pill button (dark)
- [ ] Ghost outline button
- [ ] Round icon button (44px)
- [ ] Badge / chip variants
- [ ] Feature banner card
- [ ] Person / profile card (with bleed photo)
- [ ] Stats row (3-col grid)
- [ ] Horizontal tab bar
- [ ] Date picker strip (scrollable)
- [ ] Input field + search bar
- [ ] Avatar stack

### Polish
- [ ] Card hover lift animation
- [ ] Button press scale animation
- [ ] Page/screen entry fade+slide animation
- [ ] Staggered card reveal on load
- [ ] Loading skeleton shimmer
- [ ] Empty state component
- [ ] All touch targets ≥ 44px × 44px
- [ ] Test at 320px, 390px, 768px, 1024px, 1280px
- [ ] `manifest.json` with icon sizes
- [ ] Service Worker for offline support

---

*This design system is framework-agnostic — use with React, Vue, Svelte, plain HTML/CSS, or any stack.*