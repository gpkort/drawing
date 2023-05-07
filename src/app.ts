import { vec2, vec4 } from "gl-matrix";
import { 
  createCanvas, 
  rotate, 
  midpoint, 
  drawLine, 
  getLineStyle 
} from "./Utilities";
import { IStraigtLine } from "./geometry";
import Color from "./geometry/Color";

export default class Drawing {
  #canvas: HTMLCanvasElement;
  #context: CanvasRenderingContext2D;

  #line: IStraigtLine = {
    begin: vec2.fromValues(500, 260),
    end: vec2.fromValues(750, 260),
    width: 5,
    lineStyle: getLineStyle('dash'),
    color: Color.create()
  };

  constructor() {
    console.log("Constructor called");
    this.#canvas = createCanvas(1000, 1000);
    this.#context = this.#canvas.getContext("2d");

    drawLine(this.#line, this.#context);
    
    this.#animate();
  }

  #animate() {
    let count = 1;
    const ctx = this.#context;
    const line = this.#line;

    function draw(timestamp: number) {
      if(count % 2 === 0) {
        drawLine(rotate(
          line, 
          -Math.PI / count, 
          midpoint(line.begin, line.end)), 
          ctx);
      }
      requestAnimationFrame(draw);
      count++;
    }

    requestAnimationFrame(draw);
  }
}
