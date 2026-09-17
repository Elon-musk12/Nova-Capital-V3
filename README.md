# Nova Capital — Next.js 15

A responsive dark-luxury investment platform demo with Next.js 15 App Router and Supabase Auth-ready login/register forms.

## Structure

- `app/` — App Router pages, layouts, and global CSS
- `app/login/page.tsx` — Login route
- `app/register/page.tsx` — Register route
- `components/` — Reusable UI components
- `lib/supabase.ts` — Browser Supabase client
- `package.json` — Next.js 15 dependencies and scripts

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Supabase setup

1. Copy `.env.example` to `.env.local`.
2. Add your Supabase project URL and anon key:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Vercel deployment

Deploy the folder containing `package.json`, `app/`, and `components/` as the project root. If you upload the ZIP contents into a repository subfolder named `Nova-Capital-V3`, set Vercel's **Root Directory** to `Nova-Capital-V3`.

This is a front-end demo. It does not execute real trades or connect to a brokerage account.
