import getRandomNumber from '../random-number.js';

const operationsArray = ['+', '-', '*'];

const add = (num1, num2) => (num1 + num2);
const multiply = (num1, num2) => (num1 * num2);
const subtract = (num1, num2) => (num1 - num2);

const brainCalcGame = () => {
  const selectedOperator = operationsArray[getRandomNumber(0, operationsArray.length)];
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 50);
  let challenge;
  let expectedAnswer;
  //   console.log(num1, num2);
  switch (selectedOperator) {
    case '+': {
      challenge = `${num1} + ${num2}`;
      //   console.log(challenge);
      expectedAnswer = add(num1, num2).toString();
      //   console.log(expectedAnswer);
      break;
    }
    case '*': {
      challenge = `${num1} * ${num2}`;
      //   console.log(challenge);
      expectedAnswer = multiply(num1, num2).toString();
      //   console.log(expectedAnswer);
      break;
    }
    case '-': {
      if (num1 > num2) {
        challenge = `${num1} - ${num2}`;
        // console.log(challenge);
        expectedAnswer = subtract(num1, num2).toString();
        // console.log(expectedAnswer);
        break;
      } else {
        challenge = `${num2} - ${num1}`;
        // console.log(challenge);
        expectedAnswer = subtract(num2, num1).toString();
        // console.log(expectedAnswer);
        break;
      }
    }
    default:
      console.log('by some reasons the selected operator was out of scope of an array');
      break;
  } return [challenge, expectedAnswer];
};

export default brainCalcGame;
