# List of requirements

Lines of Input to the Program:

* `5 5` 
* `1 2 N`
* `LMLMLMLMM`
* `3 3 E`
* `MMRMMRMRRM`

Expected Output:

* `1 3 N`
* `5 1 E`

## **Ensure that:**

* [] You have at least a square/rectangular plateau
* [] The rover can move along an x axis
* [] The rover can move along a y axis
* [] The rover can spin N, E, W, S (cardinal compass points) without moving from the current points
* [] The rover can move forward by one grid point with the same orientation
* [] The square directly North from (x, y) is (x, y+1).
* [] The very first line of input represents the upper-right coordinates of the plateau e.g. (5 5)
* [] The lower-left coordinates are (0, 0)
* [] The rover only receives 2 lines of input
* [] The first line of rover input represents the rover's position (x, y, orientation) e.g. (1 2 N)
* [] The second line of rover input represents the the instructions to move the Rover around the Plateau
* [] There is functionality for more than one rover
* [] The rovers move sequentially, this means that the first Rover needs to finish moving first before the next one can move.
* [] The output represents the rover's final position e.g. (1 3 N)


* [] You feed input in any of the following ways: feeding input values into unit tests; input via a console application; supplying input via a file etc.
* [] You use a TDD approach
* [] Your code is production-quality
* [] You have a code design
* [] Your code is clean
* [] Your code is well-tested
* [] You have good unit test coverage
* [] All unit tests pass
* [] You create a diagram and model your initial ideas
* [] You commit often
* [] You use descriptive commit messages
* [] Write a descriptive README to document the key features of your solution, your assumptions, approaches and future thoughts. 
* [] You think about how your program can be extended upon in the future to support a different shaped Plateau.
* [] You think about how your Plateau support other vehicles and not just Rovers?
* [] Refactor all tests to be parameterised

## **Guard against:**

* [] Invalid plateau coordinates i.e. 
   * []  empty
   * []  partially empty
   * []  non-number
   * []  negative
   * []  decimal
* [] Invalid rover start coordinates i.e. 
   * []  empty
   * []  partially empty
   * []  non-number
   * []  negative
   * []  decimal
* [] Invalid rover start orientation i.e. 
    * [] empty
    * [] non-string
    * [] non-cardinal compass point
* [] A rover colliding with another rover
* [] A rover surpassing the boundaries of the plateau
* [] Rovers moving non-sequentially
