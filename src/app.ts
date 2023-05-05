import { vec2, vec4 } from "gl-matrix";
import { createCanvas } from "./Utilities";
import { SolidLine } from "./geometry";
import { drawSolidLine } from "./Utilities";

export default class Drawing {
  #canvas: HTMLCanvasElement;
  #context: CanvasRenderingContext2D;

  constructor() {
    console.log("Constructor called");
    this.#canvas = createCanvas();
    this.#context = this.#canvas.getContext("2d");
  }

  #drawline(points: vec4) {}
}
