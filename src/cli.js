import readlineSync from 'readline-sync';

let userName;

const getName = () => {
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export { userName, getName };

// getName();
