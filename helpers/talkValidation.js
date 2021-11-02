const { TALK_NOT_VALID } = require('./errorMessages');
const rateValidation = require('./rateValidation');

const fieldsExist = (talk) => {
  if ((!talk.rate && talk.rate !== 0) || !talk.watchedAt) {
    return true;
  }
  return false;
};

module.exports = (talk) => {
  if (!talk || fieldsExist(talk)) {
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