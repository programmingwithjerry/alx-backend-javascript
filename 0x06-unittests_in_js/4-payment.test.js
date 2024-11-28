// Import necessary libraries and modules
const chai = require('chai'); // Chai is used for making assertions
const expect = chai.expect;   // Use Chai's 'expect' style for assertions
const Utils = require('./utils'); // Import the Utils module containing utility functions
const sinon = require('sinon'); // Sinon is used for creating spies, stubs, and mocks
const sendPaymentRequestToApi = require('./3-payment'); // Import the function to be tested

// Describe the test suite for the 'sendPaymentRequestToApi' function
describe('sendPaymentRequestToApi', function () {
  
  // Define a test case to verify the function's behavior
  it('should call Utils.calculateNumber with correct arguments and log result', function () {
    // Stub the 'Utils.calculateNumber' function to simulate its behavior
    // Replace its actual implementation with a fixed return value (10 in this case)
    const utilsStub = sinon.stub(Utils, 'calculateNumber');
    utilsStub.returns(10); // Make the stub return 10 whenever called

    // Spy on 'console.log' to track if it logs the correct message
    const logSpy = sinon.spy(console, 'log');

    // Call the function under test
    sendPaymentRequestToApi(100, 20);

    // Assert that 'Utils.calculateNumber' was called exactly once with the correct arguments
    expect(utilsStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

    // Assert that 'console.log' was called exactly once with the expected message
    expect(logSpy.calledOnceWithExactly('The total is: 10')).to.be.true;

    // Restore the original behavior of the stubbed and spied functions
    utilsStub.restore();
    logSpy.restore();
  });
});
