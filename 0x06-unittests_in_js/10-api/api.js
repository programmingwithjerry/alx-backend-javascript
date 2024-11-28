// Import the express module to create the server
const express = require('express');
// Initialize the express app
const app = express();

// Define the port the server will listen on
const port = 7865;

// Define the root route that sends a welcome message when accessed
app.get('/', (req, res) => {
  // Sends a welcome message to the user
  res.send('Welcome to the payment system');
});

// Define the route to access payment methods for a specific cart by its ID
// The route parameter ':id' is a digit, indicated by the regular expression '\\d+'
app.get('/cart/:id(\\d+)', (req, res) => {
  // Retrieve the cart ID from the URL parameters
  const id = req.params.id;
  // Respond with a message indicating which cart's payment methods are being accessed
  res.send(`Payment methods for cart ${id}`);
});

// Define the route to return the available payment methods in JSON format
app.get('/available_payments', (req, res) => {
  // Respond with JSON containing available payment methods
  res.json({
    payment_methods: {
      credit_cards: true,  // Credit cards are available
      paypal: false        // PayPal is not available
    }
  });
});

// Define the route for user login using a POST request
// The express.json() middleware is used to parse the incoming JSON request body
app.post('/login', express.json(), (req, res) => {
  // Retrieve the userName from the request body
  const userName = req.body.userName;
  // Respond with a welcome message containing the user's name
  res.send(`Welcome ${userName}`);
});

// Start the server to listen on the specified port
app.listen(port, () => {
  // Log to the console that the server is running and available
  console.log(`API available on localhost port ${port}`);
});

// Export the app object for potential testing or further configuration
module.exports = app;
