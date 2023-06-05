import { vec2 } from 'gl-matrix'
import { IPoint2D } from '.'
import { equals } from '../Utilities/TwoD'

/**
 * Cartesian coordinate
 * Point2D is Cartesian coordinate object that can be easily used in HTML canvas. 
 * @class
 */

export class Point2D implements IPoint2D {
    x: number
    y: number

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    clone() {
        return new Point2D(this.x, this.y);
    }

    toVec2() {
        return vec2.fromValues(this.x, this.y)
    }

    static normalizedCoordinate(width: number, height: number, point: Point2D): Point2D {
        return new Point2D(
            (point.x - (width / 2)) / (width / 2),
            (point.y - (height / 2)) / (height / 2)
        );    
    }

    static equals(a: Point2D, b: Point2D, precisionFactor: number = 10) {
        return equals(a.x, b.x, precisionFactor) 
        && 
        equals(a.y, b.y, precisionFactor);
    }

    static Vec2(point: Point2D) {
        return vec2.fromValues(point.x, point.y)
    }

    static normalized2D(width: number, height: number, point: IPoint2D): IPoint2D {
        return {
            x: (point.x - width) / (width / 2),
            y: (point.y - height) / (height / 2)
        };
    }

}