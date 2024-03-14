#!/usr/bin/env node

import { welcomeMessage, nameRequest } from '../src/cli.js';
// eslint-disable-next-line import/named
import {
  typeOfAnswer, getRandomInt, expression, examination, finalMessage,
} from '../src/index.js';

welcomeMessage();
nameRequest();
console.log(typeOfAnswer.calc);

const operands = ['+', '-', '*'];
let isAnswersCorrect = true;

for (let i = 0; i < 3 && isAnswersCorrect; i++) {
  const firstValley = getRandomInt(0, 20);
  const secondValley = getRandomInt(0, 20);
  const currentOperand = operands[getRandomInt(0, 2)];

  const str = `${firstValley} ${currentOperand} ${secondValley}`;
  let correctAnswer;
  switch (currentOperand) {
    case '+':
      correctAnswer = firstValley + secondValley;
      break;
    case '-':
      correctAnswer = firstValley - secondValley;
      break;
    default:
      correctAnswer = firstValley * secondValley;
      break;
  }
  expression(str);
  isAnswersCorrect = examination(correctAnswer);
}

if (isAnswersCorrect) {
  finalMessage();
}
