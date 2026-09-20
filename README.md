# zenscend-web

The Zenscend site. Next.js 16 (App Router) · Tailwind 4 · pnpm · Resend.

```
pnpm install
pnpm dev
```

## Layout

- `app/page.tsx` — the whole home page; section content lives in arrays at the top.
- `app/contact/page.tsx` — the enquiry form.
- `app/api/contact/route.ts` — posts the form to Resend.
- `components/site-chrome.tsx` — nav and footer.
- `app/globals.css` — every brand token, in one `@theme` block.

Design values come from the `Home, desktop` mockup export; the tokens in
`globals.css` are transcribed from its inline styles.

## Email

`RESEND_API_KEY` in `.env.local`.
