import randomNumber from '../src/helper.js';
import gameStart from '../src/index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (firstValue, secondValue) => {
  const isFirstBigger = firstValue > secondValue;
  let maxValue = isFirstBigger ? firstValue : secondValue;
  let minValue = isFirstBigger ? secondValue : firstValue;

  while (minValue) {
    const swap = maxValue % minValue;
    maxValue = minValue;
    minValue = swap;
  }
  return maxValue;
};

const getQuestionAndAnswer = () => {
  const firstValue = randomNumber(0, 100);
  const secondValue = randomNumber(0, 100);

  const question = `${firstValue} ${secondValue}`;
  const correctAnswer = getGreatestCommonDivisor(firstValue, secondValue).toString();
  return [question, correctAnswer];
};

export default () => { gameStart(description, getQuestionAndAnswer); };
