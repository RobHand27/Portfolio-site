import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper function to get the correct asset path based on environment
export function getAssetPath(path: string): string {
  const basePath = process.env.NODE_ENV === "production" ? "/Portfolio-site" : ""

  // If it's an absolute URL (starts with http or https), return it as is
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path
  }

  // If path already starts with the base path, return it as is
  if (path.startsWith(basePath)) {
    return path
  }

  // Otherwise, prepend the base path
  return `${basePath}${path}`
}

