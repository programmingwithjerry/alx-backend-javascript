// Import the 'request' module to make HTTP requests and 'chai' for assertions
const request = require('request');
const { expect } = require('chai');

// Test suite for the Index page
describe('Index page', function () {
  
  // Test case to check the status code of the response from the root URL '/'
  it('should have the correct status code', function (done) {
    request('http://localhost:7865', function (error, response) {
      // Assert that the status code is 200 (OK)
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  // Test case to check the content of the response from the root URL '/'
  it('should have the correct result', function (done) {
    request('http://localhost:7865', function (error, response, body) {
      // Assert that the body of the response matches the expected string
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  // Test case to check that the body of the response is not equal to 'Something else'
  it('other?', function (done) {
    request('http://localhost:7865', function (error, response, body) {
      // Assert that the body is not equal to 'Something else'
      expect(body).to.not.equal('Something else');
      done();
    });
  });

  // Test case to check the response for the cart ID (numeric)
  it('should have the correct status code when :id is a number?', function (done) {
    request('http://localhost:7865/cart/12', function (error, response, body) {
      // Assert that the status code is 200 and the response body matches the expected string
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  // Test case to check the response for the cart ID (non-numeric)
  it('should have the correct status code when :id is NOT a number (=> 404)?', function (done) {
    request('http://localhost:7865/cart/hello', function (error, response) {
      // Assert that the status code is 404 for invalid cart ID
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  // Test suite for the '/login' route
  describe('/login', function () {
    it('should have the user login', function (done) {
      // Define the options for a POST request to the '/login' endpoint with JSON body
      const options = {
        method: 'POST',
        url: 'http://localhost:7865/login',
        json: { userName: 'Betty' }
      };

      // Make the request and check if the response body matches the expected message
      request(options, function (error, response, body) {
        expect(body).to.equal('Welcome Betty');
        done();
      });
    });
  });

  // Test suite for the '/available_payments' route
  describe('/available_payments', function () {
    it('should have the available payment methods', function (done) {
      // Define the expected response for the available payment methods
      const expectedResponse = {
        payment_methods: {
          credit_cards: true, // Credit cards are available
          paypal: false       // PayPal is not available
        }
      };

      // Make a request to the '/available_payments' endpoint and assert the response
      request('http://localhost:7865/available_payments', function (error, response, body) {
        // Assert that the response body matches the expected JSON response
        expect(JSON.parse(body)).to.deep.equal(expectedResponse);
        done();
      });
    });
  });
});
