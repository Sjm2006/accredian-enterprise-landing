# Accredian Enterprise Landing Page

<p align="left">
  <img src="https://img.shields.io/badge/Next.js-15-000000?style=flat&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.x-06B6D4?style=flat&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Deployed_on-Vercel-000000?style=flat&logo=vercel&logoColor=white" alt="Vercel" />
</p>

---

## Project Overview

**Accredian Enterprise Landing Page** is a pixel-conscious recreation of [Accredian Enterprise](https://enterprise.accredian.com/), built as part of a Frontend Developer Internship assignment. The project demonstrates the ability to translate a real-world production website into a clean, responsive, and performant implementation using modern React and Next.js practices.

The goal of this project was not just to replicate visuals, but to reason through component architecture, responsive behavior, and code organization the way a production frontend team would approach it.

---

## Live Demo

**[https://accredian-enterprise-landing-nu.vercel.app/](https://accredian-enterprise-landing-nu.vercel.app/)**

## GitHub Repository

**[https://github.com/Sjm2006/accredian-enterprise-landing](https://github.com/Sjm2006/accredian-enterprise-landing)**

---

## Features

- Fully responsive layout across mobile, tablet, and desktop breakpoints
- Component-driven architecture with reusable, isolated UI blocks
- Built on the Next.js App Router with server and client components used appropriately
- Type-safe codebase using TypeScript throughout
- Utility-first styling with Tailwind CSS for consistent design tokens
- Lightweight iconography using Lucide React
- API routes for handling backend-adjacent logic (e.g., form submissions)
- Optimized for fast load times and clean Lighthouse scores
- Deployed on Vercel with continuous deployment from the main branch

---

## Tech Stack

| Category            | Technology                      |
|---------------------|----------------------------------|
| Framework            | Next.js 15 (App Router)         |
| UI Library           | React 19                        |
| Language              | TypeScript                      |
| Styling               | Tailwind CSS                    |
| Icons                 | Lucide React                    |
| Backend / API         | Next.js API Routes              |
| Hosting / Deployment  | Vercel                          |

---

## Folder Structure

```
accredian-enterprise-landing/
├── app/
│   ├── api/                 # Next.js API routes
│   ├── (routes)/             # Page-level routes (App Router)
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Landing page entry point
├── components/
│   ├── ui/                   # Reusable, generic UI components
│   ├── sections/              # Page-specific sections (Hero, Features, Footer, etc.)
│   └── shared/                # Shared layout components (Navbar, Footer)
├── lib/                       # Utility functions and helpers
├── types/                     # TypeScript type definitions
├── public/                    # Static assets (images, icons, fonts)
├── styles/                    # Global styles and Tailwind config
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## Installation & Setup Instructions

Clone the repository and install dependencies:

```bash
git clone https://github.com/Sjm2006/accredian-enterprise-landing.git
cd accredian-enterprise-landing
npm install
```

---

## Running the Development Server

Start the local development server:

```bash
npm run dev
```

The application will be available at:

```
http://localhost:3000
```

---

## Building for Production

Generate an optimized production build:

```bash
npm run build
```

Start the production server locally after building:

```bash
npm run start
```

---

## Deployment

This project is deployed on **Vercel**, which provides native support for Next.js applications.

**Deployment steps:**

1. Push the repository to GitHub.
2. Import the repository into [Vercel](https://vercel.com/).
3. Vercel auto-detects the Next.js framework and configures the build settings.
4. Every push to the main branch triggers an automatic production deployment.

Live deployment: [https://accredian-enterprise-landing-nu.vercel.app/](https://accredian-enterprise-landing-nu.vercel.app/)

---

## Project Architecture and Approach

**Why Next.js App Router**
The App Router was chosen over the Pages Router because it aligns with the current direction of Next.js development, offers native support for React Server Components, and provides better data-fetching patterns and layout nesting. This made it possible to build a more scalable and maintainable page structure while keeping client-side JavaScript minimal where it wasn't needed.

**Why Reusable Components**
The UI was broken down into small, composable components (buttons, cards, section wrappers) rather than large monolithic page files. This reduced duplication, made styling consistent across the site, and made it significantly easier to adjust or extend individual sections without affecting unrelated parts of the layout.

**Project Organization**
The codebase separates concerns clearly: `app/` handles routing and page composition, `components/` holds UI building blocks (split further into generic `ui/` components and page-specific `sections/`), and `lib/` and `types/` centralize shared logic and type definitions. This structure keeps the project predictable and easy to navigate, even as it grows.

**Responsive Design Implementation**
Responsive design was implemented using Tailwind CSS's mobile-first breakpoint system (`sm`, `md`, `lg`, `xl`). Layouts were built starting from the smallest screen size and progressively enhanced for larger viewports, ensuring consistent spacing, typography scaling, and grid behavior across devices.

**Why TypeScript**
TypeScript was used to catch errors at compile time, enforce consistent prop and data shapes across components, and improve overall code readability and maintainability. It also made refactoring safer as the component tree grew in complexity.

---

## AI Usage

In line with the assignment requirements, this section transparently documents where AI tools were used during development:

- **ChatGPT** was used for project planning, debugging assistance, architecture discussions, and clarifying concepts related to Next.js App Router and component design patterns.
- **GitHub Copilot** was used for inline code suggestions and to improve development speed on repetitive or boilerplate code.

All final implementation work — including component structure, UI refinements, responsive styling, layout decisions, manual testing, debugging, and deployment — was completed manually by the developer. AI tools were used as productivity aids, not as a substitute for understanding or hands-on implementation.

---

## Future Improvements

- Backend integration with a database (e.g., PostgreSQL or MongoDB) for dynamic content
- Authentication system for admin or user-specific features
- Enhanced animations and micro-interactions for a more polished feel
- Accessibility improvements (ARIA labels, keyboard navigation, color contrast audits)
- CMS integration (e.g., Sanity or Contentful) for easier content management
- Performance optimization (image optimization, code splitting, caching strategies)
- Unit and integration testing using Jest and React Testing Library

---

## License

This project is licensed under the **MIT License**. You are free to use, modify, and distribute this project with proper attribution.

---

## Author

**Sjm2006**
GitHub: [https://github.com/Sjm2006](https://github.com/Sjm2006)

---

<p align="center"><i>Built as part of a Frontend Developer Internship assignment.</i></p>
