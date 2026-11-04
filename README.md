![Portfolio V2](src/assets/images/portfolioV2.png)

# Description

This is version 2 of my portfolio site. This time around, I redesigned how the site is navigated using react router and framer motion for animating in elements. I also added a personal touch by including the option to change the theming of the site. The themes listed on the site are inspired by the color profiles of custom keycaps for mechanical keyboards.

# Tools Used

- React.js
- React Router
- JavaScript
- Html
- Scss
- Framer Motion (Animation library for React)

# Local Development

Use Node.js 24.11.0 or newer within the 24.x LTS release line (recommended),
or Node.js 22.12.0 or newer within the
22.x LTS release line. The supported versions are declared in `package.json`;
`.nvmrc` selects Node.js 24 when using nvm.

```sh
nvm install
nvm use
npm ci
npm start
```

`npm start` runs the Vite development server. To build and preview the production
site locally:

```sh
npm run build
npm run serve
```

Deploy the generated `dist/` directory. The hosting service must rewrite requests
for `/work-and-skills`, `/projects`, and `/contact` to `index.html` so direct links
and page refreshes work with the browser router.

# Dependency and Behavior Checks

```sh
npm audit
npm run build
```

After updating dependencies, check the development server and production preview:

- Navigate between Home, Work/Skills, Projects, and Contact, then refresh each route.
- Confirm page transitions finish and project images load.
- Open the theme picker, try all five themes, and reload to verify persistence.
- At a mobile viewport, open the navigation menu and select a page; confirm it closes.
- Confirm the resume PDF loads and project, social, and email links retain their destinations.
