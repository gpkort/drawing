import { vec2, vec4 } from "gl-matrix";
import {
  createCanvas,
  rotateLine,
  lineMidpoint,
  drawLine,
  getLineStyle,
} from "./Utilities";
import { ICircle, IStraigtLine } from "./geometry";
import { drawCircle } from "./Utilities/EllipseUtils";

export default class Drawing {
  #canvas: HTMLCanvasElement;
  #context: CanvasRenderingContext2D;

  #line: IStraigtLine = {
    begin: vec2.fromValues(500, 260),
    end: vec2.fromValues(750, 260),
    width: 10,
    lineStyle: getLineStyle("dash"),
    color: { r: 255, g: 0, b: 0, a: 100 },
  };

  #circle: ICircle = {
    outline: {
      color: {r:255, g:0, b:0, a:100},
      width: 2,
      lineStyle: []
    },
    fillColor: {r:0, g:0, b:0, a:100},
    center: vec2.fromValues(500, 500),
    radius: 100
}
  
  constructor() {
    console.log("Constructor called");
    this.#canvas = createCanvas(1000, 1000);
    this.#context = this.#canvas.getContext("2d");

    //drawLine(this.#line, this.#context);
    drawCircle(this.#circle, this.#context);

    //this.#animate();
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
