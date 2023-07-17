const express = require('express');
const app = express();
const celularesController = require('./controllers/celularesController');

// Rota para listar todos os celulares
app.get('/celulares', celularesController.listarCelulares);

// Rota para obter informações de um celular específico por ID
app.get('/celulares/:id', celularesController.obterCelularPorId);

// Rota para filtrar celulares por marca, modelo e cor
app.get('/celulares/filtrar', celularesController.filtrarCelulares);

module.exports = app;
