# 🏡 Mokoba Lodge & Restaurant

![Status](https://img.shields.io/badge/Status-Live-success)
![Made in Botswana](https://img.shields.io/badge/Made%20in-Botswana%20🇧🇼-green)

A cinematic, modern website for **Mokoba Lodge & Restaurant** — an intimate safari retreat in Botswana offering luxury chalets, farm-to-table dining, and unforgettable wildlife experiences.

---

## ✨ Features

- 🎞️ **Automatic slideshow hero** on the homepage (5 slides, Ken Burns effect, dots + arrows)
- 🎥 **Live video backgrounds** on the Dining and Experiences pages
- 🍽️ **Tabbed menu system** for the restaurant (Breakfast · Lunch · Dinner · Desserts · Bar · Kids)
- 🦁 **Filterable experiences grid** (Wildlife · Leisure · Adventure · Cultural)
- 🏊 **Facilities showcase** with icons and detail cards
- 📸 **Gallery grid** with hover-zoom effect
- 📅 **Multi-step booking form** with activities, meal plans, and special requests
- ❓ **FAQ accordion** for instant answers
- 🎁 **Offers & packages page** for driving bookings
- 📱 **Fully responsive** — mobile-first design
- 💬 **Floating WhatsApp button** — Botswana's #1 communication channel
- ⚡ **Lightweight** — pure HTML, CSS, and vanilla JavaScript (no frameworks)

---

## 🎨 Design

**Palette:** Deep Forest · Warm Cream · Sunset Terracotta · Gold
**Typography:** Fraunces (display serif) · Inter (body) · JetBrains Mono (accents)

The aesthetic blends **editorial luxury** with **warm African hospitality**.

---

## 📁 File Structure

---

## 🚀 Deployment — GitHub Pages

1. Create a new repository: `mokoba-lodge`
2. Upload all 14 files to the root of the repo
3. Go to **Settings → Pages**
4. Under "Branch", select `main` and `/root`
5. Click **Save**
6. Live at: `https://YOUR-USERNAME.github.io/mokoba-lodge/`

Wait 1–2 minutes for GitHub Pages to publish.

---

## 🎬 How the Slideshow Works

The homepage hero uses **5 cinematic slides** that:
- Auto-advance every 6 seconds
- Cross-fade with a 1.6s transition
- Apply a slow Ken Burns zoom (1.05 → 1.12 over 7s)
- Pause on hover (desktop)
- Support clickable dots and arrow navigation
- Support keyboard arrow keys

Edit slides in `index.html` — just change the `background-image` URLs.

---

## 🎥 How the Video Backgrounds Work

The **Dining** and **Experiences** pages use HTML5 `<video>` elements that:
- Autoplay, mute, loop, and play inline
- Fall back to a **poster image** if video fails (autoplay blocked, network error, etc.)
- Have a **dark gradient overlay** for text readability
- Include an **animated ambient glow** on top

Video sources are from Pexels CDN — free for commercial use.

To swap videos, edit the `<source>` tags in `dining.html` and `experiences.html`.

---

## 📸 Customisation Guide

### Change Contact Info
Search and replace across all files:
- `+267 71 234 567` → your real number
- `stay@mokobalodge.co.bw` → your real email
- `Kasane, Botswana` → your real location

### Change Logo Mark
The logo is a simple `M` in a circle. To change the initial:
```html
<div class="logo-mark">M</div>

