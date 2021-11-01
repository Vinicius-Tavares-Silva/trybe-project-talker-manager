const fs = require('fs').promises;

const FILENAME = 'talker.json';

module.exports = async () => {
  const data = await fs.readFile(FILENAME);
  const talkers = JSON.parse(data);
  return talkers;
};