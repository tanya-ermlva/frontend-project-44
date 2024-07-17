import getRandomNumber from '../random-number.js';
import gameStructure from '../index.js';

const isEven = (number) => number % 2 === 0;

const brainEvenGame = () => {
  const randomNumber = getRandomNumber(1, 100);
  const expectedAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, expectedAnswer];
};

const startBrainEvenGame = () => {
  const introMessage = 'Answer "yes" if the number is even, otherwise answer "no".';
  gameStructure(introMessage, brainEvenGame);
};

export default startBrainEvenGame;
