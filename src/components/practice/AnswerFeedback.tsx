import { motion } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';
import type { Problem } from '../../types';

interface AnswerFeedbackProps {
  isCorrect: boolean;
  type: Problem['type'];
  answer: number;
}

export function AnswerFeedback({ isCorrect, type, answer }: AnswerFeedbackProps) {
  const operationStyles = {
    addition: {
      correct: 'bg-blue-100 text-blue-700 border-blue-200',
      incorrect: 'bg-red-100 text-red-700 border-red-200',
      icon: 'text-blue-600',
    },
    subtraction: {
      correct: 'bg-purple-100 text-purple-700 border-purple-200',
      incorrect: 'bg-red-100 text-red-700 border-red-200',
      icon: 'text-purple-600',
    },
    multiplication: {
      correct: 'bg-green-100 text-green-700 border-green-200',
      incorrect: 'bg-red-100 text-red-700 border-red-200',
      icon: 'text-green-600',
    },
    division: {
      correct: 'bg-orange-100 text-orange-700 border-orange-200',
      incorrect: 'bg-red-100 text-red-700 border-red-200',
      icon: 'text-orange-600',
    },
  };

  const style = operationStyles[type];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`mt-6 p-4 rounded-lg border-2 ${
        isCorrect ? style.correct : style.incorrect
      }`}
    >
      <div className="flex items-center gap-3">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className={`p-2 rounded-full ${isCorrect ? 'bg-white/50' : 'bg-red-50'}`}
        >
          {isCorrect ? (
            <CheckCircle className={`w-6 h-6 ${style.icon}`} />
          ) : (
            <XCircle className="w-6 h-6 text-red-600" />
          )}
        </motion.div>
        <div>
          <motion.p
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="font-medium"
          >
            {isCorrect ? (
              'Correct! Well done!'
            ) : (
              <>
                Incorrect. The correct answer is{' '}
                <span className="font-bold">{answer}</span>
              </>
            )}
          </motion.p>
          {isCorrect && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-sm mt-1 opacity-75"
            >
              Get ready for the next question...
            </motion.p>
          )}
        </div>
      </div>
    </motion.div>
  );
}