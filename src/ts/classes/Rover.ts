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

    spinLeft() : OrientationType {
		switch (this.currentOrient) {
			case 'N':
				return this.currentOrient = 'W'
				break
            case 'E':
				return this.currentOrient = 'N'
				break
			case 'W':
				return this.currentOrient = 'S'
				break
			case 'S':
				return this.currentOrient = 'E'
				break
		}
	}

    spinRight() : OrientationType {
		switch (this.currentOrient) {
			case 'N':
				return this.currentOrient = 'E'
				break
            case 'E':
				return this.currentOrient = 'S'
				break
			case 'W':
				return this.currentOrient = 'N'
				break
			case 'S':
				return this.currentOrient = 'W'
				break
		}
	}


}