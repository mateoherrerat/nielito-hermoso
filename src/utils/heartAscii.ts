export type CellLayer = 'empty' | 'contour' | 'mid' | 'core';

export interface HeartChar {
  char: string;
  layer: 'contour' | 'mid' | 'core';
}

export interface WordGroup {
  chars: HeartChar[];
  hoverText: string;
}

export interface RowSegment {
  type: 'space' | 'word';
  text?: string;
  word?: WordGroup;
}

export interface HeartRow {
  segments: RowSegment[];
}

const WORD = 'DANIELA';

function getHoverText(len: number): string {
  if (len === 7) return ' Te amo';
  if (len === 6) return 'Te amo';
  if (len === 5) return 'Teamo';
  if (len === 4) return 'Amor';
  if (len === 3) return 'amo';
  if (len === 2) return 'Te';
  if (len === 1) return '♥';
  return ' Te amo'.padEnd(len, ' ').slice(0, len);
}

export function generateOptimizedHeart(cols = 71, rows = 31): HeartRow[] {
  const xMin = -1.26;
  const xMax = 1.26;
  const yMax = 1.27;
  const yMin = -1.0;

  const inside: boolean[][] = [];

  for (let r = 0; r < rows; r++) {
    const rowInside: boolean[] = [];
    const y = yMax - (r / (rows - 1)) * (yMax - yMin);

    for (let c = 0; c < cols; c++) {
      const x = xMin + (c / (cols - 1)) * (xMax - xMin);
      const a = x * x + y * y - 1;
      const v = a * a * a - 1.28 * x * x * (y * y * y);
      rowInside.push(v <= 0);
    }
    inside.push(rowInside);
  }

  // Pre-calculate Euclidean distance field with monospace font aspect ratio correction (~0.58)
  // This yields perfectly uniform, harmonious concentric color bands across the entire heart
  const dist: number[][] = Array.from({ length: rows }, () => Array(cols).fill(0));

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (!inside[r][c]) continue;
      let minDist = Infinity;
      for (let r2 = 0; r2 < rows; r2++) {
        for (let c2 = 0; c2 < cols; c2++) {
          if (!inside[r2][c2]) {
            const dy = (r - r2) * 1.0;
            const dx = (c - c2) * 0.58;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d < minDist) minDist = d;
          }
        }
      }
      dist[r][c] = minDist;
    }
  }

  const resultRows: HeartRow[] = [];

  for (let r = 0; r < rows; r++) {
    const segments: RowSegment[] = [];
    let spacesCount = 0;
    let currentWord: HeartChar[] = [];
    let segmentCharIndex = 0;

    for (let c = 0; c < cols; c++) {
      const isInside = inside[r][c];

      if (!isInside) {
        if (currentWord.length > 0) {
          segments.push({
            type: 'word',
            word: {
              chars: currentWord,
              hoverText: getHoverText(currentWord.length),
            },
          });
          currentWord = [];
          segmentCharIndex = 0;
        }
        spacesCount++;
      } else {
        if (spacesCount > 0) {
          segments.push({ type: 'space', text: ' '.repeat(spacesCount) });
          spacesCount = 0;
        }

        if (segmentCharIndex > 0 && segmentCharIndex % WORD.length === 0) {
          segments.push({
            type: 'word',
            word: {
              chars: currentWord,
              hoverText: getHoverText(currentWord.length),
            },
          });
          currentWord = [];
        }

        const d = dist[r][c];
        let layer: 'contour' | 'mid' | 'core' = 'core';
        if (d <= 1.45) {
          layer = 'contour';
        } else if (d <= 3.6) {
          layer = 'mid';
        } else {
          layer = 'core';
        }

        const char = WORD[segmentCharIndex % WORD.length];
        segmentCharIndex++;

        currentWord.push({ char, layer });
      }
    }

    if (currentWord.length > 0) {
      segments.push({
        type: 'word',
        word: {
          chars: currentWord,
          hoverText: getHoverText(currentWord.length),
        },
      });
    }
    if (spacesCount > 0) {
      segments.push({ type: 'space', text: ' '.repeat(spacesCount) });
    }

    resultRows.push({ segments });
  }

  return resultRows;
}
