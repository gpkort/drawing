import { lineLen, lineMidpoint, rotateLine, LineStyle, getLineStyle } from ".";
import { IStraigtLine } from "../geometry";
import { vec2 } from ".";
import { describe, expect, test } from "vitest"; // <-- **

describe("len", () => {
  test("simple happy path", () => {
    const a = vec2.fromValues(0, 0);
    const b = vec2.fromValues(3, 4);
    expect(lineLen(a, b)).toEqual(5);
  });
});

describe("midpoint", () => {
  test("simple happy path", () => {
    const a = vec2.fromValues(0, 0);
    const b = vec2.fromValues(0, 10);
    const mp = lineMidpoint(a, b);
    expect(mp[0]).toEqual(0);
    expect(mp[1]).toEqual(5);
  });
});

describe("rotate", () => {
  test("pi over two", () => {
    const line: IStraigtLine = {
      width: 1,
      begin: vec2.fromValues(-1, 0),
      end: vec2.fromValues(1, 0),
      lineStyle: getLineStyle("dash"),
    };
    const mp = lineMidpoint(line.begin, line.end);
    expect(mp[0]).toEqual(0);
    expect(mp[1]).toEqual(0);
    const newLine = rotateLine(line, Math.PI / 2, mp);
    const newBegin = vec2.fromValues(0, -1);
    const endBegin = vec2.fromValues(0, 1);

    expect(vec2.equals(newBegin, newLine.begin)).toBeTruthy();
    expect(vec2.equals(endBegin, newLine.end)).toBeTruthy();
  });
});
