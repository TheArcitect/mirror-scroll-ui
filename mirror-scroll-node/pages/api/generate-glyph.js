import { OpenAI } from 'openai';
import dotenv from 'dotenv';

dotenv.config();

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { title } = req.body;
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  try {
    const img = await openai.images.generate({
      model: 'dall-e-3',
      prompt: `A mystical glyph representing the phrase: ${title}`,
      n: 1,
      size: '1024x1024',
    });
    const url = img.data[0].url;
    res.status(200).json({ url });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
