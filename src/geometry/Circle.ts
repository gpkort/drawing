import { getRGBAString } from "../Utilities/TwoD";
import { IColor } from "./Color";
import { IGeometry, IPoint2D } from "./IShape";
import { ILine } from "./Lines";

export const drawCircle = (circle: ICircle, ctx: CanvasRenderingContext2D) => {
  ctx.save();
  ctx.moveTo(circle.center.x + circle.radius, circle.center.y);
  ctx.arc(circle.center.x, circle.center.y, circle.radius, 0, 2 * Math.PI);

  ctx.fillStyle = getRGBAString(circle.fillColor);
  ctx.fill();
  ctx.lineWidth = circle.outline.width;
  ctx.strokeStyle = getRGBAString(circle.outline.color);
  ctx.stroke();
  ctx.restore();
  ctx.closePath();
  ctx.beginPath();
};

export interface ICircle extends IGeometry {
  radius: number;
}

export class Circle implements ICircle {
  radius: number;
  outline: ILine;
  fillColor: IColor;
  center: IPoint2D;
  id?: string;
  zLayer?: number;

  constructor(
    radius: number,
    outline: ILine,
    fillColor: IColor,
    center: IPoint2D,
    id?: string,
    zLayer?: number
  ) {
    this.radius = radius;
    this.outline = outline;
    this.fillColor = fillColor;
    this.center = center;
    this.id = id;
    this.zLayer = zLayer;
  }

  clone() {
    return new Circle(
      this.radius,
      this.outline,
      this.fillColor,
      this.center,
      this.id,
      this.zLayer
    );
  }

  toJSON() {
    return JSON.stringify(this);
  }

  static create(circle: ICircle) {
    return new Circle(
      circle.radius,
      circle.outline,
      circle.fillColor,
      circle.center,
      circle.id,
      circle.zLayer
    );
  }

  draw(ctx: CanvasRenderingContext2D) {
    drawCircle(this, ctx);
  }

  static fromJSON(json: string) {
    const circle: ICircle = JSON.parse(json);
    return circle;
  }
}
