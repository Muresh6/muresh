# Muresh — Software Developer Portfolio

Live site: https://muresh6.github.io/muresh/

A buildless, responsive portfolio with a midnight-and-mint theme, personal photos, a cute running cartoon mascot and interactive engineering demonstrations.

## Engineering lab

- **ReleaseOps:** staged deployment simulation with health-check failure injection and rollback. Timers are cancelled when leaving the demo.
- **QueryLab:** a restricted JavaScript SQL interpreter over eight synthetic orders, including filtering, sorting, limiting, regional aggregation and CSV export. It never evaluates arbitrary JavaScript or SQL.
- **API Studio:** local request simulation with 200, 201, 400, 401, 404 and 422 responses. JSON validation and mock authorization are demonstrated; no network requests or persistence occur.
- **Client feedback:** a rating/review form prepares an email. It never claims a review was submitted or stored; no fabricated testimonials are shown.

## Files

`index.html`, `styles.css`, `dark.css`, `engineering.css`, `script.js`, `engineering.js` and `assets/` are served directly by GitHub Pages from `main` / root. `.nojekyll` disables Jekyll processing. No install or build step is needed.

The original photo-based portrait and the four-frame running cartoon were generated using the built-in image generator with the owner's supplied reference photos. Cartoon Yourself avatar guidance and Animation Maker web-animation guidance informed the design. The runner uses a sprite strip and CSS keyframes, not a rigged 3D model. The matching GIF is available for a GitHub profile README.

The pause button and OS reduced-motion preference stop decorative animation. Images are compressed WebP files; source photos are not included. Public contact information is included with the owner's permission.

## GitHub profile README

`profile/README.md` is the prepared profile introduction. To display it on the account overview, its contents must be the root `README.md` of a public repository named `Muresh6/Muresh6`. This portfolio repository remains `Muresh6/muresh`.

## Validation

JavaScript syntax, HTML IDs, local asset paths and fragment targets were checked. Query and API helpers passed 12 behavior checks. The preceding dark-theme version passed desktop/mobile browser checks. Browser QA for this latest lab/runner update was unavailable because the browser service timed out; it has not been claimed as visually verified.
