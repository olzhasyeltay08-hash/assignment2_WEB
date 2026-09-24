# FACEIT CS2 Player Stats & Level Progression Portal

A responsive web application demonstrating advanced CSS layout techniques using **Flexbox** and **CSS Grid**. This project displays FACEIT player cards, statistical overlays, and a visual level progression gallery for Counter-Strike 2 players.

---

## 📌 Project Features

* **Task 0 & Part 1: Flexbox Navigation Bar**
  * Sticky header featuring the brand logo aligned to the left and navigation links aligned to the right.
  * Uses Flexbox for horizontal alignment, vertical centering, and custom hover states.
  * Direct external navigation link to the author's FACEIT profile.

* **Task 1: Featured Player Cards (Flexbox)**
  * Display of 3 distinct player profiles representing Level 1, Level 4, and Level 10 skill tiers.
  * Flexbox-powered layout ensuring equal height across all cards with gap spacing.
  * Interactive hover card-lift animation and shadow effects.
  * Interactive **"View Stats"** buttons triggering a modal window with detailed in-game metrics (Elo, K/D Ratio, Win Rate, Matches Played, Headshot %).

* **Task 2: Page Layout (CSS Grid Areas)**
  * Structured page architecture utilizing CSS Grid areas: `sidebar`, `main`, and `footer`.
  * Dashboard sidebar displaying live match statistics and game region status.

* **Task 3: Level Progression Gallery (CSS Grid)**
  * 3x3 Grid gallery displaying images representing FACEIT levels 2 through 10.
  * Hover caption overlays detailing Elo ranges and skill descriptors for each level.
  * Clickable gallery items that open descriptive modal popups.

* **Part 3: Interactivity & Design**
  * Modern dark-themed user interface matching the official FACEIT brand identity.
  * Smooth scrolling navigation.
  * Dynamic JavaScript modal system for stats and gallery details.

---

## 📁 File & Directory Structure

```text
olzhik 10lvlv faceit/
│
├── images/
│   ├── 1.jpg          # Level 1 Image
│   ├── 2.jpg          # Level 2 Image
│   ├── 3.png          # Level 3 Image
│   ├── 4.jpg          # Level 4 Image
│   ├── 5.webp         # Level 5 Image
│   ├── 6.jpg          # Level 6 Image
│   ├── 7.png          # Level 7 Image
│   ├── 8.jpg          # Level 8 Image
│   └── 9.jpg          # Level 9 Image
│
├── 10lvl.png          # Level 10 Image
├── index.html         # Main HTML Document
├── style.css          # Advanced CSS Styles (Flexbox & Grid)
├── script.js          # Interactive JavaScript Functions
└── README.md          # Project Documentation
