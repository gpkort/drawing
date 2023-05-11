import { vec2 } from ".";
import { IGeometry, IShape } from "../geometry";
import { IEquallateral } from "../geometry/Polygon";

export const getVertices = (shape: IEquallateral) => {
  const sides = shape.numberOfSides;
  const verticies = new Array<vec2>();
  const alpha = (2 * Math.PI) / sides;
  const radiux = getRadiux(shape.sideLength, alpha);
  let theta = Math.PI / 2

  for (let i = 0; i < sides; i++) {
    verticies.push(getVertix(theta + (alpha * i), radiux, shape.center))
  }

  return verticies;
};

const getVertix = (theta: number, radiux: number, center: vec2) => {
  //console.log(`t: ${theta}, r: ${radiux}, cx: ${center[0]}, cy: ${center[1]}`)
  const x = center[0] + radiux * Math.cos(theta);
  const y = center[1] - radiux * Math.sin(theta);
  console.log(`x: ${x}, y: ${y}`)
  return vec2.fromValues(x, y)
};

const getRadiux = (length: number, theta: number) => {
  const beta = ((2 * Math.PI) - theta) / 2;
  return (length / Math.sin(theta)) * Math.sign(beta);
};
