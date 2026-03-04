# PLANCRAFT

## Project Overview

**PLANCRAFT** is an architectural engineering portfolio website built for showcasing projects and services. The site is primarily in Czech language with URL rewrites for localization.

- **Live URL**: https://plancraft.eu
- **Type**: Portfolio / Agency website
- **Language**: Czech (cs-CZ)

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 14.0.3 | React framework (App Router) |
| React | 18.2.0 | UI library |
| TypeScript | 5.2 | Type safety |
| styled-components | 6.0.8 | CSS-in-JS styling |
| Apollo Client | 3.8.4 | GraphQL client |
| Framer Motion | 10.16.4 | Animations |
| Prepr.io | - | Headless CMS (GraphQL API) |

## Directory Structure

```
/app                    # Next.js App Router pages
  /(client)            # Client components for homepage
  /about               # About page (/o-nas)
  /contact             # Contact page (/kontakt)
  /project/[slug]      # Individual project pages
  /projects/[[...category]]  # Projects listing with filtering
  /service/[slug]      # Service detail pages (/sluzba/[slug])
  layout.tsx           # Root layout with providers
  page.tsx             # Homepage
  sitemap.ts           # Dynamic sitemap generation

/components            # 68 reusable React components
  /Navbar              # Navigation with scroll behavior
  /Footer              # Footer with EU funding info
  /Typography          # Large, Medium, Small, Mini, Micro text
  /Button, /Link       # UI primitives
  /FigureBanner        # Image + text sections
  /ProjectCard         # Project showcase cards
  /Services            # Services listing
  /TextAnimation       # Reveal animations
  /ScrollAnimation     # Scroll-triggered animations
  /Divider             # Animated dividers
  /BackgroundGrid      # Background grid pattern
  /Svgs                # SVG icons (Logo, Arrow, etc.)

/hooks                 # Custom React hooks
  useScrollDirection   # Detect scroll up/down
  useIntersectionObserver  # Element visibility
  useWindowSize        # Viewport dimensions
  useRaf               # requestAnimationFrame wrapper
  useScrollInertia     # Smooth scroll physics

/helpers               # Utility functions
  addColorClasses      # Dynamic CSS class generation
  getCssVar            # Get CSS custom properties
  createArray          # Array utilities
  percentToRgbHex      # Color conversion

/consts                # Design tokens & configuration
  colors.ts            # Color palette
  breakpoints.ts       # Responsive breakpoints
  animationConfig.ts   # Framer Motion presets
  spaces.ts            # Spacing values

/gql                   # GraphQL operations
  GetHomepageProjects.ts  # Featured projects query
  GetProjects.ts          # All projects with filtering
  GetServices.ts          # Services list
  types.ts                # Auto-generated TypeScript types

/apollo                # GraphQL client setup
  client.tsx           # Apollo Client configuration

/lib                   # Library utilities
  registry.tsx         # styled-components SSR

/public                # Static assets
  /img                 # Project images (42 directories)
  /fonts               # Custom fonts (HelveticaNow)
```

## Key Patterns & Conventions

### Component Structure
Each component follows this pattern:
```
/ComponentName
  ComponentName.tsx       # Main component logic
  StyledComponentName.tsx # styled-components styles
```

### Styling
- Use **styled-components** (not CSS modules or Tailwind)
- Import colors from `/consts/colors.ts`
- Use `rgba()` helper: `colors.primary400` or `rgba(colors.primary400, 0.5)`
- Breakpoints from `/consts/breakpoints.ts` (bp values: 400, 600, 1023, 1200, 1450, 1600, 1920, 2000)

### Data Fetching
- Server-side fetching with Apollo Client
- ISR with `revalidate = 10` (10 second cache)
- GraphQL endpoint: Prepr.io (configured in `.env`)
- Run `pnpm codegen` after modifying GraphQL queries

### Animations
- Use Framer Motion for all animations
- Import presets from `/consts/animationConfig.ts`:
  - `TIMING.duration` - default animation duration
  - `TIMING.delay` - default delay
  - `EASINGS.easeOut`, `EASINGS.easeInOut` - easing functions

### Client vs Server Components
- Default to Server Components (no directive needed)
- Add `"use client"` only when needed for:
  - useState, useEffect hooks
  - Browser APIs
  - Event handlers
  - Animations with Framer Motion

## Color Palette

```typescript
primary400: "#364785"  // Primary blue
primary300: "#BDC7EC"  // Light blue
black: "#000000"
white: "#FFFFFF"
gray1000: "#161616"    // Near black
gray100: "#F4F4F4"     // Light gray
```

## URL Rewrites (Czech paths)

| Czech URL | Maps to |
|-----------|---------|
| `/kontakt` | `/contact` |
| `/o-nas` | `/about` |
| `/sluzba/:path` | `/service/:path` |
| `/projekty/:path` | `/projects/:path` |

## Common Commands

```bash
pnpm dev           # Start development server (localhost:3000)
pnpm build         # Production build
pnpm start         # Start production server
pnpm codegen       # Generate GraphQL types from schema
pnpm check-types   # TypeScript type checking
pnpm lint          # ESLint
```

## Important Files

| File | Purpose |
|------|---------|
| `/app/layout.tsx` | Root layout, global providers, metadata |
| `/app/page.tsx` | Homepage with all sections |
| `/apollo/client.tsx` | Apollo Client configuration |
| `/consts/colors.ts` | Color palette with rgba helper |
| `/consts/breakpoints.ts` | Responsive design breakpoints |
| `/gql/types.ts` | Generated GraphQL TypeScript types |
| `/next.config.js` | Next.js config with URL rewrites |

## Guidelines for AI Assistance

### Do
- Keep user-facing content in **Czech language**
- Follow existing component folder structure
- Use styled-components for all styling
- Import design tokens from `/consts/`
- Use server components by default
- Run `pnpm codegen` after GraphQL changes
- Test layouts at all breakpoints

### Don't
- Don't use CSS modules or inline styles
- Don't create new styling approaches
- Don't translate Czech content to English
- Don't skip the styled-components pattern
- Don't add unnecessary dependencies

## GraphQL Queries

Main queries are in `/gql/`:
- `GetHomepageProjects` - Featured projects for homepage
- `GetProjects` - Full project list with category filtering
- `GetServices` - All services

After editing queries, regenerate types:
```bash
pnpm codegen
```
