// Import the 'request' module for making HTTP requests
const request = require('request');

// Import the 'expect' function from the 'chai' assertion library
const { expect } = require('chai');

// Define the test suite for testing the index page of the server
describe('Index page', function () {

  // Test to verify that the correct status code is returned
  it('should have the correct status code', function (done) {
    // Send a GET request to the root URL of the server
    request('http://localhost:7865', function (error, response) {
      // Assert that the HTTP response status code is 200 (OK)
      expect(response.statusCode).to.equal(200);

      // Call 'done' to indicate the asynchronous test has completed
      done();
    });
  });

  // Test to verify that the server returns the correct response body
  it('should have the correct result', function (done) {
    // Send a GET request to the root URL of the server
    request('http://localhost:7865', function (error, response, body) {
      // Assert that the response body matches the expected message
      expect(body).to.equal('Welcome to the payment system');

      // Call 'done' to indicate the asynchronous test has completed
      done();
    });
  });

  // Test to verify that the server response does not match an unexpected value
  it('should not return an unexpected result', function (done) {
    // Send a GET request to the root URL of the server
    request('http://localhost:7865', function (error, response, body) {
      // Assert that the response body is not equal to an incorrect value
      expect(body).to.not.equal('Something else');

      // Call 'done' to indicate the asynchronous test has completed
      done();
    });
  });
});
