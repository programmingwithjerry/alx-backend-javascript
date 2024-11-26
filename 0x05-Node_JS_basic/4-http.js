#!/usr/bin/env node
/**
 * This script sets up a simple HTTP server that listens on a specified host and port,
 * responds with a plain text message, and exports the server for external use.
 */

const http = require('http'); // Import the HTTP module to create a web server

// Define the host and port where the server will listen
const host = '127.0.0.1'; // Localhost IP address
const port = 1245;        // Port number for the server

// Create the HTTP server
const app = http.createServer((req, res) => {
  // Set the HTTP response status code to 200 (OK)
  res.statusCode = 200;

  // Set the response header to indicate plain text content
  res.setHeader('Content-Type', 'text/plain');

  // Send the response body with the message
  res.end('Hello Holberton School!');
});

// Start the server and listen on the specified host and port
app.listen(port, host, () => {
  // Callback function executed when the server starts successfully
  console.log(`Server running at http://${host}:${port}/`);
});

// Export the server object for use in other modules
module.exports = app;
