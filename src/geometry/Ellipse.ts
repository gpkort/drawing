import { IGeometry } from ".";

export interface ICircle extends IGeometry {
  radius: number;
}

export interface IEllipse extends IGeometry {
  xRadius: number;
  yRadius: number;
}
