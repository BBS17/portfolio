# Bricio Blancas Salgado Portfolio

A responsive mission-control-inspired software engineering portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

[![CI](https://github.com/BBS17/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/BBS17/portfolio/actions/workflows/ci.yml)

## Live site

[View the deployed portfolio](https://bricio-mission-control-portfolio.vercel.app)

The site presents technical skills, education, professional background, and selected projects, including:

- Cartograph Shopping Tracker: React, Spring Boot, SQLite, live product search, watchlists, and price history
- AI Fact-Checking Platform: FastAPI, NLP model inference, evaluation, Docker, and a browser extension
- Traduceme workplace language learning platform
- SmartTodo AI academic planner
- Autonomous Firefighter Robot

## Requirements

- Node.js 20 or newer
- npm 10 or newer

## Run locally

```bash
npm install
npm run dev
```

Open <http://127.0.0.1:5173>.

## Production build

```bash
npm ci
npm run build
npm run preview
```

The optimized site is written to `dist/`.

GitHub Actions installs the locked dependencies, audits high-severity vulnerabilities, and builds the site for every pull request and push to `main`.

## Project structure

```text
src/App.jsx       Page sections and project-card rendering
src/data.js       Navigation, skills, projects, and contact data
src/styles.css    Tailwind layers and custom visual effects
src/assets/       Portfolio-owned visual assets
public/           Static files, including the resume
```

## Updating projects

Project entries live in `src/data.js`. Each entry supports:

```js
{
  name: 'Project name',
  status: 'Complete',
  summary: 'Concise project description.',
  tech: ['React', 'Java'],
  github: 'https://github.com/owner/repository',
  demo: 'https://optional-live-demo.example'
}
```

The `demo` link is optional and is only rendered when provided.

## Asset note

The mission-control hero background was generated specifically for this portfolio and is stored at `src/assets/mission-control-hero.png`.
