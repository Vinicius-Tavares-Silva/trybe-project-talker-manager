const fs = require('fs').promises;
const readTalkers = require('./readTalkers');

module.exports = async (talker, id) => {
  const talkers = await readTalkers();
  const talkersArray = talkers.filter((element) => element.id !== parseInt(id, 10));
  const newTalker = {
    ...talker,
    id: parseInt(id, 10),
  };
  talkersArray.push(newTalker);
  fs.writeFile('talker.json', JSON.stringify(talkersArray));
  return newTalker;
};