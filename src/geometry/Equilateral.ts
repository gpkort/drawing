import { IGeometry } from ".";

export interface IEquilateral extends IGeometry {
  numberOfSides: number;
  sideLength: number;
}
