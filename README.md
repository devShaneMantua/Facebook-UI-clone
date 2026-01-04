# Facebook UI Clone (Frontend Only)

Simple, non-commercial Facebook UI clone built to practice Tailwind CSS and layout skills. No backend, no tracking, and no connection to Meta/Facebook.

## What this is
- Static HTML/CSS clone of the main feed experience
- Tailwind CSS for styling (compiled from the `tailwind/` folder)
- A few vanilla JS interactions only for UI polish

## Disclaimers
- This project is for learning/demo purposes only; do not use it as a production product.
- Not affiliated with, endorsed by, or connected to Meta/Facebook.
- Avoid using copyrighted Facebook assets (logos, brand icons, screenshots). Use your own placeholders or open-license assets instead.

## Getting started
1) Clone or download the repo.
2) Open `index.html` directly in a browser, or serve the folder locally (e.g., `npx serve .`).
3) To tweak styles, edit `tailwind/style.css` and rebuild `tailwind.css` using Tailwind.

## Rebuilding Tailwind
From the project root:
```
npm install -D tailwindcss
npx tailwindcss -c tailwind/tailwind.config.js -i tailwind/style.css -o tailwind.css --watch
```
Adjust the input/output paths above if you reorganize files.

## Folder layout
- `index.html` / `friends.html` — static pages
- `js/app.js` — lightweight UI scripts
- `images/` — add your own placeholders (no Facebook assets)
- `tailwind/` — Tailwind source + config; compiled CSS lives at `tailwind.css`

## Contributing / reuse
- Feel free to fork and adapt for learning.
- If you distribute, keep the disclaimers and replace any brand-like assets.
