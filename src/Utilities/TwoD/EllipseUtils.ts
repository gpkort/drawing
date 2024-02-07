import { IEllipse } from "../../geometry";
import { getRGBAString } from ".";

export const drawEllipse = (
  ellipse: IEllipse,
  ctx: CanvasRenderingContext2D
) => {
  ctx.save();

  ctx.arc(
    ellipse.center.x,
    ellipse.center.y,
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
  ctx.closePath();
  ctx.beginPath();
};

/*
  

*/
