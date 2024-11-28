// Import the Express framework for creating a web server
const express = require('express');

// Create an Express application instance
const app = express();

// Define the port number on which the server will listen for requests
const port = 7865;

// Set up a route handler for GET requests to the root URL ('/')
app.get('/', (req, res) => {
  // Respond with a welcome message when the root URL is accessed
  res.send('Welcome to the payment system');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  // Log a message to indicate that the server is running and the port it's using
  console.log(`API available on localhost port ${port}`);
});

// Export the Express app instance for use in other modules or for testing purposes
module.exports = app;
