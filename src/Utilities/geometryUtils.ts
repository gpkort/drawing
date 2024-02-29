import { ISegment } from "../geometry";

export const drawLine = (
  seg: ISegment,
  width: number,
  height: number,
  canvasHeight: number,
  canvasWidth: number,
  ctx: CanvasRenderingContext2D,
  lineWidth = 3
) => {
    // let xratio = canvasWidth / width;
    // let yratio = canvasHeight / height; 

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);    
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.moveTo(
      Math.floor(seg.start.x),
      Math.floor(seg.start.y)
      // Math.floor(seg.start.x * xratio),
      // Math.floor(seg.start.y * yratio)
    );
    ctx.lineTo(
      Math.floor(seg.end.x),
      Math.floor(seg.end.y)
      // Math.floor(seg.end.x * xratio),
      // Math.floor(seg.end.y * yratio)
    );
    ctx.closePath();
    ctx.stroke();    
};
