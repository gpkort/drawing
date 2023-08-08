import { vec2, vec4 } from "gl-matrix";
import {
  createCanvas,
  rotateLine,
  lineMidpoint,
  drawLine,
  getLineStyle,
  getRGBAString,
} from "./Utilities/TwoD";
import { ICircle, IStraigtLine } from "./geometry";
import { drawCircle } from "./Utilities/TwoD/EllipseUtils";
import { IEquilateral } from "./geometry/Equilateral";
import { drawEquilateral } from "./Utilities/TwoD";
import { importFromJson, drawPolygon } from "./Utilities/TwoD/PolygonUtils";
import squarePoly from "./json/square.json";
import { IPolygon } from "./geometry/Polygon";
import { drawSpraySquare } from "./Utilities/SprayPaint";

export default class Drawing {
  #canvas: HTMLCanvasElement;
  #context: CanvasRenderingContext2D;

  #line: IStraigtLine = {
    begin: { x: 500, y: 260 },
    end: { x: 750, y: 260 },
    width: 10,
    lineStyle: getLineStyle("dash"),
    color: { r: 255, g: 0, b: 0, a: 100 },
  };

  constructor() {
    console.log("Constructor called");
    this.#canvas = createCanvas(1000, 1000);
    this.#context = this.#canvas.getContext("2d");

    drawSpraySquare(
      { x: 200, y: 200 },
      25,
      { r: 0, g: 0, b: 0, a: 100 },
      10,
      this.#context
    );
  }

  #animate() {
    let count = 1;
    const ctx = this.#context;
    const line = this.#line;

    function draw(timestamp: number) {
      if (count % 2 === 0) {
        drawLine(
          rotateLine(
            line,
            -Math.PI / count,
            lineMidpoint(line.begin, line.end)
          ),
          ctx
        );
      }
      requestAnimationFrame(draw);
      count++;
    }

    requestAnimationFrame(draw);
  }
}
