import { ICircle, IEllipse } from "../geometry";
import { getRGBAString } from "./.";

export const drawCircle = (circle: ICircle, ctx: CanvasRenderingContext2D) => {
  const ellipse: IEllipse = {
    xRadius: circle.radius,
    yRadius: 0,
    ...circle,
  };
  drawEllipse(ellipse, ctx);
};

export const drawEllipse = (
  ellipse: IEllipse,
  ctx: CanvasRenderingContext2D
) => {
  ctx.save();

  ctx.arc(
    ellipse.center[0],
    ellipse.center[1],
    ellipse.xRadius,
    ellipse.yRadius,
    2 * Math.PI
  );

  ctx.fillStyle = getRGBAString(ellipse.fillColor);
  ctx.fill();
  ctx.lineWidth = ellipse.outline.width;
  ctx.strokeStyle = getRGBAString(ellipse.outline.color);
  ctx.stroke();

  ctx.restore();
};

/*
  

*/
