// Import the Express library to create and configure the web server
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define the port number for the server to listen on
const port = 7865;

// Define a route handler for the root URL ('/') of the server
// This responds with a welcome message
app.get('/', (req, res) => {
  // Send a response containing the message
  res.send('Welcome to the payment system');
});

// Define a route handler for '/cart/:id' where ':id' is a dynamic parameter
// The dynamic parameter 'id' must be a sequence of digits (validated with regex '\\d+')
app.get('/cart/:id(\\d+)', (req, res) => {
  // Extract the 'id' parameter from the request URL
  const id = req.params.id;

  // Send a response with a message including the cart ID
  res.send(`Payment methods for cart ${id}`);
});

// Start the server and listen for incoming requests on the specified port
app.listen(port, () => {
  // Log a message to the console indicating the server is running
  console.log(`API available on localhost port ${port}`);
});

// Export the Express application instance for use in other files or tests
module.exports = app;
