const { PASSWORD_NOT_FOUND, PASSWORD_NOT_VALID } = require('./errorMessages');

module.exports = (password) => {
  if (!password) {
    return {
      passwordIsValid: false,
      passwordResponse: PASSWORD_NOT_FOUND,
    };
  }
  if (password.length < 6) {
    return {
      passwordIsValid: false,
      passwordResponse: PASSWORD_NOT_VALID,
    };
  }
  return { passwordIsValid: true };
};