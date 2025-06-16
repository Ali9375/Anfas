const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(express.json());

// Route de test
app.get("/", (req, res) => {
  res.send("Serveur backend en ligne, bi idhniLlah.");
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
