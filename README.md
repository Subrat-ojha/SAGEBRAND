# SAGEBRAND

## Local development

```bash
npm install
npm run dev
```

## Netlify deployment

The site builds as a static Next.js export. Netlify reads `netlify.toml`, runs
`npm run build`, and publishes the generated `out` directory.
