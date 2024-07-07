import { getRandomNumber } from './brain-even.js';

const getAllDivisors = (anyNumber) => {
  let result = 0;
  const resultArr = [];
  let count = anyNumber;
  while (count > 0) {
    result = anyNumber % count;
    if (result === 0) {
      resultArr.push(count);
      count -= 1;
    } else {
      count -= 1;
    }
  } return resultArr;
};

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
  //   getAllDivisors(num1);
  const arr1 = getAllDivisors(num1);
  const arr2 = getAllDivisors(num2);
  //   console.log(num1, num2);
  //   console.log(arr1);
  //   console.log(arr2);
  const expectedAnswer = getLargestArrayIntersection(arr1, arr2);
  //   console.log(`common dividors ${commonArr}`);
  return [challenge, expectedAnswer.toString()];
};

export default brainGcdGame;

// console.log(brainGcdGame());
