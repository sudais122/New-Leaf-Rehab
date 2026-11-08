# New Leaf Rehab Center website (React)

React + Vite migration of the original static HTML/CSS/JS site. The design is unchanged; the only visual
change is the font family (Inter, then Calibri, Arial, sans-serif — see `--font-sans` in `src/styles/variables.css`).

```bash
npm install
npm run dev       # development server
npm run build     # production build -> dist/
npm run preview   # serve the production build locally
```

## Structure

```
src/
├── assets/images/   all original images (same file names) + index.js
├── components/      Header, Footer, Layout, Reveal (scroll animation), Reviews slider, Button, ...
├── data/            site constants, services, departments, team, gallery, reviews
├── hooks/           usePageMeta (per-page <title> / description)
├── pages/           Home, About, Team, Gallery, Services, Departments, Internship, Contact
├── styles/          the original style.css split into files; see index.css
├── App.jsx          routes
└── main.jsx
```

## Things worth knowing

- **Reviews:** add them in `src/data/reviews.js` (same format as before). While the list is empty, the
  "Your voice matters" card is shown; set `GOOGLE_REVIEW_URL` to turn its button into a Google review link.
- **Contact details** (phone, email, WhatsApp number, map link) live in `src/data/site.js`.
- **CSS order matters.** `src/styles/index.css` imports the split files in the original source order so the
  cascade is identical to the old `style.css`.
- **Hosting:** URLs are now `/about`, `/services#addiction`, … (no `.html`). The host must serve `index.html`
  for unknown paths (a "single-page app" fallback). `npm run dev` and `npm run preview` already do this.
