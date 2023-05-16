import { IGeometry } from "./Shape";

export interface IEquilateral extends IGeometry {
  numberOfSides: number;
  sideLength: number;
}
