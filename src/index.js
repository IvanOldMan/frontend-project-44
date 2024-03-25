// eslint-disable-next-line import/no-extraneous-dependencies
import readlineSync from 'readline-sync';

const numberOfQuestions = 3;

const gameStart = (description, questionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n${description}`);
  let isAnswersCorrect = true;

  for (let i = 0; i < numberOfQuestions; i += 1) {
    const [question, correctAnswer] = questionAndAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      isAnswersCorrect = false;
      break;
    }
  }
  if (isAnswersCorrect) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default gameStart;
