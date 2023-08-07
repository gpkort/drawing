import { IColor, IPoint2D } from "../geometry";
import { getRGBAString } from "./TwoD/index";

export const drawSpraySquare = (
  center: IPoint2D,
  side: number,
  color: IColor,
  density: number,
  ctx: CanvasRenderingContext2D
) => {
  density = getNormalizedDensity(density);

  const grid = getRandomGrid(side, side, density);
  const offset = side / 2;
  const topLeft: IPoint2D = {
    x: Math.round(center.x - offset),
    y: Math.round(center.y - offset),
  };

  for (let i = 0; i < side; i++) {
    for (let j = 0; j < side; j++) {
      if (grid[i][j] === 1) {
        ctx.fillStyle = getRGBAString(color);
        ctx.fillRect(topLeft.x + i, topLeft.y + j, 1, 1);
      }
    }
  }
};

const getRandomGrid = (
  height: number,
  width: number,
  density: number
): number[][] => {
  const grid = new Array(width).fill(new Array(height).fill(0));
  const amount = Math.round(height * width * density);

  for (let i = 0; i < amount; i++) {
    const i = Math.round(Math.random() * width);
    const j = Math.round(Math.random() * height);
    grid[i][j] = 1;
  }

  return grid;
};

// ctx.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";
// ctx.fillRect( x, y, 1, 1 );

const getNormalizedDensity = (density: number) => {
  density = density > 100 ? 100 : density;
  density = density < 0 ? 0 : density;

  return density / 100;
};
