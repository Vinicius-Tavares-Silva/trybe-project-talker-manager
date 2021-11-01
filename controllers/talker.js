const express = require('express');
const auth = require('../middlewares/authorization');
const readTalkers = require('../helpers/readTalkers');
const createTalker = require('../helpers/createTalker');
const postValidation = require('../helpers/postValidation');

const getTalkers = async (req, res, next) => {
  try {
    const talkers = await readTalkers();
    return res.status(200).send(talkers);
  } catch (err) {
    next(err);
  }
};

const getTalkersById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const talkers = await readTalkers();
    const speaker = talkers.find((talker) => talker.id === parseInt(id, 10));
    if (!speaker) {
      return res.status(404).send({ message: 'Pessoa palestrante não encontrada' });
    }
    return res.status(200).send(speaker);
  } catch (err) {
    next(err);
  }
};

const postTalker = async (req, res, next) => {
  const payload = req.body;
  const { postIsValid, postResponse } = postValidation(payload);
  try {
    if (!postIsValid) {
      return next(postResponse);
    }
    const newTalker = await createTalker(payload);
    return res.status(201).send(newTalker);
  } catch (err) {
    next(err);
  }
};

const router = express.Router({ mergeParams: true });

router.get('/', getTalkers);
router.get('/:id', getTalkersById);
router.post('/', auth, postTalker);

module.exports = router;
