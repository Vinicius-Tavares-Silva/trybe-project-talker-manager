const { NAME_NOT_FOUND, NAME_NOT_VALID } = require('./errorMessages');

module.exports = (name) => {
  if (!name) {
    return {
      fieldIsValid: false,
      fieldResponse: NAME_NOT_FOUND,
    };
  }
  if (name.length < 3) {
    return { 
      fieldIsValid: false,
      fieldResponse: NAME_NOT_VALID,
    };
  }
  return { fieldIsValid: true };
};