#!/usr/bin/env node
/**
 * This script creates a simple web server using the Express framework.
 * The server listens on a specified port and handles a single route (`/`),
 * responding with a welcome message. The server object is exported for external use.
 */

const express = require('express'); // Import the Express module to create a web server

const app = express(); // Create an instance of an Express application
const port = 1245; // Define the port number where the server will listen

// Define a route for the root URL ('/')
app.get('/', (request, response) => {
  // Send a plain-text response for requests to the root URL
  response.send('Hello Holberton School!');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  // Callback function executed when the server starts successfully
  console.log(`Server is running on http://127.0.0.1:${port}/`);
});

// Export the server object for use in other modules
module.exports = app;
