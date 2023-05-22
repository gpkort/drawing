import { describe, expect, test } from "vitest";
import { getVertices } from ".";
import { vec2 } from "gl-matrix";
import { IEquilateral, IPoint2D } from "../geometry";
import { Point2DEquals } from "./";

describe("xform", () => {
  test("t1", () => {
    const square: IEquilateral = {
      numberOfSides: 4,
      sideLength: 1,
      outline: {
        width: 1,
        lineStyle: [],
        color: {
          r: 0,
          g: 0,
          b: 0,
          a: 100,
        },
      },
      fillColor: {
        r: 0,
        g: 0,
        b: 0,
        a: 100,
      },
      center: { x: 0, y: 0.0 },
    };
    const verticies = getVertices(square);
    
    expect(Point2DEquals(verticies[0], { x: 0, y: -1 }, 10)).toBeTruthy();
    expect(Point2DEquals(verticies[1], { x: -1, y: 0 }, 10)).toBeTruthy();
    expect(Point2DEquals(verticies[2], { x: 0, y: 1 }, 10)).toBeTruthy();
    expect(Point2DEquals(verticies[3], { x: 1, y: 0 }, 10)).toBeTruthy();
  });
});
