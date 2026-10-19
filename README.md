# Kalidhasan A: Portfolio

Personal portfolio for Kalidhasan A, AI & Machine Learning Engineer. Built with Next.js (App Router), React, TypeScript, Tailwind CSS 3, Framer Motion and Lucide React.

## Run on Windows

1. Install Node.js 20 or newer from https://nodejs.org (LTS).
2. Unzip the project, open PowerShell in the `kalidhasan-portfolio` folder.
3. Run:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Production build: `npm run build` then `npm start`. Checks: `npm run lint`, `npm run typecheck`.

`npm install` creates `package-lock.json`. It is not included because it can only be generated with network access. Commit it after your first install.

## Folder structure

```text
public/images/     profile photo (you add this)
public/resume/     Kalidhasan_A_Resume.pdf
src/data/profile.ts   all content and links
src/components/    Navbar, Hero, About, Skills, FeaturedProjects, Journey, Contact, Footer
src/app/           layout.tsx, page.tsx, globals.css (theme tokens)
```

## Add your photo (required step)

No photograph was provided when this was built. Save your photo as
`public/images/kalidhasan-profile.jpg` (portrait, roughly 4:5, at least 900 px wide).
The hero detects it automatically. Until then it shows a "KA" placeholder.
If your file is PNG or WebP, change `photo.src` in `src/data/profile.ts` to match; do not just rename the extension.

## Update content

- Everything lives in `src/data/profile.ts`: summary, skills, projects, internships, leadership, certifications, links.
- Resume: replace `public/resume/Kalidhasan_A_Resume.pdf` (keep the filename).
- Project links: set `repo` and/or `demo` on a project in `profile.ts`. Buttons only appear when a URL exists.
- Colours: edit the CSS variables at the top of `src/app/globals.css`.

## Theme

Light/dark toggle is in the navbar. The choice is saved in `localStorage` under `theme`; on a first visit the OS preference is used. An inline script in `layout.tsx` applies it before first paint, so there is no flash.

## Contact form

There is no backend. Submitting validates the fields and opens a `mailto:` draft. No environment variables are needed.

## Known gaps

- Internship dates are not shown because the resume does not give them.
- No project screenshots, metrics or accuracy figures are shown, because none are in the resume. Add them to `profile.ts` when you have real ones.
- The resume's "Portfolio" link (`previousPortfolio` in `profile.ts`) is not displayed on the site.
