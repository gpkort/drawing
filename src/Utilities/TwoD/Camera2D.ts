import { mat3 } from "gl-matrix";
import { IPoint2D } from "../../geometry";

export interface ICamera2D {
  top: IPoint2D;
  bottom: IPoint2D;
  left: IPoint2D;
  right: IPoint2D;
  center: IPoint2D;
}

export class Camera2D implements ICamera2D {
  top: IPoint2D;
  bottom: IPoint2D;
  left: IPoint2D;
  right: IPoint2D;
  center: IPoint2D;

  #camera: mat3;
}
