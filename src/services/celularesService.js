// Dados de exemplo com 1000 itens
const celulares = [];

const marcas = ['Apple', 'Samsung', 'Xiaomi', 'Motorola', 'LG'];

const modelosApple = [
  'iPhone 12 Pro',
  'iPhone 12',
  'iPhone 11 Pro',
  'iPhone 11',
  'iPhone SE',
  'iPhone XR',
  'iPhone XS',
  'iPhone X'
];

const modelosSamsung = [
  'Galaxy S21 Ultra',
  'Galaxy S21+',
  'Galaxy S21',
  'Galaxy Note 20 Ultra',
  'Galaxy Note 20',
  'Galaxy A71',
  'Galaxy A51',
  'Galaxy M51'
];

const modelosXiaomi = [
  'Mi 11',
  'Mi 10T Pro',
  'Redmi Note 10 Pro',
  'Redmi Note 9S',
  'Redmi Note 9 Pro',
  'Mi Note 10',
  'Redmi 9',
  'Poco X3 NFC'
];

const modelosMotorola = [
  'Moto G Power',
  'Moto G Stylus',
  'Moto G9 Power',
  'Moto G8 Power',
  'Moto G Fast',
  'Moto E7 Plus',
  'Moto E6 Plus',
  'Moto E5 Plus'
];

const modelosLG = [
  'LG V60 ThinQ',
  'LG Velvet',
  'LG G8 ThinQ',
  'LG G7 ThinQ',
  'LG K61',
  'LG K51S',
  'LG K41S',
  'LG W10'
];

const cores = ['Preto', 'Branco', 'Azul', 'Prata', 'Dourado', 'Vermelho', 'Verde', 'Rosa'];

let celularId = 1;

marcas.forEach(marca => {
  let modelos;
  switch (marca) {
    case 'Apple':
      modelos = modelosApple;
      break;
    case 'Samsung':
      modelos = modelosSamsung;
      break;
    case 'Xiaomi':
      modelos = modelosXiaomi;
      break;
    case 'Motorola':
      modelos = modelosMotorola;
      break;
    case 'LG':
      modelos = modelosLG;
      break;
    default:
      modelos = [];
  }

  for (let i = modelos.length - 8; i < modelos.length; i++) {
    const modelo = modelos[i];
    for (let j = 0; j < cores.length; j++) {
      const cor = cores[j];
      celulares.push({ id: celularId++, marca, modelo, cor });
    }
  }
});

// Serviço para listar todos os celulares
const listarCelulares = () => {
  return celulares;
};

// Serviço para obter informações de um celular específico por ID
const obterCelularPorId = (id) => {
  return celulares.find(celular => celular.id === id);
};

// Serviço para filtrar celulares por marca, modelo e cor
const filtrarCelulares = (marca, modelo, cor) => {
  let resultados = celulares;

  if (marca) {
    resultados = resultados.filter(celular => celular.marca.toLowerCase() === marca.toLowerCase());
  }

  if (modelo) {
    resultados = resultados.filter(celular => celular.modelo.toLowerCase() === modelo.toLowerCase());
  }

  if (cor) {
    resultados = resultados.filter(celular => celular.cor.toLowerCase() === cor.toLowerCase());
  }

  return resultados;
};

module.exports = {
  listarCelulares,
  obterCelularPorId,
  filtrarCelulares
};
