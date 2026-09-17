# Nova Capital

A clean Next.js 15 App Router investment-platform demo with a dark-luxury visual system, responsive homepage, login route, register route, and Supabase Auth-ready client.

## Run locally

```bash
npm install
cp .env.example .env.local
# add your Supabase URL and anon key to .env.local
npm run dev
```

Open http://localhost:3000

Routes:
- `/` — landing page
- `/login` — Supabase password login form
- `/register` — Supabase account registration form

## Supabase setup

1. Create a Supabase project.
2. Copy the project URL and anon key into `.env.local`.
3. In Supabase Auth settings, configure email confirmation and redirect URLs as desired.
4. The form uses `signInWithPassword` and `signUp` from `@supabase/ssr` browser client.

This is a front-end demo. Investment figures, charts, security claims, and account values are illustrative UI content and are not connected to a live brokerage or financial service.
