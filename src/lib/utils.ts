import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const randomColors = () => {
  const colors = [
    '#F87171',
    '#FBBF24',
    '#34D399',
    '#60A5FA',
    '#818CF8',
    '#F472B6',
  ]
  return colors[Math.floor(Math.random() * colors.length)]
}