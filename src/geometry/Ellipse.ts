import { IPolygon } from ".";

export interface ICircle extends IPolygon {
  radius: number;
}

export interface IEllipse extends ICircle {
  xRadius: number;
  yRadius: number;
}
