import randomNumber from '../src/helper.js';
import gameStart from '../src/index.js';

const description = 'What number is missing in the progression?';
const getProgressionArray = () => {
  const firstElement = randomNumber(-50, 100);
  const step = randomNumber(-10, 30);
  const progressionLength = randomNumber(5, 10);
  const result = [];

  for (let i = 0; i < progressionLength; i += 1) {
    const currentValue = firstElement + (step * i);
    result.push(currentValue);
  }
  return result;
};

const getQuestionAndAnswer = () => {
  const progression = getProgressionArray();
  const indexOfHiddenElement = randomNumber(0, progression.length - 1);

  const correctAnswer = progression[indexOfHiddenElement].toString();
  progression[indexOfHiddenElement] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

export default () => { gameStart(description, getQuestionAndAnswer); };
