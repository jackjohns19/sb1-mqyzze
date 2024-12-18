export interface User {
  id: string;
  name: string;
  level: number;
  experience: number;
  achievements: Achievement[];
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt?: Date;
}

export interface Problem {
  id: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  type: 'addition' | 'subtraction' | 'multiplication' | 'division';
  question: string;
  answer: number;
  hints: string[];
}