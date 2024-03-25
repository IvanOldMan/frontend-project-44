import randomNumber from '../src/helper.js';
import gameStart from '../src/index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getEven = (num) => num % 2 === 0;

const getQuestionAndAnswer = () => {
  const question = randomNumber(0, 250);
  const correctAnswer = getEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => { gameStart(description, getQuestionAndAnswer); };
