#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { userName } from './cli.js';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const typeOfAnswer = {
  even: 'Answer "yes" if the number is even, otherwise answer "no".',
  calc: 'What is the result of the expression?',
  gcd: 'Find the greatest common divisor of given numbers.',
  progression: 'What number is missing in the progression?',
  prime: 'Answer "yes" if given number is prime. Otherwise answer "no".',
};

const expression = (text) => {
  console.log(`Question: ${text}`);
};

const examination = (correctAnswer) => {
  const userAnswer = readlineSync.question('Your answer: ').toString();
  if (correctAnswer.toString() === userAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
  return false;
};

const finalMessage = () => {
  console.log(`Congratulations, ${userName}!`);
};

export {
  typeOfAnswer, getRandomInt, expression, examination, finalMessage,
};
