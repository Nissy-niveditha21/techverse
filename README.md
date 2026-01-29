# 🚀 TechVerse – Project Status

TechVerse is a platform to discover hackathons, meetups, and tech events, with future plans for AI-based personalization.

---

## ✅ Completed

### Project Setup
- Next.js (App Router) with TypeScript
- Clean folder structure
- GitHub repository connected
- Vercel deployment configured

---

### Folder Structure
tech-verse/
├── app/
│ ├── page.tsx
│ ├── personalize/
│ │ └── page.tsx
│ └── events/
│ └── [slug]/
│ └── page.tsx
├── lib/
│ └── supabase.ts
├── components/
├── styles/
├── .env.local
├── package.json
├── tsconfig.json
└── next.config.js


---

### Supabase
- Supabase project created
- `events` table created with fields:
  - id (UUID)
  - name
  - slug
  - description
  - mode
  - city
  - cost
  - registration_link
  - start_date
  - end_date
  - deadline
  - skill_level (enum)
  - tech_stack (text array)
  - who_should_attend
  - who_should_skip
  - created_at

- Supabase client configured in:
/lib/supabase.ts


---

### Dynamic Routing
- `/events/[slug]` implemented
- Server-side data fetching from Supabase
- Event details rendered using slug

---

### Build & Deployment
- Local build passes successfully
- Vercel build pipeline configured
- Environment variables set:
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY

---

## ⚠️ Notes
- `skill_level` accepts only predefined enum values
- `tech_stack` must be inserted as an array:
{"python","react"}

- Import paths must correctly resolve `/lib/supabase.ts`

---

## 🛠️ Pending Work

### Frontend
- Events listing page
- Filters (city, mode, cost, skill level, tech stack)
- UI/UX improvements

### Personalization
- User preference form
- Event recommendation logic

### Admin
- Admin panel to add/edit events
- Slug validation

### Deployment
- SEO optimization
- Analytics
- Custom domain (optional)

---

## 🧠 Tech Stack
- Next.js (App Router)
- TypeScript
- Supabase (PostgreSQL)
- Vercel

---

## 📌 Current Status
Core setup complete.  
Features and UI under development.
