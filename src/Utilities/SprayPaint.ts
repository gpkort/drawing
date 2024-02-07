import { IColor, IPoint2D } from "../geometry";
import { getRGBAString } from "./TwoD/index";

const getRandomGrid = (
  height: number,
  width: number,
  density: number
): Array<IPoint2D> => {
  const grid = new Array<IPoint2D>();
  const amount = Math.round(height * width * density);

  for (let n = 0; n < amount; n++) {
    let i = Math.round(Math.random() * width);
    let j = Math.round(Math.random() * height);
    i = i < width ? i : width - 1;
    j = j < height ? j : height - 1;
    grid.push({ x: i, y: j });
  }

  return grid;
};

const getNormalizedDensity = (density: number) => {
  density = density > 100 ? 100 : density;
  density = density < 0 ? 0 : density;

  return density / 100;
};

export class GridInformation {
  #grid: Array<IPoint2D>;
  #center: IPoint2D;
  #color: IColor;
  #framesToLive: number;
  #framesLived: number = 0;

  get gridArray() {
    return this.#grid;
  }

  get FramesToLive() {
    return this.#framesToLive;
  }

  get FramesLived() {
    return this.#framesLived;
  }

  get Center() {
    return this.#center;
  }

  get Color() {
    return this.#color;
  }

  constructor(
    grid: Array<IPoint2D>,
    center: IPoint2D,
    framesToLive: number = 120
  ) {
    this.#grid = grid;
    this.#center = center;
    this.#framesToLive = framesToLive;
  }

  colorString() {
    return getRGBAString(this.#color);
  }

  resetLife() {
    this.#framesLived = 0;
  }

  isAlive(): boolean {
    return this.#framesToLive > this.#framesLived;
  }

  addFrame() {
    this.#framesLived++;
  }
}

export const createGridArray = (
  center: IPoint2D,
  size: number,
  color: IColor,
  density: number
): Array<IPoint2D> => {
  return getRandomGrid(size, size, getNormalizedDensity(density));
};

export const drawSpraySquare = (
  grid: GridInformation,
  ctx: CanvasRenderingContext2D
) => {
  const offset = side;
  const topLeft: IPoint2D = {
    x: Math.round(center.x - offset),
    y: Math.round(center.y - offset),
  };
  const rgbString = getRGBAString(color);

  for (let p of grid) {
    ctx.fillStyle = rgbString;
    ctx.fillRect(topLeft.x + p.x, topLeft.y + p.y, 1, 1);
  }

  return grid;
};

export class SquareSprayLine {
  #gridInformationMap: Map<number, GridInformation> = new Map<
    number,
    GridInformation
  >();
  #frameCount: number;
  #keyID: number = 0;

  constructor(gridInfo: Array<GridInformation>, frameCount: number = 0) {
    for (let i: number = 0; i < gridInfo.length; i++) {
      this.#gridInformationMap.set(this.#keyID, gridInfo[i]);
      this.#keyID++;
    }

    this.#frameCount = frameCount;
  }

  addGridInfo(grid: GridInformation) {
    this.#gridInformationMap.set(this.#keyID, grid);
    this.#keyID++;
  }

  draw() {
    this.#removeDeadGrids();

    this.#frameCount++;
    this.#incrementGridFrames();
  }

  #removeDeadGrids() {
    const dead = new Array<number>();
    for (let entry of this.#gridInformationMap.entries()) {
      if (!entry[1].isAlive()) {
        dead.push(entry[0]);
      }
    }

    dead.forEach((value) => {
      this.#gridInformationMap.delete(value);
    });
  }

  #incrementGridFrames() {
    this.#gridInformationMap.forEach((value, key) => {
      value.addFrame();
    });
  }
}
