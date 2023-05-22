import { IPoint2D, IStraigtLine } from "../geometry";
import { getRGBAString, vec2 } from ".";
import { rotatePoints } from "./.";

export type LineStyle = "dash" | "stipple" | "solid";

export const getLineStyle = (name: LineStyle): number[] => {
  switch (name) {
    case "dash":
      return [3, 5];
    case "stipple":
      return [1, 2];
    case "solid":
    default:
      return [];
  }
};

export const drawLine = (line: IStraigtLine, ctx: CanvasRenderingContext2D) => {
  ctx.save();

  ctx.strokeStyle = getRGBAString(line.color);
  ctx.setLineDash(line.lineStyle);
  ctx.moveTo(line.begin.x, line.begin.y);
  ctx.lineTo(line.end.x, line.end.y);
  ctx.stroke();

  ctx.restore();
};

export const rotateLine = (
  line: IStraigtLine,
  rotation: number,
  origin: IPoint2D
): IStraigtLine => {
  const newLine: IStraigtLine = { ...line };
  const points = [line.begin, line.end];
  rotatePoints(points, origin, rotation);
  newLine.begin = points[0];
  newLine.end = points[1];
  return newLine;
};

export const lineLen = (a: IPoint2D, b: IPoint2D) => {
  return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
};

export const lineMidpoint = (a: IPoint2D, b: IPoint2D) => {
  return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2};
};
