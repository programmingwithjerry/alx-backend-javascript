// Import the 'assert' module for writing test assertions
const assert = require('assert');

// Import the 'calculateNumber' function from the '1-calcul' module
const calculateNumber = require('./1-calcul');

// Group related test cases for the `calculateNumber` function
describe('calculateNumber', function () {
    // Test the 'SUM' operation
    it('should return the sum of numbers rounded off', function () {
        // Verify that the sum of rounded inputs (1.4 → 1, 4.5 → 5) equals 6
        assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    // Test the 'SUBTRACT' operation
    it('should return the difference of numbers rounded off', function () {
        // Verify that the difference of rounded inputs (1.4 → 1, 4.5 → 5) equals -4
        assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    // Test the 'DIVIDE' operation
    it('should return the division of numbers rounded off', function () {
        // Verify that the division of rounded inputs (1.4 → 1, 4.5 → 5) equals 0.2
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    // Test division by zero scenario
    it('should return "Error" if rounded b is 0', function () {
        // Verify that dividing by a rounded 0 returns 'Error'
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
});
