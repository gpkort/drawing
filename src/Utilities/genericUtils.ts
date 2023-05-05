export const createCanvas = () => {
  const canvas = <HTMLCanvasElement>document.createElement("canvas");
  canvas.height = 500;
  canvas.width = 500;
  document.body.appendChild(canvas);

  return canvas;
};
