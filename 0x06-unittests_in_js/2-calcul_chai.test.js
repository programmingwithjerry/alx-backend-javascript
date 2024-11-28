// Import the 'chai' library for testing and assertion capabilities
const chai = require('chai');

// Use the 'expect' style of assertions from Chai
const expect = chai.expect;

// Import the 'calculateNumber' function from the '2-calcul_chai' module
const calculateNumber = require('./2-calcul_chai');

// Group tests for the 'calculateNumber' function using Mocha's `describe` block
describe('calculateNumber', function () {
    // Test case: Check if the sum of numbers is calculated correctly after rounding
    it('should return the sum of numbers rounded off', function () {
        // Assert that the sum of 1.4 and 4.5 (after rounding) equals 6
        expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    // Test case: Check if the difference of numbers is calculated correctly after rounding
    it('should return the difference of numbers rounded off', function () {
        // Assert that the difference between 1.4 and 4.5 (after rounding) equals -4
        expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    // Test case: Check if the division of numbers is calculated correctly after rounding
    it('should return the division of numbers rounded off', function () {
        // Assert that the result of dividing 1.4 by 4.5 (after rounding) equals 0.2
        expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    // Test case: Check if dividing by zero returns 'Error'
    it('should return "Error" if rounded b is 0', function () {
        // Assert that dividing 1.4 by 0 returns 'Error' to handle division by zero
        expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
});
