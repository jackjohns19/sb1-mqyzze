import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { DifficultySelector } from './DifficultySelector';
import { OperationSelector } from './OperationSelector';
import { ProblemDisplay } from './ProblemDisplay';
import { Button } from '../ui/Button';
import { generateProblemByDifficulty } from '../../lib/problemGenerator';
import { useGameStore } from '../../store/useGameStore';
import type { Problem } from '../../types';

interface PracticeModeProps {
  onExit: () => void;
}

type PracticeStep = 'difficulty' | 'operation' | 'problem';

export function PracticeMode({ onExit }: PracticeModeProps) {
  const [step, setStep] = useState<PracticeStep>('difficulty');
  const [difficulty, setDifficulty] = useState<Problem['difficulty'] | null>(null);
  const [operation, setOperation] = useState<Problem['type'] | null>(null);
  const [currentProblem, setCurrentProblem] = useState<Problem | null>(null);
  const addExperience = useGameStore((state) => state.addExperience);

  const handleDifficultySelect = (selectedDifficulty: Problem['difficulty']) => {
    setDifficulty(selectedDifficulty);
    setStep('operation');
  };

  const handleOperationSelect = (selectedOperation: Problem['type']) => {
    setOperation(selectedOperation);
    if (difficulty) {
      const problem = generateProblemByDifficulty(difficulty, selectedOperation);
      setCurrentProblem(problem);
      setStep('problem');
    }
  };

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect && difficulty) {
      const xpGained = {
        beginner: 10,
        intermediate: 20,
        advanced: 30,
      }[difficulty];
      addExperience(xpGained);

      // Generate next problem after a short delay
      setTimeout(() => {
        if (difficulty && operation) {
          const newProblem = generateProblemByDifficulty(difficulty, operation);
          setCurrentProblem(newProblem);
        }
      }, 1500);
    }
  };

  const handleBack = () => {
    switch (step) {
      case 'operation':
        setStep('difficulty');
        setDifficulty(null);
        break;
      case 'problem':
        setStep('operation');
        setOperation(null);
        setCurrentProblem(null);
        break;
      default:
        onExit();
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Button
          variant="ghost"
          onClick={handleBack}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          {step === 'difficulty' ? 'Back to Dashboard' : 'Back'}
        </Button>
      </div>

      <motion.div
        key={step}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
      >
        {step === 'difficulty' && (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Choose Your Difficulty
            </h2>
            <DifficultySelector onSelect={handleDifficultySelect} />
          </>
        )}

        {step === 'operation' && (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Select Operation
            </h2>
            <OperationSelector onSelect={handleOperationSelect} />
          </>
        )}

        {step === 'problem' && currentProblem && (
          <ProblemDisplay problem={currentProblem} onAnswer={handleAnswer} />
        )}
      </motion.div>
    </div>
  );
}