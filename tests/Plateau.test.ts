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

describe('Test for Plateau Setter', () => {
    it('should set values for coordinates', () => {
      const newInstanceOfPlateau = new Plateau(5,5);
      expect(newInstanceOfPlateau.setPlateauCoords(6,6)).toEqual(`6 6`);
    });
    it('should throw an error if given negative coordinates', () => {
      const newInstanceOfPlateau = new Plateau(-5,-5);
      expect(() => {newInstanceOfPlateau.setPlateauCoords(-5,-5);}).toThrow('Please ensure your plateau coordinates are positive integers');
    });
    it('should throw an error if given coordinates that are too large', () => {
      const newInstanceOfPlateau = new Plateau(191,191);
      expect(() => {newInstanceOfPlateau.setPlateauCoords(191,191);}).toThrow('Please ensure your plateau coordinates are positive integers');
    });
  });

