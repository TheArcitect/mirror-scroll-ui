# Mirror Scroll UI

This project provides a minimal Next.js implementation for letsexperiment.org.
It renders scrolls defined in `data/vault` and lists them in `/vault`.

## Development

```bash
npm run dev
```

## Building

```bash
npm run build
```

The site expects scroll PDFs to live in `public/vault` and metadata in
`data/vault`. Scrolls are configured via `codex.config.json`.
