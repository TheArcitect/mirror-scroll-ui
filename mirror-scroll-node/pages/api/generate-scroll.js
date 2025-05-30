import { OpenAI } from 'openai';
import dotenv from 'dotenv';

dotenv.config();

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { title, type } = req.body;
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const prompt = `Compose a ${type} titled "${title}" in poetic form.`;
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [{ role: 'user', content: prompt }],
    });
    const text = completion.choices[0].message.content.trim();
    res.status(200).json({ scroll: text });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
