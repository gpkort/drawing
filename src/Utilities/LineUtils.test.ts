import { lineLen, lineMidpoint, rotateLine, LineStyle, getLineStyle } from "./TwoD";
import { IPoint2D, IStraigtLine } from "../geometry";
import { vec2 } from "./TwoD";
import { describe, expect, test } from "vitest"; // <-- **

describe("len", () => {
  test("simple happy path", () => {
    const a = {x: 0, y: 0};
    const b = {x: 3, y: 4};
    expect(lineLen(a, b)).toEqual(5);
  });
});

describe("midpoint", () => {
  test("simple happy path", () => {
    const a = { x: 0, y: 0 };
    const b = { x: 0, y: 10};
    const mp = lineMidpoint(a, b);
    expect(mp.x).toEqual(0);
    expect(mp.y).toEqual(5);
  });
});

describe("rotate", () => {
  test("pi over two", () => {
    const line: IStraigtLine = {
      width: 1,
      begin: {x: -1, y: 0},
      end: {x: 1, y: 0 },
      lineStyle: getLineStyle("dash"),
    };
    const mp = lineMidpoint(line.begin, line.end);
    expect(mp.x).toEqual(0);
    expect(mp.y).toEqual(0);
    const newLine = rotateLine(line, Math.PI / 2, mp);
    const newBegin: IPoint2D = {x: 0, y: -1}; 
    const newEnd: IPoint2D = {x: 0, y: 1}; 

    expect(newLine.begin.x).toBeCloseTo(newBegin.x, 4);
    expect(newLine.begin.y).toBeCloseTo(newBegin.y, 4);
    expect(newLine.end.x).toBeCloseTo(newEnd.x, 4);
    expect(newLine.end.y).toBeCloseTo(newEnd.y, 4);    
  });
});
