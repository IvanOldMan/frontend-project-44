import randomNumber from '../src/helper.js';
import gameStart from '../src/index.js';

const description = 'What is the result of the expression?';
const operands = ['+', '-', '*'];

const getCalculationResult = (firstValue, secondValue, operand) => {
  switch (operand) {
    case '+':
      return firstValue + secondValue;
    case '-':
      return firstValue - secondValue;
    default:
      return firstValue * secondValue;
  }
};

const getQuestionAndAnswer = () => {
  const firstValue = randomNumber(0, 20);
  const secondValue = randomNumber(0, 20);
  const currentOperand = operands[randomNumber(0, 2)];

  const question = `${firstValue} ${currentOperand} ${secondValue}`;
  const correctAnswer = getCalculationResult(firstValue, secondValue, currentOperand).toString();
  return [question, correctAnswer];
};

export default () => { gameStart(description, getQuestionAndAnswer); };
