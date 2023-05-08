import { describe, expect, test, assertType } from "vitest";
import { IColor } from "../geometry/Color";
import { getRGBAString, getRGBString } from ".";

describe("Create", () => {
  test("Type Check", () => {
    const c = { r: 255, b: 255, g: 255, a: 100 };
    assertType<IColor>(c);
  });
});

describe("RGB Test", () => {
  test("test string ", () => {
    const c = { r: 255, b: 255, g: 255, a: 100 };

    expect(getRGBString(c)).toEqual("rgb(255, 255, 255)");
    expect(getRGBAString(c)).toEqual("rgba(255, 255, 255, 100)");
  });
});
