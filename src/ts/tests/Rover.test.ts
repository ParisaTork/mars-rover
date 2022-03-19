import {Rover} from '../classes/Rover';
import {Plateau} from '../classes/Plateau'

beforeEach(() => {
  Rover.roversFinalPositions = Array(100).fill(0).map(()=>Array(2).fill(0));
  Rover.roverCount = 0;
});

  describe('Test for Rover Class', () => {
    it('should be able to create a rover instance', () => {
      const newInstanceOfRover = new Rover(3,3,'W');
      expect(newInstanceOfRover.startXCoord).toEqual(3);
      expect(newInstanceOfRover.startYCoord).toEqual(3);
      expect(newInstanceOfRover.startOrient).toEqual('W');
    });
  });

  describe('Test for Rover Orientation', () => {
    it('should be able to spin the rover left', () => {
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

    it('should be able to spin the rover right', () => {
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
    it('should be able to move the rover forward by one', () => {
      const newInstanceOfRover = new Rover(3,3,'N');
      newInstanceOfRover.moveForwardByOne();
      expect(newInstanceOfRover.currentXCoord).toEqual(3);
      expect(newInstanceOfRover.currentYCoord).toEqual(4);
      expect(newInstanceOfRover.currentOrient).toEqual('N');
    });
  });

  describe('Test for Rover Coordinate Getter', () => {
    it('should be return the current coordinates of the rover', () => {
      const newInstanceOfRover = new Rover(3,3,'N');
      expect(newInstanceOfRover.getCurrentCoords()).toEqual('3 3');
    });
    it('after moving forward, it should be return the current coordinates of the rover', () => {
      const newInstanceOfRover = new Rover(4,4,'N');
      newInstanceOfRover.moveForwardByOne()
      expect(newInstanceOfRover.getCurrentCoords()).toEqual('4 5');
    });
  });

  describe('Test for Rover Coordinate Setter', () => {
    it('should be able to set the coordinates of the rover', () => {
      const newInstanceOfRover = new Rover(3,3,'N');
      expect(newInstanceOfRover.setCurrentCoords(4, 4)).toEqual(`4 4`);
    });
  });

  describe('Test for Rover Orientation Getter', () => {
    it('should be return the current orientation of the rover', () => {
      const newInstanceOfRover = new Rover(3,3,'N');
      expect(newInstanceOfRover.getCurrentOrientation()).toEqual('N');
    });
  });

  describe('Test for Rover Orientation Setter', () => {
    it('should be set the orientation of the rover', () => {
      const newInstanceOfRover = new Rover(3,3,'N');
      expect(newInstanceOfRover.setCurrentOrientation('S')).toEqual(`S`);
    });
  });

  describe('Test for Rover runInstructions method', () => {
    it('should move or spin the rover when given valid instructions', () => {
      const newInstanceOfRover = new Rover(1,2,'N');
      const movedInstance = newInstanceOfRover.runInstructions('LMLMLMLMM');
      expect(movedInstance).toEqual('1 3 N');
    });
  });

  describe('Test test case in brief', () => {
    it(`should give the same output as in the brief`, () => {
      const maxX = 5;
      const maxY = 5;
      const newInstanceOfPlateau = new Plateau(maxX, maxY);
      const newInstanceOfRover = new Rover(1,2,'N');
      const movedInstance = newInstanceOfRover.runInstructions('LMLMLMLMM');
      const newInstanceOfRover2 = new Rover(3,3,'E');
      const movedInstance2 = newInstanceOfRover2.runInstructions('MMRMMRMRRM');
      expect(movedInstance).toEqual('1 3 N');
      expect(movedInstance2).toEqual('5 1 E');
    });
  });

  describe('Testing when rover moves off plateau', () => {
    it(`should return 'Rover would go out of bounds'`, () => {
      Rover.plateauMaxXCoord = 5;
      Rover.plateauMaxYCoord = 5;
      const newInstanceOfPlateau = new Plateau(Rover.plateauMaxXCoord, Rover.plateauMaxYCoord);
      const newInstanceOfRover = new Rover(0,0,'S');
      const movedInstance2 = newInstanceOfRover.runInstructions('M');
      expect(movedInstance2).toEqual('Rover would go out of bounds');
    });
  });

  describe('Test Rover cannot be placed on top of another rover', () => {
    it(`should return 'Rover cannot be placed on top of another rover'`, () => {
      const maxX = 5;
      const maxY = 5;
      const newInstanceOfPlateau = new Plateau(maxX, maxY);
      const newInstanceOfRover = new Rover(1,2,'N');
      const movedInstance = newInstanceOfRover.runInstructions('L');
      const newInstanceOfRover2 = new Rover(1,2,'S');
      const movedInstance2 = newInstanceOfRover2.runInstructions('L');
      expect(movedInstance2).toEqual('Rover cannot be placed on top of another rover');
    });
  });

  describe('Test Rover would crash into another rover', () => {
    it(`should return 'Rover would crash into another rover'`, () => {
      const maxX = 5;
      const maxY = 5;
      const newInstanceOfPlateau = new Plateau(maxX, maxY);
      const newInstanceOfRover = new Rover(1,2,'N');
      const movedInstance = newInstanceOfRover.runInstructions('L');
      const newInstanceOfRover2 = new Rover(1,3,'S');
      expect(newInstanceOfRover2.runInstructions('M')).toEqual('Rover would crash into another rover');
    });
  });




