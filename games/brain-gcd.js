#!/usr/bin/env node

import { welcomeMessage, nameRequest } from '../src/cli.js';
// eslint-disable-next-line import/named
import {
  typeOfAnswer, getRandomInt, expression, examination, finalMessage,
} from '../src/index.js';

const getGreatestCommonDivisor = (firstValley, secondValley) => {
  let maxValley;
  let minValley;

  if (firstValley > secondValley) {
    maxValley = firstValley;
    minValley = secondValley;
  } else {
    maxValley = secondValley;
    minValley = firstValley;
  }

  while (minValley) {
    const swap = maxValley % minValley;
    maxValley = minValley;
    minValley = swap;
  }
  return maxValley;
};

welcomeMessage();
nameRequest();
console.log(typeOfAnswer.gcd);
let isAnswersCorrect = true;

for (let i = 0; i < 3 && isAnswersCorrect; i += 1) {
  const firstValley = getRandomInt(1, 100);
  const secondValley = getRandomInt(1, 100);

  const correctAnswer = getGreatestCommonDivisor(firstValley, secondValley);

  expression(`${firstValley} ${secondValley}`);
  isAnswersCorrect = examination(correctAnswer);
}

if (isAnswersCorrect) {
  finalMessage();
}
