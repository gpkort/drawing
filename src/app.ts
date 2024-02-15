import { vec2, vec4 } from "gl-matrix";
import { createCanvas, testSegments } from "./Utilities";
import { Line } from "./geometry";

export default class Drawing {
  #canvas: HTMLCanvasElement;
  #context: CanvasRenderingContext2D;
  #segments: Array<Line>;
  #imageWidth = 1000
  #imageHeight = 1000

  

  constructor() {
    console.log("Constructor called");
    this.#getSegments()
    this.#canvas = createCanvas(this.#imageHeight, this.#imageWidth);
    this.#context = this.#canvas.getContext("2d");
    this.#drawline(vec2.fromValues(0, 0), vec2.fromValues(150, 150))
      
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
    this.#imageHeight = testSegments.image_height
    this.#imageWidth = testSegments.image_width

    // this.#segments = testSegments.vectors.map((segment) => {
    //   {
    //     start: 
    //   }
    // })
    //{"start": {"x": 1195, "y": 883}, "end": {"x": 1032, "y": 815}}
    console.log(`Number of segments: ${testSegments.vectors[0].start.x}`)

  }

  #drawline(start: vec2, end:vec2) {
    
    this.#context.beginPath();
    this.#context.moveTo(start[0], start[1]);
    this.#context.lineTo(end[0], end[1]);
    this.#context.closePath();
    this.#context.stroke();

    this.#context.lineWidth = 5;
  }
}
