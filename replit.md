# Cabinet Dentaire Dr. Firdaous MOUSTAINE

## Overview

This is a modern, multilingual dental clinic website for Dr. Firdaous MOUSTAINE's practice in Casablanca, Morocco. The application provides a comprehensive online presence featuring service information, appointment booking, patient testimonials, educational blog content, and FAQs. The site supports three languages (French, Arabic with RTL support, and English) and includes both light and dark themes.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Routing:**
- React 18+ with TypeScript for type safety
- Wouter for client-side routing (lightweight alternative to React Router)
- Vite as the build tool and development server

**UI Component System:**
- Shadcn/ui component library with Radix UI primitives
- Tailwind CSS for styling with custom design tokens
- CSS variables for theming (light/dark mode support)
- Custom color palette focused on medical/healthcare aesthetics (teal primary color at HSL 190 65% 45%)

**State Management:**
- React Context API for global state (Language and Theme contexts)
- TanStack Query (React Query) for server state management
- Local storage for persisting user preferences (language, theme)

**Internationalization:**
- Custom translation system supporting French (primary), Arabic (RTL), and English
- Language context provider managing translations and text direction
- Font family switching: Inter for Latin scripts, Cairo/Tajawal for Arabic

**Design Principles:**
- Mobile-first responsive design
- Accessibility-focused with high contrast and readable typography
- Cultural sensitivity with seamless RTL support for Arabic
- Medical-grade aesthetic emphasizing trust and professionalism

### Backend Architecture

**Server Framework:**
- Express.js with TypeScript
- ESM (ES Modules) configuration
- Development and production build scripts with esbuild

**Data Layer:**
- Drizzle ORM for type-safe database operations
- PostgreSQL database (Neon serverless)
- Schema definition in shared directory for full-stack type safety
- In-memory storage fallback (MemStorage) for development

**API Design:**
- RESTful API routes prefixed with `/api`
- Request/response logging middleware
- Error handling with status codes and JSON responses
- CRUD operations abstracted through storage interface

**Session Management:**
- Connect-pg-simple for PostgreSQL-backed sessions (configured but not fully implemented)
- User authentication schema prepared with username/password fields

### External Dependencies

**Database:**
- Neon Serverless PostgreSQL via `@neondatabase/serverless`
- Drizzle ORM for migrations and queries
- Connection via DATABASE_URL environment variable

**UI Component Libraries:**
- Radix UI primitives (accordion, dialog, dropdown, popover, tabs, toast, etc.)
- Embla Carousel for image galleries
- Lucide React for iconography
- CMDK for command palette functionality

**Form Handling:**
- React Hook Form for form state management
- Zod for schema validation
- @hookform/resolvers for Zod integration
- Drizzle-Zod for auto-generated schemas from database

**Styling & Utilities:**
- Tailwind CSS with PostCSS
- class-variance-authority for variant-based component styles
- clsx and tailwind-merge for className management
- date-fns for date manipulation

**Development Tools:**
- Replit-specific plugins (cartographer, dev banner, runtime error overlay)
- TypeScript with strict mode enabled
- Path aliases configured (@/ for client, @shared for shared code, @assets for assets)

**Communication:**
- WhatsApp integration for appointment booking (direct links to business number +212 665 477 745)
- Contact form with validation (currently mock implementation)

**Content Management:**
- Static content with planned blog functionality
- Mock data for testimonials and blog articles (marked with "todo: remove mock functionality")
- Image assets in attached_assets directory (both generated and stock images)

### Notable Architectural Decisions

1. **Monorepo Structure**: Client and server code in same repository with shared TypeScript types
2. **Type Safety**: End-to-end type safety from database schema through API to frontend
3. **Progressive Enhancement**: Starting with in-memory storage, ready to scale to PostgreSQL
4. **Multilingual First**: Built-in internationalization from the ground up with RTL support
5. **Component-Driven**: Reusable UI components with examples directory for documentation
6. **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation, and screen reader support
7. **Performance**: Static asset optimization, lazy loading preparation, and efficient bundle splitting