import { glMatrix } from "gl-matrix";
glMatrix.setMatrixArrayType(Array);

export { createCanvas } from "./genericUtils";
export { drawLine } from "./geometryUtils";
export { getImage, getPose } from "./socketUtils";
export * from "gl-matrix";
