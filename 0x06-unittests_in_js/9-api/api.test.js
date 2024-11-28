// Import the 'request' module for making HTTP requests to test the server
const request = require('request');

// Import the 'expect' function from the 'chai' assertion library for assertions
const { expect } = require('chai');

// Define the test suite for testing the index page and cart routes of the server
describe('Index page', function () {

  // Test to verify that the server returns the correct status code for the index page
  it('should have the correct status code', function (done) {
    // Send a GET request to the root URL of the server
    request('http://localhost:7865', function (error, response) {
      // Assert that the HTTP response status code is 200 (OK)
      expect(response.statusCode).to.equal(200);
      // Call 'done' to indicate the asynchronous test has completed
      done();
    });
  });

  // Test to verify that the server returns the correct response body for the index page
  it('should have the correct result', function (done) {
    // Send a GET request to the root URL of the server
    request('http://localhost:7865', function (error, response, body) {
      // Assert that the response body matches the expected string
      expect(body).to.equal('Welcome to the payment system');
      // Call 'done' to indicate the asynchronous test has completed
      done();
    });
  });

  // Test to verify that the server does not return an unexpected response body
  it('should not return an unexpected result', function (done) {
    // Send a GET request to the root URL of the server
    request('http://localhost:7865', function (error, response, body) {
      // Assert that the response body is not equal to an incorrect value
      expect(body).to.not.equal('Something else');
      // Call 'done' to indicate the asynchronous test has completed
      done();
    });
  });

  // Test to verify that the server returns the correct status code and response body 
  // when the cart ID is a valid number
  it('should have the correct status code when :id is a number', function (done) {
    // Send a GET request to the URL with a valid cart ID (numeric value)
    request('http://localhost:7865/cart/12', function (error, response, body) {
      // Assert that the response status code is 200 (OK)
      expect(response.statusCode).to.equal(200);
      // Assert that the response body contains the expected message with the cart ID
      expect(body).to.equal('Payment methods for cart 12');
      // Call 'done' to indicate the asynchronous test has completed
      done();
    });
  });

  // Test to verify that the server returns the correct status code (404) 
  // when the cart ID is not a valid number
  it('should have the correct status code when :id is NOT a number (=> 404)', function (done) {
    // Send a GET request to the URL with an invalid cart ID (non-numeric value)
    request('http://localhost:7865/cart/hello', function (error, response) {
      // Assert that the response status code is 404 (Not Found) due to invalid ID format
      expect(response.statusCode).to.equal(404);
      // Call 'done' to indicate the asynchronous test has completed
      done();
    });
  });
});
