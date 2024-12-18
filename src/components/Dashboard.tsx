import { motion } from 'framer-motion';
import { Trophy, Star, Brain } from 'lucide-react';
import { useState } from 'react';
import { useGameStore } from '../store/useGameStore';
import { Button } from './ui/Button';
import { PracticeMode } from './practice/PracticeMode';

export function Dashboard() {
  const user = useGameStore((state) => state.user);
  const [showPractice, setShowPractice] = useState(false);

  if (showPractice) {
    return <PracticeMode onExit={() => setShowPractice(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Math Adventure</h1>
            <p className="text-gray-600">Welcome back, {user?.name || 'Explorer'}!</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <Trophy className="w-6 h-6 text-yellow-500" />
              <span className="text-sm font-medium">Level {user?.level || 1}</span>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <Star className="w-6 h-6 text-purple-500" />
              <span className="text-sm font-medium">{user?.experience || 0} XP</span>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-green-100 rounded-lg">
                <Brain className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-xl font-semibold">Practice</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Start a new practice session tailored to your skill level.
            </p>
            <Button className="w-full" onClick={() => setShowPractice(true)}>
              Start Practice
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Trophy className="w-6 h-6 text-yellow-600" />
              </div>
              <h2 className="text-xl font-semibold">Challenges</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Take on daily challenges to earn special rewards.
            </p>
            <Button variant="outline" className="w-full">View Challenges</Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Star className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-xl font-semibold">Achievements</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Track your progress and unlock new achievements.
            </p>
            <Button variant="ghost" className="w-full">View Achievements</Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}