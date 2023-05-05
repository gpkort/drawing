import { Line, SolidLine } from "../geometry";
import { vec2 } from ".";

export const drawSolidLine = (
  line: SolidLine,
  ctx: CanvasRenderingContext2D
) => {
  const lw = ctx.lineWidth;
  ctx.lineWidth = line.width;

  ctx.beginPath();
  ctx.moveTo(line.begin[0], line.begin[1]);
  ctx.lineTo(line.end[0], line.end[1]);
  ctx.closePath();
  ctx.stroke();

  ctx.lineWidth = lw;
};

export const rotate = (
  line: SolidLine,
  rotation: number,
  origin?: vec2
): SolidLine => {
  const newLine: SolidLine = { ...line };
  vec2.rotate(newLine.end, line.end, line.begin, rotation);

  return newLine;
};
