# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm install` - Install dependencies
- `npm run dev` - Start development server on http://localhost:3000 with hot reloading
- `npm run build` - Create production build
- `npm run start` - Run production server
- `npm run lint` - Run ESLint to check code quality

### TypeScript
The project uses TypeScript with strict mode enabled. When modifying code, ensure type safety is maintained. The TypeScript configuration includes path aliases where `@/*` maps to `./src/*`.

## Architecture

This is a Next.js 15.3.4 application using the App Router architecture with React 19.0.0.

### Key Technologies
- **Framework**: Next.js with App Router
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS v4 with PostCSS
- **Linting**: ESLint with Next.js recommended configuration

### Project Structure
- `src/app/` - App Router pages and layouts
- `src/app/page.tsx` - Main page component (client-side rendered)
- `src/app/layout.tsx` - Root layout wrapping all pages
- `src/app/globals.css` - Global styles and Tailwind imports
- `public/` - Static assets served directly

### Application Overview
The Fellowship of Joaquin is a humorous single-page website that parodies religious organizations, dedicated to a British Shorthair cat. The main page includes:
- Hero section with cat image and call-to-action
- About section explaining the "revelation"
- Sacred tenets (humorous commandments)
- Membership form with client-side state management
- Footer with navigation links

### Code Patterns
- Client-side rendering using `'use client'` directive
- React hooks for state management (useState)
- Responsive design with Tailwind utility classes
- Form handling with controlled components
- Smooth scroll navigation between sections

### Testing
No testing framework is currently configured. Consider adding Jest or Vitest for unit tests and Playwright or Cypress for E2E tests when needed.