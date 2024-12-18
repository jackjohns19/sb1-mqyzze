import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateExperience(difficulty: string, timeSpent: number): number {
  const baseXP = {
    beginner: 10,
    intermediate: 20,
    advanced: 30,
  }[difficulty] || 10;
  
  const timeBonus = Math.max(0, 30 - timeSpent) * 0.5;
  return Math.round(baseXP + timeBonus);
}