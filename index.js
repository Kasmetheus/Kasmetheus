const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Coming Soon</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <style>
        body {
          font-family: -apple-system, system-ui, sans-serif;
          max-width: 600px;
          margin: 100px auto;
          padding: 20px;
          color: #333;
          line-height: 1.6;
        }
        h1 { font-weight: 300; margin-bottom: 30px; }
        p { color: #555; }
        .hint { color: #aaa; font-size: 13px; margin-top: 60px; }
      </style>
    </head>
    <body>
      <h1>Building something useful.</h1>
      <p>Check back soon.</p>
      <p class="hint">Deployed: ${new Date().toISOString()}</p>
    </body>
    </html>
  `);
});

app.get('/healthz', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on port ${port}`);
});
