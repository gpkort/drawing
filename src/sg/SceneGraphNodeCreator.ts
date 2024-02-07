import { CircleNode, isCirleDescriptor } from "./CircleNode";
import { SceneGraphNode } from "./SceneGraphNode";
import { Guid } from "guid-typescript";

export type NodeType = "circle" | "line";

export interface INodeDescriptor {
  readonly nodeID: Guid;
  readonly nodeType: NodeType;
}

export const SceneGraphNodeCreator = (
  descriptor: INodeDescriptor
): SceneGraphNode | undefined => {
  if (descriptor.nodeType == "circle") {
  }
  return undefined;
};
