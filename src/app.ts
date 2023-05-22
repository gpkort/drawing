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
import { IEquilateral } from "./geometry/Polygon";
import { drawEquilateral } from "./Utilities";


export default class Drawing {
  #canvas: HTMLCanvasElement;
  #context: CanvasRenderingContext2D;

  #line: IStraigtLine = {
    begin:{x:500, y:260},
    end: {x:750, y:260},
    width: 10,
    lineStyle: getLineStyle("dash"),
    color: { r: 255, g: 0, b: 0, a: 100 },
  };

  #circle: ICircle = {
    outline: {
      color: { r: 0, g: 0, b: 100, a: 100 },
      width: 8,
      lineStyle: [],
    },
    fillColor: { r: 200, g: 0, b: 255, a: 100 },
    center: { x: 500, y:500 },
    radius: 300,
  };

  #penatagon: IEquilateral = {
    outline: {
      color: {r:0, g:0, b:0, a: 100},
      width: 2,
      lineStyle: []
    },
    fillColor: {r:255, g:255, b:0, a:100},
    center: { x: 500, y:500 },
    sideLength: 50,
    numberOfSides: 8
  }
  

  constructor() {
    console.log("Constructor called");
    this.#canvas = createCanvas(1000, 1000);
    this.#context = this.#canvas.getContext("2d");
    // this.#context.globalCompositeOperation

    console.log(`offx: ${this.#canvas.offsetWidth}`)
    console.log(`offy: ${this.#canvas.offsetHeight}`)

    //drawLine(this.#line, this.#context);
    //drawCircle(this.#circle, this.#context);
    //drawEquilateral(this.#penatagon, this.#context);

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
