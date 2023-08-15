import { IPoint2D } from "../geometry";
import { Guid } from "guid-typescript";

export interface SceneGraphNode {
  get NodeID(): Guid;
  draw(ctx: CanvasRenderingContext2D): void;
  move(controlPoints: IPoint2D[]): void;
  intersects(point: IPoint2D): boolean;
}
