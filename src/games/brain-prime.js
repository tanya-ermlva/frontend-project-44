import getRandomNumber from '../random-number.js';
import getAllDivisors from '../all-divisors.js';

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

// console.log(brainPrimeGame());

export default brainPrimeGame;
