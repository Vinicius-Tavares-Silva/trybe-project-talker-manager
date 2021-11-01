const emailValidation = require('../helpers/emailValidation');
const passwordValidation = require('../helpers/passwordValidation');

module.exports = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const { emailIsValid, emailResponse } = emailValidation(email);
    const { passwordIsValid, passwordResponse } = passwordValidation(password);
    if (!emailIsValid) {
      return next(emailResponse);
    }
    if (!passwordIsValid) {
      return next(passwordResponse);
    }
    res.status(200).send({
      token: '7mqaVRXJSp886CGr',
    });
  } catch (err) {
    next(err);
  }
};