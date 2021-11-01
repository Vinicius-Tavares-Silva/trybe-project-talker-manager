const { WATCHEDAT_NOT_VALID } = require('./errorMessages');

module.exports = (watchedAt) => {
  const dateRegEx = RegExp(
    '^([0][1-9]|[1|2][0-9]|[3][0|1])[./]([0][1-9]|[1][0-2])[./]([0-9]{4}|[0-9]{2})$',
  );
  if (!dateRegEx.test(watchedAt)) {
    return { 
      fieldIsValid: false,
      fieldResponse: WATCHEDAT_NOT_VALID,
    };
  }
  return { fieldIsValid: true };
};