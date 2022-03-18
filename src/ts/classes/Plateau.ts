import { PlateauInterface } from '../interfaces/Plateau.interface';
export class Plateau implements PlateauInterface {
    maxXCoord : number;
    maxYCoord: number;
    constructor(maxXCoord: number, maxYCoord : number) {
        this.maxXCoord = maxXCoord
        this.maxYCoord = maxYCoord
    }

    getPlateauCoords() : string {
        return `${this.maxXCoord} ${this.maxYCoord}`;
    }

    setPlateauCoords(newXCoord: number, newYCoord : number) : string {
        if (newXCoord < 1 || newYCoord < 1 || !(Number.isInteger(newXCoord)) || !(Number.isInteger(newYCoord)) || newXCoord > 100 || newYCoord > 100) {
            throw `Please ensure your plateau coordinates are positive integers`;
        } else {
            this.maxXCoord = newXCoord;
            this.maxYCoord = newYCoord;
            return `${this.maxXCoord} ${this.maxYCoord}`;
        }
    }
}