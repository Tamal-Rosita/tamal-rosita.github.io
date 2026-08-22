# Tamal Rosita — Phase 2 Walkthrough

## What Was Improved

### 🖱️ 1. Desktop Scroll Fixed
The bug preventing mouse scrolling on desktop has been resolved. I changed `overflow: hidden` to `overflow-x: hidden` globally, and enabled proper scrolling on the About, Projects, and Project Detail pages.

### 🏠 2. Home Page Redesign
Removed the "Under Construction" progress bar. Replaced it with a cleaner "**Find Us**" section featuring pixel-art inline SVG icons for your social platforms:
- **TikTok** (`@tamal.rosita`)
- **Instagram** (`@tamalrositagames`)
- **itch.io**

### 📱 3. Mobile-First Optimization
- **Navigation Menu:** Increased padding and tap targets inside the mobile burger menu to ensure each link is easily clickable and compliant with accessibility standards (min 48px height).
- **Cartridge Sizes:** Cartridges on the home page gallery and the `Projects` grid now scale much larger on portrait mobile screens, filling up the available horizontal space for better visibility.

### 🌍 4. English & Spanish Localization (i18n)
The site now fully supports **English** and **Spanish** via Jekyll data files (`_data/i18n/en.yml` and `es.yml`). No heavy plugins were needed!

- A language switcher (**EN / ES**) has been added to the navigation bar.
- English is the default language at the root (`/`).
- Spanish pages live in the `/es/` directory (`/es/`, `/es/about`, `/es/proyects`).
- The Projects collection automatically filters games based on the language of the page you are viewing.
- Project descriptions (both EN and ES) were pulled directly from your **itch.io** pages to guarantee absolute accuracy.

---

## How to Edit Translations

If you want to edit any UI text (like nav links, about page descriptions, or button labels), simply edit these files:

- `_data/i18n/en.yml` (English strings)
- `_data/i18n/es.yml` (Spanish strings)

All HTML templates automatically read from these files using `site.data.i18n[page.lang]`.

## How to Add New Projects

When adding a new game, you need to create **two** markdown files in the `_projects/` folder:

1. `_projects/my-game.md` (English)
   ```markdown
   ---
   layout: project
   title: My Game
   cover: /assets/my-game.png
   lang: en
   ---
   ```

2. `_projects/es-my-game.md` (Spanish)
   ```markdown
   ---
   layout: project
   title: Mi Juego
   cover: /assets/my-game.png
   lang: es
   permalink: /es/projects/my-game
   ---
   ```

> [!NOTE]
> Setting `lang: es` and `permalink: /es/...` in the Spanish file ensures it gets grouped correctly in the Spanish version of the site!

---

## Verification & Next Steps
- The Jekyll site is currently running on `http://localhost:4000` with the `G-JF510QX21V` Google Analytics tag intact.
- The project is fully functional and ready to be pushed to GitHub to update `tamalrosita.com`! 🚀
