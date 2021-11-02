const fs = require('fs').promises;
const readTalkers = require('./readTalkers');

module.exports = async (id) => {
  const talkers = await readTalkers();
  const talkersArray = talkers.filter((element) => element.id !== parseInt(id, 10));
  fs.writeFile('talker.json', JSON.stringify(talkersArray));
};