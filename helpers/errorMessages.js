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

const TOKEN_NOT_FOUND = { 
  message: 'Token não encontrado',
  status: 401,
};

const TOKEN_NOT_VALID = { 
  message: 'Token inválido',
  status: 401,
};

const NAME_NOT_FOUND = { 
  message: 'O campo "name" é obrigatório',
  status: 400,
};

const NAME_NOT_VALID = { 
  message: 'O "name" deve ter pelo menos 3 caracteres',
  status: 400,
};

const AGE_NOT_FOUND = { 
  message: 'O campo "age" é obrigatório',
  status: 400,
};

const AGE_NOT_VALID = { 
  message: 'A pessoa palestrante deve ser maior de idade',
  status: 400,
};

const TALK_NOT_VALID = { 
  message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
  status: 400,
};

const RATE_NOT_VALID = { 
  message: 'O campo "rate" deve ser um inteiro de 1 à 5',
  status: 400,
};

const WATCHEDAT_NOT_VALID = { 
  message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
  status: 400,
};

module.exports = {
  EMAIL_NOT_FOUND,
  EMAIL_NOT_VALID,
  PASSWORD_NOT_FOUND,
  PASSWORD_NOT_VALID,
  TOKEN_NOT_FOUND,
  TOKEN_NOT_VALID,
  NAME_NOT_FOUND,
  NAME_NOT_VALID,
  AGE_NOT_FOUND,
  AGE_NOT_VALID,
  TALK_NOT_VALID,
  RATE_NOT_VALID,
  WATCHEDAT_NOT_VALID,
};