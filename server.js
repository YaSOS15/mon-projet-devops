const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Bonjour ! Mon application DevOps fonctionne !');
});

app.listen(port, () => {
  console.log(`L'application écoute sur le port ${port}`);
});