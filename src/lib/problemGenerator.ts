import { Problem } from '../types';

function generateNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateProblemByDifficulty(difficulty: Problem['difficulty'], type: Problem['type']): Problem {
  const ranges = {
    beginner: { min: 1, max: 10 },
    intermediate: { min: 10, max: 50 },
    advanced: { min: 50, max: 100 },
  };

  const { min, max } = ranges[difficulty];
  const num1 = generateNumber(min, max);
  const num2 = generateNumber(min, max);
  
  let question = '';
  let answer = 0;
  
  switch (type) {
    case 'addition':
      question = `${num1} + ${num2}`;
      answer = num1 + num2;
      break;
    case 'subtraction':
      question = `${num1} - ${num2}`;
      answer = num1 - num2;
      break;
    case 'multiplication':
      question = `${num1} × ${num2}`;
      answer = num1 * num2;
      break;
    case 'division':
      // Ensure clean division
      answer = num2;
      const product = num1 * num2;
      question = `${product} ÷ ${num1}`;
      break;
  }

  return {
    id: Math.random().toString(36).substr(2, 9),
    difficulty,
    type,
    question,
    answer,
    hints: generateHints(type, num1, num2),
  };
}

function generateHints(type: Problem['type'], num1: number, num2: number): string[] {
  const hints = [];
  
  switch (type) {
    case 'addition':
      hints.push(
        'Try breaking down the numbers into smaller parts',
        `${num1} can be thought of as ${Math.floor(num1/10)*10} + ${num1%10}`,
        'Add the ones first, then the tens'
      );
      break;
    case 'subtraction':
      hints.push(
        'You can count up from the smaller number',
        'Try breaking down the problem into smaller steps',
        'Think about what you need to add to get from the smaller to the larger number'
      );
      break;
    case 'multiplication':
      hints.push(
        'Break down into smaller multiplications',
        `Think of it as adding ${num1} ${num2} times`,
        'Use the multiplication table for smaller parts'
      );
      break;
    case 'division':
      hints.push(
        'Think of it as sharing equally',
        'Try breaking down into smaller groups',
        'What number times the divisor gives you the dividend?'
      );
      break;
  }
  
  return hints;
}

export { generateProblemByDifficulty };