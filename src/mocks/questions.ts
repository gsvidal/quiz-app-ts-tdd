export type QuestionObj = {
  question: string;
  choices: string[];
  type: string;
  correctAnswer: string;
};

export type QuizObj = {
  topic: string;
  level: string;
  totalQuestions: number;
  perQuestionScore: number;
  questions: QuestionObj[];
};

export const quiz: QuizObj = {
  topic: 'Javascript',
  level: 'Beginner',
  totalQuestions: 4,
  perQuestionScore: 5,
  questions: [
    {
      question: 'Which function is used to serialize an object into a JSON string in Javascript?',
      choices: ['stringify()', 'parse()', 'convert()', 'None of the above'],
      type: 'MCQs',
      correctAnswer: 'stringify()',
    },
    {
      question: 'Which of the following keywords is used to define a variable in Javascript?',
      choices: ['var', 'let', 'var and let', 'None of the above'],
      type: 'MCQs',
      correctAnswer: 'var and let',
    },
    {
      question: 'Which of the following methods can be used to display data in some form using Javascript?',
      choices: ['document.write()', 'console.log()', 'window.alert', 'All of the above'],
      type: 'MCQs',
      correctAnswer: 'All of the above',
    },
    {
      question: 'How can a datatype be declared to be a constant type?',
      choices: ['var', 'const', 'let', 'constant'],
      type: 'MCQs',
      correctAnswer: 'const',
    },
  ],
};
