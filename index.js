const express = require('express');
const mongoose = require('mongoose');

const authRoutes = require('./routes/auth');
const busRoutes = require('./routes/buses');

const app = express();
const port = process.env.PORT || 3000;

app.disable('x-powered-by');
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: false }));

app.get('/', (_req, res) => {
  res.status(200).send(`<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>RFR — Maintenance</title>
    <style>
      :root { color-scheme: dark; font-family: system-ui, sans-serif; }
      body { margin: 0; min-height: 100vh; display: grid; place-items: center; background: #071a33; color: #f8fafc; }
      main { width: min(90%, 680px); padding: 2rem; border: 1px solid #334155; border-radius: 1rem; background: #0f2744; }
      h1 { margin-top: 0; }
      p { color: #cbd5e1; line-height: 1.6; }
      a { color: #38bdf8; }
    </style>
  </head>
  <body>
    <main>
      <h1>RFR est en maintenance</h1>
      <p>Le serveur fonctionne de nouveau, mais les fichiers de l'interface du site ne sont pas présents dans la branche actuellement connectée.</p>
      <p>Communauté : <a href="https://discord.gg/yBcuJAuCNZ">rejoindre le Discord RFR</a>.</p>
    </main>
  </body>
</html>`);
});

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/auth', authRoutes);
app.use('/api/buses', busRoutes);

app.use((error, _req, res, _next) => {
  console.error('[v0] Unhandled server error:', error.message);
  res.status(500).json({ message: 'Erreur interne du serveur' });
});

async function startServer() {
  if (process.env.DATABASE_URL) {
    try {
      await mongoose.connect(process.env.DATABASE_URL);
      console.log('[v0] Database connected');
    } catch (error) {
      console.error('[v0] Database connection failed:', error.message);
    }
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`[v0] RFR server listening on port ${port}`);
  });
}

startServer();
