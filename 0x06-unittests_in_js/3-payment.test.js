// Import the necessary testing libraries
const chai = require('chai'); // Chai for assertions
const expect = chai.expect;   // Use Chai's 'expect' syntax for assertions
const Utils = require('./utils'); // Import the Utils module
const sinon = require('sinon'); // Import Sinon for spies, stubs, and mocks
const sendPaymentRequestToApi = require('./3-payment'); // Import the function to test

// Group tests for the 'sendPaymentRequestToApi' function using Mocha's `describe` block
describe('sendPaymentRequestToApi', function () {
  
  // Test case: Check if Utils.calculateNumber is called correctly and console.log prints the result
  it('should call Utils.calculateNumber with correct arguments and log result', function () {

    // Create a spy on 'Utils.calculateNumber' to track if it is called
    const utilsSpy = sinon.spy(Utils, 'calculateNumber');
    
    // Create a spy on 'console.log' to track if the correct message is logged
    const logSpy = sinon.spy(console, 'log');

    // Call the function under test
    sendPaymentRequestToApi(100, 20);

    // Assert that 'calculateNumber' was called exactly once with the correct arguments
    expect(utilsSpy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    
    // Assert that 'console.log' was called exactly once with the correct message
    expect(logSpy.calledOnceWithExactly('The total is: 120')).to.be.true;

    // Restore the spies to their original functions to avoid affecting other tests
    utilsSpy.restore();
    logSpy.restore();
  });
});
