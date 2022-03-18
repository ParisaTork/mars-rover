import { Plateau } from '../src/ts/classes/Plateau';

describe('Test for Plateau Class', () => {
    it('should return values of coordinates', () => {
      const newInstanceOfPlateau = new Plateau(5,5);
      expect(newInstanceOfPlateau.maxXCoord).toEqual(5);
      expect(newInstanceOfPlateau.maxYCoord).toEqual(5);
    });
  });

describe('Test for Plateau Getter', () => {
    it('should return values of coordinates', () => {
      const newInstanceOfPlateau = new Plateau(5,5);
      expect(newInstanceOfPlateau.getPlateauCoords()).toEqual('5 5');
    });
  });  

