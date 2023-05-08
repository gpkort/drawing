import { vec2 } from ".";

const DEFAULT_CANVAS_HEIGHT = 500;
const DEFAULT_CANVAS_WIDTH = 500;

export interface CanvasInfo {
  lineWidth: number;
  fillStyle: string | CanvasPattern | CanvasGradient;
  lineDash: number[];
  strokeStyle: string | CanvasPattern | CanvasGradient;
}

export const getContextInfo = (ctx: CanvasRenderingContext2D): CanvasInfo => {
  return {
    lineWidth: ctx.lineWidth,
    fillStyle: ctx.fillStyle,
    lineDash: ctx.getLineDash(),
    strokeStyle: ctx.strokeStyle,
  };
};

export const setContextInfo = (
  ctx: CanvasRenderingContext2D,
  canvasInfo: CanvasInfo
) => {
  ctx.lineWidth = canvasInfo.lineWidth;
  ctx.fillStyle = canvasInfo.fillStyle;
  ctx.setLineDash(canvasInfo.lineDash);
  ctx.strokeStyle = canvasInfo.strokeStyle;
};

/*
const lw = ctx.lineWidth;
  ctx.lineWidth = circle.outline.width;
  ctx.fillStyle;
  ctx.lineWidth = lw;
  */

export const createCanvas = (height?: number, width?: number) => {
  const canvas = <HTMLCanvasElement>document.createElement("canvas");
  canvas.height = width ?? DEFAULT_CANVAS_HEIGHT;
  canvas.width = width ?? DEFAULT_CANVAS_WIDTH;
  document.body.appendChild(canvas);

  return canvas;
};

export const rotatePoints = (
  points: Array<vec2>,
  origin: vec2,
  rotation: number
) => {
  points.forEach((p) => {
    vec2.rotate(p, p, origin, rotation);
  });
};
