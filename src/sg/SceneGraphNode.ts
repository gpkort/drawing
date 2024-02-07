import { IPoint2D } from "../geometry";
import { Guid } from "guid-typescript";
import { INodeDescriptor } from "./SceneGraphNodeCreator";

export interface ISceneGraphNode {
  get nodeID(): Guid;
  draw(ctx: CanvasRenderingContext2D): void;
  move(controlPoints: IPoint2D[]): void;
  intersects(point: IPoint2D): boolean;
}

export abstract class SceneGraphNode implements ISceneGraphNode {
  protected nodeGuid: Guid;

  get nodeID(): Guid {
    return this.nodeGuid;
  }

  abstract draw(ctx: CanvasRenderingContext2D): void;
  abstract move(controlPoints: IPoint2D[]): void;
  abstract intersects(point: IPoint2D): boolean;

  static createNode(descriptor: INodeDescriptor): SceneGraphNode {
    throw new Error("Method not implemented.");
  }
}
