const { TOKEN_NOT_FOUND, TOKEN_NOT_VALID } = require('../helpers/errorMessages');

module.exports = async (req, _res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return next(TOKEN_NOT_FOUND);
  }
  if (authorization.length < 16) {
    return next(TOKEN_NOT_VALID);
  }
  return next();
};