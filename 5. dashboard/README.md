# Dashboard Layout

A responsive dashboard layout built with **CSS Grid**, featuring a header, sidebar, and main content area. This project is the practical implementation of my [Dashboard Layout Engineering Documentation](https://falcon-stoop.netlify.app/#/css/dashboard-layout).

## Live Demo

[View Live](https://your-demo-link.netlify.app)

## Features

- **CSS Grid Layout** — Three core sections (header, sidebar, main) arranged using `grid-template-areas`
- **Responsive Sidebar** — On mobile, the sidebar slides in as an overlay using `position: fixed` + `transform`
- **Dark Mode Toggle** — Checkbox + label pattern with CSS custom properties for seamless theme switching
- **CSS Custom Properties** — All colors managed through variables, making theme changes trivial
- **No fixed heights** — Header and sidebar size naturally using `auto`; main content fills remaining space with `1fr`

## What I Learned

- **Grid Fundamentals** — `grid-template-columns: auto 1fr` and `grid-template-rows: auto 1fr` create a flexible layout without hardcoding dimensions
- **`grid-template-areas`** — Assigning named areas to grid children makes the layout self-documenting
- **`align-self: start`** — Prevents the sidebar from stretching when it shouldn't fill the full row height
- **Adjacent Sibling Selector (`+`)** — Used to style the dark mode toggle label based on checkbox state, without JavaScript
- **`classList.toggle()` second argument** — Forces class on/off based on a boolean, preventing state mismatch
- **CSS Custom Properties** — One class on `<body>` changes all colors; no per-element overrides
- **Position Fixed + Transform** — Sidebar overlay on mobile using `translateX(-100%)` for smooth slide-in
- **`calc()` with CSS variables** — Sidebar height dynamically calculated as `calc(100% - var(--header-height))`


## Technical Decisions

| Decision | Why |
|----------|-----|
| CSS Grid over Flexbox | Two-dimensional layout (rows + columns) in one container |
| `auto` over fixed widths/heights | Content determines size; no magic numbers |
| Checkbox + Label for dark mode | Native browser behavior; no JS needed for the toggle UI |
| CSS variables over per-element overrides | One source of truth for colors; clean dark mode |
| `position: fixed` for mobile sidebar | Takes sidebar out of grid flow; overlays main content |

## Engineering Documentation

For a complete breakdown of every architectural decision, edge case, and the "why" behind each pattern, see the full documentation:

[Dashboard Layout — Engineering Doc](https://falcon-stoop.netlify.app/#/css/dashboard-layout)
