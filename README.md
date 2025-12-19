# CloudOps Dashboard

An enterprise-grade Data Resilience and File Management Dashboard. This project demonstrates a scalable frontend
architecture designed for complex SaaS applications, utilizing Feature-Sliced Design (FSD) to decouple business logic
from UI presentation.

The application simulates a mission-critical interface for managing cloud storage, file hierarchies, and data integrity
monitoring, mirroring the standards of industry leaders like Veeam.

### 🟢 Live Demo

**[Open Demo](https://cloud-ops-dashboard.vercel.app/)**

**(Demo Account):**

* **Email:** `admin@admin.com`
* **Password:** `admin12345678`

## Tech stack

- **Build**: Vite + React + TypeScript
- **Routing**: React Router (data router: `createBrowserRouter` / `RouterProvider`)
- **Server state**: TanStack Query + TanStack Query Devtools
- **Client state**: Zustand (slice pattern)
- **HTTP**: Axios
- **Forms**: React Hook Form + Zod (+ `@hookform/resolvers`)
- **Styling**: Tailwind CSS
- **UI utilities**: `class-variance-authority` (CVA) + `clsx` + `tailwind-merge` (via `cn()` helper)
- **Icons**: Lucide
- **Dates**: date-fns
- **Unit/component tests**: Vitest + Testing Library + jsdom
- **E2E tests**: Playwright

## Getting started

- npm install
- npm run dev

## Project structure

```text
src/
├── app/                  # Application initialization
│   ├── providers/        # Global providers (Query, Router)
│   ├── routes/           # Route definitions
│   └── styles/           # Global styles and Tailwind imports
│
├── pages/                # Composition layer for routes
│   ├── home/             # Home page composition
│   └── files/            # Files page composition
│
├── widgets/              # Independent, complex UI blocks
│   └── app-shell/        # Sidebar, Header, Layout wrappers
│
├── features/             # User actions and business logic
│   └── file-manager/     # Logic for handling files (Upload, Delete)
│
├── entities/             # Business domain models (Data + Pure UI)
│   └── file/             # File type definitions and display components
│
└── shared/               # Reusable, domain-agnostic code
    ├── api/              # API clients and query config
    ├── config/           # Environment validation (Zod)
    ├── lib/              # Utilities (cn, date formatting)
    └── ui/               # Design System (Buttons, Inputs, Dialogs)

```

### What goes where

#### `app/`

App-level composition and configuration.

- `providers/`: wiring for Query + Router (single place to add app-level providers)
- `routes/`: route definitions and path constants
- `store/`: global Zustand store composition (slices)
- `styles/`: global Tailwind entry (`globals.css`)

#### `pages/`

Route-level screens matched by routes. Pages should primarily compose `widgets/` and `features/`.

#### `widgets/`

Larger UI blocks shared across pages (layout, navigation, shells). Widgets can compose multiple features.

#### `features/`

Business features. Each feature typically owns its own:

- `api/` (Axios calls + TanStack Query hooks/keys)
- `model/` (feature state, optionally Zustand slice)
- `ui/` (feature UI components)

#### `entities/`

Stable domain models (e.g. `User`, `File`) and optionally schemas/types reusable across features.

#### `shared/`

Reusable building blocks and utilities.

- `api/`: `apiClient` (Axios instance), optional query config
- `ui/`: reusable components (e.g. `Button` built with CVA)
- `lib/`: helpers (`cn`, date helpers, etc.)
- `config/`: environment helpers/validation (optional)

## Styling Guide

I use a combination of **Tailwind CSS** and **CVA** to build reusable components.

- **Utility Classes:** Use standard Tailwind classes for layout and spacing.
- **Components:** Use `src/shared/ui` components for buttons, inputs, etc.
- **Conflict Resolution:** Always use the `cn()` utility when merging custom classes with default component styles.

## Conventions

- Prefer keeping state close to the feature. Use `app/store` only for truly global concerns (app-wide UI state,
  session/auth, etc.).
- Put API calls and TanStack Query hooks under `features/<feature>/api` to keep server-state logic next to the feature
  that uses it.
- Use `shared/lib/cn.ts` to merge Tailwind classes safely (`clsx` + `tailwind-merge`).