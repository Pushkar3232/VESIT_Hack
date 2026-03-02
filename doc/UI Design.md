# ⚖️ Legal PWA — Design System & UI Implementation Guide

> A complete design system extracted from the Axiom Legal App UI.  
> Use this as your implementation blueprint — colors, typography, spacing, components, and screen layouts.

---

## 📦 Table of Contents

1. [Design Philosophy](#1-design-philosophy)
2. [Color System](#2-color-system)
3. [Typography System](#3-typography-system)
4. [Spacing & Layout Grid](#4-spacing--layout-grid)
5. [Border Radius & Shadows](#5-border-radius--shadows)
6. [Iconography & Imagery](#6-iconography--imagery)
7. [Core Components](#7-core-components)
8. [Screen Layouts](#8-screen-layouts)
9. [Navigation System](#9-navigation-system)
10. [PWA-Specific Setup](#10-pwa-specific-setup)
11. [CSS Variables Starter](#11-css-variables-starter)
12. [Responsive Behavior](#12-responsive-behavior)

---

## 1. Design Philosophy

| Principle | Description |
|-----------|-------------|
| **Contrast Duality** | Dark, immersive splash/onboarding screen paired with clean, light interior screens |
| **Trust & Authority** | Use of deep blacks, whites, and neutral tones signals professionalism and credibility |
| **Content First** | Cards and components are generous with whitespace, avoiding visual clutter |
| **Soft Geometry** | All interactive elements use high border-radius (pill buttons, rounded cards) for approachability |
| **Photo Integration** | Professional headshots are cut-out style (transparent/white bg) placed bleeding out of card bounds |
| **Minimal Color** | A single accent color (teal/cyan) is used sparingly to draw attention — everything else is black, white, or gray |

---

## 2. Color System

### 2.1 Core Palette

```css
/* Base */
--color-black:        #0D0D1A;   /* Splash/dark background */
--color-white:        #FFFFFF;   /* Cards, surfaces */
--color-bg-app:       #F4F4F6;   /* Light app background (all inner screens) */
--color-surface:      #FFFFFF;   /* Card background */
--color-surface-alt:  #F9F9F9;   /* Subtle section backgrounds */

/* Text */
--color-text-primary:   #111111;  /* Main headings, names */
--color-text-secondary: #555555;  /* Subtitles, labels */
--color-text-muted:     #999999;  /* Meta info, placeholders */
--color-text-inverted:  #FFFFFF;  /* Text on dark backgrounds */

/* Accent */
--color-accent:         #5BC8C5;  /* Teal — primary accent */
--color-accent-light:   #D6F4F2;  /* Light teal — chips, tags, soft bg */
--color-accent-dark:    #3AABA8;  /* Darker teal for hover states */

/* Featured Card */
--color-feature-bg:     #7ED6D6;  /* Teal-blue banner/feature card background */

/* CTA Button */
--color-btn-primary:    #111111;  /* Dark pill button */
--color-btn-primary-text: #FFFFFF;

/* States */
--color-selected:       #111111;  /* Selected date chip, active tab */
--color-border:         #EBEBEB;  /* Subtle dividers */
--color-tag-bg:         #F0F0F0;  /* Neutral chip/badge bg */
--color-tag-text:       #333333;
```

### 2.2 Dark Screen (Splash) Specific

```css
--splash-bg-start:    #0A0A18;
--splash-bg-mid:      #0D1B2A;
--splash-glow-teal:   rgba(60, 220, 200, 0.25);   /* Radial glow behind hero image */
--splash-glow-purple: rgba(120, 80, 200, 0.15);
```

### 2.3 Usage Rules

- Use `--color-accent` **only** for: feature card backgrounds, active states, highlights
- **Never** use accent color for body text
- All primary CTAs are **black pill buttons**, not colored
- Secondary actions use **ghost buttons** (border only, transparent fill)

---

## 3. Typography System

### 3.1 Font Stack

```css
--font-primary: 'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
```

> **Recommended Google Font:** `Inter` (free, clean, highly legible on mobile)

### 3.2 Type Scale

| Name | Size | Weight | Line Height | Usage |
|------|------|--------|-------------|-------|
| `display-xl` | 38px | 800 | 1.1 | Splash hero headline |
| `display-lg` | 28px | 700 | 1.2 | Lawyer name on detail screen |
| `display-md` | 22px | 700 | 1.3 | Screen titles, section headers |
| `price` | 34px | 800 | 1.0 | Hourly rate display |
| `title` | 18px | 700 | 1.3 | Card titles |
| `subtitle` | 14px | 500 | 1.4 | Specialization tags, card subtitles |
| `body` | 13px | 400 | 1.6 | Descriptions, about text |
| `label` | 11px | 600 | 1.2 | Uppercase labels, tags (letter-spacing: 1.5px) |
| `meta` | 12px | 400 | 1.4 | Location, date, small stats |
| `btn` | 15px | 600 | 1.0 | Button text |
| `nav` | 10px | 500 | 1.0 | Bottom nav labels |

### 3.3 Text Treatments

```css
/* Splash hero text — white, large */
.hero-headline {
  font-size: 38px;
  font-weight: 800;
  color: #FFFFFF;
  line-height: 1.1;
  letter-spacing: -0.5px;
}

/* Section label above headline */
.eyebrow-label {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: rgba(255,255,255,0.6);  /* On dark bg */
  /* OR */
  color: #999999;  /* On light bg */
}

/* Price display */
.price-display {
  font-size: 34px;
  font-weight: 800;
  color: #111111;
}
.price-unit {
  font-size: 13px;
  font-weight: 400;
  color: #999999;
}
```

---

## 4. Spacing & Layout Grid

### 4.1 Base Unit

```
Base spacing unit: 4px
Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64
```

### 4.2 Screen Layout

```
Max content width:  390px  (mobile-first)
Horizontal padding: 20px (left and right)
Top safe area:      env(safe-area-inset-top) + 12px
Bottom safe area:   env(safe-area-inset-bottom) + 16px
```

### 4.3 Spacing Tokens

```css
--space-xs:   4px
--space-sm:   8px
--space-md:   12px
--space-base: 16px
--space-lg:   20px
--space-xl:   24px
--space-2xl:  32px
--space-3xl:  48px
```

### 4.4 Component Spacing

| Component | Padding |
|-----------|---------|
| Screen horizontal | `20px` |
| Card internal | `16px–20px` |
| Feature banner card | `20px 20px` |
| Button (pill) | `14px 28px` |
| Chip/Tag | `6px 14px` |
| Stats row item | `12px 16px` |
| Section gap | `24px` |

---

## 5. Border Radius & Shadows

### 5.1 Radius Scale

```css
--radius-sm:    8px;   /* Small chips */
--radius-md:    16px;  /* Date picker items */
--radius-lg:    20px;  /* Cards */
--radius-xl:    28px;  /* Feature banner */
--radius-full:  9999px; /* Pill buttons, round icons */
```

### 5.2 Specific Usage

| Element | Radius |
|---------|--------|
| Cards | `20px` |
| Feature/Banner Card | `24px` |
| Primary Button | `9999px` (full pill) |
| Ghost/Icon Button | `9999px` |
| Tag/Badge | `9999px` |
| Stats Box | `16px` |
| Date Chip | `14px` |
| Bottom Nav | `24px 24px 0 0` (top rounded) |
| Profile Image Container | `20px` or clip to card shape |

### 5.3 Shadow System

```css
/* Card shadow — subtle, airy */
--shadow-card: 0 2px 16px rgba(0, 0, 0, 0.06);

/* Elevated card — e.g. selected/featured */
--shadow-elevated: 0 8px 32px rgba(0, 0, 0, 0.10);

/* Bottom nav shadow */
--shadow-nav: 0 -2px 20px rgba(0, 0, 0, 0.07);

/* Button shadow (dark btn) */
--shadow-btn: 0 4px 16px rgba(0, 0, 0, 0.20);

/* Icon button */
--shadow-icon-btn: 0 2px 8px rgba(0, 0, 0, 0.12);
```

---

## 6. Iconography & Imagery

### 6.1 Icon Style

- **Style:** Outlined / Stroke icons, 1.5px–2px stroke weight
- **Size:** 20px default, 24px for nav, 16px for inline/meta
- **Color:** `#111111` on light bg, `#FFFFFF` on dark bg, `#999999` for muted
- **Recommended Library:** [Lucide Icons](https://lucide.dev) or [Phosphor Icons](https://phosphoricons.com)

### 6.2 Icon Buttons

```
Round icon button:
- Size: 44px × 44px
- Background: #FFFFFF or #F0F0F0
- Border-radius: 50%
- Shadow: --shadow-icon-btn
- Icon size: 20px
```

### 6.3 Profile / Lawyer Images

- **Style:** Cut-out / isolated subject on white or transparent background
- **Placement:** Bleeds to the right edge or top of the card (overflow visible)
- **Size on list card:** ~160px height, auto width
- **Size on detail screen:** ~220px height, right-aligned, behind/overlapping name text
- **Tip:** Use `object-fit: cover` inside a defined container; use `mix-blend-mode: multiply` on white bg images to blend seamlessly

### 6.4 Avatar Stack (Stacked Circles)

```css
/* Group of small circular avatars overlapping */
.avatar-stack .avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid #FFFFFF;
  margin-left: -10px;  /* Overlap */
  object-fit: cover;
}
.avatar-stack .avatar:first-child { margin-left: 0; }
```

---

## 7. Core Components

### 7.1 Primary CTA Button (Pill)

```
Appearance:
- Background:     #111111
- Text:           #FFFFFF, 15px, font-weight 600
- Border-radius:  9999px
- Padding:        16px 32px
- Width:          Full-width (100%) on mobile
- Height:         52px–56px
- Shadow:         0 4px 16px rgba(0,0,0,0.2)

Left Icon Variant (Splash button):
- Left side: Small circular icon/image (36px circle, white bg)
- Center text: "Swipe to Start"
- Right side: >> arrow

States:
- Default:  #111111 background
- Hover:    #2A2A2A
- Active:   scale(0.97) + slightly darker
- Disabled: #CCCCCC background, #888888 text
```

### 7.2 Ghost / Icon-Only Button (Round)

```
Appearance:
- Size:           44px × 44px
- Background:     #FFFFFF
- Border-radius:  50%
- Shadow:         0 2px 8px rgba(0,0,0,0.10)
- Icon:           20px stroke icon, #111111

Use cases:
- Back arrow
- Favorite/Heart
- Search
- Call, Chat, Video icons
```

### 7.3 Feature Banner Card

```
Dimensions:    Full width, ~160px height
Background:    --color-feature-bg (#7ED6D6)
Border-radius: 24px
Padding:       20px
Layout:        2-column (text left, avatar stack right)

Content Left:
  - Row 1: 3-dot menu icon + ... indicator
  - Row 2: Title (bold, 16px, #111111)
  - Row 3: Subtitle (13px, #333333)
  - Row 4: Large number (28px bold) + label (12px)

Content Right:
  - Stacked circular avatars (3-4)

Top-right corner:
  - Round white button with diagonal arrow icon (↗)
  - 36px, #FFFFFF background
```

### 7.4 Lawyer List Card

```
Background:     #FFFFFF
Border-radius:  20px
Padding:        16px 20px
Shadow:         --shadow-card
Min-height:     ~180px
Overflow:       visible (image bleeds out)

Layout: Split
  Left side (text):
    - Badge chip at top ("Cases Won 100+")
    - Name (18–20px bold)
    - Location with pin icon (12px, muted)
    - Row of 2 icon buttons (Call, Chat)
  
  Right side (image):
    - Lawyer photo, cut-out style
    - ~160px tall, bleeds to card edge or above card top
    - Aligned to right edge
```

### 7.5 Badge / Chip

```
Background:     #F0F0F0  OR  --color-accent-light (for active)
Text:           #333333, 11–12px, font-weight 500
Border-radius:  9999px (pill)
Padding:        5px 12px
Border:         none (or 1px solid #E5E5E5 for outlined variant)
```

### 7.6 Stats Row (Detail Screen)

```
Container:
  - Background:    #F9F9F9
  - Border-radius: 16px
  - Padding:       14px 16px
  - Display:       grid, 3 equal columns, dividers between

Each stat cell:
  - Icon (small, 16px, teal or gray)
  - Number / value (16px bold, #111111)
  - Label (11px, #999999)

Divider: 1px solid #EBEBEB between cells (vertical)
```

### 7.7 Tab Bar (Detail Screen)

```
Row of 4 tabs (Details, Call, Video, Chat)
Container:
  - Background:    #F9F9F9
  - Border-radius: 16px
  - Padding:       4px

Active Tab:
  - Background:    #111111
  - Icon:          #FFFFFF
  - Border-radius: 12px

Inactive Tab:
  - Background:    transparent
  - Icon:          #888888

Tab size: ~52px × 44px
```

### 7.8 Date Picker Strip (Horizontal Scroll)

```
Layout: Horizontal scroll row, no scrollbar visible

Section header:
  - Left: "Select Date" (16px, bold)
  - Right: < March > navigation arrows

Each date chip:
  - Width:           52px
  - Height:          64px
  - Border-radius:   14px
  - Background:      #F0F0F0 (default)  /  #111111 (selected)
  - Day number:      16px, bold
  - Day name:        11px, muted
  - Text (selected): #FFFFFF

Spacing between chips: 8px
```

### 7.9 "About" Section

```
Section title: "About Lawyer", 15px bold
Body text:     13px, #555555, line-height 1.6
Max lines before "Read More": 3

"Read More" link:
  - Color: --color-accent
  - No underline
  - Font-weight: 500
```

---

## 8. Screen Layouts

### 8.1 Splash / Onboarding Screen

```
Background: Dark gradient (#0A0A18 → #0D1B2A)
            + radial glow (teal, bottom-center)

Layout (top to bottom):
┌─────────────────────────┐
│  [Logo Icon] Axiom      │  ← Top-left, white, 22px bold
│                         │
│                         │
│   [3D Hero Illustration]│  ← Center, ~55% screen height
│   (scales of justice)   │
│                         │
│  [Small decorative icons│  ← Bottom-right of illustration
│   gavel + document]     │
│                         │
│  SMART JUSTICE          │  ← Eyebrow label, uppercase, muted white
│  Find Your              │  ← 38px, 800 weight, white
│  Lawyer Easily          │
│                         │
│  [◉ Swipe to Start  >>] │  ← Full-width dark pill button
└─────────────────────────┘
```

### 8.2 Home / Dashboard Screen

```
Background: #F4F4F6

Layout (top to bottom):
┌─────────────────────────┐
│  Hello [Name] 👋    [🔍]│  ← Greeting + search icon button
│  Welcome back again!    │
│                         │
│  ┌─────────────────────┐│
│  │ FEATURE BANNER CARD ││  ← Teal bg, full-width
│  │ (Crime Lawyers etc) ││
│  └─────────────────────┘│
│                         │
│  Top Lawyers    See All │  ← Section header row
│                         │
│  ┌─────────────────────┐│
│  │ LAWYER CARD 1       ││  ← White card with bleed photo
│  └─────────────────────┘│
│                         │
│  ┌─────────────────────┐│
│  │ LAWYER CARD 2       ││
│  └─────────────────────┘│
│                         │
│  ════════════════════   │  ← Bottom navigation bar
│  Home  Search  Book  Me │
└─────────────────────────┘
```

### 8.3 Lawyer Detail Screen

```
Background: #F4F4F6

Layout (top to bottom):
┌─────────────────────────┐
│  [←]             [♡]   │  ← Back + Favorite icon buttons
│                         │
│  Alan            [Photo]│  ← Name left-aligned, photo bleeds right
│  Dershowitz      [  |  ]│
│  Crime Lawyers          │
│                         │
│  $150                   │  ← Price, 34px bold
│  /hour                  │
│                         │
│  ┌──────────────────┐   │
│  │ Details │📞│🎥│💬 │   │  ← Tab bar
│  └──────────────────┘   │
│                         │
│  ┌──────────────────┐   │
│  │ 100+  │8yr │ 50+ │   │  ← Stats row (3 col grid)
│  │ Cases │Exp │ End │   │
│  └──────────────────┘   │
│                         │
│  Select Date   < March >│
│  [21F][22Sa][23Su][21M] │  ← Horizontal date scroll
│                         │
│  About Lawyer           │
│  Description text...    │
│                         │
│  [  Book Appointment  ] │  ← Full-width dark pill CTA
└─────────────────────────┘
```

---

## 9. Navigation System

### 9.1 Bottom Navigation Bar

```
Height:         64px + safe area bottom
Background:     #FFFFFF
Border-radius:  0 (or 24px 24px 0 0 if floating)
Shadow:         0 -2px 20px rgba(0,0,0,0.07)
Border-top:     1px solid #F0F0F0

Items: 4 tabs (e.g. Home, Search, Bookings, Profile)

Each nav item:
  - Icon:   24px
  - Label:  10px, font-weight 500
  - Active: Icon + label in #111111, optional dot indicator
  - Inactive: #BBBBBB

Active indicator options:
  A) Filled icon + colored label
  B) Small dot (4px) below icon in #111111
  C) Background pill behind active icon
```

### 9.2 Top App Bar

```
Height: 56px
Background: transparent or #F4F4F6

Default (Home):
  - Left: Greeting text (bold name)
  - Right: Round search button

Detail Screen:
  - Left: Round back button (←)
  - Right: Round favorite button (♡)
```

---

## 10. PWA-Specific Setup

### 10.1 manifest.json

```json
{
  "name": "Your Legal App",
  "short_name": "LegalApp",
  "description": "Find and book top lawyers instantly",
  "start_url": "/",
  "display": "standalone",
  "orientation": "portrait",
  "background_color": "#0D0D1A",
  "theme_color": "#111111",
  "icons": [
    { "src": "/icons/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/icons/icon-512.png", "sizes": "512x512", "type": "image/png" },
    { "src": "/icons/icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable" }
  ]
}
```

### 10.2 Meta Tags (index.html)

```html
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="theme-color" content="#111111">
<link rel="manifest" href="/manifest.json">
```

### 10.3 Safe Area Insets (CSS)

```css
/* Apply to main container */
.app-container {
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
}

/* Bottom nav should respect home indicator */
.bottom-nav {
  padding-bottom: calc(env(safe-area-inset-bottom) + 8px);
}
```

### 10.4 Smooth Scrolling & Overflow

```css
/* Prevent body scroll, handle per-screen */
body {
  overflow: hidden;
  overscroll-behavior: none;
}

.screen {
  height: 100dvh; /* Use dvh for mobile browsers */
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior-y: contain;
}

/* Hide scrollbars but allow scroll */
.scroll-container {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.scroll-container::-webkit-scrollbar { display: none; }
```

---

## 11. CSS Variables Starter

Paste this into your global CSS file as your design token foundation:

```css
:root {
  /* Colors */
  --color-black:          #0D0D1A;
  --color-white:          #FFFFFF;
  --color-bg-app:         #F4F4F6;
  --color-surface:        #FFFFFF;
  --color-text-primary:   #111111;
  --color-text-secondary: #555555;
  --color-text-muted:     #999999;
  --color-text-inverted:  #FFFFFF;
  --color-accent:         #5BC8C5;
  --color-accent-light:   #D6F4F2;
  --color-feature-bg:     #7ED6D6;
  --color-btn-primary:    #111111;
  --color-border:         #EBEBEB;
  --color-tag-bg:         #F0F0F0;

  /* Typography */
  --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --text-display:  38px;
  --text-xl:       28px;
  --text-lg:       22px;
  --text-md:       18px;
  --text-base:     15px;
  --text-sm:       13px;
  --text-xs:       11px;

  /* Spacing */
  --space-xs:   4px;
  --space-sm:   8px;
  --space-md:   12px;
  --space-base: 16px;
  --space-lg:   20px;
  --space-xl:   24px;
  --space-2xl:  32px;
  --space-3xl:  48px;

  /* Radius */
  --radius-sm:   8px;
  --radius-md:   16px;
  --radius-lg:   20px;
  --radius-xl:   28px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-card:     0 2px 16px rgba(0,0,0,0.06);
  --shadow-elevated: 0 8px 32px rgba(0,0,0,0.10);
  --shadow-nav:      0 -2px 20px rgba(0,0,0,0.07);
  --shadow-btn:      0 4px 16px rgba(0,0,0,0.20);

  /* Transitions */
  --transition-fast:   150ms ease;
  --transition-base:   250ms ease;
  --transition-slow:   400ms cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## 12. Responsive Behavior

### 12.1 Mobile-First Breakpoints

```css
/* Default: Mobile (320px–390px) — design target */

/* Wider mobile / small tablet */
@media (min-width: 430px) {
  .app-shell {
    max-width: 430px;
    margin: 0 auto;
  }
}

/* Tablet / Desktop — center the "phone" layout */
@media (min-width: 768px) {
  body {
    background: #E8E8EA;  /* Gray desktop background */
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
  .app-shell {
    max-width: 390px;
    min-height: 844px;
    border-radius: 40px;
    overflow: hidden;
    box-shadow: 0 40px 80px rgba(0,0,0,0.3);
  }
}
```

### 12.2 Touch Targets

```css
/* All interactive elements must meet minimum touch target */
button, a, [role="button"] {
  min-height: 44px;
  min-width: 44px;
}

/* Add extra tap area without affecting layout */
.small-interactive {
  position: relative;
}
.small-interactive::after {
  content: '';
  position: absolute;
  inset: -8px;
}
```

### 12.3 Micro-interactions

```css
/* Button press feedback */
.btn:active {
  transform: scale(0.96);
  transition: transform 100ms ease;
}

/* Card tap feedback */
.card:active {
  transform: scale(0.98);
  box-shadow: var(--shadow-card);
  transition: transform 150ms ease;
}

/* Page transitions — slide in from right */
.screen-enter {
  animation: slideInRight 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
@keyframes slideInRight {
  from { transform: translateX(100%); opacity: 0; }
  to   { transform: translateX(0);    opacity: 1; }
}
```

---

## 🚀 Quick Implementation Checklist

- [ ] Set up CSS variables from Section 11
- [ ] Import `Inter` from Google Fonts
- [ ] Create `manifest.json` with correct icon sizes
- [ ] Add viewport + safe-area meta tags
- [ ] Build Splash Screen with dark theme + hero visual
- [ ] Build Home Screen with feature card + list cards
- [ ] Build Detail Screen with stats row, tab bar, date picker
- [ ] Implement bottom navigation (4 tabs)
- [ ] Add `overscroll-behavior: none` on body
- [ ] Wrap app in 390px max-width shell for desktop view
- [ ] Register Service Worker for offline support
- [ ] Test touch targets ≥ 44px on all interactive elements
- [ ] Verify safe-area insets on iPhone notch/Dynamic Island

---

*Design system based on visual analysis of Axiom Legal App UI — adapted as a generic implementation guide.*
