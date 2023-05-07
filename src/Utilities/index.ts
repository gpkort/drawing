import { glMatrix } from "gl-matrix";
glMatrix.setMatrixArrayType(Array);

export { createCanvas } from "./genericUtils";
export { drawLine, rotate, len, midpoint } from "./geometryUtils";
export { getLineStyle, LineStyle} from "./lookupUtils"
export * from "gl-matrix";
