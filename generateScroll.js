const fs = require('fs');
const path = require('path');

// Basic .env loader
function loadEnv() {
  if (fs.existsSync('.env')) {
    const lines = fs.readFileSync('.env', 'utf8').split(/\r?\n/);
    lines.forEach(line => {
      const match = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/);
      if (match) {
        const key = match[1];
        const value = match[2];
        if (!process.env[key]) {
          process.env[key] = value;
        }
      }
    });
  }
}

loadEnv();

const [,, title, scrollType] = process.argv;
if (!title || !scrollType) {
  console.error('Usage: node generateScroll.js "<title>" "<type>"');
  process.exit(1);
}

const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) {
  console.error('OPENAI_API_KEY is not set in environment or .env file');
  process.exit(1);
}

async function generateScroll() {
  const systemPrompt = 'You are the ancient scribe of mystical realms.';
  const userPrompt = `Compose a mystical scroll titled "${title}" of type "${scrollType}" using mythic and poetic language.`;

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-4o',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt }
      ],
      temperature: 0.8,
    }),
  });

  if (!response.ok) {
    throw new Error(`OpenAI API error: ${response.status} ${await response.text()}`);
  }

  const data = await response.json();
  const scrollText = data.choices[0].message.content;

  const fileName = `${title.replace(/[^a-z0-9]+/gi, '_').toLowerCase()}_${scrollType}.txt`;
  const filePath = path.join(__dirname, fileName);
  fs.writeFileSync(filePath, scrollText, 'utf8');
  console.log(`Scroll saved to ${filePath}`);
  console.log('--- Scroll Content ---');
  console.log(scrollText);
}

generateScroll().catch(err => {
  console.error('Failed to generate scroll:', err);
});
