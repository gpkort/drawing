export const createCanvas = (height: number, width: number) => {
  const canvas = <HTMLCanvasElement>document.createElement("canvas");
  canvas.height = height;
  canvas.width = width;
  document.body.appendChild(canvas);

  return canvas;
};
