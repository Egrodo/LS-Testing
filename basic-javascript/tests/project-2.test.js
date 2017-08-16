const assert = require('chai').assert;
const funcs = require('../src/project-2');

describe('Test all project-2 funcs', () => {
  describe('getBiggest', () => {
    const getBiggest = funcs.getBiggest;
    it('compares two numbers and returns bigger #', () => {
      assert.strictEqual(getBiggest(3, 5), 5);
    });
    it('compares two equal numbers', () => {
      assert.strictEqual(getBiggest(5, 5), 5);
    });
  });

  describe('greeting', () => {
    const greeting = funcs.greeting;
    it('returns the appropriate greeting in the language', () => {
      assert.strictEqual(greeting('German'), 'Guten Tag!');
    });

    it('returns the appropriate greeting in the language', () => {
      assert.strictEqual(greeting(''), 'Hello!');
    });
  });

  describe('is it ten or five tho', () => {
    it('return true if num is 10 or 5', () => {
      assert.strictEqual(funcs.isTenOrFive(10), true);
    });
    it('return false if num is not 10 or 5', () => {
      assert.strictEqual(funcs.isTenOrFive(0), false);
    });
  });

  describe('is it more than 20 and less than 50', () => {
    it('return true if num is in range', () => {
      assert.strictEqual(funcs.isInRange(25), true);
    });
    it('return false if num is not in range', () => {
      assert.strictEqual(funcs.isInRange(70), false);
    });
  });

  describe('checks if a num is an integer', () => {
    it('return true if num is an integer', () => {
      assert.strictEqual(funcs.isInteger(25), true);
    });
    it('return false if num is not an integer', () => {
      assert.strictEqual(funcs.isInteger(25.5), false);
    });
  });

  describe('checks if a num is divisble by 5 & 3', () => {
    it('return true if num is divisble by 5 & 3', () => {
      assert.strictEqual(funcs.fizzBuzz(30), 'fizzbuzz');
    });
    it('return true if num is divisble by 5', () => {
      assert.strictEqual(funcs.fizzBuzz(35), 'buzz');
    });
    it('return true if num is divisble by 3', () => {
      assert.strictEqual(funcs.fizzBuzz(33), 'fizz');
    });
  });

  describe('checks if num is a prime', () => {
    it('checks if a num returns false if less than 0', () => {
      assert.isNotOk(funcs.isPrime(-5));
    });
    it('return false if 1', () => {
      assert.isNotOk(funcs.isPrime(1));
    });
    it('return true if num is a prime number', () => {
      assert.isOk(funcs.isPrime(11));
    });
  });

  describe('returns the first element in array', () => {
    it('return first', () => {
      assert.strictEqual(funcs.returnFirst([3, 5, 6]), 3);
    });
  });

  describe('returns the last element in array', () => {
    it('return last', () => {
      assert.strictEqual(funcs.returnLast([3, 5, 6]), 6);
    });
  });

  describe('returns the length of an array', () => {
    it('Check for an array with 3 elements', () => {
      assert.strictEqual(funcs.returnLast([3, 5, 6]), 6);
    });
  });

  describe('increment every element by one', () => {
    it('increments a full array', () => {
      assert.deepEqual(funcs.incrementByOne([1, 2, 3]), [2, 3, 4])
    });
  });

  describe('adds an item to an array', () => {
    it('adds an item to an array', () => {
      assert.deepEqual(funcs.addItemToArray([2, 3, 4], 5), [2, 3, 4, 5]);
    });
  });

  describe('adds an item to the front of array', () => {
    it('adds an item to an array', () => {
      assert.deepEqual(funcs.addItemToFront([2, 3, 4], 5), [5, 2, 3, 4]);
    });
  });

  describe('concats words in an array into a sentence', () => {
    it('checks if its one big string', () => {
      assert.strictEqual(funcs.wordsToSentence(['hello','from','the','other','side']), 'hello from the other side');
    });
  });

  describe('checks if an item is in an array', () => {
    it('if the item is actually in the array', () => {
      assert.strictEqual(funcs.contains([4, 6, 8, 10], 10), true);
    });
    it('if the item is not in the array', () => {
      assert.strictEqual(funcs.contains([4, 6, 8, 10], 12), false);
    });
  });

  describe('add a bunch of numbers in an array', () => {
    it('adds a bunch of integers', () => {
      assert.strictEqual(funcs.addNumbers([4, 6, 8, 10]), 28);
    });
    it('tests for 0', () => {
      assert.strictEqual(funcs.addNumbers([]), 0);
    });
  });

  describe('returns an average of an array of numbers', () => {
    it('correctly returns the average', () => {
      assert.strictEqual(funcs.averageTestScore([5, 10, 15]), 10);
    });
    it('checks for an empty array', () => {
      assert.isNaN(funcs.averageTestScore([])); //technically should be a 0
    });
  });

  describe('returns the largest number in an array', () => {
    it('correctly returns the largest number', () => {
      assert.strictEqual(funcs.largestNumber([50, 100, 5000]), 5000);
    });
    it('checks for equal numbers', () => {
      assert.strictEqual(funcs.largestNumber([50, 50, 50]), 50);
    })
  })
});
