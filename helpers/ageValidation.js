const { AGE_NOT_FOUND, AGE_NOT_VALID } = require('./errorMessages');

module.exports = (age) => {
  if (!age) {
    return {
      fieldIsValid: false,
      fieldResponse: AGE_NOT_FOUND,
    };
  }
  if (age < 18) {
    return { 
      fieldIsValid: false,
      fieldResponse: AGE_NOT_VALID,
    };
  }
  return { fieldIsValid: true };
};