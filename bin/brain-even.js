import readlineSync from 'readline-sync';

import { getName, userName } from '../src/cli.js';



// let randomNumber = Math.round(Math.random() * 100);

// const getNumber = () => {
//   const userNumber = readlineSync.question(`Question: ${randomNumber}`);
// };

// for i = 0, i++, i<3
//   generate random number
//   print out ‘question random number’
//   get users response
//   if random number//2===0 && users response YES or number//2!=0 && users response NO 
//        console.log(‘Correct!’);
//        all good, continue

//   else if stop and
//      if users response is ‘yes’
//          write ` ${users response} is a wrong answer.  Correct answer was 'no'.
// Let's try again, userName! ` 
//     if users response is ‘no’
      
//  console.log(‘Congratulations, Bill!);

const isEven = (input) => {
  if (input % 2 === 0) {
    return true;
    }
  else 
    return false;
};

const isNumberEvenGame = () => {
  for (let i = 0; i < 3; i++) {
    let randomNumber = Math.round((Math.random() * 100) + 1); // adding 1 to not have zeros... maybe a really bad idea
    const userAnswer = readlineSync.question(`Question: ${randomNumber}\nYour answer: `);
    if (isEven(randomNumber) && userAnswer === 'yes' || isEven(randomNumber) === false && userAnswer === 'no') {
      console.log('Correct!');
    }
    else if ((userAnswer !== 'yes' && userAnswer !== 'no') && isEven(randomNumber)) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was 'yes'\nLet's try again, ${userName}`);
      break;
    }
    else if ((userAnswer !== 'yes' && userAnswer !== 'no') && isEven(randomNumber) === false) {
        console.log(`${userAnswer} is a wrong answer ;(. Correct answer was 'no'\nLet's try again, ${userName}`);
        break;
      }
  }
  console.log(`Congratulations, ${userName}!`);
};

console.log('Welcome to the Brain Games!');
getName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
isNumberEvenGame();
// console.log(getRandom0to100());