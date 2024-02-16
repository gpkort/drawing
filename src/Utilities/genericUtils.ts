/**
 * Sizes the canvas to use the max avaiable room without scrolling
 * with the same ratio as the image Assume with is bigger for now
 *
 * @param height height of the image that the segments were taken from
 * @param width with of the image that the segments were taken from
 * @returns
 */
export const createCanvas = (height: number, width: number) => {
  let ratio = height / width;
  let cwidth = window.innerWidth;
  let cheight = window.innerWidth * ratio;

  const canvas = <HTMLCanvasElement>document.createElement("canvas");
  canvas.height = cheight;
  canvas.width = cwidth;
  document.body.appendChild(canvas);

  return canvas;
};
