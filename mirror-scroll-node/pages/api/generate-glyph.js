import { OpenAI } from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { title } = req.body;
  try {
    const response = await openai.images.generate({
      model: 'dall-e-3',
      prompt: `A symbolic glyph representing the phrase "${title}"`,
      n: 1,
      size: '512x512'
    });
    const url = response.data[0].url;
    res.status(200).json({ url });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
