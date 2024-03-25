import randomNumber from '../src/helper.js';
import gameStart from '../src/index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const question = randomNumber(0, 1000);
  const correctAnswer = getPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => { gameStart(description, getQuestionAndAnswer); };
