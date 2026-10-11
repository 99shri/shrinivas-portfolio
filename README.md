# Shrinivas Karad — Personal Portfolio Dashboard

A responsive, dark-premium portfolio built with React, Vite, CSS, and Lucide icons.

## Requirements
- Node.js 18+ (Node.js 20 LTS recommended)
- npm

## Run locally
1. Extract this ZIP.
2. Open the extracted `shrinivas-portfolio` folder in VS Code.
3. Open Terminal → New Terminal.
4. Install dependencies:
   ```bash
   npm install
   ```
5. Start the local development server:
   ```bash
   npm run dev
   ```
6. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Production build
```bash
npm run build
npm run preview
```

## Where to customize
- `src/data.js`: edit name, bio, education, skills, projects, contact links, and experience.
- `src/App.jsx`: page sections, project filters, navigation, and interactions.
- `src/styles.css`: colors, layout, spacing, responsive behavior, and effects.
- `index.html`: page title and SEO description.

## Before publishing
- Check every repository URL and replace any placeholder project links with the exact repository.
- Confirm all descriptions and internship dates/status are accurate.
- Consider removing your phone number from the public website if you prefer not to publish it. The current design displays email and location publicly, not the phone number.
- Add a real profile image if desired (currently uses an SK monogram).
- Add a PDF resume and a resume-download button if you want recruiters to download it.

## Deploy to Vercel
1. Push the project to a GitHub repository.
2. Import the repository at https://vercel.com.
3. Framework preset: Vite.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Deploy.
