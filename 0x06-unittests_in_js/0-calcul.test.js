// Import the 'assert' module for writing test assertions
const assert = require('assert');

// Import the 'calculateNumber' function from the '0-calcul' module
const calculateNumber = require('./0-calcul');

// Group tests for the 'calculateNumber' function using Mocha's `describe` block
describe('calculateNumber', function () {
    // Define a test case to check if the function correctly returns the sum of rounded numbers
    it('should return the sum of two numbers rounded off', function () {
        // Test when both inputs are integers
        assert.strictEqual(calculateNumber(1, 3), 4);
        // Test when one input is a float and rounds up
        assert.strictEqual(calculateNumber(1, 3.7), 5);
        // Test when both inputs are floats and round in different ways
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
        // Test when both inputs are floats and round up
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });
});
