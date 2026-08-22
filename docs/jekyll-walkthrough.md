# Tamal Rosita — Jekyll Migration Walkthrough

## What Was Done

Successfully migrated the Tamal Rosita website from a static single-page HTML site to a multi-page **Jekyll** site with **Google Analytics** tracking. The site is served via GitHub Pages with zero additional CI/CD.

### New Files Created

| File | Purpose |
|------|---------|
| [`Gemfile`](file:///home/dorito/Developer/web/tamal-rosita.github.io/Gemfile) | GitHub Pages gem dependency |
| [`_config.yml`](file:///home/dorito/Developer/web/tamal-rosita.github.io/_config.yml) | Jekyll config + GA ID + `_projects` collection |
| [`_includes/analytics.html`](file:///home/dorito/Developer/web/tamal-rosita.github.io/_includes/analytics.html) | Google Analytics gtag.js snippet |
| [`_includes/head.html`](file:///home/dorito/Developer/web/tamal-rosita.github.io/_includes/head.html) | Shared `<head>` with fonts, CSS, meta, analytics |
| [`_includes/nav.html`](file:///home/dorito/Developer/web/tamal-rosita.github.io/_includes/nav.html) | Retro pixel-art nav bar with hamburger menu |
| [`_includes/footer.html`](file:///home/dorito/Developer/web/tamal-rosita.github.io/_includes/footer.html) | Shared footer |
| [`_layouts/default.html`](file:///home/dorito/Developer/web/tamal-rosita.github.io/_layouts/default.html) | Master layout wrapping all pages |
| [`_layouts/project.html`](file:///home/dorito/Developer/web/tamal-rosita.github.io/_layouts/project.html) | Individual project detail layout |
| [`about.html`](file:///home/dorito/Developer/web/tamal-rosita.github.io/about.html) | About page (studio info, mission, skills) |
| [`projects.html`](file:///home/dorito/Developer/web/tamal-rosita.github.io/projects.html) | Projects listing page |
| [`_projects/naia.md`](file:///home/dorito/Developer/web/tamal-rosita.github.io/_projects/naia.md) | NAIA game entry |
| [`_projects/el-tesoro-de-boturini.md`](file:///home/dorito/Developer/web/tamal-rosita.github.io/_projects/el-tesoro-de-boturini.md) | Boturini game entry |
| [`.gitignore`](file:///home/dorito/Developer/web/tamal-rosita.github.io/.gitignore) | Excludes vendor/, _site/, etc. |

### Modified Files

| File | Changes |
|------|---------|
| [`index.html`](file:///home/dorito/Developer/web/tamal-rosita.github.io/index.html) | Added Jekyll front matter, removed HTML wrapper (now uses layout) |
| [`style.css`](file:///home/dorito/Developer/web/tamal-rosita.github.io/style.css) | Added ~580 lines: nav bar, about page, projects grid, project detail, responsive styles |
| [`main.js`](file:///home/dorito/Developer/web/tamal-rosita.github.io/main.js) | Added mobile nav toggle with outside-click-to-close |

---

## Visual Results

### Home Page (light mode)
The original landing page is pixel-perfect identical, with the addition of the nav bar:

![Home page with retro nav bar, cartridges, and progress bar](/home/dorito/.gemini/antigravity-ide/brain/5084f25d-a297-412a-a2fb-65d187a811b7/home_page_actual_1787428429607.png)

### Home Page (dark mode)
Disco mode still works perfectly — clicking a lamp toggles dark mode with the colored light overlay:

![Home page in dark disco mode](/home/dorito/.gemini/antigravity-ide/brain/5084f25d-a297-412a-a2fb-65d187a811b7/home_page_dark_mode_1787428723021.png)

### About Page
Studio info with "Who We Are", "Our Mission", "What We Do" skill cards, and "Connect" sections:

![About page with studio description and skill cards](/home/dorito/.gemini/antigravity-ide/brain/5084f25d-a297-412a-a2fb-65d187a811b7/about_page_maximized_1787428659846.png)

### Projects Page
Game collection with clickable cartridge cards:

![Projects listing with cartridge cards](/home/dorito/.gemini/antigravity-ide/brain/5084f25d-a297-412a-a2fb-65d187a811b7/projects_page_maximized_1787428682103.png)

### Individual Project Page (NAIA)
Full project detail with cover art, tagline, play button, description, and feature list:

![NAIA project detail page](/home/dorito/.gemini/antigravity-ide/brain/5084f25d-a297-412a-a2fb-65d187a811b7/project_naia_maximized_1787428695752.png)

### Full Navigation Flow Recording

![Browser recording showing navigation through all pages](/home/dorito/.gemini/antigravity-ide/brain/5084f25d-a297-412a-a2fb-65d187a811b7/jekyll_site_preview_1787428361861.webp)

---

## Google Analytics

✅ **Verified**: The tag `G-JF510QX21V` is injected on **all 5 pages** (index, about, projects, NAIA detail, Boturini detail) via the shared `_includes/analytics.html` partial.

---

## How to Add New Projects

Just create a new `.md` file in `_projects/`:

```markdown
---
layout: project
title: My New Game
cover: /assets/my-game-cover.png
link: https://tamalrosita.itch.io/my-game
description: "A short description for the card"
tagline: "An optional tagline for the hero section"
---

Full project description in Markdown here...
```

---

## Running Locally

```bash
bundle exec jekyll serve
# → http://localhost:4000
```

## Deploying

Just push to GitHub — GitHub Pages builds Jekyll automatically. No additional setup needed.
