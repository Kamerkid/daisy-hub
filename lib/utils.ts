import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatNumberWithDecimal = (num: number): string => {
  const [int, decimal] = num.toString().split('.')
  return decimal? `${int}.${decimal.padEnd(2, '0')}` : int
}

//PROMPT: [ChatGTP] create toSlug ts arrow function 
// that convert text to lowercase,
//  remove non-word, non-whitespace characters, non-hyphen characters, replace with whitespace, trim leading hyphens and trim trailing hyphens

export const toSlug = (text: string): string => 
   text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/^-+|-+$/g, '')
