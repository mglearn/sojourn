# Suffrage Sojourn

An accessible, no-combat educational browser game about the unfinished history of
voting rights in the United States. Five historic stops, three pieces of evidence
and one civic challenge each — no timer, no lost lives. Published at
**https://mglearn.github.io/sojourn/** and listed on the
[Learning Activities Hub](https://mglearn.github.io/activities/).

Seven languages — English, Español, Tiếng Việt, العربية, हिन्दी, اردو, and 中文,
matching the hub's canonical set, with right-to-left layout for Arabic and Urdu —
adjustable reading level
(K–2 · 3–5 · 6–8 · 9–12), optional narration, and a reduced-motion mode. Best fit
is Grade 5 U.S. history, Grade 7 Texas history, Grade 8 U.S. history, and high
school U.S. History. Teacher mode carries the lesson plan, discussion prompts,
TEKS connections, and the source shelf.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Built with React and Vite. Progress, the student journal, and settings are stored
locally in the browser — no logins, no accounts, and no student data collected or
transmitted.

## Deployment

Pushing to `main` builds the site and publishes it to GitHub Pages via
`.github/workflows/deploy.yml`. `vite.config.js` sets `base: '/sojourn/'`, which
must match the repository name for asset paths to resolve.

## Licensing

**Content CC BY-NC 4.0 · Code MIT · © 2026 TCEA.** Created by Miguel Guhlin in the
course of his work at TCEA.

[**Licensing & provenance**](https://mglearn.github.io/activities/licensing.html)
on the Learning Activities Hub is the authoritative source for the full terms —
what you may do without asking, what needs written permission, and how to credit.
Deployed pages carry a link to it in the footer, injected by the hub's shared
`/activities/licensing-footer.js`. That path is absolute and same-origin, so it
resolves in production but not under `npm run dev`; the footer is simply absent
locally, which is expected.

To credit: *Suffrage Sojourn © 2026 TCEA, created by Miguel Guhlin. Licensed
CC BY-NC 4.0.*

## Provenance

Originally published at `mguhlin.github.io/sojourn` and moved to the `mglearn`
account on 11 August 2026 to sit alongside the rest of the Learning Activities
Hub. Full commit history was carried over.

Historical material is drawn from public institutional sources — the Library of
Congress exhibition on the Declaration of Sentiments, the National Archives
milestone documents for the 19th Amendment and the Voting Rights Act, and the
National Park Service suffrage timeline. These are linked directly from the source
shelf in teacher mode. No primary-source text is reproduced beyond short quoted
excerpts.

Scene artwork is original illustration in the style of a period archival print,
not reproduced historical artwork. Content, code, artwork, and the seven-language
translations are produced with the help of generative-AI tools and refined under
human editorial review. Translations are machine-assisted and should be reviewed
by a local educator before classroom use.
