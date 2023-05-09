import { vec2 } from "../Utilities";
import { IColor } from "./Color";
import { ILine } from "./Lines";

export interface IShape {
  readonly id?: string;
}

export interface IGeometry extends IShape {
  outline: ILine;
  fillColor: IColor;
  center: vec2;
}
