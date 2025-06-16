const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Exemple de route d’API
app.get('/', (req, res) => {
  res.send('🌬️ Bienvenue sur l’API Anfas. Louange à اللّٰه (Le Créateur).');
});

// Ici on pourra plus tard gérer les messages, sessions, etc.

app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});
