import getRandomNumber from '../random-number.js';
import getAllDivisors from '../all-divisors.js';
import gameStructure from '../index.js';

const getLargestArrayIntersection = (arr1, arr2) => {
  const result = [];
  let index1 = 0;
  let index2 = 0;
  while (index1 < arr1.length && index2 < arr2.length) {
    if (arr1[index1] === arr2[index2]) {
      result.push(arr1[index1]);
      break;
    } else if (arr1[index1] > arr2[index2]) {
      index1 += 1;
    } else if (arr1[index1] < arr2[index2]) {
      index2 += 1;
    }
  } return result;
};

const brainGcdGame = () => {
  const num1 = getRandomNumber(1, 50);
  const num2 = getRandomNumber(1, 50);
  const challenge = `${num1} ${num2}`;
  const arr1 = getAllDivisors(num1);
  const arr2 = getAllDivisors(num2);
  const expectedAnswer = getLargestArrayIntersection(arr1, arr2);
  return [challenge, expectedAnswer.toString()];
};

const startBrainGcdGame = () => {
  const introMessage = 'Find the greatest common divisor of given numbers.';
  gameStructure(introMessage, brainGcdGame);
};

export default startBrainGcdGame;
