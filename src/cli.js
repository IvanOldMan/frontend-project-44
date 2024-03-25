// eslint-disable-next-line import/no-extraneous-dependencies
import readlineSync from 'readline-sync';

const welcomeMessage = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export default welcomeMessage;
