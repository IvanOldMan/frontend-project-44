// eslint-disable-next-line import/no-extraneous-dependencies
import readlineSync from 'readline-sync';

let userName = '';
const welcomeMessage = () => {
  console.log('Welcome to the Brain Games!');
};

const nameRequest = () => {
  userName = readlineSync.question('May I have your name? ').toString();
  console.log(`Hello, ${userName}!`);
};

export { userName, welcomeMessage, nameRequest };
