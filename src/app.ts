import { vec2, vec4 } from "gl-matrix";
import { createCanvas, drawLine, getImage, getPose } from "./Utilities";
import ConfigInfo from "./config.json";
import { PoseStatus } from "./geometry";

require("./config.json")

export default class Drawing {
  
  constructor() {
    console.log("Constructor called");
    
    getImage(ConfigInfo.image_url, 
            ConfigInfo.image_port, 
            ConfigInfo.image_uri).then((value) => {
              if(value.status === PoseStatus.Ok) {
                console.log(`Image data was found: ${value.status}`)
                let imdata = value;
                let canvas = createCanvas(imdata.height, 
                                          imdata.width);
                let ctx = canvas.getContext("2d");
                if(ctx != null) {
                  this.#animate(ctx, 
                                imdata.height, 
                                imdata.width,
                                canvas.height,
                                canvas.width);
                }                
              }  
              else {
                console.log("No error could be found!")
              }
            }).catch((error) => {
              console.log(`Image data can't be found: ${error}`)
            });                       
  }

  #animate(ctx: CanvasRenderingContext2D, 
           imageHeight: number, 
           imageWidth: number,
           canvasHeight: number,
           canvasWidth: number) 
  {
    let count = 1;
    
    const url = ConfigInfo.pose_url;
    const port = ConfigInfo.pose_port;
    const uri = ConfigInfo.pose_uri;

    function draw(timestamp: number) {
      if (count % 5 === 0) {
        console.log("Drawing")
          getPose(url, port, uri).then((value) => 
          {
            if(value.status === PoseStatus.Ok ) {
              console.log(`Pose: ${value.segments.length}`)
              value.segments.forEach((segment) => {
                drawLine(segment, 
                        imageHeight, 
                        imageWidth,
                        canvasHeight,
                        canvasWidth,
                        ctx);
              });
            }
          }).catch((error) => {
            console.log(`Pose data can't be found: ${error}`)
        });
      }
      requestAnimationFrame(draw);      
      count++;
    }

    requestAnimationFrame(draw);
  }

   

}
