import { vec2, vec4 } from "gl-matrix";
import { createCanvas } from "./Utilities";
import { Line } from "./geometry";
import segmentInfo from "./segment.json";

export default class Drawing {
  #canvas: HTMLCanvasElement;
  #context: CanvasRenderingContext2D;
  #segments: Array<Line>;
  #imageWidth = 1000;
  #imageHeight = 1000;

  constructor() {
    console.log("Constructor called");
    this.#getSegments();
    console.log(`Length of segments: ${this.#segments.length}`);
    this.#canvas = createCanvas(this.#imageHeight, this.#imageWidth);
    this.#context = this.#canvas.getContext("2d");

    this.#segments.forEach((line) => {
      this.#drawline(line);
    });
    // this.#drawline(vec2.fromValues(0, 0), vec2.fromValues(150, 150));
  }

  // async #getSegments() {
  //   console.log("Get Segments")
  //   const response = await window.fetch('http://localhost:5000/data', {
  //     method: 'GET'
  //   })
  //   console.log("Get Segments response")

  //   const {name, errors} = await response.json()
  //   if (response.ok) {
  //     console.log(name)

  //   }
  //   else {
  //     console.log(errors)
  //   }
  //   console.log("Get Segments data")
  //   console.log(name)
  // }

  #getSegments() {
    this.#imageHeight = segmentInfo.image_height;
    this.#imageWidth = segmentInfo.image_width;

    this.#segments = segmentInfo.vectors.map((segment): Line => {
      {
        let line: Line = {
          begin: vec2.fromValues(segment.start.x, segment.start.y),
          end: vec2.fromValues(segment.end.x, segment.end.y),
        };

        return line;
      }
    });
    //{"start": {"x": 1195, "y": 883}, "end": {"x": 1032, "y": 815}}
    console.log(`Number of segments: ${segmentInfo.vectors[0].start.x}`);
  }

  #drawline(line: Line) {
    this.#context.beginPath();
    this.#context.moveTo(line.begin[0], line.begin[1]);
    this.#context.lineTo(line.end[0], line.end[1]);
    this.#context.closePath();
    this.#context.stroke();

    this.#context.lineWidth = 5;
  }
}
