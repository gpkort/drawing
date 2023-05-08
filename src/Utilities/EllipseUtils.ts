import { ICircle, IEllipse } from "../geometry";

export const drawCircle = (circle: ICircle, ctx: CanvasRenderingContext2D) => {
  const lw = ctx.lineWidth;
  ctx.lineWidth = circle.outline.width;
  ctx.fillStyle;
  ctx.lineWidth = lw;
};

export const drawEllipse = (
  ellipse: IEllipse,
  ctx: CanvasRenderingContext2D
) => {};

/*
  ctx.beginPath();
ctx.ellipse(100, 100, 50, 75, Math.PI / 4, 0, 2 * Math.PI);
ctx.stroke();

// Draw the ellipse's line of reflection
ctx.beginPath();
ctx.setLineDash([5, 5]);
ctx.moveTo(0, 200);
ctx.lineTo(200, 0);
ctx.stroke();
*/
