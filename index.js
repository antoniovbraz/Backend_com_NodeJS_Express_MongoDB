const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const port = 3000;
app.use(bodyParser.json())


app.get('/hello', (req, res) => {
  res.send('Hello World')
})

/* Aplicativo de Mensagens */
/*
Lista de Endpoints da aplicação CRUD de mensagens
CRUD: Create, Read (Single & All), Update and Delete
[GET] /mensagens - Retorna a lista de mensagens
[GET] /mensagens/{id} - Retorna apenas uma única mensagem pelo ID
[POST] /mensagens - Cria uma nova mensagem
[PUT] /mensagens{id} - Atualiza uma mensagem pelo ID
[Delete]{id} - Remover uma mensagem pelo ID
*/

const mensagens = [
  "Essa é a primeira mensagem",
  "Essa é a segunda mensagem"
]

// mensagens - Retorna a lista de mensagens
app.get('/mensagens', (req, res) => {
  res.send(mensagens)
});

// [GET] /mensagens/{id} - Retorna apenas uma única mensagem pelo ID
app.get('/mensagens/:id', (req, res) => {
  const id = req.params.id - 1;

  const mensagem = mensagens[id];

  res.send(mensagem);
});

// [POST] /mensagens - Cria uma nova mensagem

app.post('/mensagens', (req, res) => {
  const mensagem = req.body.mensagem;

  mensagens.push(mensagem);

  res.send(`Mensagem criada com sucesso: ${mensagem}`)
});


app.listen(port, () => {
  console.info(`App rodando em http://localhost:${port}`)
})
