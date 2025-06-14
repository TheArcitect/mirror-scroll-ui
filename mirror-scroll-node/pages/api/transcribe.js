import { OpenAI } from 'openai';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { audio } = req.body;
  try {
    const buffer = Buffer.from(audio.split(',')[1], 'base64');
    const tmp = path.join('/tmp', `audio-${Date.now()}.webm`);
    fs.writeFileSync(tmp, buffer);
    const response = await openai.audio.transcriptions.create({
      file: fs.createReadStream(tmp),
      model: 'whisper-1'
    });
    fs.unlinkSync(tmp);
    res.status(200).json({ text: response.text.trim() });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
