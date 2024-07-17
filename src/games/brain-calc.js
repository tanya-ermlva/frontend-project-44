import getRandomNumber from '../random-number.js';

const operationsArray = ['+', '-', '*'];

const getExpectedAnswer = (num1, num2, selectedOperator) => {
  let expectedAnswer;
  switch (selectedOperator) {
    case '+': {
      expectedAnswer = num1 + num2;
      break;
    }
    case '*': {
      expectedAnswer = num1 * num2;
      break;
    }
    case '-': {
      if (num1 > num2) {
        expectedAnswer = num1 - num2;
        break;
      }
      expectedAnswer = num2 - num1;
      break;
    }
    default:
      console.log('by some reasons the selected operator was out of scope of an array');
      break;
  } return expectedAnswer;
};

const brainCalcGame = () => {
  const selectedOperator = operationsArray[getRandomNumber(0, operationsArray.length)];
  let num1 = getRandomNumber(1, 100);
  let num2 = getRandomNumber(1, 50);
  // console.log(num1, num2, selectedOperator);
  if (selectedOperator === '-' && num1 < num2) {
    [num1, num2] = [num2, num1];
  }
  const challenge = `${num1} ${selectedOperator} ${num2}`;
  const expectedAnswer = getExpectedAnswer(num1, num2, selectedOperator).toString();
  // console.log(expectedAnswer);
  // console.log(challenge);
  return [challenge, expectedAnswer];
};

export default brainCalcGame;
