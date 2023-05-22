import { IPoint2D } from "../geometry";

export const normalized2D = (width: number, height: number, point: IPoint2D): IPoint2D => {
    return {
        x: (point.x - (width / 2)) / (width / 2),
        y: (point.x - height / 2) / (height / 2)
    };
}