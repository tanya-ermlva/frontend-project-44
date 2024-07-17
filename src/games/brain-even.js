import getRandomNumber from '../random-number.js';

const isEven = (number) => number % 2 === 0;

const brainEvenGame = () => {
  const randomNumber = getRandomNumber(1, 100);
  const expectedAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, expectedAnswer];
};

export default brainEvenGame;

export { getRandomNumber };
