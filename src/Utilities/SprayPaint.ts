import { IColor, IPoint2D } from "../geometry";
import { getRGBAString } from "./TwoD/index";

const getRandomGrid = (
  height: number,
  width: number,
  density: number
): Array<IPoint2D> => {
  const grid = new Array<IPoint2D>();
  const amount = Math.round(height * width * density);

  for (let n = 0; n < amount; n++) {
    let i = Math.round(Math.random() * width);
    let j = Math.round(Math.random() * height);
    i = i < width ? i : width - 1;
    j = j < height ? j : height - 1;
    grid.push({ x: i, y: j });
  }

  return grid;
};

const getNormalizedDensity = (density: number) => {
  density = density > 100 ? 100 : density;
  density = density < 0 ? 0 : density;

  return density / 100;
};

export const drawSpraySquare = (
  center: IPoint2D,
  side: number,
  color: IColor,
  density: number,
  ctx: CanvasRenderingContext2D
) => {
  density = getNormalizedDensity(density);
  const grid = getRandomGrid(side, side, density);
  const offset = side;
  const topLeft: IPoint2D = {
    x: Math.round(center.x - offset),
    y: Math.round(center.y - offset),
  };
  const rgbString = getRGBAString(color);

  for (let p of grid) {
    ctx.fillStyle = rgbString;
    ctx.fillRect(topLeft.x + p.x, topLeft.y + p.y, 1, 1);
  }
};

// ctx.restore();
//   ctx.closePath();
//   ctx.beginPath();
