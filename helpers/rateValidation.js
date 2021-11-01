const { RATE_NOT_VALID } = require('./errorMessages');
const watchedValidation = require('./watchedValidation');

module.exports = (talk) => {
  const { rate, watchedAt } = talk;
  if (rate < 1 || rate > 5) {
    return { 
      fieldIsValid: false,
      fieldResponse: RATE_NOT_VALID,
    };
  }
  return watchedValidation(watchedAt);
};