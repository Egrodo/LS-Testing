const assert = require('chai').assert;
const expect = require('chai').expect;
const funcs = require('../src/project-1');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test to see if the expected return output is of a specified type, as well as the correct outcome.

describe('Project-1 Functions', () => {

  describe('`multiplyByTen`', () => {
    const multiplyByTen = funcs.multiplyByTen;
    it('should be a function', () => {
      assert.isFunction(multiplyByTen);
      expect(multiplyByTen).to.be.a('function');
    });
    // begin here
    const result = multiplyByTen(10);

    it('should work', () => {
      assert.equal(result, 100);
    });

    it('Its return should be of correct type', () => {
      assert.typeOf(result, 'number');
    });
  });

  describe('`subtractFive`', () => {
    const subtractFive = funcs.subtractFive;
    it('should be a function', () => {
      assert.typeOf(subtractFive, 'function');
    });

    const result = subtractFive(10);

    it('should work, and have correct type', () => {
      assert.equal(result, 5);
      assert.typeOf(result, 'number');
    });
  });

  describe('`areSameLength`', () => {
    const areSameLength = funcs.areSameLength;
    it('should be a function', () => {
      assert.typeOf(areSameLength, 'function');
    });

    it('Should work and return proper type', () => {
      const result = areSameLength('checking', 'checking1');
      assert.isNotOk(result);
      assert.equal(result, false);
    });
  });

  describe('`areEqual`', () => {
    const areEqual = funcs.areEqual;
    it('should be a function', () => {
      assert.typeOf(areEqual, 'function');
    });

    it('Should correctly check if two inputs are the same', () => {
      const result = areEqual('string', 'string2');
      assert.isNotOk(result);
    });
  });

  describe('`lessThanNinety`', () => {
    const lessThanNinety = funcs.lessThanNinety;
    it('should be a function', () => {
      assert.typeOf(lessThanNinety, 'function');
    });

    it('should return true if a num is less than 90', () => {
      const result = lessThanNinety(89);
      assert.isOk(result);
    });
  });

  describe('`greaterThanFifty`', () => {
    const greaterThanFifty = funcs.greaterThanFifty;
    it('should be a function', () => {
      assert.typeOf(greaterThanFifty, 'function');
    });

    it('should return true if a num is greater than 50', () => {
      const result = greaterThanFifty(51);
      assert.isOk(result);
    });
  });

  describe('`add`', () => {
    const add = funcs.add;
    it('should be a function', () => {
      assert.typeOf(add, 'function');
    });

    it("Ensure that it's properly adding the two inputs regardless of input type.", () => {
      const firstNum = 1; const secondNum = 2;
      const firstStr = 'one'; const secondStr = 'two';
      const resultNum = add(firstNum, secondNum);
      const resultStr = add(firstStr, secondStr);
      const properResultNum = firstNum + secondNum;
      const properResultStr = firstStr + secondStr;
      assert.equal(resultNum, properResultNum);
      assert.equal(resultStr, properResultStr)
    });
  });

  describe('`subtract`', () => {
    const subtract = funcs.subtract;

    it('should be a function', () => {
      assert.typeOf(subtract, 'function');
    });

    it("Ensure that it's properly subtracting the two inputs.", () => {
      const first = 1; const second = 2;
      const result = subtract(first, second);
      assert.equal(result, (first - second));
    });
  });

  describe('`divide`', () => {
    const divide = funcs.divide;
    it('should be a function', () => {
      assert.typeOf(divide, 'function');
    });

    it("Ensure that it's properly dividing the two inputs.", () => {
      const first = 4; const second = 2;
      const result = divide(first, second);
      assert.equal(result, (first / second));
    });
  });

  describe('`multiply`', () => {
    const multiply = funcs.multiply;
    it('should be a function', () => {
      assert.typeOf(multiply, 'function');
    });

    it("Ensure that it's properly multiplying the two inputs.", () => {
      const first = 4; const second = 2;
      const result = multiply(first, second);
      assert.equal(result, (first * second));
    });
  });

  describe('`getRemainder`', () => {
    const getRemainder = funcs.getRemainder;
    it('should be a function', () => {
      assert.typeOf(getRemainder, 'function');
    });

    it("Ensure that it's properly modulousing the two inputs.", () => {
      const first = 4; const second = 2;
      const result = getRemainder(first, second);
      assert.equal(result, (first % second));
    });
  });

  describe('`isEven`', () => {
    const isEven = funcs.isEven;
    it('should be a function', () => {
      assert.typeOf(isEven, 'function');
    });

    it('should return true if a num is even', () => {
      const result = isEven(6);
      assert.isOk(result);
    });
  });

  describe('`isOdd`', () => {
    const isOdd = funcs.isOdd;
    it('should be a function', () => {
      assert.typeOf(isOdd, 'function');
    });

    it('should return true if a num is odd', () => {
      const result = isOdd(6);
      assert.isNotOk(result);
    });
  });

  describe('`square`', () => {
    const square = funcs.square;
    it('should be a function', () => {
      assert.typeOf(square, 'function');
    });

    it('should properly square a num', () => {
      const num = 2;
      const result = square(num);
      assert.equal(result, num*num);
    });
  });

  describe('`cube`', () => {
    const cube = funcs.cube;
    it('should be a function', () => {
      assert.typeOf(cube, 'function');
    });

    it('should properly cube', () => {
      const num = 2;
      const result = cube(num);
      assert.equal(result, num*num*num);
    });
  });

  describe('`raiseToPower`', () => {
    const raiseToPower = funcs.raiseToPower;
    it('should be a function', () => {
      assert.typeOf(raiseToPower, 'function');
    });

    it('should properly raise to power', () => {
      const num = 2;
      const power = 2;
      const result = raiseToPower(num, power);
      assert.equal(result, num*power);
    });
  });

  describe('`roundNumber`', () => {
    const roundNumber = funcs.roundNumber;
    it('should be a function', () => {
      assert.typeOf(roundNumber, 'function');
    });

    it('should properly round a number', () => {
      const num = 1.2;
      const result = roundNumber(num);
      assert.equal(result, 1);
    });
  });

  describe('`roundUp`', () => {
    const roundUp = funcs.roundUp;
    it('should be a function', () => {
      assert.typeOf(roundUp, 'function');
    });

    it('should round a num up', () => {
      const num = 2.6;
      const result = roundUp(num);
      assert.equal(result, 3);
    });
  });

  describe('`addExclamationPoint`', () => {
    const addExclamationPoint = funcs.addExclamationPoint;
    it('should be a function', () => {
      assert.typeOf(addExclamationPoint, 'function');
    });

    it('should add a bang', () => {
      const str = 'wow';
      const result = addExclamationPoint(str);
      assert.equal(result, 'wow!');
    });
  });

  describe('`combineNames`', () => {
    const combineNames = funcs.combineNames;
    it('should be a function', () => {
      assert.typeOf(combineNames, 'function');
    });

    it('should combine strings', () => {
      const str1 = 'wew'; const str2 = 'man';
      const result = combineNames(str1, str2);
      assert.equal(result, 'wew man');
    });
  });

  describe('`getGreeting`', () => {
    const getGreeting = funcs.getGreeting;
    it('should be a function', () => {
      assert.typeOf(getGreeting, 'function');
    });

    it('Should return hello with name', () => {
      const str = 'me'
      const result = getGreeting(str);
      assert.equal(result, 'Hello me!');
    });
  });

  describe('`getRectangleArea`', () => {
    const getRectangleArea = funcs.getRectangleArea;
    it('should be a function', () => {
      assert.typeOf(getRectangleArea, 'function');
    });

    it('should get area of rectangle', () => {
      const len = 2; const width = 2;
      const result = getRectangleArea(len, width);
      assert.equal(result, 4);
    });
  });

  describe('`getTriangleArea`', () => {
    const getTriangleArea = funcs.getTriangleArea;
    it('should be a function', () => {
      assert.typeOf(getTriangleArea, 'function');
    });

    it('should get area of triangle', () => {
      const len = 2; const width = 2;
      const result = getTriangleArea(len, width);
      assert.equal(result, 2);
    });
  });

  describe('`getCircleArea`', () => {
    const getCircleArea = funcs.getCircleArea;
    it('should be a function', () => {
      assert.typeOf(getCircleArea, 'function');
    });

    it('should get area of circle', () => {
      const radius = 2;
      const result = getCircleArea(radius);
      assert.equal(result, 4*Math.PI);
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
    it('should be a function', () => {
      assert.typeOf(getRectangularPrismVolume, 'function');
    });

    it('should properly get volume', () => {
      const len = 2; const width = 2; const height = 2;
      const result = getRectangularPrismVolume(len, width, height);
      assert.equal(result, 8);
    });
  });
});
