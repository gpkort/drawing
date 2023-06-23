import { IPoint2D } from "../geometry";
import { mat4 } from "gl-matrix";

export const normalized2D = (width: number, height: number, point: IPoint2D): IPoint2D => {
    return {
        x: (point.x - (width / 2)) / (width / 2),
        y: (point.x - height / 2) / (height / 2)
    };
}

export const createFrustum = (
    left: number, 
    right: number, 
    bottom: number, 
    top: number, 
    near: number, 
    far: number
    ) => {

    var M = mat4.create()

    var sx = 2 * near / (right - left);
    var sy = 2 * near / (top - bottom);

    var c2 = - (far + near) / (far - near);
    var c1 = 2 * near * far / (near - far);

    var tx = -near * (left + right) / (right - left);
    var ty = -near * (bottom + top) / (top - bottom);

   
    return mat4.fromValues(sx, 0, 0, 0, 0, sy, 0, 0, 0, 0, c2, -1, tx, ty, c1, 0);
  };