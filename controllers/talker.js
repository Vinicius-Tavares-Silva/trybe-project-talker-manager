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
module.exports = { getTalkers };
