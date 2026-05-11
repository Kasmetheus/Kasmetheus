# jeffers-seven-site

Static one-page website for Jeffers Seven Consulting LLC.

Deployed at https://jeffers-seven.com via Cloudflare Pages.

## Stack

- Static HTML, CSS, and minimal JavaScript
- Inter from Google Fonts
- No build step, no framework, no dependencies

## Local development

Open `index.html` directly in a browser. That's the entire workflow.

## Deployment

Cloudflare Pages is connected to this repository. Pushes to `main` auto-deploy within ~30 seconds.

## Architecture notes

- Single-page design, anchor-free (the page is short enough that navigation isn't needed)
- Mobile-first responsive
- Accessibility: WCAG AA contrast, semantic HTML, keyboard-navigable, respects prefers-reduced-motion
- Performance target: under 100KB total page weight, Lighthouse 95+ across categories

## Future work

- Privacy Policy and Terms of Service pages (pending attorney review of templates)
- Optional case studies section once first engagements close (with client permission)
- Optional contact form or Calendly embed once booking workflow is wired
