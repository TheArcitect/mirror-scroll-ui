# Mirror Scroll Node

A minimal Next.js app for generating mystical scrolls and glyphs using OpenAI.

## Setup

1. Copy `.env.example` to `.env` and add your `OPENAI_API_KEY`.
2. Install dependencies:

```bash
npm install
```

3. Run the dev server:

```bash
npm run dev
```

## Usage

- Enter a symbolic scroll title and choose a type.
- Click **Generate** to produce text from GPT‑4o.
- Click **Generate Glyph** to create a DALL·E 3 image.
- (Optional) Click the microphone to speak a title via Whisper.

Deploy easily to Vercel; configuration is provided in `vercel.json`.
