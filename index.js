const express = require('express');
const path = require('path');

const app = express();

// Definindo o diretório 'public' como um diretório de arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Iniciando o servidor na porta 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});