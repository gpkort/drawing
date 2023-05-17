import { vec2 } from "../Utilities";
import { IColor } from "./Color";
import { ILine } from "./Lines";

export interface IPoint2D {
  x: number;
  y: number;
}

export interface IShape {
  readonly id?: string;
  zLayer?: number;
}

export interface IGeometry extends IShape {
  outline: ILine;
  fillColor: IColor;
  center: IPoint2D;
}
