import { vec3 } from "gl-matrix";
import { vec2 } from "../Utilities";

export interface Line {
  color?: number;
  width: number;
}

export interface SolidLine extends Line {
  begin: vec2;
  end: vec2;
}
