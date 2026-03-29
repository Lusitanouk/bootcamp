# AGENTS.md
## Primary source of truth
Follow these files in this order:
1. `SPECS/product-blueprint.md`
2. `PLANS.md`
3. any inline task instruction from the user

If there is a conflict, prefer the most recent user instruction, then `AGENTS.md`, then `SPECS/product-blueprint.md`.

## Required implementation constraints
- Use HTML, CSS and JavaScript only.
- Build a static SPA that runs locally from `index.html`.
- Use a multi-file folder structure.
- Use relative references only.
- No external CDNs.
- No external fonts.
- No external JavaScript libraries.
- No frameworks.
- No build tooling.
- No server-side code.
- No network calls.
- Keep all assets and data local to the repository.
- Ensure the application works when copied to another Windows laptop or USB drive.

## Product and UX intent
The app is not a replica of product UI. It is a sales solution simulator.
It must help a presenter explain:
- product differences
- use case fit
- API-only vs desktop vs hybrid patterns
- false positive reduction levers
- data residency considerations
- end-to-end solution examples and flows

## Required app sections
Implement and maintain these sections:
- Home
- Use Case Explorer
- Solution Examples
- Capability Explorer
- Pain Points
- Sales Talk Track

## Solution Examples requirements
The app must include visual end-to-end flow examples that show:
- user interaction points
- customer portals or systems
- LSEG products and interfaces
- API request and response flows
- webhook event flows where relevant
- downstream customer workflow or case handling

## Branding requirements
- Use LSEG Risk Intelligence branding and assets stored in repository
- Use official assets only if they are provided locally in the repository.
- If official assets are not present, use a text-based fallback lockup.
- Do not invent unofficial product logos.

## Coding guidance
- Keep code modular and readable.
- Use semantic HTML.
- Prefer accessible controls and clear labels.
- Use small, focused rendering functions.
- Keep content in structured data objects or local JSON files.
- Separate data, rendering, interaction logic and styling.

## File structure target
Prefer this structure unless a later task requires a small adjustment:

/lseg-sales-solution-explorer
  index.html
  AGENTS.md
  PLANS.md
  /SPECS
    product-blueprint.md
  /css
    styles.css
  /js
    app.js
    data.js
    render.js
    interactions.js
  /assets
    /fonts
    /icons
    /images
  /data

## Delivery style
When asked to implement a phase:
1. inspect current files first
2. explain the planned changes briefly
3. make the changes
4. summarize what was created or updated
5. call out any gaps against the spec

## Guardrails
- Do not replace the static architecture with React, Vue, Tailwind, npm packages or bundlers.
- Do not remove or weaken the local/offline requirement.
- Do not hardcode remote asset URLs.
- Do not collapse the app into a single file unless explicitly instructed.
- Do not simplify away the Solution Examples flow pages.
- Do not present generic claims about false positive reduction without showing practical levers.