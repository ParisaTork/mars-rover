import { Plateau } from '../classes/Plateau';

describe('Test for Plateau Class', () => {
    it('should be able to create a plateau instance', () => {
      const newInstanceOfPlateau = new Plateau(5,5);
      expect(newInstanceOfPlateau.maxXCoord).toEqual(5);
      expect(newInstanceOfPlateau.maxYCoord).toEqual(5);
    });
  });

describe('Test for Plateau Getter', () => {
    it('should return the values of the plateau coordinates', () => {
      const newInstanceOfPlateau = new Plateau(5,5);
      expect(newInstanceOfPlateau.getPlateauCoords()).toEqual('5 5');
    });
  });  

describe('Test for Plateau Setter', () => {
    it('should set values for plateau coordinates', () => {
      const newInstanceOfPlateau = new Plateau(5,5);
      expect(newInstanceOfPlateau.setPlateauCoords(6,6)).toEqual(`6 6`);
    });
    it('should throw an error if given negative coordinates', () => {
      const newInstanceOfPlateau = new Plateau(-5,-5);
      expect(() => {newInstanceOfPlateau.setPlateauCoords(-5,-5);}).toThrow('Please ensure your plateau coordinates are between 0 and 100');
    });
    it('should throw an error if given coordinates that are too large', () => {
      const newInstanceOfPlateau = new Plateau(191,191);
      expect(() => {newInstanceOfPlateau.setPlateauCoords(191,191);}).toThrow('Please ensure your plateau coordinates are between 0 and 100');
    });
  });

