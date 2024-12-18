import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import type { Problem } from '../../types';

interface DifficultySelectorProps {
  onSelect: (difficulty: Problem['difficulty']) => void;
}

export function DifficultySelector({ onSelect }: DifficultySelectorProps) {
  const difficulties: { level: Problem['difficulty']; color: string; description: string }[] = [
    {
      level: 'beginner',
      color: 'bg-green-100 text-green-700 border-green-200',
      description: 'Start with basic operations using numbers 1-10',
    },
    {
      level: 'intermediate',
      color: 'bg-yellow-100 text-yellow-700 border-yellow-200',
      description: 'Practice with numbers 10-50 and mixed operations',
    },
    {
      level: 'advanced',
      color: 'bg-red-100 text-red-700 border-red-200',
      description: 'Challenge yourself with numbers 50-100 and complex problems',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {difficulties.map(({ level, color, description }) => (
        <motion.div
          key={level}
          whileHover={{ scale: 1.02 }}
          className={`p-6 rounded-xl border-2 ${color}`}
        >
          <h3 className="text-lg font-semibold capitalize mb-2">{level}</h3>
          <p className="text-sm mb-4">{description}</p>
          <Button
            onClick={() => onSelect(level)}
            variant="outline"
            className="w-full"
          >
            Select {level}
          </Button>
        </motion.div>
      ))}
    </div>
  );
}