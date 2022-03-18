export interface PlateauInterface {
    maxXCoord: number
    maxYCoord : number
    maxZCoord? : number
    
    getPlateauCoords() : string

    // setPlateauCoords(newXCoord: number, newYCoord : number, newZCoord? : number) : string
}