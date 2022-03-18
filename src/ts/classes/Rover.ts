import { OrientationType } from "../types/types"
import { VehicleInterface } from "../interfaces/Vehicle.interface"

export class Rover implements VehicleInterface {
    startXCoord: number
    startYCoord: number
    startOrient: OrientationType
    currentXCoord: number
    currentYCoord: number
    currentOrient: OrientationType
    finalXCoord: number
    finalYCoord: number
    finalOrient: OrientationType
    
    constructor(startXCoord: number, startYCoord : number, startOrient: OrientationType) {
        this.startXCoord = startXCoord
        this.startYCoord = startYCoord
        this.startOrient = startOrient
        this.currentXCoord = startXCoord
        this.currentYCoord = startYCoord
        this.currentOrient = startOrient
    }
}