import { vec2 } from ".";
import { IPoint2D } from "../geometry";

const DEFAULT_CANVAS_HEIGHT = 500;
const DEFAULT_CANVAS_WIDTH = 500;

export interface CanvasInfo {
  lineWidth: number;
  fillStyle: string | CanvasPattern | CanvasGradient;
  lineDash: number[];
  strokeStyle: string | CanvasPattern | CanvasGradient;
}

export const createCanvas = (height?: number, width?: number) => {
  const canvas = <HTMLCanvasElement>document.createElement("canvas");
  canvas.height = width ?? DEFAULT_CANVAS_HEIGHT;
  canvas.width = width ?? DEFAULT_CANVAS_WIDTH;
  document.body.appendChild(canvas);

  return canvas;
};

export const rotatePoints = (
  points: Array<IPoint2D>,
  origin: IPoint2D,
  rotation: number
) => {
  const org = Point2DToVec2(origin);

  points.forEach((p) => {
    const v = Point2DToVec2(p);   
    vec2.rotate(v, v, org, rotation);
    p.x = v[0];
    p.y = v[1];
  });
  console.log(`p1 ${points[0].x}, ${points[0].y}, p2 ${points[1].x}, ${points[1].y}`)
};

export const Point2DToVec2 = (point: IPoint2D): vec2 => {
  return vec2.fromValues(point.x, point.y);
}

export const Vec2ToPoint2D = (vec: vec2): IPoint2D => {
  return {x: vec[0], y: vec[1]};
}