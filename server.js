const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

// Route Accueil
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route Boutique (Catalogue)
app.get('/shop', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pages', 'shop.html'));
});

// Route Panier (Simulé pour l'instant)
app.get('/cart', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pages', 'cart.html'));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});