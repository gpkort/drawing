import { glMatrix } from "gl-matrix";
glMatrix.setMatrixArrayType(Array);

export { createCanvas, testSegments } from "./genericUtils";
export { drawSolidLine } from "./geometryUtils";
export * from "gl-matrix";
