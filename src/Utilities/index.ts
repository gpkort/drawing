import { glMatrix } from "gl-matrix";
glMatrix.setMatrixArrayType(Array);

export { createCanvas } from "./genericUtils";
export { drawSolidLine, rotate } from "./geometryUtils";
export * from "gl-matrix";
