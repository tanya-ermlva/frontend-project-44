const isEven = (number) => number % 2 === 0;
const getRandomNumber = (min, max) => Math.floor((Math.random() * (max - min)) + min);

const brainEvenGame = () => {
  const randomNumber = getRandomNumber(1, 100);
  const expectedAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, expectedAnswer];
};

export default brainEvenGame;

export { getRandomNumber };
