export type LineStyle = 'dash' | 'stipple' | 'solid'

export const getLineStyle = (name: LineStyle) : number[] => {
    switch(name) {        
        case 'dash':
            return [3, 5];
        case 'stipple':        
            return [1, 2];
        case 'solid':
        default:
            return [];
    }
}
