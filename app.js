const express = require('express');
const app = express();
const path = require('path');
const mime = require('mime-types');

app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/contatos', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'contato.html'));
});

app.get('/produtos', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'produto.html'));
});

app.get('/catalogos', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'catalogo.html'));
});

app.get('/abertura/:tipo/:arquivo', (req, res) => {
  const tipo = req.params.tipo;
  const arquivo = req.params.arquivo;

  const file = path.join(__dirname, 'recursos', arquivo);

  if (!fs.existsSync(file)) {
    res.sendFile(path.join(__dirname, 'views', '404.html'));
  } else {
    const contentType = mime.lookup(file);
    res.setHeader('Content-Type', contentType);
    res.sendFile(file);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
