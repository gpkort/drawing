import { mat3, vec2 } from "gl-matrix";
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

    expect(affine.length).toEqual(4);
  });
});
