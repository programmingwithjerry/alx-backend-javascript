// Import required libraries and modules
const chai = require('chai'); // Chai is used for assertions
const expect = chai.expect;   // Use Chai's 'expect' style for assertions
const Utils = require('./utils'); // Import the Utils module containing utility functions
const sinon = require('sinon'); // Sinon is used for creating spies, stubs, and mocks
const sendPaymentRequestToApi = require('./5-payment'); // Import the function to be tested

// Describe the test suite for the 'sendPaymentRequestToApi' function
describe('sendPaymentRequestToApi', function () {
  let logSpy; // Declare a variable to hold the spy for 'console.log'

  // Set up a new spy on 'console.log' before each test
  beforeEach(function () {
    logSpy = sinon.spy(console, 'log');
  });

  // Define a test case to verify the correct log message for specific inputs
  it('should log The total is: 120', function () {
    // Call the function with inputs 100 and 20
    sendPaymentRequestToApi(100, 20);

    // Check that 'console.log' was called once with the exact expected message
    expect(logSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
  });

  // Define another test case to verify the correct log message for different inputs
  it('should log The total is: 20', function () {
    // Call the function with inputs 10 and 10
    sendPaymentRequestToApi(10, 10);

    // Check that 'console.log' was called once with the exact expected message
    expect(logSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
  });

  // Restore the original behavior of 'console.log' after each test
  afterEach(function () {
    logSpy.restore();
  });
});
