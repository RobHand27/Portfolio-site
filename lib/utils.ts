import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper function to get the correct asset path
export function getAssetPath(path: string): string {
  // If it's an absolute URL (starts with http or https), return it as is
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path
  }

  // Return the path as is, since the custom domain serves from the root
  return path
}