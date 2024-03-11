import readlineSync from 'readline-sync';

// eslint-disable-next-line import/prefer-default-export

export const nameRequest = () => {
  const userName = readlineSync.question('May I have your name? ').toString();
  console.log(`Hello, ${userName}!`);
  return userName;
};

