import { describe, expect, test } from "vitest";
import { originTpointXform } from ".";
import { vec2 } from "gl-matrix";

describe("xform", () => {
  console.log("CALLED");
  const p1 = vec2.fromValues(100, 100);
  const p2 = vec2.fromValues(-5, 0);
  const T = originTpointXform(p2, p1);
  console.log(`T.x: ${T[0]}, T.y: ${T[1]}`);
  test("t1", () => {
    expect(true).toBeTruthy();
  });
});
