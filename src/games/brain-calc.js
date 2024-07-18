import getRandomNumber from '../random-number.js';
import gameStructure from '../index.js';

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
      expectedAnswer = num1 - num2;
      break;
    }
    default:
      console.log('by some reasons the selected operator was out of scope of an array');
      break;
  } return expectedAnswer;
};

const brainCalcGame = () => {
  const selectedOperator = operationsArray[getRandomNumber(0, operationsArray.length)];
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 50);
  const challenge = `${num1} ${selectedOperator} ${num2}`;
  const expectedAnswer = getExpectedAnswer(num1, num2, selectedOperator).toString();
  return [challenge, expectedAnswer];
};

const startBrainCalcGame = () => {
  const introMessage = 'What is the result of the expression?';
  gameStructure(introMessage, brainCalcGame);
};

export default startBrainCalcGame;
