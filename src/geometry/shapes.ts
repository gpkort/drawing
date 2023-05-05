import { vec2 } from "../Utilities";

export interface Line {
  begin: vec2;
  end: vec2;
}

export interface SolidLine extends Line {
  color: number;
  width: number;
}
