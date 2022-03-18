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

}