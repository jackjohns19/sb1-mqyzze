import { motion } from 'framer-motion';
import { Plus, Minus, X, Divide } from 'lucide-react';
import { Button } from '../ui/Button';
import type { Problem } from '../../types';

interface OperationSelectorProps {
  onSelect: (operation: Problem['type']) => void;
}

export function OperationSelector({ onSelect }: OperationSelectorProps) {
  const operations = [
    {
      type: 'addition' as const,
      icon: Plus,
      label: 'Addition',
      color: 'bg-blue-100 text-blue-700 border-blue-200',
      description: 'Practice adding numbers together',
    },
    {
      type: 'subtraction' as const,
      icon: Minus,
      label: 'Subtraction',
      color: 'bg-purple-100 text-purple-700 border-purple-200',
      description: 'Practice taking numbers away',
    },
    {
      type: 'multiplication' as const,
      icon: X,
      label: 'Multiplication',
      color: 'bg-green-100 text-green-700 border-green-200',
      description: 'Practice multiplying numbers',
    },
    {
      type: 'division' as const,
      icon: Divide,
      label: 'Division',
      color: 'bg-orange-100 text-orange-700 border-orange-200',
      description: 'Practice dividing numbers',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {operations.map(({ type, icon: Icon, label, color, description }) => (
        <motion.div
          key={type}
          whileHover={{ scale: 1.02 }}
          className={`p-6 rounded-xl border-2 ${color}`}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-white/50">
              <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold">{label}</h3>
          </div>
          <p className="text-sm mb-4">{description}</p>
          <Button
            onClick={() => onSelect(type)}
            variant="outline"
            className="w-full"
          >
            Practice {label}
          </Button>
        </motion.div>
      ))}
    </div>
  );
}