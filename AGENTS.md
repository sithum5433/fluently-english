# Project guidance

## Primary English learning approach

The user's continuing preference is that children's English learning is activity based. Preserve this when adding or revising Primary English features:

- Teach alphabet handwriting through guided tracing and opportunities to write independently.
- Include alphabet colouring and playful letter, sound, word, and recognition activities.
- Use an attractive, child-friendly interface with simple instructions, large touch targets, readable text, and encouraging feedback.
- Make activities usable with touch, a stylus, and a mouse; provide labelled controls and keyboard access where practical.
- Let children repeat activities without losing other learning progress, and keep the existing study paths for older learners available.

## Development and hosting

This is a static, browser-based application. Keep asset URLs relative so it works at the GitHub Pages project path. Avoid adding a server or accounts unless the task requires them.

Run `node --test tests/*.test.mjs` and `node scripts/build.mjs` (or `npm test` and `npm run build`) for application changes before publishing. Curriculum source lives in `curriculum/`; the build regenerates `src/content.js`. Do not commit the generated `dist/` deployment folder.

Repository: `sithum5433/fluently-english`. The existing GitHub Actions workflow publishes pushes to `main` at `https://sithum5433.github.io/fluently-english/`.
