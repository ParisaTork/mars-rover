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

    it('should be able to spin right', () => {
        const newInstanceOfRover = new Rover(3,3,'N');
        newInstanceOfRover.spinRight(); 
        expect(newInstanceOfRover.currentOrient).toEqual('E');
        const newInstanceOfRover2 = new Rover(3,3,'E');
        newInstanceOfRover2.spinRight(); 
        expect(newInstanceOfRover2.currentOrient).toEqual('S');
        const newInstanceOfRover3 = new Rover(3,3,'W');
        newInstanceOfRover3.spinRight(); 
        expect(newInstanceOfRover3.currentOrient).toEqual('N');
        const newInstanceOfRover4 = new Rover(3,3,'S');
        newInstanceOfRover4.spinRight(); 
        expect(newInstanceOfRover4.currentOrient).toEqual('W');
      });
  });

  describe('Test for Rover Movement', () => {
    it('should be able to move forward by one', () => {
      const newInstanceOfRover = new Rover(3,3,'N');
      newInstanceOfRover.moveForwardByOne();
      expect(newInstanceOfRover.currentXCoord).toEqual(3);
      expect(newInstanceOfRover.currentYCoord).toEqual(4);
      expect(newInstanceOfRover.currentOrient).toEqual('N');
    });
  });

  describe('Test for Rover Coordinate Getter', () => {
    it('should be return the current coordinates of the Rover', () => {
      const newInstanceOfRover = new Rover(3,3,'N');
      expect(newInstanceOfRover.getCurrentCoords()).toEqual('3 3');
    });
    it('after moving forward, it should be return the current coordinates of the Rover', () => {
      const newInstanceOfRover = new Rover(4,4,'N');
      newInstanceOfRover.moveForwardByOne()
      expect(newInstanceOfRover.getCurrentCoords()).toEqual('4 5');
    });
  });

  describe('Test for Rover Coordinate Setter', () => {
    it('should be able to set the coordinates of the Rover', () => {
      const newInstanceOfRover = new Rover(3,3,'N');
      expect(newInstanceOfRover.setCurrentCoords(4, 4)).toEqual(`4 4`);
    });
  });

  describe('Test for Rover Orientation Getter', () => {
    it('should be return the current orientation of the Rover', () => {
      const newInstanceOfRover = new Rover(3,3,'N');
      expect(newInstanceOfRover.getCurrentOrientation()).toEqual('N');
    });
  });

  describe('Test for Rover Orientation Setter', () => {
    it('should be set the orientation of the Rover', () => {
      const newInstanceOfRover = new Rover(3,3,'N');
      expect(newInstanceOfRover.setCurrentOrientation('S')).toEqual(`S`);
    });
  });

  describe('Test for Rover runInstructions method', () => {
    it('should move or spin the Rover when given valid instructions', () => {
      const newInstanceOfRover = new Rover(1,2,'N');
      const movedInstance = newInstanceOfRover.runInstructions('LMLMLMLMM');
      expect(movedInstance).toEqual('1 3 N');
    });
  });


