import { IColor } from "./Color";
import { IPoint2D, IShape } from "./IShape";
import { ILine } from "./Lines";

export interface IPolygon extends IShape {
    line: ILine
    fillColor: IColor
    points:Array<IPoint2D>
}