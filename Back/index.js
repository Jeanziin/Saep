const express = require('express');
const cors = require('cors');
const exampleRouter = require('./Routes/Router');

const app = express();
app.use(express.json());
app.use(cors());

// Rota principal
app.get('/', (req, res) => {
  res.send('API funcionando!');
});

// Rotas definidas no roteador (router)
app.use('/', exampleRouter);

// Iniciando o servidor
app.listen(3333, () => {
  console.log('Servidor iniciado na porta 3333');
});
