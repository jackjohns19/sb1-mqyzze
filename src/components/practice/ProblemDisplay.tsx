import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/Button';
import { AnswerFeedback } from './AnswerFeedback';
import type { Problem } from '../../types';

interface ProblemDisplayProps {
  problem: Problem;
  onAnswer: (isCorrect: boolean) => void;
}

export function ProblemDisplay({ problem, onAnswer }: ProblemDisplayProps) {
  const [answer, setAnswer] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [currentHint, setCurrentHint] = useState(0);
  const [status, setStatus] = useState<'idle' | 'correct' | 'incorrect'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isCorrect = Number(answer) === problem.answer;
    setStatus(isCorrect ? 'correct' : 'incorrect');
    onAnswer(isCorrect);
    if (isCorrect) {
      setTimeout(() => {
        setAnswer('');
        setShowHint(false);
        setCurrentHint(0);
        setStatus('idle');
      }, 1500);
    }
  };

  const showNextHint = () => {
    if (currentHint < problem.hints.length - 1) {
      setCurrentHint(curr => curr + 1);
    }
    setShowHint(true);
  };

  const operationColors = {
    addition: 'text-blue-600',
    subtraction: 'text-purple-600',
    multiplication: 'text-green-600',
    division: 'text-orange-600',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-8 rounded-xl shadow-sm"
    >
      <div className="text-center mb-8">
        <motion.h2
          key={problem.question}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className={`text-4xl font-bold mb-4 ${operationColors[problem.type]}`}
        >
          {problem.question}
        </motion.h2>
        <div className="text-sm text-gray-500 capitalize">
          {problem.type} • {problem.difficulty}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div className="mb-6">
          <input
            type="number"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className={`w-full text-center text-2xl p-4 border-2 rounded-lg transition-colors ${
              status === 'incorrect'
                ? 'border-red-300 focus:border-red-500 focus:ring focus:ring-red-200'
                : 'border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200'
            }`}
            placeholder="Enter your answer"
            autoFocus
          />
        </div>

        <div className="flex gap-4">
          <Button
            type="submit"
            className={`flex-1 ${
              status === 'incorrect' ? 'bg-red-600 hover:bg-red-700' : ''
            }`}
          >
            Check Answer
          </Button>
          <Button type="button" variant="outline" onClick={showNextHint}>
            <HelpCircle className="w-5 h-5" />
          </Button>
        </div>
      </form>

      <AnimatePresence>
        {status !== 'idle' && (
          <AnswerFeedback
            isCorrect={status === 'correct'}
            type={problem.type}
            answer={problem.answer}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showHint && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-6 p-4 bg-blue-50 text-blue-700 rounded-lg"
          >
            <div className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5" />
              <span>{problem.hints[currentHint]}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}