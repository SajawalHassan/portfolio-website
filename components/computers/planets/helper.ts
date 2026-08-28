export type StarData = {
  id: number;
  // size: number;
  top: string;
  left: string;
  delay: number;
};

export const PLANET1_SIZE = 204.5;
export const PLANET2_SIZE = 153;
export const EDGE_PADDING = 30;

export type Point = { x: number; y: number };

export function generateStars(count: number): StarData[] {
  const cols = Math.ceil(Math.sqrt(count));
  const rows = Math.ceil(count / cols);
  const cellWidth = 100 / cols;
  const cellHeight = 100 / rows;

  return Array.from({ length: count }, (_, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const baseTop = row * cellHeight + cellHeight / 2;
    const baseLeft = col * cellWidth + cellHeight / 2;
    const jitterTop = (Math.random() - 0.5) * cellHeight * 0.8;
    const jitterLeft = (Math.random() - 0.5) * cellWidth * 1.5;

    return {
      id: i,
      // size: Math.random() * 20 + 8,
      top: `${baseTop + jitterTop}%`,
      left: `${baseLeft + jitterLeft}%`,
      delay: Math.random() * 2,
    };
  });
}

export function getCorners(
  containerW: number,
  containerH: number,
  planetSize: number,
): Point[] {
  return [
    { x: EDGE_PADDING, y: EDGE_PADDING }, // top-left
    { x: containerW - planetSize - EDGE_PADDING, y: EDGE_PADDING }, // top-right
    { x: EDGE_PADDING, y: containerH - planetSize - EDGE_PADDING }, // bottom-left
    {
      x: containerW - planetSize - EDGE_PADDING,
      y: containerH - planetSize - EDGE_PADDING,
    }, // bottom-right
  ];
}

function columnPartner(idx: number): number {
  return idx ^ 2;
}

export function pickCorner(otherPlanetCorner: number): number {
  const forbidden = new Set([
    otherPlanetCorner,
    columnPartner(otherPlanetCorner),
  ]);
  const valid = [0, 1, 2, 3].filter((i) => !forbidden.has(i));
  return valid[Math.floor(Math.random() * valid.length)];
}
