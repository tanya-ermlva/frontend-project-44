const isEven = (number) => number % 2 === 0;

const brainEvenGame = () => {
  const randomNumber = Math.round((Math.random() * 100) + 1);
  const expectedAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, expectedAnswer];
};

// console.log(brainEvenGame());
export default brainEvenGame;
