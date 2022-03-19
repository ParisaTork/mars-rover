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

    static plateauMaxXCoord: number;
    static plateauMaxYCoord: number;
    static roversFinalPositions: number[][] = Array(100).fill(0).map(()=>Array(2).fill(0));
    static roverCount: number = 0;

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

    moveForwardByOne() {
        switch (this.currentOrient) {
            case 'N':
                return this.currentYCoord++;
                break
            case 'E':
                return this.currentXCoord++;
                break
            case 'W':
                return this.currentXCoord--;
                break
            case 'S':
                return this.currentYCoord--;
                break
        }
    }

    getCurrentCoords() : string {
        return `${this.currentXCoord} ${this.currentYCoord}`;
    }

    setCurrentCoords(newXCoord: number, newYCoord : number, newZCoord? : number) : string {
		if (newZCoord !== undefined || newXCoord < 0 || newYCoord < 0) {
			throw 'Please enter a positive integer';
		} else {
                this.currentXCoord = newXCoord;
                this.currentYCoord = newYCoord;
                return `${this.currentXCoord} ${this.currentYCoord}`;
            }
		}

    getCurrentOrientation() : string {
        return `${this.currentOrient}`;
    } 

    setCurrentOrientation(newOrient : OrientationType) : string {
        if (newOrient === undefined) {
            return `Please enter a new vehicle orientation e.g. N, E, W, S`;
        } else {
            this.currentOrient = newOrient;
            return `${this.currentOrient}`;
        }
    }

    runInstructions(str : string) : string {
        const instructions = str.split(''); 
        if (this.isCrash(this.currentXCoord, this.currentYCoord)) {
            return `Rover cannot be placed on top of another rover`;
        }      
        for (let i = 0; i < instructions.length; i++) {
            switch (instructions[i]) {
                case 'L':
                    this.spinLeft();
                    break
                case 'R':
                    this.spinRight();
                    break
                case 'M':
                    this.moveForwardByOne();   
            }
            if (this.isOutBound())  {
                return `Rover would go out of bounds`;
            } else if (this.isCrash(this.currentXCoord, this.currentYCoord)) {
                return `Rover would crash into another rover`;
            }     
        }
        
        Rover.roversFinalPositions[Rover.roverCount][0] = this.currentXCoord;
        Rover.roversFinalPositions[Rover.roverCount][1] = this.currentYCoord;
        Rover.roverCount++;
        return `${this.currentXCoord} ${this.currentYCoord} ${this.currentOrient}`;
    }

    isOutBound(): boolean {
        if (this.currentXCoord > Rover.plateauMaxXCoord) {
            return true;
        } 
        else if (this.currentYCoord > Rover.plateauMaxYCoord) {
            return true;
        }
        else if (this.currentXCoord < 0) {
            return true;
        } 
        else if (this.currentYCoord < 0) {
            return true;
        }
        return false;
    }

    isCrash(newXCoord: number, newYCoord: number): boolean {
        for (let i = 0; i < Rover.roverCount ; i++ ) {
            if (Rover.roversFinalPositions[i][0] === newXCoord && 
                Rover.roversFinalPositions[i][1] === newYCoord) {
               return true;
            }
        }
        return false;
    }

}