import { vec3 } from "gl-matrix";
import { vec2 } from "../Utilities";

export interface IPoint2D {
  x: number
  y: number
}

export interface IColor {
  r: number
  g: number
  b: number
  a: number
}

export interface IShape {
  readonly id?: string;
}

export interface ILine  {
  color?: IColor;
  width: number;
  lineStyle: number[]
}

// TODO: change to straight line
export interface IStraigtLine extends ILine {
  begin: vec2;
  end: vec2;
}

export interface ICircle extends IShape {
  outline: ILine;
  fillColor: string;
  center: vec2;
  radius: number;
}


