/**
 * api/ask.express.js — Standalone Express server for local dev / non-Vercel hosting
 *
 * Run with: node api/server.js
 * Then set vite proxy to http://localhost:3001
 */

const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json({ limit: '10kb' }));
app.use(cors({ origin: process.env.ALLOWED_ORIGIN || 'http://localhost:5173' }));

const PORTFOLIO_CONTEXT = `[Same content as api/ask.js — see that file]`;

app.post('/api/ask', async (req, res) => {
  const { question } = req.body || {};
  if (!question || typeof question !== 'string') {
    return res.status(400).json({ error: 'Missing question' });
  }
  const sanitized = question.replace(/<[^>]*>/g, '').trim().slice(0, 500);
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'AI service not configured.' });

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 400,
        system: PORTFOLIO_CONTEXT,
        messages: [{ role: 'user', content: sanitized }],
      }),
    });
    const data = await response.json();
    const answer = data.content?.[0]?.text || 'No response.';
    res.json({ answer });
  } catch (err) {
    res.status(500).json({ error: 'Internal error.' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`API server running on port ${PORT}`));
