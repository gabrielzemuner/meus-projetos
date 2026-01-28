import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDateTimeBR(date: string | null) {
  if (!date) return null;

  const dt = new Date(date);
  return new Intl.DateTimeFormat('pt-BR', {
    timeZone: 'UTC',
  }).format(dt);
}

// const todayDate = new Date().toISOString().split('T')[0];