import { mat2d, mat3, vec2, vec3 } from "gl-matrix";
import { assertType, describe, expect, test } from "vitest";

describe("transformation", () => {
  test("matrix", () => {
    const point = vec2.fromValues(0, 0);
    const affine = [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
      [2, 3, 0],
    ];

    const point1 = mat2d.fromValues(1, 0, 0, 1, 5, 2);
    const point2 = vec2.fromValues(2, 3);
    let res = mat2d.create();

    mat2d.translate(res, point1, point2);
    console.log(`res = ${res}`);

    expect(affine.length).toEqual(4);
  });
});
