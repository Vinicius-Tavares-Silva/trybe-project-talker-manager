const { TALK_NOT_VALID } = require('./errorMessages');
const rateValidation = require('./rateValidation');

module.exports = (talk) => {
  if (!talk.rate || !talk.watchedAt) {
    return {
      fieldIsValid: false,
      fieldResponse: TALK_NOT_VALID,
    };
  }
  if (talk.watchedAt === '' || talk.rate === '') {
    return { 
      fieldIsValid: false,
      fieldResponse: TALK_NOT_VALID,
    };
  }
  return rateValidation(talk);
};