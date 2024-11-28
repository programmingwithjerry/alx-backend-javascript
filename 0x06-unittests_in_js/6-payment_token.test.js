// Import required libraries and modules
const chai = require('chai'); // Chai is used for assertions
const expect = chai.expect;   // Use Chai's 'expect' style for assertions
const getPaymentTokenFromAPI = require('./6-payment_token'); // Import the function to be tested

// Describe the test suite for 'getPaymentTokenFromAPI'
describe('getPaymentTokenFromAPI', function () {
  // Define a test case to verify the result of calling 'getPaymentTokenFromAPI' with 'true'
  it('should test the result of getPaymentTokenFromAPI(true)', function (done) {
    // Call the function with 'true' and handle the returned Promise
    getPaymentTokenFromAPI(true)
      .then(response => {
        // Assert that the resolved response matches the expected object
        expect(response).to.deep.equal({ data: 'Successful response from the API' });

        // Signal that the asynchronous test is complete
        done();
      });
  });
});
