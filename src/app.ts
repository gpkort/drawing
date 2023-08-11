import { vec2, vec4 } from "gl-matrix";
import {
  createCanvas,
  rotateLine,
  lineMidpoint,
  drawLine,
  getLineStyle,
  getRGBAString,
} from "./Utilities/TwoD";
import { drawCircle, Circle, IStraigtLine } from "./geometry";
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

  constructor(canvasName: string) {
    console.log("Constructor called");
    this.#canvas = createCanvas(1000, 1000);
    //this.#canvas = document.getElementById(canvasName) as HTMLCanvasElement;
    this.#context = this.#canvas.getContext("2d");

    drawSpraySquare(
      { x: 200, y: 200 },
      25,
      { r: 0, g: 0, b: 0, a: 100 },
      10,
      this.#context
    );

    // document.addEventListener("mousemove", move, false);
    // document.addEventListener("mousedown", setDraggable, false);
    // document.addEventListener("mouseup", setDraggable, false);

    const c1 = new Circle(
      50,
      { color: { r: 0, g: 255, b: 0, a: 100 }, width: 5 },
      { r: 0, g: 255, b: 0, a: 0 },
      { x: 500, y: 500 },
      "c1"
    );
    // drawCircle(c1, )
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
