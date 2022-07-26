const express = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('./middlewares/error');
const talker = require('./controllers/talker');
const login = require('./middlewares/login');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.post('/login', login);

app.use('/talker', talker);

app.use(errorHandler);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
