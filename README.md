# Mirror Scroll UI

This is a modular, animated scroll interface built to deliver sacred messages through elegance, alignment, and integrity.

## Live Site
🔮 [https://letsexperiment.org](https://letsexperiment.org)

## Structure
- `main.js`: Entry point
- `components/`: Scroll + pulse components
- `scrollData.js`: Scroll content
- `styles/global.css`: Global layout & animations

## Generating Scrolls
A CLI script `generateScroll.js` can create new symbolic scrolls using GPT-4o. Provide a title and type:

```bash
node generateScroll.js "The Awakening" "prophecy"
```

The script reads `OPENAI_API_KEY` from `.env`, requests GPT-4o to craft mythic prose, then writes the result to a `.txt` file.

Bless us all with infinite love. Go with grace.
