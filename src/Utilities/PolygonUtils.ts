import { vec2 } from ".";
import { IColor, IGeometry, ILine, IPoint2D, IShape } from "../geometry";
import { IEquilateral } from "../geometry/Polygon";
import { getRGBAString } from "./.";

export const drawEquilateral = (shape: IEquilateral, ctx: CanvasRenderingContext2D) => {
  const verticies = getVertices(shape)

  drawFromVerticies(verticies, shape.outline, shape.fillColor, ctx)

}

export const getVertices = (shape: IEquilateral) => {
  const sides = shape.numberOfSides;
  const verticies = new Array<IPoint2D>();
  const alpha = (2 * Math.PI) / sides;
  const radiux = getRadiux(shape.sideLength, alpha);
  let theta = Math.PI / 2

  for (let i = 0; i < sides; i++) {
    verticies.push(getVertix(theta + (alpha * i), radiux, shape.center))
  }

  return verticies;
};

export const drawFromVerticies = (points: Array<IPoint2D>, 
                                  line: ILine, 
                                  fillColor: IColor, 
                                  ctx: CanvasRenderingContext2D) => {
  ctx.save();

  ctx.moveTo(points[0].x, points[0].y);
  points.forEach(point => {
    ctx.lineTo(point.y, point.y);
  });

  ctx.lineTo(points[0].x, points[0].y)

  ctx.fillStyle = getRGBAString(fillColor);
  ctx.fill();
  ctx.lineWidth = line.width;
  ctx.strokeStyle = getRGBAString(line.color);
  ctx.stroke();

  ctx.restore()
}

const getVertix = (theta: number, radiux: number, center: IPoint2D): IPoint2D => {
  //console.log(`t: ${theta}, r: ${radiux}, cx: ${center[0]}, cy: ${center[1]}`)
  const x = center.x + radiux * Math.cos(theta);
  const y = center.y - radiux * Math.sin(theta);
  
  return {x, y}
};

const getRadiux = (length: number, theta: number) => {
  const beta = ((2 * Math.PI) - theta) / 2;
  return (length / Math.sin(theta)) * Math.sign(beta);
};


