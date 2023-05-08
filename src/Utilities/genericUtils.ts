import { vec2 } from ".";

const DEFAULT_CANVAS_HEIGHT = 500;
const DEFAULT_CANVAS_WIDTH = 500;

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
