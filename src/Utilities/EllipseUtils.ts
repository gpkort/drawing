import { ICircle, IEllipse } from "../geometry";
import { getContextInfo, getRGBAString, setContextInfo } from "./.";

export const drawCircle = (circle: ICircle, ctx: CanvasRenderingContext2D) => {
  const ellipse: IEllipse = {
    xRadius:circle.radius, 
    yRadius: circle.radius, 
    ...circle
  }
  
  drawEllipse(ellipse, ctx)
};

export const drawEllipse = (
  ellipse: IEllipse,
  ctx: CanvasRenderingContext2D
) => {
  const canvasInfo = getContextInfo(ctx);

  ctx.strokeStyle = getRGBAString(ellipse.outline.color);
  ctx.lineWidth = ellipse.outline.width
  ctx.fillStyle = getRGBAString(ellipse.fillColor);
  ctx.beginPath();
  ctx.ellipse(
      ellipse.center[0], 
      ellipse.center[1], 
      ellipse.xRadius, 
      ellipse.yRadius, 
              0, 
              0, 
              2 * Math.PI);
  ctx.stroke();

  // ctx.ellipse(
  //   ellipse.center[0], 
  //   ellipse.center[1], 
  //   ellipse.xRadius, 
  //   ellipse.yRadius, 
  //           0, 
  //           0, 
  //           2 * Math.PI);

  ctx.fill();
  
  setContextInfo(ctx, canvasInfo);
};

/*
  

*/
