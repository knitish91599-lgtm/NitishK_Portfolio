# Portfolio Template

A single-page portfolio in plain HTML, CSS and JS. You don't need a framework or a build step.

## Folder structure

```
portfolio-template/
├── index.html      ← your text: hero, about, experience, skills, contact
├── css/style.css   ← colors and layout
├── js/script.js    ← your project cards (the `projects` list)
└── assets/         ← your images (add these yourself)
    ├── profile.jpg
    └── (project screenshots)
```

## How to fill it in

1. **index.html**: search for `EDIT` and for anything in `[brackets]`, then replace it with your own info.
   - To add or remove a job, copy or delete a whole `<div class="timeline-item">` block.
   - To add or remove skills, edit the `<span class="tag">` items inside each `skill-card`.
2. **js/script.js**: edit the `projects` list near the top. The comment above it explains each field.
3. **assets/**:
   - `profile.jpg` is your photo; a square one looks best. Until you add it, the circle shows your initials (set with `data-initials` in index.html).
   - For project screenshots, add something like `assets/my-project.png` and set `image: 'assets/my-project.png'` in the project. Leave it as `null` to show the emoji instead.

## Changing the colors

At the top of `css/style.css`, change the `--accent` color (and `--accent-dim` / `--accent-glow` to match) to restyle the whole site.

## Putting it on GitHub Pages

1. Create a repo named `your-username.github.io`.
2. Upload these files to the repo root, with `index.html` at the top level.
3. Go to **Settings → Pages** and set the source to the `main` branch, root folder.
4. Your site goes live at `https://your-username.github.io`.
