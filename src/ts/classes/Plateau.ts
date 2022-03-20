import { PlateauInterface } from '../interfaces/Plateau.interface';
export class Plateau implements PlateauInterface {
    maxXCoord : number;
    maxYCoord: number;

    /**
     * Creates an instance of a plateau.
     * @param maxXCoord 
     * @param maxYCoord 
     */
    constructor(maxXCoord: number, maxYCoord : number) {
        this.maxXCoord = maxXCoord
        this.maxYCoord = maxYCoord
    }

    /**
     * Stores upper right hand coordinates of the plateau.
     */
         static plateauMaxXCoord: number;
         static plateauMaxYCoord: number;

    /**
     * Getter - gets plateau coordinates.
     * @returns plateau coordinates in string form. 
     */
    getPlateauCoords() : string {
        return `${this.maxXCoord} ${this.maxYCoord}`;
    }

    /**
     * Setter - sets plateau coordinates.
     * @param newXCoord 
     * @param newYCoord 
     * @returns new plateau coordinates in string form.
     */
    setPlateauCoords(newXCoord: number, newYCoord : number) : string {
        if (newXCoord < 0 || newYCoord < 0 || !(Number.isInteger(newXCoord)) || !(Number.isInteger(newYCoord)) || newXCoord > 100 || newYCoord > 100) {
            throw `Please ensure your plateau coordinates are between 0 and 100`;
        } else {
            this.maxXCoord = newXCoord;
            this.maxYCoord = newYCoord;
            return `${this.maxXCoord} ${this.maxYCoord}`;
        }
    }
}