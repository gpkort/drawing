import { vec2, vec4 } from "gl-matrix";
import { createCanvas, rotate } from "./Utilities";
import { SolidLine } from "./geometry";
import { drawSolidLine } from "./Utilities";

export default class Drawing {
  #canvas: HTMLCanvasElement;
  #context: CanvasRenderingContext2D;

  #line: SolidLine = {
    begin: vec2.fromValues(500, 260),
    end: vec2.fromValues(750, 260),
    width: 5,
  };

  constructor() {
    console.log("Constructor called");
    this.#canvas = createCanvas(1000, 1000);
    this.#context = this.#canvas.getContext("2d");

    drawSolidLine(this.#line, this.#context);

    this.#animate();
  }

  #animate() {
    let count = 1;
    const ctx = this.#context;
    const line = this.#line;

    function draw(timestamp: number) {
      drawSolidLine(rotate(line, -Math.PI / count, line.begin), ctx);
      requestAnimationFrame(draw);
      count++;
    }

    requestAnimationFrame(draw);
  }
}
