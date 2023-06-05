import { vec2 } from "../Utilities/TwoD";
import { IColor } from "./Color";
import { IPoint2D, IShape } from "./";

export interface ILine {
  color?: IColor;
  width: number;
  lineStyle: number[];
}

// TODO: change to straight line
export interface IStraigtLine extends ILine {
  begin: IPoint2D;
  end: IPoint2D;
}
