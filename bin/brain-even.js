#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { nameRequest } from '../src/cli.js';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const welcomeMessage = 'Welcome to the Brain Games!';
console.log(welcomeMessage);
const userName = nameRequest();

let correctSession = true;

console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 0; i < 3; i++) {
    const currentNumber = getRandomInt(0, 100);
    const correctAnswer = currentNumber % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${currentNumber}`);
    const userAnswer = readlineSync.question('Your answer: ').toString();
    if (userAnswer === correctAnswer) {
        console.log('Correct!');
    } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet\'s try again, ${userName}!`);
        correctSession = false;
        break;
    }
}
if (correctSession) {
    console.log(`Congratulations, ${userName}!`);
}

