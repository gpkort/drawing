import { IPolygon } from "../../geometry/Polygon";
import { drawFromVerticies } from "./EquilateralUtils";

export const drawPolygon = (polygon: IPolygon, ctx: CanvasRenderingContext2D) => {
    drawFromVerticies(polygon.points, polygon.line, polygon.fillColor, ctx)
}

export const importFromJson = (json: string) => {
    return JSON.parse(json) satisfies IPolygon
}