import readlineSync from 'readline-sync';
export const nameRequest = () => {
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
};


