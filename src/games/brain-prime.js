import getRandomNumber from '../random-number.js';
import getAllDivisors from '../all-divisors.js';
import gameStructure from '../index.js';

const isPrime = (number) => {
  const array = getAllDivisors(number);
  if (array.length > 2) {
    return false;
  }
  return true;
};

const brainPrimeGame = () => {
  const randomNumber = getRandomNumber(2, 100);
  const expectedAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return [randomNumber, expectedAnswer];
};

const startBrainPrimeGame = () => {
  const introMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  gameStructure(introMessage, brainPrimeGame);
};

export default startBrainPrimeGame;
