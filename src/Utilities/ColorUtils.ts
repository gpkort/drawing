import { IColor } from "../geometry";

export const getRGBAString = (color: IColor) => {
  return `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
};

export const getRGBString = (color: IColor) => {
  return `rgb(${color.r}, ${color.g}, ${color.b})`;
};

export const isValidColor = (color: number): boolean => {
  return color >= 0 && color <= 255;
};
