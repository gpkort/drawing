import { describe, expect, test } from "vitest";
import { getVertices } from ".";
import { vec2 } from "gl-matrix";
import { IEquilateral } from "../geometry/Polygon";

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
          a: 100
        } 
      },
      fillColor: {
        r: 0,
        g: 0,
        b: 0,
        a: 100
      },
      center: {x:0, y:0}
    };
    const verticies = getVertices(square);
    console.log(`x: ${verticies[0][0]}, y: ${verticies[0][1]}`)

    expect(vec2.equals(verticies[0], vec2.fromValues(0, -1))).toBeTruthy();
    expect(vec2.equals(verticies[1], vec2.fromValues(-1, 0))).toBeTruthy();
    expect(vec2.equals(verticies[2], vec2.fromValues(0, -1))).toBeTruthy();
    expect(vec2.equals(verticies[3], vec2.fromValues(0, 1))).toBeTruthy();
  });
});
