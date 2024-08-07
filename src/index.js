import readlineSync from 'readline-sync';

const gameCycleNum = 3;

// introMessage should be unique for each game
const gameStructure = (introMessage, getGameData) => {
  // welcoming user to the game
  const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n${introMessage}`);
  // cycle of the game starts, particular game function is being called within the cycle body
  for (let i = 0; i < gameCycleNum; i += 1) {
    // destructuring to get the game data from particular games
    const [challenge, expectedAnswer] = getGameData();
    const userAnswer = readlineSync.question(`Question: ${challenge}\nYour answer: `);
    if (expectedAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${expectedAnswer}".\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameStructure;
