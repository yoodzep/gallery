import { format } from 'date-fns';

export function formatDate(date: string, formatStr: string = 'MMMM yyyy'): string {
  return format(new Date(date), formatStr);
}

export function getImageAspectRatio(width: number, height: number): 'landscape' | 'portrait' | 'square' {
  const ratio = width / height;
  if (ratio > 1.2) return 'landscape';
  if (ratio < 0.8) return 'portrait';
  return 'square';
}

export function generateMasonryLayout(photos: { width: number; height: number }[]): number[] {
  // Returns column assignments for masonry layout
  const columns: number[] = [];
  const columnHeights = [0, 0, 0]; // 3 columns
  
  photos.forEach((photo) => {
    const aspectRatio = photo.height / photo.width;
    const minColIndex = columnHeights.indexOf(Math.min(...columnHeights));
    columns.push(minColIndex);
    columnHeights[minColIndex] += aspectRatio;
  });
  
  return columns;
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
