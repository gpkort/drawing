import { getRGBAString } from "../Utilities/TwoD";
import { ILine, IColor } from "../geometry";
import { ICircle, IPoint2D } from "../geometry/IShape";
import { SceneGraphNode } from "./SceneGraphNode";
import { Guid } from "guid-typescript";
import { INodeDescriptor, NodeType } from "./SceneGraphNodeCreator";

export class CircleDescriptor implements INodeDescriptor {
  readonly nodeID: Guid;
  readonly nodeType: NodeType = "circle";
  circle: ICircle;
}

export const isCirleDescriptor = (
  descript: INodeDescriptor
): descript is CircleDescriptor => {
  return (descript as CircleDescriptor).circle !== undefined;
};

export class CircleNode extends SceneGraphNode {
  #circle: ICircle;

  private constructor(guid: Guid, circle: ICircle) {
    super();
    this.#circle = this.#circle;
    this.nodeGuid;
  }

  static createNode(descriptor: INodeDescriptor): CircleNode {
    if (isCirleDescriptor(descriptor)) {
      return new CircleNode(descriptor.nodeID, descriptor.circle);
    } else {
      throw new Error("Create Node from CircleNode requires a");
    }
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
