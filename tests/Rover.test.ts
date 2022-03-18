import {Rover} from '../src/ts/classes/Rover';
import {Plateau} from '../src/ts/classes/Plateau'

  describe('Test for Rover Class', () => {
    it('should return values of coordinates', () => {
      const newInstanceOfRover = new Rover(3,3,'W');
      expect(newInstanceOfRover.startXCoord).toEqual(3);
      expect(newInstanceOfRover.startYCoord).toEqual(3);
      expect(newInstanceOfRover.startOrient).toEqual('W');
    });
  });