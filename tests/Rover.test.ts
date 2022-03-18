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

  describe('Test for Rover Orientation', () => {
    it('should be able to spin left', () => {
      const newInstanceOfRover = new Rover(3,3,'N');
      newInstanceOfRover.spinLeft(); 
      expect(newInstanceOfRover.currentOrient).toEqual('W');
      const newInstanceOfRover2 = new Rover(3,3,'E');
      newInstanceOfRover2.spinLeft(); 
      expect(newInstanceOfRover2.currentOrient).toEqual('N');
      const newInstanceOfRover3 = new Rover(3,3,'W');
      newInstanceOfRover3.spinLeft(); 
      expect(newInstanceOfRover3.currentOrient).toEqual('S');
      const newInstanceOfRover4 = new Rover(3,3,'S');
      newInstanceOfRover4.spinLeft(); 
      expect(newInstanceOfRover4.currentOrient).toEqual('E');
    });
});