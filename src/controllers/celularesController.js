const celularesService = require('../services/celularesService');

// Controlador para listar todos os celulares
const listarCelulares = (req, res) => {
  const celulares = celularesService.listarCelulares();
  res.json(celulares);
};

// Controlador para obter informações de um celular específico por ID
const obterCelularPorId = (req, res) => {
  const celularId = parseInt(req.params.id);
  const celular = celularesService.obterCelularPorId(celularId);

  if (celular) {
    res.json(celular);
  } else {
    res.status(404).json({ error: 'Celular not found' });
  }
};

// Controlador para filtrar celulares por marca, modelo e cor
const filtrarCelulares = (req, res) => {
  const marca = req.query.marca;
  const modelo = req.query.modelo;
  const cor = req.query.cor;

  const resultados = celularesService.filtrarCelulares(marca, modelo, cor);

  if (resultados.length > 0) {
    res.json(resultados);
  } else {
    res.status(404).json({ error: 'No matching cell phones found' });
  }
};

module.exports = {
  listarCelulares,
  obterCelularPorId,
  filtrarCelulares
};
