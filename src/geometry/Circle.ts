import { getRGBAString } from "../Utilities/TwoD";
import { ICircle, IPoint2D } from "./IShape";
import { SceneGraphNode } from "../sg/SceneGraphNode";
import { Guid } from "guid-typescript";

export class Circle implements SceneGraphNode {
  #circle: ICircle;

  #guid: Guid;

  constructor(guid: Guid, circle: ICircle) {
    this.#circle = this.#circle;
  }

  get NodeID(): Guid {
    return this.#guid;
  }

  draw(ctx: CanvasRenderingContext2D) {
    const center = this.#circle.center;
    const radius = this.#circle.radius;
    const outline = this.#circle.outline;

    ctx.save();
    ctx.moveTo(center.x + radius, center.y);
    ctx.arc(center.x, center.y, radius, 0, 2 * Math.PI);

    ctx.fillStyle = getRGBAString(this.#circle.fillColor);
    ctx.fill();
    ctx.lineWidth = outline.width;
    ctx.strokeStyle = getRGBAString(outline.color);
    ctx.stroke();
    ctx.restore();
    ctx.closePath();
    ctx.beginPath();
  }

  intersects(point: IPoint2D) {
    const rect = {
      top: this.#circle.center.y - this.#circle.radius,
      bottom: this.#circle.center.y + this.#circle.radius,
      left: this.#circle.center.x - this.#circle.radius,
      right: this.#circle.center.x + this.#circle.radius,
    };
    return (
      rect.top <= point.y &&
      rect.bottom >= point.y &&
      rect.left <= point.x &&
      rect.right >= point.x
    );
  }

  move(controlPoints: IPoint2D[]): void {
    this.#circle.center = controlPoints[0];
  }
}
