const fs = require('fs').promises;
const readTalkers = require('./readTalkers');

module.exports = async (talker) => {
  const talkers = await readTalkers();
  const biggestId = talkers.map((element) => element.id).reduce((a, b) => Math.max(a, b));
  const newTalker = {
    ...talker,
    id: biggestId + 1,
  };
  talkers.push(newTalker);
  fs.writeFile('talker.json', JSON.stringify(talkers));
  return newTalker;
};