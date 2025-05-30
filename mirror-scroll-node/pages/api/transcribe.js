import { OpenAI } from 'openai';
import dotenv from 'dotenv';
import formidable from 'formidable';
import fs from 'fs';

dotenv.config();

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const form = formidable();
  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ error: err.message });
    const file = fs.createReadStream(files.file[0].filepath);
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    try {
      const t = await openai.audio.transcriptions.create({
        file,
        model: 'whisper-1',
      });
      res.status(200).json({ text: t.text });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  });
}
