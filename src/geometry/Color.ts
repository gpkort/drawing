import { IColor } from "./shapeInterfaces";

export default class Color implements IColor{
    a: number = 100;
    r: number = 0;
    g: number = 0;
    b: number = 100;

   
    get RGBAString() {
        return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`
    }

    get RGBString() {
        return `rgb(${this.r}, ${this.g}, ${this.b})`
    }

    private constructor(red: number, green: number, blue: number, alpha: number) {
        this.r = red;
        this.g = green;
        this.b = blue;
        this.a = alpha;
    }

    static create(red?: number, green?: number, blue?: number, alpha?: number) {
        return new Color(red === undefined ? 0 : red, 
                        green === undefined ? 0 : green, 
                        blue === undefined ? 0 : blue, 
                        alpha === undefined ? 100 : alpha)
    }

    static isValidColor(color:number) : boolean {
        return color >= 0 && color <= 255 ;
    }

}