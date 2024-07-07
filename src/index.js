import readlineSync from 'readline-sync';

// introMessage should be unique for each game
const gameStructure = (introMessage, getGameData) => {
  // welcoming user to the game
  const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${userName}! ${introMessage}`);
  // cycle of the game starts, particular game function is being called within the cycle body
  for (let i = 0; i < 3; i += 1) {
    // destructuring to get the game data from particular games
    const [challenge, expectedAnswer] = getGameData();
    const userAnswer = readlineSync.question(`Question: ${challenge}\nYour answer: `);
    if (expectedAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is a wrong answer ;(. Correct answer was ${expectedAnswer}\nLet's try again, ${userName}`);
      break;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameStructure;
