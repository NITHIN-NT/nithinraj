# Project Specifications & Design Documentation

## 1. Project Overview
**Project Name:** Nithin Raj NT Portfolio
**Developer:** Nithin Raj NT
**Goal:** A high-end, minimalist portfolio website designed to showcase professional digital products, full-stack development expertise, and architectural proficiency.

---

## 2. Technical Stack

### Core Frameworks
- **Frontend:** [Next.js 16](https://nextjs.org/) (App Router)
- **Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Backend (Project Integrations):** Python, Django, Supabase, Firebase

### UI & Styling
- **CSS Engine:** [Tailwind CSS 4.x](https://tailwindcss.com/) (using `@tailwindcss/postcss`)
- **Components:** [Shadcn UI](https://ui.shadcn.com/) (New York Style) & [Radix UI](https://www.radix-ui.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/)
- **Fonts:** [Geist Sans](https://vercel.com/font/sans) (Primary), [Geist Mono](https://vercel.com/font/mono) (Technical)

### Infrastructure & Tools
- **Deployment:** AWS EC2, Docker, Docker Compose
- **CI/CD:** GitHub Actions
- **Authentication:** Firebase Auth
- **Database:** Supabase (PostgreSQL), Firebase Firestore
- **Payments:** Razorpay Integration
- **Analytics:** Vercel Analytics

---

## 3. Design Specifications

### Visual Identity
- **Theme:** Ultra-minimalist "Studio" aesthetic. 
- **Color Palette:** 
  - Primarily **Neutral/Monochrome** (White background, Black text).
  - Uses **OKLCH** color space for precise, modern color rendering.
  - Accent colors are kept subtle, primarily through hover states and border highlights.
- **Typography:** Uses Vercel's **Geist** font family for a clean, developer-focused look.
- **Spacing:** Large white space (px-6 to px-24) to ensure content readability and a premium feel.

### Key Design Elements
- **Scroll Reveal:** Custom `ScrollReveal` components using Framer Motion to animate content as it enters the viewport.
- **Micro-interactions:** Subtle hover effects on project cards and skill tags (border transitions, opacity shifts).
- **Project Previews:** Interactive `iframe` modals that allow users to view live projects directly within the portfolio without navigating away.
- **Preloader:** A custom `PreloaderWrapper` featuring a multi-lingual greeting sequence ("Hello", "Ciao", "നമസ്കാരം", etc.) and a sophisticated SVG curve animation for a smooth, high-end entrance transition.

---

## 4. Feature Specifications

### 1. Hero Section
- Dynamic greeting and focus statement.
- Clean typography with high-impact visual hierarchy.

### 2. Projects Showcase
- Categorized projects (Production, Personal, Academic).
- Live preview system via full-screen modals.
- Technical descriptions highlighting the architecture (Docker, CI/CD, specific integrations).

### 3. Skills Taxonomy
- **Primary Stack:** Focus on Python, Django, React, and Next.js.
- **Infrastructure:** Docker, AWS, Supabase, Firebase, Razorpay, PWA, and CI/CD.

### 4. Philosophy & About
- Narrative-driven sections explaining the developer's approach to "building products from idea to deployment."

---

## 5. Development Guidelines
- **Component Pattern:** "Atomic" structure using Shadcn primitives.
- **Performance:** Optimized for Vercel deployment with static site generation (SSG) and incremental static regeneration (ISR) where applicable.
- **Responsive Design:** Mobile-first approach using Tailwind's responsive utilities (`md:`, `lg:`).
- **Type Safety:** Strict TypeScript configuration for robust state management and prop validation.
