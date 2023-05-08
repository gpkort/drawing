import { vec2 } from "../Utilities";
import { IColor } from "./Color";

export interface ILine {
  color?: IColor;
  width: number;
  lineStyle: number[];
}

// TODO: change to straight line
export interface IStraigtLine extends ILine {
  begin: vec2;
  end: vec2;
}
