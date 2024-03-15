#!/usr/bin/env node

import { welcomeMessage, nameRequest } from '../src/cli.js';
// eslint-disable-next-line import/named
import {
  typeOfAnswer, getRandomInt, expression, examination, finalMessage,
} from '../src/index.js';

const isPrimeNumber = (testNumber) => {
  let result = 'yes';
  if (testNumber <= 1) {
    result = 'no';
  }
  for (let i = 2; i <= Math.sqrt(testNumber); i++) {
    if (testNumber % i === 0) result = 'no';
    break;
  }

  return result;
};

welcomeMessage();
nameRequest();
console.log(typeOfAnswer.prime);
let isAnswersCorrect = true;

for (let i = 0; i < 3 && isAnswersCorrect; i++) {
  const testNumber = getRandomInt(-10, 100);
  const correctAnswer = isPrimeNumber(testNumber);

  expression(`${testNumber}`);
  isAnswersCorrect = examination(correctAnswer);
}

if (isAnswersCorrect) {
  finalMessage();
}
