import getRandomNumber from '../random-number.js';
import gameStructure from '../index.js';

const getRandomProgression = () => {
  const randomArray = [];
  let arrayLength = 0;

  const randomStep = getRandomNumber(1, 10);
  let startingRandomNumber = getRandomNumber(5, 100);

  //   console.log(`the step: ${randomStep}, the starting point: ${startingRandomNumber}`);

  while (arrayLength < 10) {
    randomArray.push(startingRandomNumber);
    startingRandomNumber += randomStep;

    arrayLength += 1;
  }
  return randomArray;
};

const brainProgressionGame = () => {
  const challengeArray = getRandomProgression();
  //   console.log(challengeArray);
  const replacedNumberInd = getRandomNumber(0, challengeArray.length);
  //   console.log(replacedNumberInd);
  const expectedAnswer = challengeArray.slice(replacedNumberInd, replacedNumberInd + 1).toString();
  //   console.log(expectedAnswer);
  challengeArray.splice(replacedNumberInd, 1, '..');
  return [challengeArray.join(' '), expectedAnswer.toString()];
};

const startBrainProgressionGame = () => {
  const introMessage = 'What number is missing in the progression?';
  gameStructure(introMessage, brainProgressionGame);
};

export default startBrainProgressionGame;
