#!/usr/bin/env node

import { welcomeMessage, nameRequest } from '../src/cli.js';
// eslint-disable-next-line import/named
import {
  typeOfAnswer, getRandomInt, expression, examination, finalMessage,
} from '../src/index.js';

const getProgressionArray = (firstElement, step, progressionLength) => {
  const result = [firstElement];
  for (let i = 1; i < progressionLength; i += 1) {
    result.push(result.at(-1) + step);
  }
  return result;
};

welcomeMessage();
nameRequest();
console.log(typeOfAnswer.progression);
let isAnswersCorrect = true;

for (let i = 0; i < 3 && isAnswersCorrect; i += 1) {
  const firstElement = getRandomInt(-50, 100);
  const step = getRandomInt(-10, 30);
  const progressionLength = getRandomInt(5, 10);
  const indexOfHiddenElement = getRandomInt(0, progressionLength - 1);
  const progression = getProgressionArray(firstElement, step, progressionLength);
  const correctAnswer = progression[indexOfHiddenElement];
  progression[indexOfHiddenElement] = '..';

  expression(`${progression.join(' ')}`);
  isAnswersCorrect = examination(correctAnswer);
}

if (isAnswersCorrect) {
  finalMessage();
}
