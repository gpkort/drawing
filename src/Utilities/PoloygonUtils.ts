import { vec2 } from ".";
import { IEquallateral } from "../geometry/Polygon";

export const getVerticies = (shape: IEquallateral) => {
  //const cp:vec2 = vec2.fromValues(shape.center[0], shape.center[1] - shape.)
  const thetaA = (2 * Math.PI) / shape.numberOfSides;
  const thetaB = (Math.PI - thetaA) / 2;
  const ratio = shape.sideLength / Math.sin(thetaA);
  const radiux = ratio * Math.sign(thetaB);

  //oppisite side / theta ==
};

export const originTpointXform = (point: vec2, origin?: vec2): vec2 => {
  origin = origin ?? vec2.create();
  const retval = vec2.create();
  vec2.multiply(retval, point, origin);

  return retval;
};
