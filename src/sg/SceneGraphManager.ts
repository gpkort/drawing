import { SceneGraphNode } from "./SceneGraphNode";
import { Guid } from "guid-typescript";

export interface ISceneGraphRenderer {
  drawNodes(): void;
}

export class SceneGraphManager {
  #context: CanvasRenderingContext2D;

  #nodes: Array<SceneGraphNode>;

  constructor(context: CanvasRenderingContext2D) {
    this.#context = context;
    this.#nodes = new Array<SceneGraphNode>();
  }

  //   addNode(node: SceneGraphNode): Guid {}
}
