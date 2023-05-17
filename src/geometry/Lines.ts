import { vec2 } from "../Utilities";
import { IColor } from "./Color";
import { IPoint2D, IShape } from "./Shape";

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
