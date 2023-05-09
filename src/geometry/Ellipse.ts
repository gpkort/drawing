import { IPolygon } from ".";

export interface ICircle extends IPolygon {
  radius: number;
}

export interface IEllipse extends IPolygon {
  xRadius: number;
  yRadius: number;
}
