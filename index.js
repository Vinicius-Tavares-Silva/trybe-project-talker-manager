const express = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('./middlewares/error');
const { getTalkers } = require('./controllers/talker');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', getTalkers);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log('Online');
});
