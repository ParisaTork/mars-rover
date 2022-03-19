import { OrientationType } from "../types/types"

export interface VehicleInterface {
    startXCoord: number
    startYCoord: number
    startZCoord?: number
    startOrient: OrientationType
    currentXCoord: number
    currentYCoord: number
    currentZCoord?: number
    currentOrient: OrientationType
    finalXCoord: number
    finalYCoord: number
    finalZCoord?: number
    finalOrient: OrientationType
    
    spinLeft() : OrientationType

    spinRight() : OrientationType

    moveForwardByOne() : number

    getCurrentCoords() : string

    setCurrentCoords(newXCoord: number, newYCoord : number, newZCoord? : number) : string

    getCurrentOrientation() : string

    setCurrentOrientation(newOrient : OrientationType) : string

    runInstructions(str : string) : string

    isCrash(newXCoord: number, newYCoord: number) : boolean

    isOutBound(newXCoord: number, newYCoord: number): boolean

}