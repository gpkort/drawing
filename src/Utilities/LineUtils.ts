import { IStraigtLine } from "../geometry";
import { getRGBAString, vec2 } from ".";
import { getContextInfo, rotatePoints, setContextInfo } from "./.";

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
  const canvasInfo = getContextInfo(ctx);

  ctx.strokeStyle = getRGBAString(line.color);
  ctx.setLineDash(line.lineStyle);
  ctx.moveTo(line.begin[0], line.begin[1]);
  ctx.lineTo(line.end[0], line.end[1]);
  ctx.stroke();

  setContextInfo(ctx, canvasInfo);
};

export const rotateLine = (
  line: IStraigtLine,
  rotation: number,
  origin: vec2
): IStraigtLine => {
  const newLine: IStraigtLine = { ...line };
  const points = [line.begin, line.end];
  // vec2.rotate(newLine.end, line.end, origin, rotation);
  // vec2.rotate(newLine.begin, line.begin, origin, rotation);
  rotatePoints(points, origin, rotation);
  newLine.begin = points[0];
  newLine.end = points[1];
  return newLine;
};

export const lineLen = (a: vec2, b: vec2) => {
  return Math.sqrt(Math.pow(b[0] - a[0], 2) + Math.pow(b[1] - a[1], 2));
};

export const lineMidpoint = (a: vec2, b: vec2) => {
  return vec2.fromValues((a[0] + b[0]) / 2, (a[1] + b[1]) / 2);
};
