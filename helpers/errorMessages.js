const EMAIL_NOT_FOUND = {
  message: 'O campo "email" é obrigatório',
  status: 400,
};

const EMAIL_NOT_VALID = {
  message: 'O "email" deve ter o formato "email@email.com"',
  status: 400,
};

const PASSWORD_NOT_FOUND = { 
  message: 'O campo "password" é obrigatório',
  status: 400,
};

const PASSWORD_NOT_VALID = { 
  message: 'O "password" deve ter pelo menos 6 caracteres',
  status: 400,
};

module.exports = {
  EMAIL_NOT_FOUND,
  EMAIL_NOT_VALID,
  PASSWORD_NOT_FOUND,
  PASSWORD_NOT_VALID,
};