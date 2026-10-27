export interface AsciiStar {
  x: number;
  y: number;
  char: string;
  delay: string;
  duration: string;
  opacity: number;
}

const CHARS = ['✦', '·', '*', '+', '°', '·', '*', '·'];

export function generateAsciiStars(count = 50): AsciiStar[] {
  const stars: AsciiStar[] = [];
  const rng = (seed: number) => {
    let s = seed;
    return () => {
      s = (s * 9301 + 49297) % 233280;
      return s / 233280;
    };
  };
  const rand = rng(101);

  let attempts = 0;
  while (stars.length < count && attempts < 300) {
    attempts++;
    const x = Math.floor(rand() * 92 + 4);
    const y = Math.floor(rand() * 90 + 5);

    // Keep clear zone for the center heart (x: 24-76%, y: 16-84%)
    if (x > 24 && x < 76 && y > 16 && y < 84) {
      continue;
    }

    const char = CHARS[Math.floor(rand() * CHARS.length)];
    const delay = (rand() * 4.5).toFixed(1) + 's';
    const duration = (2.2 + rand() * 3.2).toFixed(1) + 's';
    const opacity = parseFloat((0.25 + rand() * 0.55).toFixed(2));

    stars.push({ x, y, char, delay, duration, opacity });
  }

  return stars;
}
