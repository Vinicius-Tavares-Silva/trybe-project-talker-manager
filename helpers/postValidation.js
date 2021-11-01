const ageValidation = require('./ageValidation');
const nameValidation = require('./nameValidation');
const talkValidation = require('./talkValidation');

module.exports = (talker) => {
  const validationArray = [];
  validationArray.push(nameValidation(talker.name));
  validationArray.push(ageValidation(talker.age));
  validationArray.push(talkValidation(talker.talk));
  const incorrectField = validationArray.find((field) => field.fieldIsValid === false);
  if (incorrectField) {
    return {
      postIsValid: false,
      postResponse: incorrectField.fieldResponse,
    };
  }
  return { postIsValid: true };
};