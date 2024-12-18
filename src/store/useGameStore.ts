import { create } from 'zustand';
import type { User, Problem } from '../types';

interface GameState {
  user: User | null;
  currentProblem: Problem | null;
  setUser: (user: User) => void;
  setProblem: (problem: Problem) => void;
  addExperience: (amount: number) => void;
}

export const useGameStore = create<GameState>((set) => ({
  user: null,
  currentProblem: null,
  setUser: (user) => set({ user }),
  setProblem: (problem) => set({ currentProblem: problem }),
  addExperience: (amount) => set((state) => ({
    user: state.user
      ? {
          ...state.user,
          experience: state.user.experience + amount,
          level: Math.floor((state.user.experience + amount) / 100) + 1,
        }
      : null,
  })),
}));