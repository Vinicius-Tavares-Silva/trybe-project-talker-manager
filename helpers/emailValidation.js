const { EMAIL_NOT_FOUND, EMAIL_NOT_VALID } = require('./errorMessages');

module.exports = (email) => {
  const emailRegEx = new RegExp('^[a-z0-9.]+@[a-z0-9]+.[a-z]+.([a-z]+)?$', 'i');
  if (!email) {
    return {
      emailIsValid: false,
      emailResponse: EMAIL_NOT_FOUND,
    };
  }
  if (!emailRegEx.test(email)) {
    return { 
      emailIsValid: false,
      emailResponse: EMAIL_NOT_VALID,
    };
  }
  return { emailIsValid: true };
};