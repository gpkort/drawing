import typia from "typia"

export const IPointCheck = typia.createIs<IPoint>();
export const ISegmentCheck = typia.createIs<ISegment>();
export const IPoseCheck = typia.createIs<IPose>();
export const IImageDataCheck = typia.createIs<IImageData>();

export enum PoseStatus {
    Ok=0,
    NoCamera,
    NotSent
}

export interface IPoint {
    x: number,
    y: number,
}

export interface ISegment {
    start: IPoint,
    end: IPoint,
}

export interface IPose {
    status: PoseStatus
    segments: Array<ISegment>
}

export interface IImageData {
    status: PoseStatus,
    height: number,
    width: number,
    
    
}

