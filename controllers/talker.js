const express = require('express');
const fs = require('fs').promises;

const FILENAME = 'talker.json';

const getTalkers = async (req, res, next) => {
  try {
    const data = await fs.readFile(FILENAME);
    const talkers = JSON.parse(data);
    return res.status(200).send(talkers);
  } catch (err) {
    next(err);
  }
};

const getTalkersById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await fs.readFile(FILENAME);
    const talkers = JSON.parse(data);
    const speaker = talkers.find((talker) => talker.id === parseInt(id, 10));
    if (!speaker) {
      return res.status(404).send({ message: 'Pessoa palestrante não encontrada' });
    }
    return res.status(200).send(speaker);
  } catch (err) {
    next(err);
  }
};

const router = express.Router({ mergeParams: true });

router.get('/', getTalkers);
router.get('/:id', getTalkersById);

module.exports = router;
