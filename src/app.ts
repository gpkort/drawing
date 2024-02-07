import { vec2, vec4 } from "gl-matrix";
import {
  createCanvas,
  rotateLine,
  lineMidpoint,
  drawLine,
  getLineStyle,
  getRGBAString,
} from "./Utilities/TwoD";
import { IStraigtLine, IPoint2D } from "./geometry";
import { drawSpraySquare } from "./Utilities/SprayPaint";

export default class Drawing {
  #canvas: HTMLCanvasElement;

  #context: CanvasRenderingContext2D;

  #isMouseDown = false;

  readonly #TOP_Y = 900;
  readonly #BOTTOM_Y = 1000;
  #topX = 50;
  #bottomX = 50;

  #focused = {
    key: 0,
    state: false,
  };

  #mousePosition: IPoint2D = { x: 0, y: 0 };

  #line: IStraigtLine = {
    color: { r: 0, g: 0, b: 0, a: 0 },
    width: 10,
    begin: { x: 50, y: 500 },
    end: { x: 50, y: 600 },
    lineStyle: getLineStyle("solid"),
  };

  constructor() {
    console.log("Constructor called");
    this.#canvas = createCanvas(1000, 1000);
    //this.#canvas = document.getElementById(canvasName) as HTMLCanvasElement;
    this.#context = this.#canvas.getContext("2d");

    drawSpraySquare(
      { x: 200, y: 200 },
      50,
      { r: 0, g: 0, b: 0, a: 100 },
      10,
      this.#context
    );

    drawLine(this.#line, this.#context);

    // inputRange.addEventListener("input", () => {
    //   console.log(`bx = ${bbx}`);
    //   bbx = parseInt(inputRange.value);
    // });

    this.#animate();

    // document.addEventListener("mousemove", this.#move);
    // document.addEventListener("mousedown", this.#setDraggable, false);
    // document.addEventListener("mouseup", this.#setDraggable, false);
    // this.#animate();
  }

  // #move(event: MouseEvent) {
  //   if (!this.#isMouseDown) {
  //     return;
  //   }

  // this.#mousePosition = { x: event.x, y: event.y };

  //if any circle is focused
  // if (focused.state) {
  //   circles[focused.key].x = mousePosition.x;
  //   circles[focused.key].y = mousePosition.y;
  //   draw();
  //   return;
  // }
  //no circle currently focused check if circle is hovered
  // for (var i = 0; i < circles.length; i++) {
  //   if (intersects(circles[i])) {
  //     circles.move(i, 0);
  //     focused.state = true;
  //     break;
  //   }
  // }
  // draw();
  // }

  #setDraggable(event: MouseEvent) {
    if (event.type === "mousedown") {
      this.#isMouseDown = true;
    } else if (event.type === "mouseup") {
      this.#isMouseDown = false;
      this.#releaseFocus;
    }
  }

  #releaseFocus() {
    this.#focused.state = false;
  }

  #animate() {
    let fn = 0;
    const ctx = this.#context;
    const can = this.#canvas;
    const bx = this.#bottomX;
    const bI = document.getElementById("bottom_range") as HTMLInputElement;
    const tI = document.getElementById("top_range") as HTMLInputElement;

    const LL = this.#line;

    function draw(timestamp: number) {
      ctx.clearRect(0, 0, can.width, can.height);
      if (fn % 50 == 0) {
        console.log(`animation, bx:${can.width}`);
      }

      const newX = parseInt(tI.value);
      LL.begin = { x: newX, y: 500 };
      LL.end = { x: parseInt(bI.value), y: 600 };

      drawLine(LL, ctx);

      drawSpraySquare(
        { x: 200 + newX, y: 200 },
        50,
        { r: 0, g: 0, b: 0, a: 100 },
        10,
        ctx
      );

      fn += 1;

      requestAnimationFrame(draw);
    }

    requestAnimationFrame(draw);
  }
}
