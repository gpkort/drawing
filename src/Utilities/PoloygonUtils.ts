import { vec2 } from ".";
import { IGeometry, IShape } from "../geometry";
import { IEquallateral } from "../geometry/Polygon";

export const getVertices = (shape: IEquallateral) => {
  const sides = shape.numberOfSides;
  const verticies = Array<vec2>(sides);
  const theta = (2 * Math.PI) / sides / 2;
  const rad = getRadiux(shape.sideLength / 2, theta);

  for (let i = 0; i < sides; i++) {
    // point = i === 0 ? getNextVertex(point, Math.PI /2, );
    // verticies.push(point);
  }
};

const getVertix = (center: vec2, theta: number, length: number) => {
  const height = 0;
};

const getRadiux = (length: number, theta: number) => {
  return (length / Math.sin(theta)) * Math.sign(theta);
};
