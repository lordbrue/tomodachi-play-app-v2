Tomodachi Play - Catalog Addition (Crunchyroll style)

Files created inside this ZIP:
- src/app/explore/page.tsx
- src/app/companion/[id]/page.tsx
- src/components/CompanionCard.tsx
- src/data/companions.ts
- src/types/Companion.ts

How to install:
1. Copy/merge the `src/` folder from this archive into your project's `src/` (overwrite the explore/ and companion/[id] pages if present).
2. Make sure images referenced exist under public/images/companions/...
3. Ensure TailwindCSS is configured in your project (these styles use Tailwind classes).
4. Run locally: `npm install` then `npm run dev`.
5. Commit & push to GitHub; Vercel will automatically redeploy.

Notes:
- Prices are left null; you can later integrate AI pricing or admin set values.
- Adjust CSS classes if you don't use Tailwind.