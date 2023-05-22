import { assertType, describe, expect, test } from "vitest";
import { Point2D } from "./Point2D";
import { IPoint2D } from "./IShape";
import { vec2 } from "../Utilities";

describe("Constructor", () => {
    const point = new Point2D(4, 2)

    test("type check", () => {
        assertType<Point2D>(point);
    })
    test("interface check", () => {
        assertType<IPoint2D>(point);
    });
})

describe("Constructor", () => {
    const x = 4;
    const y = 5;
    const point = new Point2D(x, y);

    test("x value", () => {
        expect(point.x === x).toBeTruthy()
    });
    
    test("y value", () => {
        expect(point.y === y).toBeTruthy()
    });
})

describe("Clone", () => {
    const point = new Point2D(7, 8);
    const clone = point.clone();

    test("value x copied", () => {
        expect(clone.x === 7).toBeTruthy()
    });
    test("value y copied", () => {
        expect(clone.y === 8).toBeTruthy()
    });
    
    test("value y changed in clone", () => {
        clone.y = 3;
        expect(clone.y === 3).toBeTruthy()
    });
    test("value y not linked", () => {
        expect(point.y === 8).toBeTruthy()
    });
});

describe("equals", () => {
    const point = new Point2D(7, 8);
    const clone = point.clone();

    test("works", () => {
        expect(Point2D.equals(point, clone)).toBeTruthy();
    });    

    test("negative", () => {
        clone.x = 7.001;
        expect(Point2D.equals(point, clone)).toBeFalsy();
    });
});

describe("toVec2", () => {
    const point = new Point2D(7, 8); 
    const v = point.toVec2();

    test("type", () => {
        assertType<vec2>(v);
    });

    test("Value", () => {
        expect(v[0] === 7).toBeTruthy();
        expect(v[1] === 8).toBeTruthy();
    });
});

describe("toVec2", () => {
    const point = new Point2D(7, 8); 
    const v = Point2D.Vec2(point);

    test("type", () => {
        assertType<vec2>(v);
    });

    test("Value", () => {
        expect(v[0] === 7).toBeTruthy();
        expect(v[1] === 8).toBeTruthy();
    });
});

describe("Normalize", () => {
    test("origin", () => {
        const point = new Point2D(250, 250);
        const origin = Point2D.normalizedCoordinate(500, 500, point);
        expect(origin.x === 0).toBeTruthy();
        expect(origin.y === 0).toBeTruthy();
    });

    test("quadrant I", () => {
        const point = new Point2D(500, 500);
        const origin = Point2D.normalizedCoordinate(500, 500, point);
        expect(origin.x).toBeCloseTo(1);
        expect(origin.y).toBeCloseTo(1);
    });

    
    test("quadrant II", () => {
        const point = new Point2D(0, 500);
        const origin = Point2D.normalizedCoordinate(500, 500, point);
        expect(origin.x).toBeCloseTo(-1);
        expect(origin.y).toBeCloseTo(1);
    });

    test("quadrant III", () => {
        const point = new Point2D(0, 0);
        const origin = Point2D.normalizedCoordinate(500, 500, point);
        expect(origin.x).toBeCloseTo(-1);
        expect(origin.y).toBeCloseTo(-1);
    });

    test("quadrant IV", () => {
        const point = new Point2D(500, 0);
        const origin = Point2D.normalizedCoordinate(500, 500, point);
        expect(origin.x).toBeCloseTo(1);
        expect(origin.y).toBeCloseTo(-1);
    });
})