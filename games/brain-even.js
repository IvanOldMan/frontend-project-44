#!/usr/bin/env node

import { welcomeMessage, nameRequest } from '../src/cli.js';
// eslint-disable-next-line import/named
import {
  typeOfAnswer, getRandomInt, expression, examination, finalMessage,
} from '../src/index.js';

welcomeMessage();
nameRequest();
console.log(typeOfAnswer.even);
let isAnswersCorrect = true;

for (let i = 0; i < 3 && isAnswersCorrect; i += 1) {
  const currentNumber = getRandomInt(0, 100);
  const correctAnswer = currentNumber % 2 === 0 ? 'yes' : 'no';

  expression(`${currentNumber}`);
  isAnswersCorrect = examination(correctAnswer);
}

if (isAnswersCorrect) {
  finalMessage();
}
