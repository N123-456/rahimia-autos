<!-- .github/copilot-instructions.md - concise project-specific guidance for AI coding agents -->

# Rahimia Autos — Copilot instructions (concise)

Purpose: Help GitHub Copilot / AI agents make small-to-medium code changes safely and productively in this Create React App-based website.

- How to run: use the scripts in `package.json`:
  - `npm start` — dev server (CRA)
  - `npm run build` — production build
  - `npm test` — run tests (CRA/jest)

- Big picture (quick):
  - Bootstrapped with Create React App. Entry: `src/index.js` (imports `flowbite` and wraps `<App />` in `BrowserRouter`).
  - Top-level layout: `src/App.js` — header (`Navbar`), page sections from `src/pages/*`, footer (`Footer`), and a floating `WhatsAppButton`.
  - Pages live under `src/pages` (e.g. `Products.js` uses an in-file data array and injects JSON-LD structured data). Components live under `src/Components`.

- Project-specific patterns and gotchas (use these exactly):
  - Styling: Tailwind utility classes are applied directly in JSX. Keep classes rather than moving styles into separate files unless adding significant reusable styles.
  - Fonts: Custom font utility classes like `font-Outfit` and `font-Quicksand` are used in components — preserve these names.
  - Flowbite: `import 'flowbite'` is required in `src/index.js` for Flowbite JS features — don't remove unless replacing with an alternative.
  - Routing + in-page scrolling: Components use `react-router-dom` `<Link to="/...">` combined with manual `document.getElementById(...).scrollIntoView(...)` (see `Navbar.js` `handleLinkClick`). When adding links keep both behaviors if the target is an in-page section.
  - Images: Many components reference images in `public/images`. Note `Navbar.js` uses `src="./images/rahimia.png"` — prefer absolute `/images/rahimia.png` or import the asset in JS to avoid bundling issues.
  - Data in components: `Products.js` keeps a product array inside the component and renders `ItemList` JSON-LD. Preserve the JSON-LD block structure when editing product output.
  - Accessibility: Buttons and toggles include aria attributes (e.g. mobile menu button) — continue to include them when modifying interactivity.

- Common edit patterns for PRs:
  - Small UI changes: edit the relevant component in `src/Components` or the page in `src/pages`. Keep changes localized and maintain Tailwind class patterns.
  - New pages: add file under `src/pages`, export default, and import into `src/App.js` where pages are composed.
  - Images: add to `public/images` and reference via `/images/…` or import from `src/assets` if you choose to add an assets folder.

- Tests & linting: project uses CRA defaults. Run `npm test` for quick checks. There is no custom ESLint config beyond CRA presets.

- Files to inspect for context (high-value):
  - `src/index.js` — router + flowbite
  - `src/App.js` — layout and pages composition
  - `src/Components/Navbar.js` — navigation, scroll behavior, logo path
  - `src/pages/Products.js` — product data pattern and JSON-LD
  - `public/images/` — image assets (logo etc.)

If anything here is unclear or you want the instructions to be stricter (for example, exact import patterns for images or a preferred commit message style), tell me which areas to expand and I will update this file.
