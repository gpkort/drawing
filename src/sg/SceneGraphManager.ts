import { IPoint2D } from "../geometry";
import { SceneGraphNode } from "./SceneGraphNode";
import { INodeDescriptor } from "./SceneGraphNodeCreator";
import { Guid } from "guid-typescript";

export interface ISceneGraphRenderer {
  drawNodes(): void;
}

export interface ISceneGraphManger {
  addNode(descriptor: INodeDescriptor): Guid;
  removeNode(guid: Guid): void;
  getNodesByPoint(point: IPoint2D): Array<SceneGraphNode>;
}

export class SceneGraphManager
  implements ISceneGraphManger, ISceneGraphRenderer
{
  #context: CanvasRenderingContext2D;

  #nodes: Array<SceneGraphNode>;

  constructor(context: CanvasRenderingContext2D) {
    this.#context = context;
    this.#nodes = new Array<SceneGraphNode>();
  }

  addNode(descriptor: INodeDescriptor): Guid {
    throw new Error("Method not implemented.");
  }
  removeNode(guid: Guid): void {
    throw new Error("Method not implemented.");
  }
  getNodesByPoint(point: IPoint2D): SceneGraphNode[] {
    throw new Error("Method not implemented.");
  }
  drawNodes(): void {
    throw new Error("Method not implemented.");
  }

  //   addNode(node: SceneGraphNode): Guid {}
}
