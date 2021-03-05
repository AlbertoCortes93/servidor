const { Portal } = require('@material-ui/core');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send('Ocupar /Sopas para el catálogo');
});

// Retorna un array con objetos de sopa
app.get('/sopas', (req, res) => {
    const sopas = [
        {
            producto: 'Sopa de Res',
            precio: 100,
            descripcion: 'Acompañada con arroz y tortilla'
        },
        {
            producto: 'Sopa de Frijoles',
            precio: 120,
            descripcion: 'Acompañada con arroz, tortilla y chicharrones'
        },
    ];

    res.json(sopas);
});

const port = process.env.PORT || 3003;
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});