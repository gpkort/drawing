import { IGeometry } from "./Shape";

export interface IEquallateral extends IGeometry {
  numberOfSides: number;
  sideLength: number;
}
