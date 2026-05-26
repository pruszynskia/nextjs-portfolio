# RULES — PROJECT CONSTITUTION

This file defines the core engineering rules for this project.
It must be treated as the highest priority source of truth after system prompt.

---

# 1. ARCHITECTURE PRINCIPLES

## 1.1 Feature-first structure
All code must be organized by features, not technical layers.

GOOD:
- /features/hero
- /features/projects
- /features/contact

Each feature contains:
- components/
- hooks/
- services/
- types/
- utils/

---

## 1.2 Separation of concerns

NEVER mix:
- UI logic
- business logic
- data fetching

Rules:
- UI = pure rendering
- hooks = state + orchestration
- services = API calls / external systems
- utils = pure functions only

---

## 1.3 No "god components"

If a component:
- grows > 150 lines
- handles multiple responsibilities

➡ split it immediately

---

# 2. NEXT.JS ARCHITECTURE RULES

## 2.1 App Router only
Use Next.js App Router exclusively.

- Use server components by default
- Use client components only when needed

---

## 2.2 Server vs Client decision rule

Use SERVER components when:
- fetching data
- SEO content
- static rendering

Use CLIENT components when:
- state is required
- user interaction exists
- hooks like useEffect are needed

---

## 2.3 Data fetching rules

- Prefer server-side fetching
- Avoid unnecessary client fetching
- Cache when possible

---

# 3. STATE MANAGEMENT RULES

## 3.1 Local first principle

State hierarchy:
1. local component state
2. custom hooks
3. context API
4. external libraries (only if necessary)

NEVER introduce global state unless absolutely required.

---

## 3.2 No Redux
Do not use Redux or heavy state libraries.

Prefer:
- React hooks
- Context API
- Server state patterns

---

# 4. COMPONENT DESIGN RULES

## 4.1 Composition over inheritance
Always build components using composition.

BAD:
- giant configurable component with 20 props

GOOD:
- small reusable components combined together

---

## 4.2 Props rules

- max 5–7 props per component
- if more → refactor into subcomponents or hooks

---

## 4.3 UI consistency

All UI must:
- use Tailwind only
- follow consistent spacing system
- reuse shared components

---

# 5. API ROUTES RULES (Next.js)

## 5.1 Thin API layer

API routes must NOT contain business logic.

They should:
- validate input
- call service layer
- return response

---

## 5.2 Service layer required

All API logic must go through:

/services/

Example:
- auth.service.ts
- projects.service.ts

---

# 6. CODE QUALITY RULES

## 6.1 TypeScript strict mode

- No `any`
- No implicit types
- All functions must be typed

---

## 6.2 Clean Code rules

Always follow:
- SOLID principles
- DRY
- KISS

BUT:
Do not over-engineer small features.

---

## 6.3 Naming conventions

- components: PascalCase
- functions: camelCase
- hooks: useSomething
- files: kebab-case or feature-based

---

# 7. PERFORMANCE RULES

- minimize client-side JS
- prefer server rendering
- lazy load heavy components
- optimize images (Next Image only)

---

# 8. DESIGN SYSTEM RULES (TAILWIND)

- no inline styles
- no arbitrary random values unless necessary
- use consistent spacing scale
- reuse UI primitives

---

# 9. DEVELOPMENT BEHAVIOR RULES (IMPORTANT)

When implementing any feature:

STEP 1 — THINK
- define architecture
- define modules
- define data flow

STEP 2 — PLAN
- list required files
- identify reusable parts

STEP 3 — IMPLEMENT
- write modular code
- avoid large files

STEP 4 — REFLECT
- check if code can be simplified
- check if responsibilities are separated

---

# 10. HARD CONSTRAINTS

Never:
- mix UI with business logic
- create oversized components
- introduce unnecessary libraries
- skip TypeScript typing
- duplicate logic instead of reusing services/hooks

---

END OF RULES